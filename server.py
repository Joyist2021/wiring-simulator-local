#!/usr/bin/env python3
"""
Zero-dependency local server for the mirrored wiring simulator.

  python server.py [port]        (default: 8080, bound to 127.0.0.1)

Behaviour:
  * / and /wiring-simulator  -> the mirrored SSR HTML (with hydration payload)
  * everything under site/   -> served locally (offline first)
  * missing /_nuxt, /images  -> fetched once from upstream/CDN and cached to disk
  * /api/*                   -> proxied (with response cache, graceful {} offline)
  * /cdn/*                   -> proxy for img.hs-fpv.com, also cached
  * other site routes        -> SPA fallback to the mirrored HTML

Debug helper: append ?__diag=1 to run an in-page hydration / interaction check.
"""
from __future__ import annotations

import hashlib
import mimetypes
import os
import sys
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
HTML = SITE / "wiring-simulator.html"
CACHE = ROOT / "cache" / "api"
UPSTREAM = "https://hs-fpv.com"
CDN = "https://img.hs-fpv.com"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")
OFFLINE = os.environ.get("HSFPV_OFFLINE") == "1" or "--offline" in sys.argv

MIME = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".txt": "text/plain; charset=utf-8",
    ".map": "application/json; charset=utf-8",
}

DIAG_JS = b"""<script>
window.__DIAG__ = { errors: [] };
(function () {
  var d = window.__DIAG__;
  window.addEventListener('error', function (e) {
    d.errors.push('error: ' + (e.message || (e.target && e.target.src) || 'resource'));
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    d.errors.push('reject: ' + String(e.reason));
  });
  var ce = console.error;
  console.error = function () {
    d.errors.push('console: ' + Array.prototype.map.call(arguments, String).join(' ').slice(0, 220));
    ce.apply(console, arguments);
  };
  setTimeout(function () {
    d.zoomBefore = (document.querySelector('output[aria-label]') || {}).textContent || '';
    d.partsBefore = (document.querySelector('button[aria-controls="wiring-parts"]') || {}).getAttribute
      ? document.querySelector('button[aria-controls="wiring-parts"]').getAttribute('aria-expanded') : '';
    var plus = document.querySelectorAll('.zoom-dock button')[1];
    if (plus) plus.click();
    var parts = document.querySelector('button[aria-controls="wiring-parts"]');
    if (parts) parts.click();
    d.clicked = !!(plus || parts);
  }, 2200);
  setTimeout(function () {
    d.zoomAfter = (document.querySelector('output[aria-label]') || {}).textContent || '';
    var parts = document.querySelector('button[aria-controls="wiring-parts"]');
    d.partsAfter = parts ? parts.getAttribute('aria-expanded') : '';
    var demo = document.querySelectorAll('.tool-dock .toolbar > button')[3];
    if (demo) { demo.click(); d.demoClicked = true; }
  }, 3000);
  setTimeout(function () {
    var d = window.__DIAG__;
    d.pads = document.querySelectorAll('.pad').length;
    d.buttons = document.querySelectorAll('button').length;
    d.simulator = !!document.querySelector('main.simulator');
    d.wireCount = (document.querySelector('.wire-count') || {}).textContent || '';
    d.partsPanel = !!document.getElementById('wiring-parts');
    d.brokenImgs = Array.prototype.slice.call(document.images)
      .filter(function (i) { return i.complete && i.naturalWidth === 0; })
      .map(function (i) { return i.src; }).slice(0, 8);
    d.htmlClass = document.documentElement.className;
    var el = document.createElement('div');
    el.id = '__DIAG_RESULT__';
    el.textContent = JSON.stringify(d);
    document.body.appendChild(el);
  }, 4200);
})();
</script>"""


def content_type(path: str) -> str:
    ext = Path(path).suffix.lower()
    return MIME.get(ext) or mimetypes.guess_type(path)[0] or "application/octet-stream"


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "LocalWiringSim/1.0"

    def log_message(self, fmt, *args):
        msg = fmt % args
        if " 404 " in msg or " 50" in msg:
            sys.stderr.write(f"  ! {self.address_string()} {msg}\n")

    def do_GET(self):
        self.dispatch(write_body=True)

    def do_HEAD(self):
        self.dispatch(write_body=False)

    def reply(self, status: int, data: bytes, ctype: str, write_body: bool, extra=None):
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Access-Control-Allow-Origin", "*")
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        if write_body and data:
            try:
                self.wfile.write(data)
            except (BrokenPipeError, ConnectionResetError):
                pass

    def send_file(self, path: Path, write_body: bool):
        try:
            data = path.read_bytes()
        except OSError:
            self.reply(404, b"Not Found", "text/plain; charset=utf-8", write_body)
            return
        self.reply(200, data, content_type(str(path)), write_body)

    def send_html(self, write_body: bool, diagnose: bool):
        data = HTML.read_bytes()
        if diagnose:
            data = data.replace(b"</head>", DIAG_JS + b"</head>")
        self.reply(200, data, "text/html; charset=utf-8", write_body)

    def _fetch(self, url: str):
        req = urllib.request.Request(url, headers={
            "User-Agent": UA,
            "Accept": "*/*",
            "Referer": UPSTREAM + "/wiring-simulator",
            "Accept-Language": "zh-CN,zh;q=0.9",
        })
        with urllib.request.urlopen(req, timeout=12) as r:
            return r.read(), r.headers.get("Content-Type", "application/octet-stream"), r.status

    def proxy(self, url: str, write_body: bool, *, cache_to: Path | None = None,
              api=False, fallback: str | None = None):
        key = hashlib.sha1(url.encode("utf-8")).hexdigest() + ".cache"
        api_cache = CACHE / key
        if api and api_cache.is_file():
            self.reply(200, api_cache.read_bytes(), "application/json; charset=utf-8", write_body)
            return
        data = ctype = status = None
        candidates = () if OFFLINE else (url, fallback)
        for candidate in candidates:
            if candidate is None:
                continue
            try:
                data, ctype, status = self._fetch(candidate)
                if status == 200:
                    break
            except Exception as e:  # noqa: BLE001
                sys.stderr.write(f"  ! upstream {candidate}: {e}\n")
        if status != 200 or data is None:
            # Offline degradation: never let an API failure break hydration.
            if api:
                data, ctype, status = b"{}", "application/json; charset=utf-8", 200
            else:
                data, ctype, status = b"", "application/octet-stream", 404
        else:
            if cache_to is not None:
                cache_to.parent.mkdir(parents=True, exist_ok=True)
                cache_to.write_bytes(data)
            if api:
                CACHE.mkdir(parents=True, exist_ok=True)
                api_cache.write_bytes(data)
        self.reply(status, data, ctype, write_body)

    def dispatch(self, write_body: bool):
        parsed = urlparse(self.path)
        path = unquote(parsed.path)
        url = self.path
        diag = "__diag=1" in parsed.query

        if path in ("/", "/wiring-simulator", "/wiring-simulator/"):
            return self.send_html(write_body, diag)

        if path.startswith("/cdn/"):
            dest = SITE / path.lstrip("/")
            if dest.is_file():
                return self.send_file(dest, write_body)
            return self.proxy(CDN + "/" + path[len("/cdn/"):] + (("?" + parsed.query) if parsed.query else ""),
                              write_body, cache_to=dest)

        dest = (SITE / path.lstrip("/")).resolve()
        try:
            inside = SITE.resolve() in dest.parents
        except OSError:
            inside = False
        if inside and dest.is_file():
            return self.send_file(dest, write_body)

        if path.startswith("/images/"):
            return self.proxy(CDN + url, write_body, cache_to=SITE / path.lstrip("/"),
                              fallback=UPSTREAM + url)
        if path.startswith(("/_nuxt/", "/fonts/")):
            return self.proxy(UPSTREAM + url, write_body, cache_to=SITE / path.lstrip("/"))

        if path.startswith("/api/") or path.startswith("/__nuxt"):
            return self.proxy(UPSTREAM + url, write_body, api=True)

        if path.startswith("/favicon"):
            return self.reply(204, b"", "image/x-icon", write_body)

        # Client-side routes of the Nuxt app: let the SPA router handle them.
        return self.send_html(write_body, diag)


def main():
    numeric = [a for a in sys.argv[1:] if a.isdigit()]
    port = int(numeric[0]) if numeric else 8080
    if not HTML.is_file():
        print("site/wiring-simulator.html is missing - run `python mirror.py` first.")
        return 1
    files = [p for p in SITE.rglob("*") if p.is_file()]
    size = sum(p.stat().st_size for p in files) / 1024 / 1024
    srv = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    srv.daemon_threads = True
    print(f"Wiring simulator is live:  http://127.0.0.1:{port}/wiring-simulator")
    print(f"Serving {len(files)} local files ({size:.2f} MiB) from {SITE}")
    print("Mode: " + ("OFFLINE (no upstream requests)" if OFFLINE else "online proxy for missing assets / APIs"))
    print("Press Ctrl+C to stop.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped.")
    finally:
        srv.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
