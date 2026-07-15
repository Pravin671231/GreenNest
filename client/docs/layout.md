# GreenNest — Shared Layout Definition

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Defines the header, footer, and page container/grid rules shared across every page, satisfying [`./issues.md`](./issues.md) #3. Builds on [`./design.md`](./design.md) (colors, type, spacing) and the page list in [`./pages.md`](./pages.md). Nav items cover the six top-level routes from [`../../docs/SRS.md`](../../docs/SRS.md) §3.1/§7 — Home, Catalog, About, Blog, Visit Us, Contact (Plant Detail is reached via Catalog, not a nav item).

---

## Header / Nav

**Desktop (`md:` / ≥768px and up):**
- Left: logo/wordmark ("GreenNest").
- Center-right: primary nav links — Home, Catalog, About, Blog, Visit Us, Contact.
- Far right: primary CTA cluster — **Call** and **WhatsApp** buttons (`tel:` / `wa.me` links), styled as `accent-600`/`accent-700` pill buttons per [`./design.md`](./design.md), always visible (not collapsed into a menu).
- Header is `sticky top-0 z-50` so the CTA stays reachable while scrolling long pages (Catalog, Blog).

**Mobile (below `md:` / <768px):**
- Left: logo.
- Right: a compact persistent **WhatsApp** icon button (one-tap access without opening the menu) + hamburger icon.
- Hamburger opens a full-screen/drawer nav menu (Radix `Dialog`, per SRS §5 — accessibility-critical interactive piece), containing:
  - Both **Call** and **WhatsApp** CTA buttons, prominent at the top.
  - The full nav link list below.
- Menu closes on link selection or outside-tap; body scroll locked while open (standard Radix Dialog behavior).

**Get Directions** is not in the global header — it's specific to the Location/Visit Us page's own CTA (see [`./pages.md`](./pages.md)), not a cross-page action.

---

## Footer

Four-column layout on desktop, stacked single-column on mobile:

1. **Brand** — logo + one-line tagline.
2. **Quick links** — same six nav items as the header (Home, Catalog, About, Blog, Visit Us, Contact).
3. **Contact** — address, `tel:` link, WhatsApp link, store-hours summary (sourced from the Visit Us page content).
4. **Socials** — Instagram/Facebook icons, if/when accounts exist.

Below the columns: a bottom bar with a copyright line.

**Open question:** which social platforms (if any) the business actually has accounts on isn't decided yet — the Socials column is scaffolded but may render empty until confirmed.

---

## Page Container / Grid

- **Max width:** `max-w-7xl` (1280px), horizontally centered (`mx-auto`).
- **Gutter:** `px-4` on mobile, `sm:px-6` on tablet, `lg:px-8` on desktop.
- **Breakpoints:** Tailwind's default scale, unmodified — `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px (consistent with the spacing-scale decision in [`./design.md`](./design.md): no custom breakpoints for a site this size).
- Individual content blocks (grids, card rows) define their own column counts within this container as needed — this doc only fixes the outer container, not every internal grid.

---

## Reusability

This header + footer + container wrap every route via `app/(site)/layout.tsx` (SRS §7). Each per-page wireframe (issues #4-#10) assumes this shared chrome and only needs to wireframe the content between the header and footer.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial shared layout definition (issue #3): header/nav, footer, container/grid rules. |
