# Daffa Pratama — Frost UI Portfolio

A fresh, static-first software developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize the portfolio

- `data/portfolio.ts` — profile, projects, skills, and experience content.
- `app/globals.css` — Frost UI colors, glass surfaces, spacing, and responsive styling.
- `components/navbar.tsx` — navigation and mobile menu.
- `components/sections.tsx` — homepage sections and project cards.
- `app/layout.tsx` — metadata and document layout.
- `public/images/` — add profile and project screenshots here.

Replace the placeholder email and social links in `data/portfolio.ts` before publishing. The profile portrait is currently a styled initials placeholder.

## Build and deploy

```bash
npm run lint
npm run build
npm start
```

Import the repository into Vercel to deploy. No database or environment secrets are required for the initial version.

## Design direction

- Frost UI / soft glassmorphism
- Blue and white palette, soft shadows, subtle borders
- Responsive layouts and restrained entrance/hover motion
- Reduced-motion support
- Static-first architecture with minimal client-side behavior
