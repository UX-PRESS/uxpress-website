# Uxpress Site

Official MVP website for Uxpress, a marketplace for premium website templates and complete website kits for coaches, consultants, mentors, freelancers, and service businesses.

## What Exists

- Premium landing page at `/`
- Templates listing at `/templates`
- Dynamic template detail pages at `/templates/[slug]`
- Onboarding form at `/start?template=[slug]`
- Success page at `/start/success`
- Local lead capture API at `/api/leads`
- Admin leads page at `/admin/leads`
- Lead detail page at `/admin/leads/[id]`
- JSON export at `/api/leads/export`

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Server Components where possible
- Local JSON lead storage for MVP1

## Quick Start

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Quality Checks

Run these before pushing:

```bash
npm run typecheck
npm run lint
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` when real links are available:

```bash
cp .env.example .env.local
```

Current variables:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_LEMON_SQUEEZY_BUSINESS_COACH_URL
NEXT_PUBLIC_LEMON_SQUEEZY_EXECUTIVE_CONSULTANT_URL
NEXT_PUBLIC_LEMON_SQUEEZY_PERSONAL_BRAND_URL
NEXT_PUBLIC_TALLY_INSTALLATION_FORM_URL
CONTACT_FORM_ENDPOINT
```

## Lead Storage

MVP1 stores leads locally in:

```txt
data/leads.json
```

This is intentionally low-budget and development-friendly. It is not a long-term production database. See [Lead Management](./docs/LEAD_MANAGEMENT.md).

## Deployment

Recommended MVP deployment target: Vercel.

Use the repository root as the project root in Vercel:

```txt
.
```

Build command:

```bash
npm run build
```

Install command:

```bash
npm ci
```

Output directory:

```txt
.next
```

See [Deployment](./docs/DEPLOYMENT.md) and [CI/CD](./docs/CI_CD.md).
