# GreenNest — Wireframe: Location / Visit Us

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Location / Visit Us page (`/visit-us`), satisfying [`../issues.md`](../issues.md) #9. Covers every content block listed for Location/Visit Us in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md).

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│  VISIT US                                                             │
│  ┌─────────────────────────┐    Address                               │
│  │                          │    123 Nursery Lane, City, PIN           │
│  │   GOOGLE MAPS EMBED      │                                          │
│  │   (<iframe>)             │    Store Hours                          │
│  │                          │    Mon–Sat: 9:00 AM – 6:00 PM            │
│  │                          │    Sun: 10:00 AM – 4:00 PM               │
│  └─────────────────────────┘                                          │
│                                  [ Get Directions ]                    │
│                                  [ Call ]    [ WhatsApp ]               │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ VISIT US                    │
├───────────────────────────┤
│  GOOGLE MAPS EMBED           │
│  (<iframe>, full-width)      │  ← map first, above the fold
├───────────────────────────┤
│ Address                      │
│ 123 Nursery Lane, City, PIN   │
│                              │
│ Store Hours                  │
│ Mon–Sat: 9:00 AM – 6:00 PM     │
│ Sun: 10:00 AM – 4:00 PM        │
├───────────────────────────┤
│ [ Get Directions ]            │
│ [ Call ]                      │  ← stacked, full-width CTAs
│ [ WhatsApp ]                  │
├───────────────────────────┤
│ FOOTER                        │
└───────────────────────────┘
```

---

## CTA Placement

`Get Directions`, `Call`, and `WhatsApp` sit directly beneath the address/hours block on both breakpoints, immediately after a visitor has the map and address in view — no scrolling required to act on any of the three. This is in addition to the persistent Call/WhatsApp buttons in the sticky header (per [`../layout.md`](../layout.md)); `Get Directions` only appears on this page and on Home, matching SRS §3.1.

---

## Content Block Coverage

- [x] Embedded Google Maps `<iframe>`
- [x] Address
- [x] Store hours
- [x] Directions link
- [x] `tel:` / WhatsApp CTA

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Location/Visit Us wireframe (issue #9): map embed, address/hours block, CTA placement, desktop + mobile. |
