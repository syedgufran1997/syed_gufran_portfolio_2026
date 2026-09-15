# Portfolio — v2 (minimal, bilingual)
<img width="1470" height="882" alt="Screenshot 2026-09-15 at 7 46 19 PM" src="https://github.com/user-attachments/assets/e376ed06-0d85-4c1a-8c75-97b021445bff" />
<img width="428" height="715" alt="Screenshot 2026-09-15 at 7 47 05 PM" src="https://github.com/user-attachments/assets/4463a146-ceaf-4a98-95b4-0f1681e6b661" />


React + TypeScript + Vite + Framer Motion, with English/Arabic i18n and RTL support.

## Getting started

```bash
npm install
npm run dev
```

Requires Node 20.12+ (check with `node -v`).

## How the translation works

All UI text lives in **one file**: `src/i18n/content.ts`. It exports:

- `content.en` and `content.ar` — every string in the site, matched key-for-key across both languages.
- `shared` — things that don't change with language: email, links, tech/brand names, dates.

`src/context/LanguageContext.tsx` is the "translator": it holds the current language in React state (persisted to `localStorage`), and every component reads strings through `useLanguage().t` instead of hardcoding text. Switching language also flips `document.documentElement.dir` between `ltr` and `rtl`, so Arabic renders right-to-left automatically — the CSS uses logical properties (`margin-inline`, `padding-block`, `text-align: end`, etc.) rather than `left`/`right`, so layout mirrors correctly without extra code.

To add a new piece of text: add the key to the `Content` interface, then fill it in under both `en` and `ar` in the same file.

## Design

Minimal, light, single accent color (`--accent: #2542f5`). Latin type is Manrope; Arabic type is IBM Plex Sans Arabic, chosen to sit well next to Manrope at matching weights. Tech/brand names (React.js, Next.js, etc.) stay in Latin script in both languages, which matches how they're written in real Arabic tech resumes.

## Structure

```
src/
  i18n/content.ts        All text, both languages, in one place
  context/LanguageContext.tsx   Language state + RTL/LTR switching
  components/             Nav, Hero, Work, Experience, Skills, Education, Contact, Reveal
  index.css                Design tokens, RTL-safe layout, mobile breakpoints
```

## Customizing

- Swap resume file: replace `public/Syed_Gufran_Resume.pdf` (keep the same filename, or update `shared.resumeHref`).
- Update links/contact: `shared` object at the top of `src/i18n/content.ts`.
- Colors/fonts: CSS variables at the top of `src/index.css`.
