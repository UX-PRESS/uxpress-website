export const site = {
  name: "Uxpress",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uxpress.example",
  supportEmail: "hello@uxpress.com",
  tallyInstallationFormUrl:
    process.env.NEXT_PUBLIC_TALLY_INSTALLATION_FORM_URL ?? "TALLY_INSTALLATION_FORM_URL"
};

export const checkoutLinks = {
  businessCoach:
    process.env.NEXT_PUBLIC_LEMON_SQUEEZY_BUSINESS_COACH_URL ?? "LEMON_SQUEEZY_BUSINESS_COACH_URL",
  executiveConsultant:
    process.env.NEXT_PUBLIC_LEMON_SQUEEZY_EXECUTIVE_CONSULTANT_URL ??
    "LEMON_SQUEEZY_EXECUTIVE_CONSULTANT_URL",
  personalBrand:
    process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PERSONAL_BRAND_URL ?? "LEMON_SQUEEZY_PERSONAL_BRAND_URL"
};

