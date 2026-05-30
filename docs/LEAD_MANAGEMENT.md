# Lead Management

## Storage

Leads are stored in:

```txt
data/leads.json
```

Each submitted lead is appended as:

```ts
{
  id: string
  submittedAt: string
  fullName: string
  email: string
  businessName: string
  businessType: string
  websiteGoal: string
  whatsapp?: string
  instagram?: string
  selectedTemplate?: string
}
```

## API

Submit a lead:

```txt
POST /api/leads
```

Export leads:

```txt
GET /api/leads/export
```

## Admin Pages

Lead list:

```txt
/admin/leads
```

Lead detail:

```txt
/admin/leads/[id]
```

## MVP Warning

Local JSON storage is useful for MVP1 development and demos. It is not safe as a long-term production data store because serverless deployments may use ephemeral filesystems.

Recommended next upgrade:

1. Keep the same form and API contract.
2. Replace `lib/leads.ts` persistence with a real database.
3. Add authentication to `/admin`.
4. Add email notification after lead submission.

