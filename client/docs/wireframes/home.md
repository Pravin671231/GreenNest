# GreenNest — Wireframe: Home / Landing

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Home page, satisfying [`../issues.md`](../issues.md) #4. Covers every content block listed for Home in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md). First of the per-page wireframes (#4-#10); later pages follow this same file-per-page convention under `wireframes/`.

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │ ← sticky header (layout.md)
├────────────────────────────────────────────────────────────────────┤
│                                                                      │
│               H E R O   ( full-bleed plant photo, headline,        │
│                           subhead / value-prop one-liner )          │
│                                                                      │
│               [ Call ]   [ WhatsApp ]   [ Get Directions ]          │ ← ABOVE THE FOLD
│                                                                      │
├────────────────────────────────────────────────────────────────────┤
│  VALUE PROPOSITION — 3-column icon + short text row                 │
│  [Icon] Fresh, healthy stock  [Icon] Expert care advice  [Icon] Local│
├────────────────────────────────────────────────────────────────────┤
│  FEATURED / SEASONAL PLANTS                                         │
│  [Card] [Card] [Card] [Card]        "View full catalog →"           │
├────────────────────────────────────────────────────────────────────┤
│  WHY CHOOSE US — 2-column: photo (left) + bullet list (right)       │
├────────────────────────────────────────────────────────────────────┤
│  TESTIMONIALS — 3-up cards (quote, name, optional photo)             │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER (layout.md: brand, quick links, contact, socials)            │
└────────────────────────────────────────────────────────────────────┘
```

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │ ← sticky header, compact
├───────────────────────────┤
│                           │
│   H E R O   (photo,       │
│   headline, subhead)      │
│                           │
│   [ Call ]                │ ← ABOVE THE FOLD
│   [ WhatsApp ]            │   (CTAs stacked, full-width
│   [ Get Directions ]      │    for thumb-reachability)
│                           │
├───────────────────────────┤
│ VALUE PROPOSITION          │
│ [Icon] Fresh stock         │
│ [Icon] Expert advice       │
│ [Icon] Local               │  ← stacked, not 3-column
├───────────────────────────┤
│ FEATURED / SEASONAL PLANTS │
│ [Card][Card][Card] →       │  ← horizontal scroll/swipe
├───────────────────────────┤
│ WHY CHOOSE US              │
│ [Photo]                    │
│ • bullet                   │  ← image above list, stacked
│ • bullet                   │
├───────────────────────────┤
│ TESTIMONIALS                │
│ [Card] ← swipe →            │  ← one card at a time
├───────────────────────────┤
│ FOOTER (stacked columns)   │
└───────────────────────────┘
```

---

## Content Block Coverage

Every block from the Home entry in [`../pages.md`](../pages.md) is present above:

- [x] Hero section
- [x] Value proposition
- [x] Featured / seasonal plants
- [x] "Why choose us"
- [x] Testimonials
- [x] Primary CTA (Call / WhatsApp / Get Directions)

## Primary CTA — Above the Fold

On both breakpoints, the Call / WhatsApp / Get Directions cluster sits directly under the hero headline, before any scrolling — desktop as an inline button row, mobile as full-width stacked buttons for easy thumb reach. This is in addition to the persistent Call/WhatsApp buttons in the sticky header (per [`../layout.md`](../layout.md)); Get Directions only appears here, matching SRS §3.1's Home-specific CTA set.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Home wireframe (issue #4): desktop + mobile layouts, content-block coverage, CTA placement. |
