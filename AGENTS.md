# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

**React 19 + Vite 5** single-page application for AZ Business Center (Moroccan business services company), deployed on Vercel.

### Routes (`src/main.jsx`)
Three routes rendered by React Router v7:
- `/` → `App.jsx` — home page (hero, activities carousel, why-us grid, Google Maps embed, contact form)
- `/activities` → `Activities.jsx` — detailed breakdown of the three service areas
- `/tarifs` → `Tarifs.jsx` — pricing plans

`vercel.json` rewrites all paths to `index.html` for client-side routing.

### Internationalisation (`src/i18n.js`)
All translation strings for **French** (`fr`) and **Arabic** (`ar`) are hardcoded in a single file as a nested object. There is no separate locale files — add or edit strings directly in `src/i18n.js`. Language preference is persisted to `localStorage` under the key `"lang"`.

RTL support is applied by setting `document.documentElement.dir` to `"rtl"` when the active language is Arabic. Several components contain RTL-specific CSS rules (e.g. `[dir="rtl"] .hero-gradient`, `[dir="rtl"] .carousel-arrow-left`).

The hero section uses a separate background image for Arabic: `/public/office-ar.webp` vs `/public/office.webp` for French.

### Styling
Each page component embeds its own `<style>` JSX block — there are no CSS modules or Tailwind utility classes in the markup. `tailwind-merge` and `clsx` are installed but unused. Global resets are in `src/index.css`.

### Contact form (`App.jsx`)
Submissions are sent to a Google Apps Script endpoint via `fetch` with `mode: "no-cors"`. The endpoint URL is hardcoded as `SCRIPT_URL` in `App.jsx:120`. The form captures name, phone, email, company, plan selection, and message.

### Static assets
All images are WebP and served from `/public/`. Reference them as absolute paths (e.g. `/office.webp`, `/logo.png`).

### Loading screen
`src/main.jsx` shows a 2-second logo splash screen before rendering the router. This is a hardcoded `setTimeout` — not based on actual asset loading.
