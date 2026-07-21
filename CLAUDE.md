# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing website for **David & Olivar Abogados**, a Buenos Aires criminal-law firm (`davidolivar.com.ar`). All user-facing copy is in **Spanish** — keep it that way, and match the formal legal tone when editing content. The project was scaffolded from `next-starter-tailwind` (the `package.json` name/author and `README.md` are leftovers from that template, not descriptive of this site).

## Commands

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

Node version is pinned via `.nvmrc` to `lts/*`. There are no tests.

## Architecture

Next.js 14 using the **Pages Router** (`pages/`), not the App Router. There is no `app/` directory — do not add one (an App Router `app/` alongside `pages/` misfires the `next/document` lint rule and fails the build).

- `pages/_app.js` — wraps every page in `Layout`, sets the shared `<Head>` (title, favicons, manifest), and applies the font CSS-variable classes to a wrapper div.
- `pages/_document.js` — sets `lang="es"` and `scroll-smooth` on `<html>`.
- `pages/index.js` — the home page. A single scroll of anchored sections: hero → `#nuestro-estudio` → `#areas-de-practica` → `#el-equipo`. The header nav and footer link to these anchors.
- `pages/alejandro-david.js`, `pages/ignacio-olivar.js` — the two team-member bio subpages linked from the "El Equipo" section.
- `components/` — `layout.js` (adds `Footer` under page content), `header.js` (logo + anchor nav with a mobile hamburger toggle), `footer.js`, and `nuestro-estudio.js` (a section reused across the home page and both bio pages).

### Styling

Tailwind CSS drives layout; `css/index.css` (imported once in `_app.js`) holds the `@tailwind` directives plus a few hand-written classes that Tailwind can't express: `.pill`, `.team-member` and its hover-reveal `.details` overlay. Custom theme extensions live in `tailwind.config.js`:

- Colors: `main-color` (`#373F47`, the dark slate used everywhere), `almost-white`, `subtle-color`.
- Named background images (`bg-hero-image-main`, `bg-areas-practica`, `bg-facultad-derecho`, `bg-about-law`, etc.) mapping to files in `public/`, with responsive `-md`/`-sm` variants for the hero.

Fonts are loaded via `next/font/google` in `lib/fonts.ts` (DM Sans → `--font-sans`, DM Serif Display → `--font-serif`). `css/index.css` maps `h1/h2/h3` to the serif and `p/li` to the sans by default; use the `.font-sans` / `.font-serif` classes to override.

Animations use **framer-motion** — entrance animations are pervasive (`initial`/`animate` on load, `whileInView` for scroll-triggered reveals). Follow the existing pattern (opacity + y-offset, `ease: "easeOut"`, staggered `delay`) when adding elements.

### Import path conventions

Imports are inconsistent and worth noting before adding new ones:
- Components are imported with a **leading-slash absolute path**: `import Header from "/components/header"`.
- The font module is imported bare: `import { fontClasses } from "app/fonts"`.
- Both `jsconfig.json` (`@components/*`) and `tsconfig.json` (`@/*`, `baseUrl: "."`) define path aliases, but the existing code does **not** use them.

### Images

The site is image-heavy and served statically from `public/`. Use `next/image` with explicit `width`/`height` (as the existing pages do), and `priority` on above-the-fold images. Note that many assets are duplicated at both the repo root and inside `public/` (favicons, logos, `head.html`) — `next/image` and static routes resolve against `public/`, so edit the copies there.
