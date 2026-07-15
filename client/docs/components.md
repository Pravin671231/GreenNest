# GreenNest — Component Inventory

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Full set of reusable components extracted from every wireframe in [`./wireframes/`](./wireframes/) (#4-#10), satisfying [`./issues.md`](./issues.md) #11. Split per [`../../docs/SRS.md`](../../docs/SRS.md) §7 into `components/ui/` (primitives) and `components/blocks/` (page-level compositions). This list seeds Milestone 1's scaffold (issue #12).

---

## `components/ui/` — Primitives

| Component | Description | Radix? |
|---|---|---|
| `Button` | Primary/accent/ghost variants, sizes; underlies every CTA | — |
| `IconButton` | Icon-only button (hamburger trigger, mobile WhatsApp shortcut) | — |
| `Badge` | Small label chip — informational-price note, filter active-count | — |
| `Card` | Base surface (border/radius/shadow) underlying `PlantCard`, `TeamMemberCard`, `BlogPostCard`, testimonial cards | — |
| `Input` | Text field (Contact form: name, email) | — |
| `Textarea` | Multi-line field (Contact form: message) | — |
| `Label` | Form field label, associated with inputs for a11y | Yes — `@radix-ui/react-label` |
| `FieldError` | Inline validation error text under a field | — |
| `Checkbox` | Filter option selection (mobile filter dialog) | Yes — `@radix-ui/react-checkbox` |
| `RadioGroup` | Single-select filter option group (mobile filter dialog) | Yes — `@radix-ui/react-radio-group` |
| `Select` / `DropdownMenu` | Desktop inline filter dropdowns (Category, Light/Water, Size) | Yes — `@radix-ui/react-select` or `@radix-ui/react-dropdown-menu` |
| `Dialog` | Generic modal/drawer primitive — powers mobile nav menu and mobile filter sheet | Yes — `@radix-ui/react-dialog` |
| `Breadcrumb` | `Catalog / Indoor / Monstera Deliciosa`-style trail (Plant Detail, Blog Detail) | — |
| `Avatar` / `Thumbnail` | Small image primitive (gallery thumbnails, team photos, testimonial photos) | — |
| `Icon` | Wrapper around `react-icons` (Feather set) for consistent sizing/color | — |

---

## `components/blocks/` — Page-Level Compositions

| Component | Description | Used in | Radix? |
|---|---|---|---|
| `Header` | Sticky logo + nav + Call/WhatsApp CTA cluster + hamburger trigger | All pages (layout.md) | — (trigger only; menu itself is `MobileNavMenu`) |
| `MobileNavMenu` | Full-screen/drawer nav menu: CTAs + full link list | All pages (layout.md) | Yes — built on `Dialog` |
| `Footer` | Brand, quick links, contact block, socials, copyright bar | All pages (layout.md) | — |
| `CTAButtonGroup` | Call / WhatsApp / (optional) Get Directions button cluster | Header, Home hero, Plant Detail, Visit Us, Contact | — |
| `Hero` | Full-bleed photo + headline + subhead + `CTAButtonGroup` | Home | — |
| `ValuePropSection` | 3-item icon + short-text row | Home | — |
| `PlantCard` | Plant image, name, category/spec badges, link to detail page | Home (featured), Catalog, Plant Detail (related) | — |
| `CategorySection` | Category heading + `PlantCard` grid | Catalog | — |
| `WhyChooseUsSection` | Photo + bullet list, 2-column desktop / stacked mobile | Home | — |
| `TestimonialCard` / `TestimonialsSection` | Quote + name (+ optional photo); 3-up desktop, swipeable mobile | Home | — |
| `FilterBar` | Desktop inline row of filter `Select`/`DropdownMenu` controls + Clear | Catalog | Yes (via `Select`/`DropdownMenu`) |
| `FilterDialog` | Mobile filter sheet: `Checkbox`/`RadioGroup` filter controls, live match count, Clear/Apply | Catalog | Yes — built on `Dialog` |
| `EmptyState` | Icon + "no results" message + clear-filters action | Catalog | — |
| `PhotoGallery` | Main image + thumbnails, swipeable on mobile | Plant Detail, About (as `PhotoGrid` variant) | — |
| `PriceDisplay` | Price + "informational only" `Badge`, no buy affordance | Plant Detail | — |
| `CareInstructions` | Light/Water/Soil/Difficulty spec list | Plant Detail | — |
| `RelatedPlants` | Section wrapping a `PlantCard` row | Plant Detail | — |
| `StorySection` | Photo + business-story copy, 2-column desktop / stacked mobile | About | — |
| `PhotoGrid` | Grid of nursery photos | About | — |
| `TeamMemberCard` / `TeamSection` | Photo, name, role; grid desktop / stacked mobile | About | — |
| `BlogPostCard` | Preview image, title, excerpt, date; used in listing and `RelatedPosts` | Blog listing, Blog detail | — |
| `PostMeta` | Date + read-time metadata row | Blog detail | — |
| `ArticleBody` | MDX-rendered prose container | Blog detail | — |
| `RelatedPosts` | Section wrapping `BlogPostCard` row | Blog detail | — |
| `MapEmbed` | Google Maps `<iframe>` wrapper | Visit Us | — |
| `HoursAddressBlock` | Address + store-hours text block | Visit Us | — |
| `ContactCTASection` | Large, dominant `CTAButtonGroup` framed as the primary contact path | Contact | — |
| `ContactForm` | Name/Email/Message fields (`Input`/`Textarea` + `Label` + `FieldError`), submit button with loading/success/failure states | Contact | Yes (via `Label`) |

---

## Radix-Dependent Components — Flagged

Per SRS §5, Radix primitives are used only where accessibility-critical interactivity requires them:

- `Dialog` → underlies `MobileNavMenu` (mobile nav) and `FilterDialog` (mobile filter sheet)
- `Select` / `DropdownMenu` → desktop `FilterBar` controls
- `Checkbox`, `RadioGroup` → filter options inside `FilterDialog`
- `Label` → every labeled form field (`ContactForm`, filter controls)

Every other component listed is a hand-built Tailwind component with no Radix dependency.

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial component inventory (issue #11): full ui/blocks split extracted from wireframes #4-#10, Radix dependencies flagged. |
