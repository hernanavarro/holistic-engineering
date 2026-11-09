# Changelog

All notable changes to this project are documented here. Format: version + date, most recent first.

## [Unreleased]

## [0.1.1] - 2026-11-09

### Added
- Alquimia page (`/alquimia`) with the program's content from Jimena's Canva: hero over the Canva cover photo (`fondo` in `alquimiaPagina.hero`, darkened so the white text reads), who it's for, what the mentoring is about (6 encounters · 90 minutes · 3 months), how we work (3 steps), what's included, who accompanies you (links to Quién soy) and the price block ($450.000 ARS / 450 USD, or two payments of $250.000 / 250 USD; bank transfer, Mercado Pago, Wise or PayPal; notes on the deposit and Mercado Pago installments). Its buttons open WhatsApp with an Alquimia-specific message. Content lives in `alquimiaPagina` in `src/data/content.ts`.

### Changed
- Yoga: real class schedule — Monday and Wednesday at 18:30 and 20 hs, Tuesday and Thursday at 17 hs.
- The "Quiero saber más" button on the Alquimia banner (Sesiones page) now goes to `/alquimia`.

## [0.1.0] - 2026-11-04

### Changed
- "Quién soy" text updated with Jimena's wording.
- Sesiones: each card now uses Jimena's description of the therapy and shows a price at the bottom (`precio` in `sesiones`, `src/data/content.ts`; "$ —" until real prices are set). Added Limpiezas Energéticas and Coaching Holístico (replaces Sesión Integradora); Constelaciones renamed Constelaciones Familiares.
- "Biodescodificación" spelling used across the site.
- Yoga: only weekly in-person classes (recorded classes and workshops/retreats removed), with a "Horarios" block (`horarios` in `yoga`, `src/data/content.ts`; placeholders until the real schedule is set). Home card and page description updated to match.
- Gender-neutral wording across the site ("personas"/"quienes" instead of "mujeres"/"las que"), including the site description.
- Footer simplified to a single row: logo + name (links to the home) on the left, copyright in the middle, social icons on the right; stacked and centered on mobile. The section menu was removed from the footer (the sticky navbar already covers it).
- Footer icons no longer sit inside circles and are larger (32px), arena turning white on hover.
- Real social links set: Instagram, Facebook, YouTube and TikTok (@ingenieria.holistica).
- Testimonios: the grid is now a single-row carousel (3 cards on desktop, 2 on tablet, 1 on mobile). It advances every 6 seconds and loops, pauses on hover/touch/focus, and doesn't autoplay with reduced motion. It can be swiped, with ← → arrows next to the title (hidden on mobile) and dots below. Interval set by `INTERVALO_MS` in `src/components/Testimonios.tsx`.
- Rounded corners on every card across the site (8px): La propuesta, Testimonios, Sesiones, Membresías and Formaciones; the Alquimia banner gets 12px.

### Added
- Contact and social icons in the footer, bottom right (copyright moves to the bottom left, above it a thin divider; centered and stacked on mobile). Brand colors: arena outline icons on black, violeta on hover. Instagram, Facebook, YouTube and TikTok show only when their link is set in the `redes` list in `src/data/content.ts`; WhatsApp always shows and opens the chat with the default message.

### Removed
- "Ver clases disponibles" button on the Yoga page (it had no destination).
- Floating green WhatsApp button (its role moves to the WhatsApp icon in the footer; the navbar "Contacto" and the closing "Contactame" still open WhatsApp).

## [0.0.4] - 2026-10-26

### Added
- Site restructured from a single page into a home + one page per section: `/sesiones`, `/yoga`, `/formaciones`, `/membresias` (route group `src/app/(secciones)`, with per-page titles and descriptions).
- "La propuesta" block on the home with one card per section linking to its page.
- Closing call-to-action ("¿Sentís que es tu momento?", light weight, compact) with a "Contactame" WhatsApp button at the end of every section page (not on the home).

### Changed
- Navbar, footer and WhatsApp button moved to the root layout so they appear on every page.
- Menu order is now Sesiones · Yoga · Formaciones · Membresías · Quién soy; "Quién soy" goes to `/#quien-soy` from any page. The current section is highlighted, the logo links to the home and the mobile menu closes on navigation.
- Real WhatsApp number (+54 9 351 517-1023) for the floating button, navbar and closing CTA.
- Hero button "Conocer el proceso" now scrolls to "La propuesta".
- Navbar button "Comenzar" replaced by "Contacto" (opens WhatsApp).
- Menu, footer and home cards are driven by a single `secciones` list in `src/data/content.ts`; adding a section means creating its page and adding it there.
- Home now shows Hero, Quién soy, La propuesta, Testimonios and FAQ; Sesiones, Yoga, Formaciones and Membresías moved to their own pages.

## [0.0.3] - 2026-10-18

### Changed
- Brand palette aligned to the identity manual: violeta `#80688B`, lavanda `#E6DFEC`, crema `#F7F6F4`, arena `#D4C29E`, negro `#161616` (light/mid variants re-derived; hard-coded rgba values updated).
- Hero, section and card titles now use the sans title font (stand-in for Neue Haas Grotesk Display Pro, per the manual); the emphasized word keeps Cormorant Garamond italic as an accent. Body copy stays in Cormorant Garamond.
- Hero accent phrase ("hacerte responsable") uses a new, more saturated `lavanda-viva` (`#C7AEDB`) at medium weight so it stands out on the dark photo (Cormorant 500 now loaded). Title lines are balanced and "de ella" no longer breaks onto its own line.
- "Formaciones" section background switched from black to the brand violeta; eyebrow, accent and labels use arena-light and body copy is brighter for contrast on the new background.

## [0.0.2] - 2026-10-12

### Changed
- Hero headline and subtitle rewritten ("Tu vida puede cambiar cuando decidís hacerte responsable de ella").
- New profile photo in the "Quién soy" section (`quiensoy-foto-2.jpg` on Vercel Blob).
- "Quién soy" photo now framed as an arch with offset outline, lavender halo and soft violet shadow.

### Added
- Studio photo in the "Yoga que trabaja desde adentro" section (`yoga-sala.jpg` on Vercel Blob), leaf-shaped frame, now also visible on mobile.
- Hero background photo (`hero-fondo.jpg` on Vercel Blob) with a dark veil matching the current live page; hero text, logo and secondary button switched to light colors.

## [0.0.1] - 2026-08-02

### Added
- Real logo (leaf + spark, transparent background) in navbar, footer, and hero, replacing the hand-drawn SVG.
- Favicon and apple-touch-icon generated from the logo.
- Images (logo, favicon, apple-icon) served from Vercel Blob instead of being versioned in the repo.
- Profile photo in the "Quién soy" section, served from Vercel Blob.

### Changed
- Footer copyright switched to English (`© {year} · All rights reserved`).
- Primary typeface switched from Jost to Inter, the closest free match to the brand's Neue Haas Grotesk Display Pro (a paid font).
