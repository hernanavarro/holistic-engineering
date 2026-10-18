# Changelog

All notable changes to this project are documented here. Format: version + date, most recent first.

## [Unreleased]

### Changed
- Brand palette aligned to the identity manual: violeta `#80688B`, lavanda `#E6DFEC`, crema `#F7F6F4`, arena `#D4C29E`, negro `#161616` (light/mid variants re-derived; hard-coded rgba values updated).
- Hero, section and card titles now use the sans title font (stand-in for Neue Haas Grotesk Display Pro, per the manual); the emphasized word keeps Cormorant Garamond italic as an accent. Body copy stays in Cormorant Garamond.
- Hero accent phrase ("hacerte responsable") uses a new, more saturated `lavanda-viva` (`#C7AEDB`) at medium weight so it stands out on the dark photo (Cormorant 500 now loaded). Title lines are balanced and "de ella" no longer breaks onto its own line.

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
