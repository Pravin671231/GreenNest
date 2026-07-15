# GreenNest — Wireframe: Contact

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2026-07-15

Low-fidelity wireframe for the Contact page (`/contact`), satisfying [`../issues.md`](../issues.md) #10. Covers every content block listed for Contact in [`../pages.md`](../pages.md), wrapped in the shared header/footer/container from [`../layout.md`](../layout.md), styled per [`../design.md`](../design.md). The optional form uses `react-hook-form` + `zod` client-side validation (SRS §5), posting to a third-party endpoint (SRS §2) — no custom backend.

---

## Desktop (`lg:` / ≥1024px)

```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo]   Home  Catalog  About  Blog  Visit Us  Contact  [Call][WhatsApp] │
├────────────────────────────────────────────────────────────────────┤
│  CONTACT US                                                           │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Prefer to talk? Reach us directly:                            │   │
│  │                                                                 │   │
│  │    [  📞  Call Us  ]      [  💬  WhatsApp Us  ]                │   │  ← DOMINANT: large,
│  │                                                                 │   │     high-contrast, first thing seen
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ─────────────────  or send us a message (optional)  ───────────────  │
│                                                                       │
│  Name *        [                              ]                      │
│  Email *       [                              ]                      │  ← visually smaller,
│  Message *     [                              ]                      │     secondary to CTAs above
│                [                              ]                      │
│                [        Send Message          ]                      │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                │
└────────────────────────────────────────────────────────────────────┘
```

## Mobile (below `md:` / <768px)

```
┌───────────────────────────┐
│ [Logo]      [WhatsApp][☰] │
├───────────────────────────┤
│ CONTACT US                  │
├───────────────────────────┤
│ Prefer to talk?              │
│ [  📞  Call Us  ]            │  ← DOMINANT, full-width,
│ [  💬  WhatsApp Us  ]         │     stacked, above the fold
├───────────────────────────┤
│ — or send a message —        │
│ Name *                       │
│ [___________________]        │
│ Email *                       │
│ [___________________]        │
│ Message *                     │
│ [___________________]        │
│ [___________________]        │
│ [    Send Message    ]        │
├───────────────────────────┤
│ FOOTER                        │
└───────────────────────────┘
```

---

## Form Validation / Error States

Client-side validation via `react-hook-form` + `zod` (SRS §5), validated on blur and on submit:

**Field-level error (e.g. invalid email):**
```
Email *
[ notanemail                    ]   ← red border (error #B91C1C, design.md)
⚠ Please enter a valid email address
```

**Required-field error (empty on submit):**
```
Name *
[                                ]   ← red border
⚠ This field is required
```

**Submitting state:**
```
[     Sending...     ]   ← button disabled, label swapped, prevents double-submit
```

**Success state (replaces the form after a successful post):**
```
┌──────────────────────────────┐
│ ✓ Thanks! We'll get back to   │
│   you soon.                   │
└──────────────────────────────┘
```

**Submission failure (third-party endpoint error):**
```
⚠ Something went wrong sending your message — please try Call or WhatsApp above, or try again.
```
Form fields and entered values are preserved on failure so nothing is lost.

---

## Content Block Coverage

- [x] Primary: `tel:` and WhatsApp click-to-chat links — dominant, above the form on both breakpoints
- [x] Secondary (optional) form — fields (name, email, message) with validation/error, submitting, success, and failure states

---

## Change Log

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-15 | Draft | Initial Contact wireframe (issue #10): dominant tel/WhatsApp CTAs, optional form with full validation/error state coverage, desktop + mobile. |
