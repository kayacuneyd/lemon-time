# Lemon-Time Website Redesign

Modern SvelteKit 2.x codebase for the Lemon-Time GmbH website relaunch. The project ships with a performance-first setup, Tailwind-driven design system, and multilingual scaffolding (DE/TR/EN) ready for future CMS integration.

## Tech Stack

- [SvelteKit 2](https://kit.svelte.dev/) with TypeScript
- Tailwind CSS 3, PostCSS, and custom design tokens
- ESLint (flat config) + Prettier + Tailwind plugin
- Zod validation utilities
- i18n structure (JSON dictionaries + locale store)

## Getting Started

```sh
npm install
npm run dev
```

### Key Scripts

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Local dev server                              |
| `npm run lint`     | ESLint (Svelte + TS + Tailwind)               |
| `npm run check`    | `svelte-check` type diagnostics               |
| `npm run build`    | Production build (SSR + client output)        |
| `npm run preview`  | Preview built output                          |
| `npm run format`   | Prettier format with Tailwind ordering        |

## Project Structure

```
src/
├── app.html                # Global HTML template + font imports
├── app.css                 # Tailwind layers + component patterns
├── lib/
│   ├── components/         # Header, Footer, Language switcher, etc.
│   ├── data/               # JSON content (de/tr/en) + typed loaders and shared types
│   ├── i18n/               # de/tr/en dictionaries + helpers
│   ├── stores/             # Theme + locale stores
│   ├── styles/             # Design tokens (CSS variables)
│   └── utils/              # Zod form validation helpers
└── routes/                 # SvelteKit pages (+placeholders for CMS data)
```

Additional config files:

- `tailwind.config.cjs` – theme extension (colors, typography, spacing)
- `postcss.config.cjs` – Tailwind + autoprefixer
- `eslint.config.js` – flat-config with Svelte & Tailwind rules
- `.prettierrc` / `.prettierignore` – Prettier setup
- `.env.example` – environment variable template (CMS, SMTP, analytics)

## Internationalisation

- `src/lib/stores/language.ts` manages locale selection (persisted via `localStorage`).
- Translations live in `src/lib/i18n/*.json`. `getHeroCopy`/`getNavigationLabels` helpers keep components locale-aware.
- Header includes a responsive language switcher (DE/TR/EN).

## Design System

- Color palette + typography encoded as CSS variables in `src/lib/styles/tailwind.css`.
- Tailwind theme extends `brand`, `neutral`, spacing, shadows, etc.
- Utility classes for buttons/cards defined in `@layer components` (see `src/app.css`).
- Theme toggle store updates `data-theme` + `dark` class on `<html>`/`<body>`.

## Next Steps

- Connect to the chosen headless CMS (Strapi/Directus) and hydrate page routes.
- Implement form actions with server-side validation + mail/SaaS integration.
- Add cookie consent component and analytics loader (Plausible/GA4).
- Flesh out page content sections (services, references, career detail views).
- Expand testing (unit for stores/utils, component snapshots, E2E).

For questions or enhancements, open an issue or extend the design system tokens/components to keep consistency across new features.
