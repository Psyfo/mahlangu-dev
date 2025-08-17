# Mahlangu.dev Brand Guidelines

A concise, actionable reference for maintaining visual and verbal consistency across mahlangu.dev and related channels.

---

## 1) Brand Basics

- Brand name: Sipho Mahlangu
- Domain: <https://mahlangu.dev>
- Primary tagline: “Building digital experiences, one line at a time.”
- Secondary taglines:
  - “Crafting code for a connected world.”
  - “Turning ideas into interactive reality.”

Brand essence: precise, modern, trustworthy, human.

---

## 2) Voice and Tone

- Personality: clear, confident, helpful, humble.
- Voice principles:
  - Plain language (avoid jargon unless necessary).
  - Show outcomes and impact.
  - Active voice; short sentences.
- Tone by context:
  - Portfolio pages: inspiring, professional, concise.
  - Blog/notes: explanatory, curious, honest about trade-offs.
  - Social: approachable, respectful, short.
- Inclusive language:
  - Avoid assumptions; use gender-neutral phrasing.
  - Prefer “you” and “we” when appropriate.

Example bio (short):

- “Software developer building performant web apps and thoughtful developer tools.”

---

## 3) Messaging Pillars

- Craft: high-quality engineering, readability, and performance.
- Clarity: explain complex topics simply.
- Reliability: pragmatic solutions, measured results.
- Empathy: solutions shaped by user needs.

Elevator pitch (<= 30 words):

- “I design and build fast, accessible web experiences and developer tooling—turning ideas into resilient, scalable products.”

---

## 4) Logo and Marks

- Wordmark: “Mahlangu.dev” set in primary type (see Typography).
- Icon (optional): simple geometric M or angled chevron motif. Keep line thickness consistent with UI borders.
- Clear space: at least 1x the cap height around the mark.
- Minimum size:
  - Wordmark: ≥ 120px width on web.
  - Icon: ≥ 24px square.

Do

- Use single-color versions for simplicity.
- Keep contrast high against background.

Don’t

- Distort, rotate, or apply complex effects.
- Place on busy backgrounds without sufficient contrast.

File suggestions:

- /public/brand/logo-dark.svg
- /public/brand/logo-light.svg
- /public/brand/icon.svg

---

## 5) Color System

Semantic-first palette powered by CSS variables. Maintain WCAG AA contrast (≥ 4.5:1 for body text).

Core tokens (light theme):

- --color-background: #0b0f14
- --color-foreground: #e6eef5
- --color-accent: #0ea5a3
- --color-border: #21303a
- --color-muted: #9fb1bf

Core tokens (dark theme):

- --color-background: #0b0f14
- --color-foreground: #e6eef5
- --color-accent: #0ea5a3
- --color-border: #23323d
- --color-muted: #9fb1bf

Extended (optional):

- --midnight-green: #0f3b3b
- Success: #18a957
- Warning: #f59e0b
- Danger: #ef4444

Usage:

- Background surfaces: background
- Primary text: foreground
- Links/CTAs/highlights: accent
- Dividers: border
- Secondary text/icons: muted

---

## 6) Typography

Recommended stack:

- Display/Headings: Inter, Lexend, or Satoshi (600–800 weight)
- Body: Inter (400–500)
- Mono (code): JetBrains Mono or Fira Code

Scale:

- H1: 36–60px (clamp responsive)
- H2: 28–40px
- H3: 22–28px
- Body: 16–18px
- Caption: 12–14px

Guidelines:

- Line length ~60–80 chars for body.
- Line-height 1.4–1.6 for paragraphs.
- Use letter-spacing normal; avoid excessive tracking.

---

## 7) Layout and Spacing

- Grid: 12 columns; max content width ~1200–1280px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64.
- Section padding: 48–96px vertical on desktop; 32–64px on mobile.
- Keep consistent gutters; align to an 8px base.

---

## 8) Imagery and Motion

Hero motif:

- Right-half portrait image with a left-to-right gradient “shim” that decreases in intensity, blending into the page background.
- Soft entrance animations (ease-out, 450–900ms) for image and shim.

General imagery:

- Intentional, minimal, with generous negative space.
- Avoid busy backgrounds; maintain focus on the subject.
- Prefer neutral temperature with subtle accent reflections.

Motion:

- Purposeful and subtle; avoid distracting loops.
- Duration: 150–300ms for UI; 450–900ms for hero transitions.
- Easing: ease-out or custom cubic-bezier(0.16, 1, 0.3, 1).

---

## 9) Components (UI)

Buttons

- Primary: accent background, foreground text.
- Secondary: transparent background, accent text, border.
- Focus ring: 2px outline using accent at 50% opacity.

Inputs

- Border: 1px border color
- Background: background slightly elevated (use alpha or subtle tint)
- Focus: accent ring, no heavy glow

Cards

- Background: slightly raised over background (2–4 dp)
- Border: 1px border; hover: subtle shadow or border-accent-20

Links

- Default: accent text with underline on hover.
- Avoid only-color differentiation—use underline or weight.

---

## 10) Accessibility

- Color contrast: AA minimum; AAA where feasible for body text.
- Focus states: visible on keyboard navigation.
- Motion preferences: respect prefers-reduced-motion.
- Semantics: headings in order; landmarks (header, main, footer); aria-labels for interactive elements.

---

## 11) SEO and Social

Meta title pattern:

- “Sipho Mahlangu — Software Developer” or page-specific “{Page Title} — Mahlangu.dev”

Meta description (<= 160 chars):

- “Software developer crafting fast, accessible web apps and developer tools. Explore projects, articles, and contact.”

Open Graph/Twitter:

- og:title = page title
- og:description = meta description
- og:image = /images/og-default.jpg (1200x630)
- twitter:card = summary_large_image

Canonical:

- Always use <https://mahlangu.dev>

---

## 12) Content Examples

Headline examples:

- “Building digital experiences, one line at a time.”
- “From prototype to production—reliably.”

CTA examples:

- “View Projects”
- “Get in Touch”
- “Read the Notes”

Case study opener:

- “Reduced build time by 42% and improved LCP by 28% through code splitting and caching.”

---

## 13) Do/Don’t

Do

- Keep layouts spacious and typography legible.
- Use accent sparingly for hierarchy and actions.
- Maintain consistent border radii and spacing scale.

Don’t

- Overuse gradients; keep them functional (e.g., hero shim).
- Add multiple competing animations at once.
- Sacrifice contrast for aesthetics.

---

## 14) Implementation Tokens (CSS)

Use CSS variables to theme light/dark consistently.

```css
:root {
  --color-background: #f7fafc;
  --color-foreground: #0b0f14;
  --color-accent: #0ea5a3;
  --color-border: #d6e0e7;
  --color-muted: #5c6b76;
  --midnight-green: #0f3b3b;
}

[data-theme='dark'] {
  --color-background: #0b0f14;
  --color-foreground: #e6eef5;
  --color-accent: #0ea5a3;
  --color-border: #23323d;
  --color-muted: #9fb1bf;
  --midnight-green: #0f3b3b;
}
```

Example Tailwind utilities:

- Text: text-[var(--color-foreground)]
- Background: bg-[var(--color-background)]
- Accent: text-[var(--color-accent)] / bg-[var(--color-accent)]
- Border: border-[var(--color-border)]

Hero shim (concept):

- Full overlay on right-half image: bg-gradient-to-r from-[var(--color-background)]/95 to-transparent
- Animate width from 0% → 100% (ease-out, 0.9s)

---

## 15) Governance

- Source of truth: this document (version in repo).
- Review cycle: quarterly or when introducing major components.
- Change log: maintain PRs with screenshots for visual updates.

---

Questions or updates: open an issue in the repository and tag “brand”.
