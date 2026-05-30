# Project Overview

Uxpress is an MVP marketplace website for selling premium website templates and website kits to service professionals.

## Primary User Flow

1. User lands on `/`
2. User browses `/templates`
3. User opens `/templates/[slug]`
4. User clicks `Use This Template`
5. User lands on `/start?template=[slug]`
6. User submits the onboarding form
7. Lead is saved to `data/leads.json`
8. User is redirected to `/start/success`

## Business Owner Flow

1. Open `/admin/leads`
2. Review total leads, leads by template, and most requested template
3. Open a lead detail at `/admin/leads/[id]`
4. Export all leads from `/api/leads/export`

## Current MVP Boundaries

Included:

- Marketing pages
- Template pages
- Lead capture
- Local JSON storage
- Admin read view
- Export endpoint
- CI validation

Not included:

- Authentication
- Database
- Payments
- Dashboard
- CMS
- Visual editor
- Drag-and-drop builder
- Email automation

## Important Paths

```txt
app/page.tsx
app/templates/page.tsx
app/templates/[slug]/page.tsx
app/start/page.tsx
app/start/success/page.tsx
app/admin/leads/page.tsx
app/admin/leads/[id]/page.tsx
app/api/leads/route.ts
app/api/leads/export/route.ts
lib/templates.ts
lib/homepage.ts
lib/leads.ts
data/leads.json
```

