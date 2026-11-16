# wiring-simulator-local
穿越机接线模拟器

# 2026-11-16

## 镜像 hs-fpv.com/wiring-simulator 并在本机部署

- 目标站点：Nuxt 3 SSR「花生FPV 接线模拟器」，页面交互全靠客户端 JS。
- 产出目录：`wiring-simulator-local/`
  - `mirror.py`：递归镜像脚本。保存 SSR HTML（含 hydration payload），从入口 JS 的 `__vite__mapDeps` 提取全部动态 chunk，共抓取 340 个 `/_nuxt/` JS/CSS、15 个 `/images/wiring/*.svg`、27 个 Google Fonts woff2、2 个 CDN logo；改写 `siteUrl`/`aegisEnabled`/`cosPublicBaseUrl` 以适配 localhost。
  - `server.py`：零依赖 Python 服务器，默认 `127.0.0.1:8080`。提供 `/wiring-simulator` 路由、正确 MIME、`/api/*` 代理+缓存、缺失资源回源并落盘、SPA fallback、`--offline` 纯离线模式、`?__diag=1` 诊断注入。
  - `start.bat`：Windows 双击启动。
  - `site/`：369 个文件 / 45.73 MiB。
- 验证方式：无头 Edge + `--virtual-time-budget` + 注入脚本自动点击。结果：缩放 66%→82%、配件面板 `aria-expanded` false→true、「完整接线示例」生成 49 根线、119 个焊盘、无裂图；清空 API 缓存的纯离线模式结果一致。
- 已知事项：控制台有 `Hydration completed but contains mismatches`（原站画布网格/缩放随机计算值 SSR 与 CSR 不同），不影响交互；仅完整镜像模拟器页，其它站内路由走 SPA fallback；镜像资源版权归原站，仅用于本地学习研究。
