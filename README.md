# Holistic Engineering

Website for Jimena Navarro — Ingeniería Holística. A Next.js site with a general home and one page per section (Sesiones, Yoga, Formaciones, Membresías), presenting her holistic sessions (Reiki, Registros Akáshicos, Tarot Evolutivo, Constelaciones, and more).

Deployed on Vercel: [holistic-engineering.vercel.app](https://holistic-engineering.vercel.app)

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- Tailwind CSS
- Images (logo, favicon) served from [Vercel Blob](https://vercel.com/docs/vercel-blob) rather than versioned in the repo

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

To add a new section: create `src/app/(secciones)/<path>/page.tsx` and add it to the `secciones` list in `src/data/content.ts` (it then shows up in the menu, the footer and the home).

See [CHANGELOG.md](CHANGELOG.md) for a record of notable changes.
