# Deployment

## Recommended Platform

Use Vercel for the MVP.

## Vercel Settings

Project root:

```txt
.
```

Install command:

```bash
npm ci
```

Build command:

```bash
npm run build
```

Output directory:

```txt
.next
```

## Environment Variables

Add production values for:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_LEMON_SQUEEZY_BUSINESS_COACH_URL
NEXT_PUBLIC_LEMON_SQUEEZY_EXECUTIVE_CONSULTANT_URL
NEXT_PUBLIC_LEMON_SQUEEZY_PERSONAL_BRAND_URL
NEXT_PUBLIC_TALLY_INSTALLATION_FORM_URL
CONTACT_FORM_ENDPOINT
```

## Local JSON Storage Caveat

`data/leads.json` works locally. On serverless hosting, file writes may not persist reliably. Treat this as MVP1 validation only.

Before sending paid traffic, upgrade lead persistence to a database or external form backend.

## Pre-Deploy Checklist

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Confirm template detail pages work
- Submit a test lead
- Confirm `/admin/leads` shows the test lead
- Confirm `/api/leads/export` downloads JSON
