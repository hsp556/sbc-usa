
## Goal

Replace the single shared `/services/$slug` template with 6 fully custom, content-rich landing pages — one per service — matching the detailed section-by-section briefs you supplied (US Tax, Business Restructuring, GCC India, US CPA Outsourcing, Bookkeeping & FP&A, Transfer Pricing).

## Approach

Convert each service from data-driven render → its own dedicated route file with the bespoke layout from the brief. Keep the existing brand system (your `--primary` orange, `--gradient-warm`, `--ink`, `bg-gradient-soft`, `glass-card`, etc. already match the requested palette closely — no token rewrites needed).

### Files to create

Six new route files (one per page, each with full custom JSX):
- `src/routes/services.us-tax-services.tsx`
- `src/routes/services.business-restructuring.tsx`
- `src/routes/services.gcc-india-setup.tsx`
- `src/routes/services.us-cpa-outsourcing.tsx`
- `src/routes/services.bookkeeping-fpa.tsx`
- `src/routes/services.transfer-pricing.tsx`

In TanStack Start file-based routing, a literal segment file (`services.us-tax-services.tsx`) takes precedence over the dynamic `services.$slug.tsx`, so the existing dynamic route stays as a graceful fallback for any unknown slug.

Six hero images (AI-generated, premium quality, matching the visual brief for each page):
- `src/assets/service-us-tax.jpg` — split US skyline → global network
- `src/assets/service-restructuring.jpg` — globe with USA/India/UAE arc connections
- `src/assets/service-gcc.jpg` — modern Hyderabad/Bengaluru tech office
- `src/assets/service-cpa.jpg` — professional audit/conference room scene
- `src/assets/service-bookkeeping.jpg` — SME owner with dashboard
- `src/assets/service-tp.jpg` — abstract intercompany network on world map

### Files to update

- `src/data/services.ts` — keep as-is for the `/services` index, home page, and "other services" rail (these consume `title`, `short`, `tagline`, `icon`, `slug`).
- `src/routes/services.$slug.tsx` — keep as fallback for unknown slugs only (literal routes win for the 6 known ones).

### Per-page section structure

Each page implements exactly the sections in your brief, in order:

1. **Hero** — two-column, orange pill label, serif H1, body, dual CTAs, stats grid, hero image with floating award/result badge.
2. **Service-specific body sections** — tabs / pillar grids / pyramid / timeline / pricing tiers / 3-tier doc diagram, etc., per brief.
3. **Closing CTA** — full-bleed orange-gradient or navy banner with primary CTA to `/contact`.

Reuses existing primitives: `SiteShell`, `Reveal`, lucide icons, `bg-gradient-warm`, `bg-gradient-ink`, `bg-gradient-soft`, `glass-card`, `shadow-elevated`, `container-page`, `text-gradient-warm`. New small UI patterns (tabs, stepper, pyramid, pricing card) built inline per page with Tailwind — no new component files unless one pattern repeats across pages.

### SEO

Each page gets its own `head()` with unique title, description, og:title/description, og:image (= the hero image), and `Service` + `BreadcrumbList` JSON-LD (mirroring the current `services.$slug.tsx` pattern but with bespoke copy).

### Out of scope (will not change)

- Header / footer / nav (already updated previously)
- Home page hero
- `/services` index page
- Brand color tokens — current `--primary` orange and `--gradient-warm` already match the requested `#F97316 → #FBBF24` direction within visual tolerance. If you want an exact `#F97316` swap I can do it as a one-line follow-up.

### Notes on brief vs. existing system

- Fonts: brief asks for `DM Serif Display` + `DM Sans`. Current site uses `Plus Jakarta Sans` + `Inter`. I'll **keep current fonts** for site-wide consistency (matches your existing header, home, about, contact). Say the word if you want me to swap globally.
- "Tabs" sections will be interactive (React state) with smooth fade between panels.
- Stats use animated count-up on scroll (lightweight, no new deps).

### Build order

I'll ship all 6 pages in one pass: generate 6 hero images in parallel, then write the 6 route files. No DB/server work required.
