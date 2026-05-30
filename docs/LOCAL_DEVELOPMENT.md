# Local Development

## Requirements

- Node.js 22 recommended
- npm

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Default URL:

```txt
http://localhost:3000
```

If port 3000 is busy, Next.js will offer another port.

## Validate

```bash
npm run typecheck
npm run lint
npm run build
```

## Test The MVP Flow

1. Open `/`
2. Go to `/templates`
3. Open a template detail page
4. Click `Use This Template`
5. Submit `/start`
6. Confirm redirect to `/start/success`
7. Open `/admin/leads`
8. Open the new lead detail
9. Open `/api/leads/export`

## Reset Local Leads

To clear local leads during development, reset:

```json
[]
```

inside:

```txt
data/leads.json
```
