---
name: studio-browne-design
description: Use this skill to generate well-branded interfaces and assets for Studio Browne, a warm, material-led interior design studio in Beverly Hills — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

> **Note.** This file describes the standalone project's layout. The project has since been carried into a Design System artifact, where the paths differ — see the "Migrated from a legacy design system" section of `project/README.md` for the mapping.

## Where things are
- `styles.css` — link this one file to receive all tokens + webfonts.
- `readme.md` — brand context, content voice, visual foundations, iconography, full manifest.
- `tokens/` — colors, typography, spacing, effects (CSS custom properties).
- `components/` — React primitives (Button, Logo, LogoLoader, CornerFrame, Eyebrow, PullQuote, Divider, Input, Tag, ProjectCard, Polaroid). Each has a `.d.ts` + `.prompt.md`.
- `ui_kits/website-fresh/` — full studio-browne.com recreation to copy patterns from.
- `assets/` — the brushstroke SB logo, interior imagery, founder headshot, the Manofa font.

## Non-negotiables
- Warm, desaturated earth palette + full-viewport color-block panels. The six raw client colors are coffee (`#594C40`), camel (`#B59E7D`), sand (`#CDC0A7`), taupe (`#ABA496`), charcoal (`#413F3E`) and espresso (`#3A2D22`). Sand is the primary page ground; charcoal is the ink; espresso is the dark panels and corner letters, never pure black; camel is the single accent and the contact/footer panel. Scroll rhythm alternates sand → taupe → camel → espresso. No bright hues — the system is low-chroma and warm throughout.
- The older names — porcelain, terracotta, periwinkle, oxblood, clay, sage, olive — are **legacy aliases** that now resolve onto the six colors above (see `tokens/colors.css`). They still work in existing components; do not treat them as separate hues, and prefer the raw or semantic names in new work.
- Signature layout: the `CornerFrame` shell (fixed serif S / B corners + brushstroke mark + vertical STUDIO / WORK nav) over scrolling panels; imagery in `Polaroid` frames.
- Three type voices: **Manofa Condensed** for headings and titles (`--font-title`, the uploaded house face), **Sorts Mill Goudy** for editorial serif headlines and pull quotes (`--font-serif`), **Mulish** for body copy, labels and UI (`--font-sans`). **Jost** is retained as the Futura substitute for the wordmark only (`--font-display`); **Homer** / Caveat carry handwritten accents (`--font-hand`).
- Generous whitespace; near-square corners; the arch motif on imagery; soft warm shadows tinted with espresso, never cool grey.
- Near-iconless — arrows and Lucide 1.5px stroke only. No emoji.
- Never redraw or recolor the brushstroke SB mark beyond the provided light version.

## Project identity
Project identity is anchored to the **exterior photo**, never the title text. The white Spanish-Colonial house is always **Robertson** (Beverly Hills, CA · 2025). The brown shingle-faced house is always **Vallejo** (Pacific Heights, SF · 2020). When a card or link is wrong, fix the `?p=` slug and meta to match the building shown — do not swap the visible title text back and forth. Image filenames and `image-slot` ids follow the same rule: `work-vallejo.webp` holds the shingle house, `work-robertson.webp` the white house.
