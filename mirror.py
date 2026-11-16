#!/usr/bin/env python3
"""
Mirror the "接线模拟器 / wiring simulator" page of hs-fpv.com to ./site
so that it can be served from localhost, fully offline.

The site is a Nuxt 3 SSR app. The SSR HTML is kept as-is (it carries the
hydration payload), while every client asset is mirrored:
  - /_nuxt/*.js, *.css  (entry + preloads + all 280 dynamic chunks)
  - /images/wiring/*.svg (board illustrations)
  - Google Fonts -> local /fonts/*
  - CDN logo images -> local /images/*

Run:  python mirror.py
"""
from __future__ import annotations

import concurrent.futures as cf
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://hs-fpv.com"
PAGE = "/wiring-simulator"
ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
HTML = SITE / "wiring-simulator.html"

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")
HEADERS = {
    "User-Agent": UA,
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": BASE + PAGE,
}

FONTS_CSS_URL = ("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700"
                 "&family=Barlow:wght@300;400;500;600;700&display=swap")
CDN_LOGOS = [
    "https://img.hs-fpv.com/images/hs-logo-header.png",
    "https://img.hs-fpv.com/images/hs-logo-header.webp",
]

ASSET_EXT = r"(?:js|mjs|css|json|svg|png|webp|jpe?g|gif|ico|woff2?|ttf|avif|txt|xml)"
QUOTED = re.compile(r"""["']((?:\.{0,2}/)?[A-Za-z0-9_.\-/]+\.""" + ASSET_EXT + r""")(?:\?[^"']*)?["']""", re.I)
REL_CHUNK = re.compile(r"""["']\./([A-Za-z0-9_.\-]+\.""" + ASSET_EXT + r""")["']""", re.I)
CSS_URL = re.compile(r"url\(\s*['\"]?([^'\")]+)", re.I)
WIRING_SVG = re.compile(r"(?:/)?images/wiring/[A-Za-z0-9_.\-]+\.svg", re.I)

TEXT_EXT = {".js", ".mjs", ".css", ".json", ".svg", ".html", ".txt", ".xml"}
ALLOWED = ("/_nuxt/", "/images/", "/fonts/")

# All board illustrations used by the simulator (kept explicit as a safety net
# in case a chunk references them through a computed string).
KNOWN_SVGS = [
    "f722", "esc-4-in-1", "battery-6s", "xt60-power-lead", "capacitor",
    "motor-2207", "elrs-receiver", "gps", "active-buzzer", "led-strip",
    "analog-camera", "analog-vtx", "dji-o4-pro", "elrs-antenna", "vtx-antenna",
]


def log(*a):
    print(*a, flush=True)


def get(url: str, timeout: int = 25, tries: int = 3) -> bytes:
    last = None
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception as e:  # noqa: BLE001
            last = e
            if i < tries - 1:
                time.sleep(0.6 * (i + 1))
    raise RuntimeError(f"{url}: {last}")


def normalize(ref: str) -> str | None:
    ref = ref.split("?", 1)[0].split("#", 1)[0]
    if not ref:
        return None
    if ref.startswith("http://") or ref.startswith("https://"):
        return None
    # Relative references live inside /_nuxt/ files.
    if ref.startswith(("./", "../")) or ("/" not in ref and "." in ref):
        ref = "/_nuxt/" + ref.rsplit("/", 1)[-1]
    elif not ref.startswith("/"):
        ref = "/" + ref
    if ".." in ref:
        return None
    if not ref.startswith(ALLOWED):
        return None
    if not re.search(r"\." + ASSET_EXT + r"$", ref, re.I):
        return None
    return ref


def extract(text: str) -> set[str]:
    found: set[str] = set()
    for regex in (QUOTED, REL_CHUNK, CSS_URL, WIRING_SVG):
        for m in regex.findall(text):
            p = normalize(m if isinstance(m, str) else m[0])
            if p:
                found.add(p)
    return found


def target(path: str) -> Path:
    return SITE / path.lstrip("/")


def download(path: str, force: bool = False):
    dest = target(path)
    if dest.is_file() and dest.stat().st_size > 0 and not force:
        return path, "cached", None
    try:
        data = get(BASE + path)
    except Exception as e:  # noqa: BLE001
        return path, "FAIL", str(e)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return path, "ok", data


def main():
    SITE.mkdir(parents=True, exist_ok=True)
    log("[1/5] fetching SSR HTML ...")
    html = get(BASE + PAGE).decode("utf-8")
    HTML.write_text(html, encoding="utf-8")
    log(f"      {len(html):,} chars")

    seeds = extract(html)
    # Explicit board illustrations.
    seeds |= {f"/images/wiring/{n}.svg" for n in KNOWN_SVGS}
    seeds |= {"/images/hs-logo-header.png", "/images/hs-logo-header.webp"}
    # The entry bundle exposes the full Vite dynamic-import map.
    entry = "/_nuxt/CUccaWtS.js"
    seeds.add(entry)

    log("[2/5] crawling asset graph ...")
    seen: set[str] = set()
    pending: set[str] = seeds
    ok = fail = cached = 0
    total_bytes = 0
    failures: list[str] = []
    round_no = 0

    with cf.ThreadPoolExecutor(max_workers=12) as pool:
        while pending and round_no < 8:
            batch = sorted(pending - seen)
            if not batch:
                break
            seen.update(batch)
            round_no += 1
            results = list(pool.map(lambda p: download(p), batch))
            new: set[str] = set()
            for path, status, payload in results:
                if status == "ok":
                    ok += 1
                    total_bytes += len(payload)
                    if target(path).suffix in TEXT_EXT:
                        try:
                            new |= extract(payload.decode("utf-8", "replace"))
                        except Exception:
                            pass
                elif status == "cached":
                    cached += 1
                    if target(path).suffix in TEXT_EXT:
                        try:
                            new |= extract(target(path).read_text(encoding="utf-8", errors="replace"))
                        except Exception:
                            pass
                else:
                    fail += 1
                    failures.append(f"{path}: {payload}")
            pending = new - seen
            log(f"      round {round_no}: {len(batch)} files, +{len(pending)} new refs "
                f"(ok={ok} cached={cached} fail={fail})")

    log("[3/5] localizing Google Fonts ...")
    try:
        css = get(FONTS_CSS_URL).decode("utf-8")
        font_dir = SITE / "fonts"
        font_dir.mkdir(parents=True, exist_ok=True)
        urls = sorted(set(re.findall(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", css)))
        for u in urls:
            name = u.rsplit("/", 1)[-1].split("?")[0]
            if not (font_dir / name).exists():
                (font_dir / name).write_bytes(get(u))
            css = css.replace(u, f"/fonts/{name}")
        (font_dir / "google-fonts.css").write_text(css, encoding="utf-8")
        log(f"      {len(urls)} woff2 files")
    except Exception as e:  # noqa: BLE001
        log(f"      fonts unavailable ({e}); keeping remote link")

    log("[4/5] localizing CDN logos ...")
    for u in CDN_LOGOS:
        name = u.rsplit("/", 1)[-1]
        try:
            (SITE / "images" / name).write_bytes(get(u))
            log(f"      {name}")
        except Exception as e:  # noqa: BLE001
            log(f"      {name} failed: {e}")

    log("[5/5] rewriting runtime config for localhost ...")
    h = HTML.read_text(encoding="utf-8")
    before = h
    h = re.sub(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com/[^"]*">',
               '<link rel="stylesheet" href="/fonts/google-fonts.css">', h)
    h = h.replace("https://img.hs-fpv.com/images/", "/images/")
    h = h.replace('siteUrl:"https://hs-fpv.com"', 'siteUrl:""')
    h = h.replace('aegisEnabled:true', 'aegisEnabled:false')
    h = h.replace('cosPublicBaseUrl:"https://img.hs-fpv.com"', 'cosPublicBaseUrl:""')
    HTML.write_text(h, encoding="utf-8")
    log(f"      changed={before != h}, {len(h):,} chars")

    log("\n=== DONE ===")
    log(f"assets: {ok} downloaded / {cached} cached / {fail} failed, {total_bytes/1024/1024:.2f} MiB")
    files = [p for p in SITE.rglob("*") if p.is_file()]
    log(f"site/: {len(files)} files, {sum(p.stat().st_size for p in files)/1024/1024:.2f} MiB")
    if failures:
        log("failures (first 20):")
        for f in failures[:20]:
            log("  " + f)
    return 0 if not failures else 1


if __name__ == "__main__":
    sys.exit(main())
