# mahlangu.dev

Personal site of **Sipho Omotola Mahlangu**: what I'm building now, and how to get in
touch. Senior full stack engineer working on event-driven backends and AI-native
systems, kept boring in production.

Not a CV site. The CV, letterhead, and the rest of the stationery suite live in the
brand kit as print-ready documents; the site is a now page plus a front door.

## Sections

- **Hero**: `~/$ whoami`, name, positioning line, signature statement
- **Now**: `~/$ cat now.md`, what I'm actively building and exploring
- **Projects**: featured work (BYO Pulse, uVelaphi, client builds) in a slider
- **Contact**: terminal-window email form, plus direct channels
- **Command palette**: keyboard navigation via Ctrl+K / Cmd+K

## Brand

The "Prompt" system: the wordmark is the site's shell header formalized
(`~/mahlangu.dev▮`), dark-only with a single teal accent. Tokens, motifs, and rules
in [docs/BRAND.md](docs/BRAND.md). Brand marks are generated assets in
`public/brand/` (outlined SVGs plus favicon tiles); the OG card artboard source lives
in the handoff kit.

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-variable tokens, single dark theme)
- **Framer Motion** (entrances, respects reduced motion)
- **cmdk** (command palette)
- **ZeptoMail** (contact form delivery, via `/api/contact`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build` must pass before pushing; CI runs the same build against PRs.

The contact form needs `ZEPTOMAIL_TOKEN` and `CONTACT_TO_ADDRESS` at runtime (Doppler
project `mahlangu-dev`); without them it returns a friendly 503 and the rest of the
site works normally. Umami analytics is injected at build time via
`NEXT_PUBLIC_UMAMI_WEBSITE_ID` and stays off in local dev.

## Hosting

Deployed on [Coolify](https://coolify.mahlangu.dev) (self-hosted), auto-deploying
from `master` (nixpacks: `npm ci`, `npm run build`, `npm run start`). Migrated
2026-07-19 from a DigitalOcean droplet; the old PM2/rsync deploy pipeline is gone.

## Contact

- **Email:** [omotola@afrogenitor.com](mailto:omotola@afrogenitor.com)
- **LinkedIn:** [sipho-mahlangu](https://www.linkedin.com/in/sipho-mahlangu/)
- **GitHub:** [@Psyfo](https://github.com/Psyfo)
