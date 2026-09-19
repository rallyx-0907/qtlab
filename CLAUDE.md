# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # start Vite dev server
bun run build     # production build to dist/
bun run preview   # serve production build locally
bun run lint      # ESLint (src/ only)
```

No test framework is configured. Use `bun run build` as baseline validation; test CV generation manually with the "Download CV" button in the browser.

## Architecture

Single-page Svelte 5 + Vite app deployed on Vercel. Each section has its own URL, routed client-side with the History API — no router dependency.

```
main.js ── /member/quniv ──▶ Profile.svelte        (standalone page)
        └─ anything else ──▶ App.svelte
                               └─ router.js  path ⇄ route store
                                    /          Home
                                    /news      News
                                    /work      Work
                                    /services  Services   (/service aliases here)
                                    /team      Team
                                    unknown    → replaced with /
```

- `src/router.js` owns `ROUTES`, `navigate(id)`, `linkClick()` and the `route` store. Add a section there, then add its branch in `App.svelte` and its tab in `TopNav.svelte`.
- Nav items are real `<a href>` links; `linkClick` only intercepts plain left-clicks so new-tab and copy-link still work.
- `vercel.json` rewrites every path to `index.html`, so deep links work on deploy with no server config.
- `News.svelte` reads `latest.json` from `quniv/veen-news` via jsDelivr. Article and cluster `summary` fields are `- ` bullet lines; `summaryBullets()` renders them as a list and falls back to a paragraph for older prose digests.

**CV PDF generation** (`pages/member/quniv/Profile.svelte`): Svelte `mount()` renders `CV.svelte` into a hidden off-screen `<div>`, html2pdf.js captures it, then `unmount()` tears it down. CV content lives in `pages/member/quniv/cvData.js`.

## Styling

- Global body/reset styles live in `App.svelte`'s `:global()` blocks — not in `public/global.css`.
- Component-scoped `<style>` blocks for everything else.
- Design system: dark universe theme (`#030308` background, `#a78bfa` purple accent, `#fbbf24` gold, `#f472b6` pink). Fonts: Inter (body) + JetBrains Mono (monospace/labels), both loaded via Google Fonts in `index.html`.
- CSS utility library: `tenoxui` (available but usage is minimal).

## CI/CD

Three GitHub Actions workflows on push/PR to `main`:
- **CI** (`ci.yml`): build + `bun audit --audit-level=high` + ESLint
- **CodeQL** (`codeql.yml`): SAST on JS/TS, also runs weekly
- **Dependency Review** (`dependency-review.yml`): blocks PRs with high-severity new deps

## Commit Style

Conventional Commits: `feat:`, `fix:`, `chore:` prefixes. Keep messages short and imperative.
