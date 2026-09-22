# Vision Business Setup — Homepage

**Design reference:** Avantage Business (<https://avantage.bold-themes.com/business/>) —
used only for the visual language (typography, geometric shapes, angled
sections, image masks, hover states).
**Content source of truth:** `Website Content_Vision.docx`, extracted to
`Website-Content-Vision.txt` (body text, tables and the document's editorial
comments). Every user-facing string on the site is taken from that document —
verbatim where it provides a full sentence, otherwise assembled only from its
own headings and navigation labels. The exceptions are ordinary UI chrome (form
labels, buttons, breadcrumbs, legal links) and the contact placeholders below.

Stack: React 19 + Vite 8, plain CSS (no framework). One folder per component,
co-located `.css`. Content lives in `src/data/`, never inline in JSX.

## Design tokens

`src/styles/variables.css` — the single place the palette is defined.

The site is **monochrome**: black, white and grey only. Headings and accents are
`#000000`, body copy is black at reduced opacity, rules are hairlines, and
`#f5f5f5` carries any tonal band. Dark bands invert the same scale (white type
on black). Photographs and the logo keep their own colour; only the UI chrome is
monochrome.

| Token | Value | Used for |
|---|---|---|
| `--c-accent` / `--c-accent-dark` | `#000000` | primary, hover |
| `--c-accent-alt` / `--c-accent-light` | `#222222` / `#444444` | secondary steps |
| `--c-secondary` / `--c-navy-deep` / `--c-dark` | `#000000` | headings, dark grounds |
| `--c-body` | `rgba(0,0,0,.65)` | paragraphs |
| `--c-muted` | `rgba(0,0,0,.45)` | eyebrows, captions |
| `--c-border` / `--c-border-soft` | `rgba(0,0,0,.12)` / `.09` | hairlines |
| `--c-bg-sub` | `#f5f5f5` | tonal bands, row hover |

Token *names* still read as brand colours (`--c-accent`, `--c-navy-deep`) so no
component needed rewriting; every one now resolves to a step on the grey scale.

**The button.** There is exactly one, used for every labelled button on the
site — header CTA, hero, section CTAs, form submit, footer pair:

```css
display: inline-flex; align-items: center; justify-content: center;
gap: 0.6em; min-width: 160px; padding: 0.85em 2.5em;
font: 500 0.95rem/1.2 var(--font-base);
background: transparent; border: 1px solid; border-radius: 0;
transition: background-color 250ms, color 250ms, border-color 250ms;
```

Only the colour changes with the ground — black border/text on light, white on
dark — and hover fills with that same colour, inverting the label. Icons inside
a button must use `currentColor` so they flip with it. The one permitted
deviation is a pinned `height` where a button has to line up with form inputs
beside it (`.minimalContact__submitBtn`); padding and type stay the same.

Icon-only controls are *not* buttons in this sense: the carousel arrows
(`.cvNavBtn`), the floating WhatsApp tile and the footer's back-to-top keep
their own compact sizing.

**Other shared patterns.** Cards are white with a `rgba(0,0,0,.09)` hairline and
square corners. Index labels (`01`, `02`, …) are `11px / 600 / .12em` uppercase
at `rgba(0,0,0,.55)`. On dark grounds these invert to the white scale.

Typography is unchanged: body `Sarabun`, headings `Roboto Condensed`,
eyebrows `Roboto`; boxed widths 1200 / 1400px; spacing scale 2em / 5em / 8.75em.

## Homepage section order

`src/pages/Home.jsx`

| # | Component | Source of design | Content |
|---|---|---|---|
| 1 | `HeroSlider` | Avantage hero slider | 3 slides — "Every Business starts with Vision" |
| 2 | `BusinessSetup` | 3 overlapping cards | UAE Mainland / Free Zone / Offshore |
| 3 | `OurStory` | 2-col "experience" | Why Vision / Our Story (est. 2015) + 3 medallions |
| 4 | `WhatSetsUsApart` | borderless service grid | 4 differentiators |
| 5 | `WhoWeWorkWith` | triangular portfolio tiles | 5 documented industries |
| 6 | `OurServices` | icon card grid | Licence / Visa / Finance & Banking / Other |
| 7 | `Commitment` | left-boxed content + photo | Our Approach / Commitment |
| 8 | `Founder` | new — navy monogram card | Viekram Sadwani |
| 9 | `CoreValues` | dark teal band + edge coverage | 7 core values |
| 10 | `CtaBanner` | 1400-wide teal box | strong CTA |
| 11 | `CallbackForm` | new — navy panel + form card | Request a Callback (frontend-only) |

Chrome: `Header` (sticky, phone button, Business Setup + Our Services
dropdowns, Contact Us, mobile panel), `Footer` (brand + quick links + contact),
`WhatsApp` (floating "Chat Now", fixed).

## Contact details

**All contact values are placeholders** in `src/config/contact.js` — the source
document contains none. Replace `phoneDisplay` / `phoneHref` / `whatsappNumber`
(and optionally `email`) before launch. `whatsappNumber` is digits only in
international format.

## Navigation

`src/data/site.js` → `mainMenu`. Three-level tree:

- **Business Setup** → UAE Mainland · UAE Free Zone · UAE Offshore
- **Our Services** → Licence · Visa · Finance & Banking · Other (each with a
  third-level flyout of sub-services)
- **Contact Us**

**Business Setup** links to the three jurisdiction pages; **Our Services** links to
the dedicated `/services` page with deep-anchor support for all categories and
individual services; the remaining items are on-page anchors or routes (`/about`, `/contact`).

## Pages

| Route | Component | Content |
|---|---|---|
| `/` | `pages/Home.jsx` | homepage sections, table above |
| `/about` | `pages/AboutUs.jsx` | doc "About Us" + Founder / Core Values / Commitment |
| `/services` | `pages/Services.jsx` | All 4 categories & 19 UAE corporate services + inquiry form |
| `/services/:slug` | `pages/ServiceDetail.jsx` | Dedicated separate page for each of the 19 UAE corporate services |
| `/contact` | `pages/Contact.jsx` | `CallbackForm` + `GetInTouch` |
| `/business-setup/uae-mainland` | `pages/Jurisdiction.jsx` | doc "UAE Mainland" |
| `/business-setup/uae-free-zone` | `pages/Jurisdiction.jsx` | doc "UAE Free Zone" |
| `/business-setup/uae-offshore` | `pages/Jurisdiction.jsx` | doc "UAE Offshore" |

### Business Setup inner pages

One renderer (`pages/Jurisdiction.jsx` + `Jurisdiction.css`) drives all three,
fed by `src/data/jurisdictions.js` — a verbatim transcription of the document's
three jurisdiction chapters. Section order: hero (breadcrumb + intro) → "What is
a … Company?" beside the key-advantages panel → "Our … Services Include" card
grid → "Our Approach" navy band (plus "Why Choose Vision Business Setup" on
Offshore only) → closing CTA. Sections the document does not provide are not
rendered: Free Zone has no closing CTA, and only Offshore has a "Why Choose"
list. The visual language matches `AboutUs.css` (navy gradient hero, gold
accents, 1240px container); no existing selector is redefined.

## Kept UI primitives

`src/components/ui/` — `Icon` (SVG sprite `public/icons.svg`), `IconWidget`
(top bar). `Section` / `Headline` / `Button` / `Counter` remain as generic
primitives for the future inner pages but are unused on the homepage.

## Reveal / animation hooks

`src/hooks/` — `useStickyHeader`, `useMediaQuery`, `useInView` (drives the
Our Story medallion rings).
