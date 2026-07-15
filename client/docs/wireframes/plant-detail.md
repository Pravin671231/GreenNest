# GreenNest — Wireframe: Plant Detail

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Plant Detail page (`/catalog/[slug]`), satisfying [`../issues.md`](../issues.md) #6. Covers every content block listed for Plant Detail in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md).

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│ Catalog / Indoor / Monstera Deliciosa            ← breadcrumb        │
├────────────────────────────────────────────────────────────────────┤
│  ┌────────────────┐   Monstera Deliciosa                             │
│  │                │   ₹450  ⓘ Informational only — visit or call     │
│  │  PHOTO GALLERY  │      to purchase                                 │
│  │  (main image)   │                                                  │
│  │ [thumb][thumb]  │   [Icon] Light: Medium  [Icon] Water: Weekly     │
│  │ [thumb][thumb]  │   [Icon] Size: Medium                             │
│  └────────────────┘                                                  │
│                       [ Call ]   [ WhatsApp ]  ← "Ask about this plant"│
├────────────────────────────────────────────────────────────────────┤
│  CARE INSTRUCTIONS                                                    │
│  Light — ...      Water — ...      Soil — ...      Difficulty — ...   │
├────────────────────────────────────────────────────────────────────┤
│  RELATED PLANTS                                                       │
│  [Card] [Card] [Card] [Card]        ← each card → its own detail page │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ ‹ Back to Catalog           │
├───────────────────────────┤
│  PHOTO GALLERY              │
│  (swipeable, main image     │
│   + dot indicators)         │
├───────────────────────────┤
│ Monstera Deliciosa          │
│ ₹450  ⓘ Informational only  │
│   — visit or call to        │
│   purchase                  │
│                            │
│ [Icon] Light: Medium        │
│ [Icon] Water: Weekly        │
│ [Icon] Size: Medium         │
│                            │
│ [ Call ]                   │
│ [ WhatsApp ]                │  ← stacked, full-width
├───────────────────────────┤
│ CARE INSTRUCTIONS           │
│ Light — ...                 │
│ Water — ...                 │
│ Soil — ...                  │
│ Difficulty — ...             │
├───────────────────────────┤
│ RELATED PLANTS               │
│ [Card][Card][Card] →         │  ← horizontal scroll/swipe
├───────────────────────────┤
│ FOOTER                       │
└───────────────────────────┘
```

---

## Price Display — Informational Only

Per SRS §1.1/§1.2 scope (no cart/checkout/payments anywhere on the site), the price on this page:
- Is labeled with an explicit "ⓘ Informational only — visit or call to purchase" note directly beside the price, not just implied by the absence of a buy button.
- Has **no** accompanying "Add to Cart," "Buy Now," quantity selector, or any transactional affordance — the only actions on the page are **Call** and **WhatsApp** (framed as "ask about this plant"), consistent with the site's inquiry-driven, non-e-commerce purpose.

---

## Content Block Coverage

- [x] Photo gallery (main image + thumbnails, swipeable on mobile)
- [x] Care instructions (light, water, soil, difficulty)
- [x] Price display — informational only, explicitly labeled, no buy/cart action
- [x] Related plants section

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Plant Detail wireframe (issue #6): photo gallery, care instructions, informational-only price display, related plants. |
