# Studio Browne — Design System

Warm, material-led interiors for high-end residential clients.

**Studio Browne** is a full-service interior design practice based in **Beverly Hills, CA**, founded and led by principal, designer & digital artist **Matt Browne**. The studio works on high-end warm-modernist residential interiors for clients from **Los Angeles to Hawaii** — space planning, sourcing, custom millwork, on-site styling — with an early, fluent command of AI-assisted photorealistic rendering. The aesthetic is a warm, sunlit, organic modernism: limewash plaster, solid walnut, reclaimed stone, olive velvet, unlacquered brass, and light treated as a material.

This design system captures that identity as reusable tokens, components, foundation specimens and a full website UI kit so any designer or agent can produce on-brand Studio Browne work.

---

## Sources provided

- `assets/logo-mark.png` — the real hand-drawn brushstroke **SB monogram** (from `LOGOBWCLEAR.png`). `logo-mark-light.png` is a programmatically recolored alabaster version for dark grounds.
- Interior renders (client's own): `project-bath.png`, `project-dining.png`, `project-dining-warm.jpeg`, `project-lounge.png`, `project-living.png`.
- `assets/founder-headshot.jpg` — Matt Browne portrait.
- `assets/images/texture-plaster.jpg` — a warm plaster/wall texture (Unsplash, Tim Mossholder).
- `assets/fonts/manofa-condensed.ttf` — the uploaded house display face, **Manofa Condensed** (secondary; `--font-manofa`).
- Bio / experience copy from the founder's résumé (see CONTENT FUNDAMENTALS).

> ⚠️ **Font note.** The house pairing is **Futura + Baskerville**. Futura is not web-licensed for free, so it is served here as **Jost** (the standard open Futura substitute); the serif is **Libre Baskerville**. The uploaded **Manofa Condensed** remains available as a secondary house display face via `--font-manofa`. Palette values are drawn from the interior imagery in the brand portfolio PDF — send exact hex specs if you have them and I'll lock them in.

---

## CONTENT FUNDAMENTALS

**Voice.** Quiet, confident, editorial — a gallery label, not an ad. Short declarative sentences. Never breathless, never salesy. The studio speaks as **"we"**; the client is **"you"** only lightly. Restraint is the whole brand: say less.

**Tone examples (use these as models):**
- Hero: *"Interior Design — Beverly Hills"* (concrete over vague)
- Statement: *"A home that feels inevitable."*
- Philosophy: *"We design the way light moves through a room before we choose a single object."*
- Testimonial: *"They understood the house before we did."*
- CTA: *"Let's begin your home."* / *"Book a consultation."*

**Casing.**
- **Manofa display** and **eyebrow labels** are always UPPERCASE with wide tracking (`--ls-label`, 0.22em).
- **Serif headlines** are sentence case ("Recent projects"), often with a single italicized word in clay for emphasis.
- Body copy is sentence case, generous line-height.

**Numbers & lists.** Service and section indices use two-digit figures in Manofa clay (`01`, `02`, `03`).

**Emoji:** never. **Exclamation points:** essentially never (one warm "Let's begin your home." is the ceiling). **Jargon:** minimal — real materials named plainly (limewash, walnut, unlacquered brass, reclaimed stone).

---

## VISUAL FOUNDATIONS

**Palette.** Warm, desaturated earth neutrals (client palette). The primary ground is **sand** (`#CDC0A7`); text/ink is **charcoal** (`#413F3E`) with **coffee** (`#594C40`) as secondary. Scroll rhythm alternates solid panels: **sand → taupe (`#ABA496`) → camel (`#B59E7D`, the contact/footer panel) → espresso (`#3A2D22`, dark panels + corner letters)**. **Camel** doubles as the single accent. No bright hues — the whole system is low-chroma and warm.

**The corner frame.** The site's signature structure: large serif brand letters (**S** top-left, **B** top-right) pinned to the viewport corners, the brushstroke **mark bottom-left**, a stacked **BEVERLY HILLS** caps label bottom-right, and vertical **STUDIO / WORK** labels mid-edge as the only navigation. The frame is fixed; content scrolls through the color panels behind it. Corner glyphs switch between oxblood (`tone="ink"`) and porcelain (`tone="light"`) based on the panel currently under the top edge.

**Typography.** A **Futura + Baskerville** pairing, three registers:
- **Futura (display)** — served as **Jost**. Uppercase, geometric, wide-tracked. Hero statements, the wordmark, eyebrows, buttons, section numbers.
- **Baskerville (serif)** — served as **Libre Baskerville**. Editorial headlines, pull quotes, project titles, italic accents. Carries the "luxury" register.
- **Futura (body/UI)** — Jost again, at text sizes for body copy, captions and labels.

The uploaded **Manofa Condensed** stays on hand as a secondary house display face (`--font-manofa`). Headlines run light and large with tight leading; body is quiet and roomy.

**Spacing & layout.** 4px base, but the brand's real signature is **generous whitespace** — most content is centered in a narrow measure inside a **full-viewport panel** (`min-height: 100vh`), one idea per screen. Detail pages use editorial two-column splits (stats left, serif body right). Portrait-heavy imagery throughout.

**Backgrounds.** Solid warm color-block panels (see Palette) are the primary device, punctuated by occasional **full-bleed photography** heroes with a soft top→bottom oxblood protection gradient for legible overlaid type. No patterns, no noise, no purple gradients.

**Imagery.** Warm, sunlit, material-forward interiors, usually presented in the **Polaroid** instant-film frame (thick white border, deep bottom lip, warm shadow, slight tilt, caps caption) — or full-bleed for heroes. A whisper of processing only (`--img-filter`). Portrait crops (4:5, 3:4) dominate. *(All demo imagery is warm placeholder frames; the studio supplies its own owned photography.)*

**Corners & the arch.** Chrome is near-square (radii 0–4px) — softness comes from imagery and light, not rounded boxes. The one expressive shape is the **architectural arch** (`--radius-arch`): a half-round top on select images and the founder portrait, echoing the Spanish-Colonial arches in the work. Pills are reserved for tags and buttons.

**Borders.** Hairlines only, warm and translucent (`--line`, ink at 14% alpha) — dividers, input underlines, tag outlines. On dark grounds use `--line-on-dark`.

**Shadows.** Soft, warm, low — tinted with espresso, as if cast by afternoon sun (`--shadow-sm/md/lg`). Never a hard cool-grey drop shadow. Most surfaces rely on a hairline (`--shadow-inset`) rather than elevation.

**Motion.** Slow and gallery-like (`--ease-soft`, durations 180/320/600ms). Signature interaction: images **warm and scale up ~4% slowly** on hover (`ProjectCard`). The corner-frame glyphs cross-fade oxblood↔porcelain as panels scroll past. No bounces, no spins, no parallax gimmicks. Respect reduced-motion.

**Hover / press states.** Links shift to **clay** on hover. Buttons darken/shift fill subtly. No shrink-on-press; interactions stay calm.

**Transparency & blur.** Used once, deliberately: the sticky nav becomes a frosted `rgba(244,238,228,0.82)` + backdrop-blur after scroll. Otherwise surfaces are opaque.

---

## ICONOGRAPHY

Studio Browne is **near-iconless by design** — the brand leans on type, whitespace and photography, not UI glyphs. Where a glyph is unavoidable it is a **thin (1.5px) monoline stroke** on a 24px grid, matching **Lucide** geometry.

- **Directional arrows** (`→`, `↗`, `←`) are the primary "icon" — used for "All work →", "Read more →", project links.
- The only chrome glyphs: menu, close, plus, and social (Instagram). These live in `ui_kits/website-fresh/Icons.jsx` as minimal inline SVGs.
- **Lucide** (via CDN — `unpkg.com/lucide-static`) is the **sanctioned set** for any broader need; match the 1.5px stroke. Do not mix icon families.
- **No emoji. No unicode-symbol icons. No filled/duotone icons.** No hand-drawn one-offs beyond the arrow set.
- The **brushstroke SB mark** is an identity asset, not an icon — never redraw, recolor (beyond the provided light version), or substitute it.

---

## Index / Manifest

**Root**
- `styles.css` — global entry; `@import`s every token + font file. Consumers link this one file.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`assets/`** — `logo-mark.png`, `logo-mark-light.png`, `founder-headshot.jpg`, `fonts/manofa-condensed.ttf`, `images/` (interior renders + plaster texture).

**Components** (namespace `window.StudioBrowneDesignSystem_6dac50`)
- `Button` (`components/core/`) — ink / clay / outline / ghost, three sizes.
- `Logo` (`components/brand/`) — brushstroke mark, wordmark, lockup; ink/light tones.
- `LogoLoader` (`components/brand/`) — animated loading overlay: the brushstroke mark draws itself on, holds, then fades away; transparent/sand/espresso/camel grounds.
- `CornerFrame` (`components/layout/`) — the signature fixed serif-corner page shell (S / B + mark + STUDIO / WORK).
- `Eyebrow`, `PullQuote`, `Divider` (`components/editorial/`) — the editorial voice.
- `Input`, `Tag` (`components/forms/`) — underline field, caps chip/filter.
- `ProjectCard`, `Polaroid` (`components/content/`) — the portfolio card and the instant-film image frame.

**UI kits**
- `ui_kits/website-fresh/` — **studio-browne.com** recreation: Home, Work, Project, Studio, Services, Journal, Contact (+ Nav, Footer, Data, Icons). See its `README.md`.

**Foundation cards** (`guidelines/`) — Colors (neutrals / warm / ink), Type (display / serif / sans / scale), Spacing (scale / radii), Brand (mark / imagery / elevation). These populate the Design System tab.

### Intentional additions
No source defined a component inventory (Studio Browne is a design practice, not a software product), so a small brand-appropriate set was authored from scratch: the signature layout shell (`CornerFrame`), an editorial/marketing kit (Logo, Eyebrow, PullQuote, Divider, ProjectCard, Polaroid) plus minimal interactive primitives (Button, Input, Tag). No Toast/Tabs/Dialog/etc. — they have no home in this brand's surfaces.


## Starters

In the standalone version, this design system came with 9 starter template(s). Each is a small project of its own, not a part of the design system the page shows; its files are kept in this artifact as they were, under its folder, for a later migration of its own.

- **Contact / Inquire** — Studio Browne — inquiry route with understated underline form on greige panel (6 files, entry `templates/contact/Contact.dc.html`)
- **Filbert project detail** — Studio Browne — Filbert project page, extra landscape bands for wide shots (4 files, entry `templates/filbert/Filbert.dc.html`)
- **Homepage** — Studio Browne home — hero clip, editable statement panels, project splits, contact (5 files, entry `templates/homepage/Homepage.dc.html`)
- **Jackson project detail** — Studio Browne — Jackson project page, alternating photo/text rows with placeholder copy (4 files, entry `templates/jackson/Jackson.dc.html`)
- **Project detail** — Studio Browne project page — warm editorial, alternating photo/text rows, gentle fade-up on scroll (4 files, entry `templates/project/Project.dc.html`)
- **Robertson project detail** — Studio Browne — Robertson project page, alternating photo/text rows with dedicated image slots (4 files, entry `templates/robertson/Robertson.dc.html`)
- **Studio / About** — Studio Browne — about Matt Browne: intro, oxblood principal panel, experience & capabilities (3 files, entry `templates/studio/Studio.dc.html`)
- **Vallejo project detail** — Studio Browne — Vallejo project page, alternating photo/text rows with dedicated image slots (4 files, entry `templates/vallejo/Vallejo.dc.html`)
- **Work index** — Studio Browne selected-work — numbered editorial index with filters & sort (4 files, entry `templates/work/Work.dc.html`)

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-17. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `components/brand/logo.card.html` → `project/components/Logo2/preview.html`; `components/brand/logoloader.card.html` → `project/components/Logoloader/preview.html`; `components/content/polaroid.card.html` → `project/components/Polaroid2/preview.html`; `components/content/projectcard.card.html` → `project/components/Projectcard/preview.html`; `components/core/buttons.card.html` → `project/components/Buttons/preview.html`; `components/editorial/editorial.card.html` → `project/components/Editorial/preview.html`; `components/forms/forms.card.html` → `project/components/Forms/preview.html`; `components/layout/cornerframe.card.html` → `project/components/Cornerframe/preview.html`; `ui_kits/website-fresh/index.html` → `project/components/Index/preview.html`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

If the text above differs on what to load or read, follow this section.

`components/bundle.js` defines `window.StudioBrowneDesignSystem_6dac50` (11 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. The bundle needs `components/lib/react.production.min.js` (`window.React`), `components/lib/react-dom.production.min.js` (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (refuse any file containing `</style`, `</script` or `<!--`).
- **Design canvas:** bring `components/bundle.js`, `components/bundle.css` onto the canvas unread, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="StudioBrowneDesignSystem_6dac50.<Name>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens only — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers.

Fonts: one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`) and upload it as an asset where you use it (`publish`, `file_path`, `asset:true`) — HTML/CSS: an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule; a Slides deck: write `fonts/<id>` = `{"family":"<family>","src":"<the url the upload returned>"}`.

| family | file | fetch | CSS | Slides `fonts/<id>` |
| --- | --- | --- | --- | --- |
| Manofa | `fonts/manofa-condensed.ttf` (weight 400 700) | `read fonts/manofa-condensed.ttf` | `var(--font-title)` | `manofa` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Name>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over unread. `components/<Name>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, palette, type, spacing, radius, shadow, motion, other, font-weight, line-height, letter-spacing. (7.4k)

**Icons and assets**

- `api/assets/Logos.md` — 6 files, by asset id. (1.1k)
- `api/assets/Uploads.md` — 2 files, by asset id. (0.9k)
- `api/assets/export.md` — 11 files, by asset id. (1.6k)
- `api/assets/Other.md` — 1 file, by asset id. (0.7k)
- `api/assets/images.md` — 50 files, by asset id. (5.0k)
- `api/assets/screenshots.md` — 1 file, by asset id. (0.7k)
- `api/assets/site-flat.md` — 32 files, by asset id. (3.4k)
- `api/assets/site-lite.md` — 16 files, by asset id. (2.2k)
- `api/assets/site.md` — 18 files, by asset id. (2.3k)
- `api/assets/templates.md` — 1 file, by asset id. (0.8k)
- `api/assets/video.md` — 3 files, by asset id. (0.9k)

**Components** (`api/components/<Name>.md`, 20; 9 of them showcase pages)

- `Logo` — Logo — the Studio Browne identity: a hand-drawn brushstroke SB monogram paired with the Manofa wordmark · `LogoLoader` — claude this is the logo overlay i want to use for the intro / loading /landing page to my homepage · `Polaroid` — Polaroid — the studio's instant-film image frame: thick white border, deep bottom lip, soft warm shadow, optional tilt and caps caption · `ProjectCard` — ProjectCard — the portfolio unit · `Button` — Button — the studio's primary action control; uppercase, letter-spaced, near-square corners · `Divider` — Divider — warm hairline rule · `Eyebrow` — Eyebrow — the wide, letter-spaced caps label that precedes headlines and names sections (e.g · `PullQuote` — PullQuote — oversized light-serif quotation with clay quote marks, for client testimonials and studio philosophy statements · `Input` — Input — a bare underline field (no box), serif value, caps label · `Tag` — Tag — caps chip for project categories, services and filter rows. pill is bordered; bare is a plain label · `CornerFrame` — CornerFrame — the studio's signature page shell
- **Components**: `Buttons` (showcase page) — Ink, clay, outline & ghost — three sizes · `Cornerframe` (showcase page) — Cornerframe · `Editorial` (showcase page) — Eyebrow, pull quote & divider · `Forms` (showcase page) — Underline fields and caps chips · `Logo2` (showcase page) — Brushstroke mark, wordmark & lockup · `Logoloader` (showcase page) — Logoloader · `Polaroid2` (showcase page) — Instant-film image frame with caption & tilt · `Projectcard` (showcase page) — Projectcard
- **Website**: `Index` (showcase page) — Corner-frame site — panels, polaroids, warm color blocks
