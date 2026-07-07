# Safron

A premium corporate consulting website for Safron, an enterprise consulting firm specializing in SAP, AI, and sustainable innovation transformation.

## Run & Operate

- `pnpm run dev` — run the Safron marketing site (Vite dev server, runs from repo root)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000, not used by Safron)
- `pnpm run typecheck` — typecheck the Safron app (root package)
- `pnpm run typecheck:libs` — build composite lib declarations
- `pnpm run typecheck:all` — full typecheck across all packages
- `pnpm run build` — Vite production build (outputs to `dist/public/`)
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (not currently used by Safron)

## Project structure

The Safron site lives at the **repository root** (not under `artifacts/`):

```
src/          — React application source
public/       — Static assets (favicon, opengraph, robots.txt, 404.html)
index.html    — App HTML entry point
vite.config.ts
package.json  — @workspace/safron (also serves as the workspace root package)
tsconfig.json — Safron app TypeScript config
tsconfig.solution.json — Workspace lib solution config (used by typecheck:libs)
components.json — shadcn/ui config
dist/public/  — Vite build output (gitignored)
artifacts/api-server/     — Express API server (not used by Safron currently)
artifacts/mockup-sandbox/ — UI prototyping sandbox
lib/          — Shared workspace libraries
```

## GitHub Pages deployment (Safron)

The Safron site is a static frontend-only app deployed via GitHub Pages:

- `.github/workflows/deploy-safron.yml` — GitHub Actions workflow that builds at the repo root and deploys to GitHub Pages on pushes to `main`. Sets `BASE_PATH` to `/<repo-name>/` automatically.
- `package.json` has a `build:pages` script (`BASE_PATH=/safron/`) for manual local builds targeting a repo named `safron`. Adjust `BASE_PATH` if the GitHub repo has a different name.
- `public/404.html` and a decoding snippet in `index.html` implement the standard SPA-on-GitHub-Pages redirect trick so client-side routes (e.g. `/about`, `/insights`) work on refresh/direct link.
- To enable: push this repo to GitHub, then enable GitHub Pages with source "GitHub Actions" in the repo settings.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19, Vite 7, Tailwind CSS 4, Framer Motion, shadcn/ui
- API: Express 5 (in `artifacts/api-server`, not used by Safron currently)
- DB: PostgreSQL + Drizzle ORM (not used by Safron currently)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: Vite (static, outputs to `dist/public/`)

## Architecture decisions

- Safron app lives at the repo root (not under `artifacts/`) so the GitHub repo resembles a standard Vite/React project for GitHub Pages deployment.
- `package.json` at root serves dual purpose: workspace root (pnpm workspace entry via `pnpm-workspace.yaml`) and the `@workspace/safron` app package.
- Root `tsconfig.json` is the Safron app config; workspace lib solution config moved to `tsconfig.solution.json`.
- `artifacts/safron/.replit-artifact/artifact.toml` remains in place for Replit's dev server/preview routing — it is not application code.

## Product

Premium corporate consulting website for Safron. Features: hero section with animated SVG enterprise network, service/industry cards, advisory model timeline, contact form (mails to sujata@saf-ron.com), premium dark footer.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `artifacts/safron/` contains only `.replit-artifact/` (Replit dev-server config) — no source code lives there. All source is at root.
- The `artifacts/` folder is not empty (api-server and mockup-sandbox are still there).
- `pnpm run build` at root runs the Vite app build (not the old workspace-wide build). Use `typecheck:all` for the full workspace typecheck.
- `GITHUB_TOKEN` secret is configured in Replit for pushing to GitHub.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
