---
name: Safron project structure
description: How the Safron app is laid out in this monorepo — important because it differs from the standard artifacts/ pattern.
---

## Key facts

- All Safron source (`src/`, `public/`, `index.html`, `vite.config.ts`, `package.json`, `tsconfig.json`, `components.json`) lives at the **repo root**, not under `artifacts/`.
- `artifacts/safron/` contains only `.replit-artifact/artifact.toml` — no application code.
- The root `package.json` name is `@workspace/safron`. pnpm workspace entry is `.` in `pnpm-workspace.yaml`.
- Dev server: `pnpm run dev` at root (NOT `pnpm --filter @workspace/safron run dev` — filter doesn't work for the root package).
- Artifact.toml run command: `pnpm run dev` (plain, no filter).
- `tsconfig.solution.json` = workspace lib solution config (used by `typecheck:libs`). Root `tsconfig.json` = Safron app config.
- GitHub Pages deploy via `.github/workflows/deploy-safron.yml` — builds from root, uploads `dist/public`.

**Why:** User wanted the repo root to look like a standard Vite/React project for GitHub Pages deployment. pnpm workspace root packages cannot be targeted with `--filter`.

**How to apply:** When adding new pages or components, work in `src/`. Run `pnpm run typecheck` from root to check types. Don't reference `artifacts/safron/` for source — it's empty.

## Pages

- `/` → `src/pages/home.tsx`
- `/about` → `src/pages/about.tsx`
- `/advisory` → `src/pages/advisory.tsx`
- `/perspectives` → `src/pages/insights.tsx`

## Design language

- Colors: `#0B1F3A` (navy/primary), `text-secondary` (blue), `text-accent`/`bg-accent` (gold `#D4AF37`)
- Section label pattern: `text-xs font-bold tracking-widest text-secondary uppercase mb-3`
- Cards: `rounded-2xl border border-gray-100 hover:border-accent/40 hover:shadow-xl transition-all`
- Animations: framer-motion `whileInView` with `viewport={{ once: true }}`
- Icon containers: `w-16 h-16 rounded-xl bg-secondary/10 text-secondary group-hover:bg-accent group-hover:text-primary`
- Industries section: `bg-primary text-white` with `bg-white/5 border border-white/10` cards
- "Why" section: `border-l border-accent` with `absolute top-0 left-[-4px] w-2 h-8 bg-accent` marker
