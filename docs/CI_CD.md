# CI/CD

## GitHub Actions

Workflow:

```txt
.github/workflows/uxpress-site-ci.yml
```

The workflow runs when application, documentation, or CI files change.

## CI Steps

1. Checkout repository
2. Setup Node.js 22
3. Install dependencies with `npm ci`
4. Run TypeScript validation
5. Run ESLint
6. Run production build

## CD Recommendation

Use Vercel Git integration for deployment:

1. Import the GitHub repository in Vercel.
2. Set root directory to the repository root.
3. Add environment variables.
4. Let Vercel deploy previews for pull requests and production on `main`.

This keeps the infrastructure low-cost and avoids custom deployment scripts while the product is still in MVP stage.
