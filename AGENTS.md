# AGENTS.md — Portfolio (SvelteKit)

## Stack
SvelteKit 3 · Svelte 5 (runes mode, enforced) · Tailwind CSS v4 · TypeScript 6 · Vite 8

## Commands
```bash
npm run dev          # dev server (default port 5173)
npm run check        # svelte-kit sync + svelte-check — run before committing
npm run build        # production build
npm run preview      # preview production build locally
```

No test suite, no lint script configured. Verification = `npm run check`.

## Svelte 5 runes — enforced project-wide
`vite.config.ts` forces runes mode for all non-`node_modules` files. Use only runes syntax:
- Props: `let { name } = $props();` — **never** `export let`
- State: `$state()`, `$derived()`, `$effect()`
- Slots: `{@render children()}` — **never** `<slot>`
- Reactive class stores: class fields with `= $state<T>(value)` (see `theme.svelte.ts`)

## Path aliases
Two aliases resolve to `src/lib/`:
- `$lib/` — SvelteKit built-in
- `#lib/` — custom alias defined in `package.json#imports` and `tsconfig.json#paths`

Both are in use across the codebase. Prefer `$lib/` for new code.

## Project structure
```
src/
  app.html                  # anti-FOUC theme script lives here — edit carefully
  routes/
    +layout.svelte          # imports layout.css, inits themeState
    +page.svelte            # composes all section components
    layout.css              # Tailwind entry + CSS custom properties (design tokens)
  lib/
    theme.svelte.ts         # ThemeState class ($state store), singleton export
    data/resume.ts          # all portfolio content — single source of truth
    components/             # one component per section + shared primitives
    assets/favicon.svg
static/                     # served as-is (SvelteKit equivalent of public/)
```

## Dark mode
- Anti-FOUC inline script in `src/app.html` applies `dark` class to `<html>` before first paint
- `themeState` (singleton in `theme.svelte.ts`) syncs with `localStorage` key `"theme"`
- Tailwind dark variant configured as `.dark` class via `@custom-variant dark` in `layout.css`
- Do **not** move theme init out of `src/app.html` — SSR will cause flash

## Design tokens
All colors use CSS custom properties defined in `layout.css` under `:root` / `.dark`.
Tailwind classes like `bg-background`, `text-foreground`, `border-card` map to these via `@theme inline`.
Add new colors there, not as raw Tailwind palette values.

## Adapter
Uses `@sveltejs/adapter-auto`. No adapter configured for a specific target — deploy will warn
(`Could not detect a supported production environment`). This is expected for local builds.
Configure a specific adapter before deploying to production.

## Branches
| Branch | Contents |
|---|---|
| `main` | SvelteKit (current) |
| `legacy-nextjs` | Original Next.js 16 + React 19 implementation |

## Worktree
Experiment worktree scaffolding lives under `.slim/worktrees/` (git-ignored).
Metadata in `.slim/worktrees.json`.
