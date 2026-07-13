# Rongali Chaitanya Portfolio

Production portfolio for [rongalichaitanya.com](https://www.rongalichaitanya.com), focused on Python automation, practical AI integration, and business workflow tools.

## What the site includes

- Client-focused service positioning and engagement packages
- Five interactive browser prototypes using safe sample data
- Transparent separation between each prototype implementation and its production architecture
- Project finder for routing visitors to the most relevant workflow
- Project-specific metadata, canonical URLs, sitemap, robots.txt, manifest, and social cards
- Responsive layouts, keyboard focus states, reduced-motion support, and semantic content structure

## Prototype policy

The interactive project pages are product prototypes, not connected production systems. Each page states:

- what runs in the browser today
- what the workflow demonstrates
- which Python, AI, API, or data services would be used in a production client build

This keeps the public demonstrations safe and makes the implementation boundary clear to prospective clients.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS
- Vercel

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
pnpm lint
pnpm build
```

## Key routes

- `/` — portfolio and services
- `/projects/ai-support-chatbot`
- `/projects/invoice-report-automation`
- `/projects/lead-intelligence-dashboard`
- `/projects/document-resume-analyzer`
- `/projects/ai-content-workspace`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`

## Deployment

The production site is deployed through Vercel from GitHub. Use Vercel's detected Next.js settings and assign both the apex and `www` domains, with one configured as the canonical redirect target.
