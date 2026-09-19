# chill pickle

Personal website and CV generator built with Svelte 5 + Vite.

## Dev

```bash
bun install
bun run dev
bun run build
bun run preview
```

## Lint

```bash
bun run lint
```

## Structure

- `src/pages/member/quniv/cvData.js` — shared CV content
- `src/pages/member/quniv/CV.svelte` — generated PDF renderer
- `src/pages/member/quniv/Profile.svelte` — `/member/quniv` profile and CV download page
- `src/pages/News.svelte` — News feed

## Deployment

The site is deployed as one Vite application on Vercel. `vercel.json` rewrites
direct requests to `index.html`, allowing `/member/quniv` to load as a client-side
route. Attach `qtlab.dev` to the Vercel project and deploy the `main` branch; no
separate project or subdomain is required for the member page.
