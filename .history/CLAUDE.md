# .history — work session recaps

This folder holds short recap files written by the `savework` skill after each meaningful chunk of work, so a future Claude session can get oriented fast without re-deriving context from scratch.

## Reading this folder

Skim filenames by epoch prefix (newest = highest number) before deep-diving into the project. Read the last few recaps when starting work here, especially after a long gap.

## Writing a new recap (rules for any agent adding a file here)

- **Filename**: `{epoch_seconds}_{short-title}.md` — e.g. `1755678900_fix-jwt-refresh-race.md`. Get the epoch via `date +%s`. Title ≤50 characters, lowercase kebab-case (`a-z0-9-` only), no spaces.
- **First line**: date + time only, short — `YYYY-MM-DD HH:MM` (from `date '+%Y-%m-%d %H:%M'`). Nothing else on that line.
- **Body**: ~500 characters, plain sentences, no ceremony. Only exceed when genuinely required (e.g. several unrelated decisions in one session) — never pad to fill space.
- **Content**: what changed and why (if non-obvious), decisions made and the reasoning, gotchas, open/blocked items. Skip anything already obvious from the code, git log, or git diff.
- **Never include**: secrets, credentials, API keys, tokens, or the contents of any credentials/env folder.
- One file per work session — don't append to old files, don't edit past recaps.
- Prefer the `savework` skill to create these files rather than writing them ad hoc, so the format stays consistent.
