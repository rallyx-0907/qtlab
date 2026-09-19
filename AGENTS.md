# Repository Guidelines

## Project Structure & Module Organization

This is a Svelte 4 personal site built with Vite. Source lives in `src/`:

- `src/App.svelte` contains the main site UI and CV download flow.
- `src/CV.svelte` renders the generated CV layout.
- `src/cvData.js` stores CV content as structured data.
- `src/main.js` mounts the app.

Static assets live in `public/`, including images in `public/images/` and static CV files under `public/cv/`. Build output goes to `dist/` and is generated. Utility scripts live in `scripts/`.

## Build, Test, and Development Commands

- `bun run dev` starts the Vite development server.
- `bun run build` creates a production build in `dist/`.
- `bun run preview` serves the production build locally for verification.

There is no dedicated test command in `package.json`. Use `bun run build` as baseline validation before submitting changes.

## Coding Style & Naming Conventions

Use two-space indentation in Svelte, JavaScript, HTML, and CSS. Prefer focused changes that follow existing component structure.

Use PascalCase for Svelte components, for example `CV.svelte`. Use camelCase for JavaScript variables and functions, for example `downloadCV`. Keep CV content changes in `src/cvData.js` rather than hardcoding text in components.

Global styling is split between `public/global.css` and component-scoped `<style>` blocks. Prefer component-scoped styles unless a rule must affect the whole page.

## Testing Guidelines

No automated unit or browser test framework is configured. For UI changes, run `bun run build`, then verify locally with `bun run dev` or `bun run preview`.

For CV-related changes, also test the “Download CV” button and inspect the generated PDF for page breaks, spacing, and missing content. Existing Svelte accessibility warnings may appear during build; do not add new warnings.

## Commit & Pull Request Guidelines

Recent commits use short Conventional Commit-style prefixes, especially `feat:` and `fix:`. Follow that pattern:

- `feat: add dynamic CV generation`
- `fix: correct CV page margin`

Pull requests should include a concise description, verification commands, and screenshots or generated PDF notes for visual/CV layout changes. Link related issues when applicable. Keep PRs focused.

## Security & Configuration Tips

Do not commit secrets, personal tokens, or machine-specific configuration. Public assets are served directly, so review files added under `public/`. Keep generated files and dependency folders such as `dist/` and `node_modules/` out of review unless required.
