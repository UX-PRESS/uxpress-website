# Portfolio Website Objective

## Primary objective

The Uxpress website must help service professionals quickly understand the value of premium website kits and move from interest to a qualified launch request.

The website is not only a visual portfolio or template gallery. It is a conversion-focused product site whose job is to:

1. Explain why Uxpress is a faster and more focused alternative to starting from zero.
2. Help visitors identify the template that fits their business, audience, and offer.
3. Capture enough business context to support the next step in the launch process.
4. Give the business owner a clear record of demand by template and customer type.

## Primary conversion action

**Primary CTA:** `Use This Template`

The primary conversion action is completed when a visitor submits the onboarding form after selecting a template.

Expected path:

```txt
Homepage -> Templates -> Template detail -> Start form -> Lead submission -> Success page
```

The lead submission is the main conversion event because it captures both contact information and purchase intent. A page view or button click is an engagement signal, but it is not a completed conversion.

## Secondary actions

Secondary actions support the primary conversion without competing with it:

- `Browse Templates` - moves homepage visitors into product discovery.
- `Preview` - helps visitors evaluate a template before committing.
- `See How It Works` - reduces uncertainty about the process.
- `Request Installation` - supports visitors who want assisted setup.
- Checkout links - support direct template purchase when payment URLs are configured.
- WhatsApp, Instagram, or contact links - provide alternative contact paths when available.

## Target audience

The website is designed for three broad audience segments:

- **Small to Medium Businesses (SMBs)** - They need functional, professional, and good-looking websites that do not break the bank.
- **Creative Professionals (Artists, Influencers, Freelancers)** - They want personality-driven sites that showcase their brand identity.
- **Anyone Sick of Bad Websites** - If they have ever screamed at a confusing website, they are our people.

## Core visitor promise

> Launch a credible, conversion-ready professional website in days instead of spending weeks or months managing a custom website project.

This promise should be visible in the homepage hero, reinforced in the template catalog, and proven through the template details and onboarding flow.

## Success metrics

The first measurement period should track:

| Metric | Definition |
|---|---|
| Template discovery rate | Percentage of homepage visitors who open the template catalog |
| Template interest rate | Percentage of catalog visitors who open a template detail page |
| Primary CTA rate | Percentage of detail-page visitors who click `Use This Template` |
| Form completion rate | Percentage of onboarding visitors who submit the form |
| Lead conversion rate | Submitted leads divided by unique website visitors |
| Installation demand | Leads that request or select installation support |
| Template demand | Number of leads grouped by selected template |

## Conversion event definition

Record a conversion only after the `/api/leads` request succeeds and the user is redirected to `/start/success`.

At minimum, the event should include:

- Selected template
- Business type
- Submission timestamp
- Lead source, once analytics tracking is available

## Non-goals for the MVP

The website does not need to become a full website builder or customer portal in this phase. The following are outside the initial objective:

- Visual drag-and-drop editing
- CMS functionality
- Customer authentication
- Automated email journeys
- Production-grade lead database
- Advanced analytics dashboard

These features may support future growth, but they should not distract from validating the primary conversion path: template discovery to qualified lead submission.
