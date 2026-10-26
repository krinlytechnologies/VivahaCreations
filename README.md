# Vivaha Creations

Marketing site foundation for Vivaha Creations — wedding, engagement, reception and family-event management.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- ESLint (`eslint-config-next`)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit

## Project structure

```
app/                   Routes (App Router)
  weddings-events/
  portfolio/
  about/
  contact/
components/
  ui/                   Generic, brand-agnostic primitives
  brand/                Site-specific composed components (header, footer, ...)
data/                   Static content and site config (nav, metadata defaults)
lib/                    Shared utilities
public/
  assets/
    images/             Photography and imagery
    icons/              Iconography
    fonts/              Any self-hosted fonts (not currently used — fonts are loaded via next/font/google)
```

## Design tokens

Brand tokens (warm-neutral, editorial palette) live in `app/globals.css` as CSS custom properties, mapped into Tailwind's `@theme`:

- `--color-surface` / `--color-surface-raised` — bone/ivory backgrounds
- `--color-ink` / `--color-ink-muted` — near-black text and muted secondary text
- `--color-line` — hairline borders and dividers
- `--color-accent` / `--color-accent-muted` — a single muted clay accent (deliberately not gold)
- `--font-serif` (Fraunces) for headings, `--font-sans` (Inter) for body text

## Status

Foundation only: routing, structure, tokens, metadata defaults and lint/type-check tooling are in place. Page layouts, animation, the consultation flow and backend services are not yet implemented.
