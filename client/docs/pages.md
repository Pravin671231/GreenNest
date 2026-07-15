# GreenNest — Page List & Content Inventory

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Reference-base list of every page in the site, grounded in [`../../docs/SRS.md`](../../docs/SRS.md) §3.1, and the content blocks each page requires. This is the doc [`./issues.md`](./issues.md) #1 defines — every wireframe issue (#4-#10) points back here for the content each page must cover.

---

## Home / Landing

**Purpose:** Primary landing page — builds trust and drives foot traffic/inquiries to the physical store.

**Content blocks**
- Hero section
- Value proposition
- Featured / seasonal plants
- "Why choose us"
- Testimonials
- Primary CTA (Call / WhatsApp / Get Directions)

---

## Catalog

**Purpose:** Browse the plant catalog by category. No cart, no checkout, no payment.

**Content blocks**
- Plant grid grouped by category (indoor, outdoor, succulents, flowering, etc.)
- Client-side filters (category, light/water needs, size)
- Empty-state messaging when filters return no results
- Links to each plant's detail page

---

## Plant Detail

**Purpose:** Give a customer the full picture on one plant to support an in-store visit decision.

**Content blocks**
- Photo gallery
- Care instructions
- Price display (informational only — no buy action)
- Related plants section

---

## About

**Purpose:** Build trust by telling the nursery's story.

**Content blocks**
- Business story
- Nursery photo gallery
- Team section

---

## Blog

**Purpose:** Drive SEO / organic search traffic with plant-care articles.

**Content blocks**
- Listing page: article previews (title, excerpt, image, date)
- Detail page: article body, metadata, related-posts section

---

## Location / Visit Us

**Purpose:** Help customers find and get to the store.

**Content blocks**
- Embedded Google Maps
- Address
- Store hours
- Directions link
- `tel:` / WhatsApp CTA

---

## Contact

**Purpose:** Primary conversion path via direct contact.

**Content blocks**
- Primary: `tel:` and WhatsApp click-to-chat links (dominant path)
- Secondary (optional): lightweight form (fields + validation/error states) posting to a third-party endpoint

---

## Open Questions

- **Catalog taxonomy:** full category list beyond "indoor, outdoor, succulents, flowering, etc." is not finalized.
- **Contact form fields:** exact field set for the optional form (name/email/message? phone?) is unspecified.
- **About team section:** full bios required, or just names/photos?
- **Featured/seasonal plants (Home):** selection criteria — manual curation vs. a rule — not specified.
- **Related plants (Plant Detail):** selection logic (same category? manual curation?) not specified.
- **Blog taxonomy:** categorization/tagging scheme for articles not specified.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial page list & content inventory (issue #1). |
