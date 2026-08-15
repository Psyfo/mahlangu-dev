# mahlangu.dev Brand: "Prompt"

The wordmark is the site's own shell header, formalized: `~/mahlangu.dev` with a block
cursor. One mode (dark), one accent, real terminal syntax only. This document is the
source of truth for the site and every derived surface (stationery, social, print).

Full design references live in the handoff kit (`mahlangu_dev_design_handoff_brand_kit`):
brand board, wordmark explorations, letterhead/quote, business card, CV, email
signature, and social artboards.

---

## 1) Wordmark

Form: `~/mahlangu.dev▮` set in JetBrains Mono.

- `~/` muted (dark: #66696D, print: #9B9E9F), weight 400
- `mahlangu` foreground (dark: #CDD2D6, print: #201F1F), weight 700
- `.dev` accent (dark: #44C3CF, light/print: #18585E), weight 700
- Cursor `▮`: accent-filled inline block, `width: 0.5em; height: 0.95em;
  margin-left: 0.16em; vertical-align: -0.1em`. Blinks on screen, static in print.

Glyph: `~/` weight 700 in accent, centered on a #201F1F rounded tile (radius ~23% of
tile size). At 16px, drop the slash; the tilde alone reads. Filled tile on light
surfaces, tile plus 1px border (#2c2c30) on dark.

Clear space: half a tile on all sides. Min sizes: wordmark >= 120px, glyph >= 16px.

Never: Title Case, ALL CAPS, gradients or effects, more than one accent per surface.
The old pen-nib "M" logo is retired everywhere.

Files (generated, in the repo):

- `/public/brand/logo-dark.svg`, `/public/brand/logo-light.svg` (outlined paths, no
  font dependency)
- `/public/brand/icon.svg` plus PNG tiles at 512/192/180/48/32/16
- `/src/app/favicon.ico` (16 is tilde-only), `/src/app/apple-icon.png` (full-bleed)
- `/public/images/og-card.png` (1200x630, per the Social Kit artboard)

---

## 2) Color

Dark is the only site mode. Light values exist for print and light surfaces
(letterhead, business card back, logo-light).

```css
--background:   #201F1F;  /* eerie-black */
--foreground:   #CDD2D6;  /* slate-gray-800 */
--accent:       #44C3CF;  /* midnight-green-700, dark surfaces */
--accent-print: #18585E;  /* midnight-green-500, light surfaces + print */
--accent-soft:  #0A2325;  /* dark; light contexts use #C1EBEF */
--border:       #27272A;
--bg-light:     #D9D9D5;  /* black-olive-900, print/light contexts only */
```

Rules:

- One accent per surface. Accent is for marks, links, and markers, not long text on
  light backgrounds.
- Body pairs #CDD2D6 on #201F1F and #201F1F on #D9D9D5 both pass AA.
- Full ramps (charcoal, raisin-black, black-olive, slate-gray, eerie-black,
  midnight-green) live in `src/styles/globals.css`.

---

## 3) Typography

- JetBrains Mono 400/700: the voice. Wordmark, UI, headings, labels.
- Fira Code 300/400/700: code samples and display numerals (ligatures welcome).
- Inter 400/700: long-form print body only (letterhead, CV paragraphs).

Scale: display 44-60/700 · section heading 24/700 with `// ` accent marker · body
14-16/400 with line-height 1.6 · caption 11-12.

Spacing scale 4/8/12/16/24/32/48/64. Radius: 4 (chips, buttons), 6-8 (cards), 10
(panels), ~23% (glyph tiles). Opacity steps via color-mix: 85/80/70/60/50/40/25/20%
of foreground.

---

## 4) Motifs: the brand's grammar

Budget: one prompt plus one cursor per surface, maximum.

- `~/$ command` prompt opens a surface or section (e.g. `~/$ whoami`, `~/$ cat now.md`)
- `// ` comment marker leads every heading
- `$ ` command marker leads list items
- `a | b | c` accent pipes separate parallel facts
- `statement▮` cursor ends a key statement
- 28px dot grid backdrop at 35% opacity (hero and cover surfaces)
- Terminal chrome: two dim dots then one accent dot, always that order
- Real terminal syntax only; nothing that would not parse

---

## 5) Voice

Precise, senior, understated. A person, not a company: first person, no "we".

- Lead with outcomes and scope, not tools.
- Active voice, short sentences, specific nouns: "high-throughput event pipelines",
  never "scalable solutions".
- Positioning line: Senior Full Stack Engineer | AI Engineering | Distributed Systems
- Signature sentence: "I design event-driven backends and AI-native systems, and I
  keep them boring in production."

---

## 6) Motion

- Cursor blink: `@keyframes blink { 0%, 55% { opacity: 1 } 56%, 100% { opacity: 0 } }`,
  1.1s `steps(1)` infinite. Screen only; static in print and exports.
- Entrances: fadeUp 24px, ease-out, 0.45-0.5s, staggered ~0.1s.
- Hover states: accent border plus 5% accent background tint.
- `prefers-reduced-motion` disables blink and entrances (CSS media query plus
  `MotionConfig reducedMotion="user"`).

---

## 7) SEO and social

- Title pattern: "Sipho Mahlangu · Senior Full Stack Engineer | AI & Distributed
  Systems"
- OG image: `/images/og-card.png` (1200x630), regenerate from the Social Kit artboard
  when positioning changes.
- Canonical: always `https://mahlangu.dev`.

---

## 8) Governance

- Source of truth: this document plus the handoff kit references.
- Visual changes land as PRs with screenshots.
- The stationery suite (letterhead, quote, business card, CV, email signature) derives
  from the same tokens; keep it in sync when tokens change.
