2026-09-16 15:49
Sections now have real URLs (/news, /work, /services, /team) via `src/router.js`, a dependency-free History-API router with a Svelte store (PR #104). Chose no router lib to match main.js's existing pathname check for /member/quniv. `/service` aliases to `/services`; unknown paths replace to `/`. Route resolves before first render to avoid a Home flash.

News renders veen-news bullet summaries (`- ` lines) as lists; `summaryBullets()` falls back to a paragraph for old prose digests.

Gotchas: CI "Dependency Audit" fails on main too since July (5 high advisories: brace-expansion, nanoid, postcss, sharp) — not caused by this PR. Vercel previews sit behind Vercel login, so deep links can't be tested there; verified with headless Chrome against `vite preview` instead (32/32).
