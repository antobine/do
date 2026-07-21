# David & Olivar Abogados

Marketing website for **David & Olivar Abogados**, a Buenos Aires criminal-law firm ([davidolivar.com.ar](https://davidolivar.com.ar)).

Built with [Next.js](https://nextjs.org) (Pages Router), styled with [Tailwind CSS](https://tailwindcss.com), and animated with [Framer Motion](https://www.framer.com/motion/). All content is in Spanish.

## Getting started

```bash
npm install
npm run dev     # dev server at http://localhost:3000
```

Node version is pinned via `.nvmrc` (`lts/*`); run `nvm use` to match it.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint (`next/core-web-vitals`) |

## Project structure

- `pages/` — routes. `index.js` is the single-scroll home page (hero, Nuestro Estudio, Áreas de Práctica, El Equipo); `alejandro-david.js` and `ignacio-olivar.js` are the team-member bio pages.
- `components/` — shared UI: `layout`, `header`, `footer`, `nuestro-estudio`.
- `lib/fonts.ts` — Google font loaders (DM Sans, DM Serif Display) via `next/font`.
- `css/index.css` — Tailwind directives plus a few hand-written classes.
- `public/` — static assets (images, logos, favicons).

Custom Tailwind theme colors and named background images are defined in `tailwind.config.js`.

See [CLAUDE.md](CLAUDE.md) for a fuller architecture overview.
