"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { TemplateMockup } from "@/components/TemplateMockup";
import type { Template } from "@/lib/templates";
import { localize, t } from "@/lib/i18n";

export function TemplateCard({ template }: { template: Template }) {
  const { locale } = useLanguage();
  const localizedTemplate = localize(template, locale);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background">
      <TemplateMockup template={localizedTemplate} compact />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-charcoal">{localizedTemplate.badge}</span>
          <span className="text-sm font-semibold text-foreground">{localizedTemplate.price}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{localizedTemplate.name}</h3>
        <p className="mt-2 text-sm font-medium text-taupe">{localizedTemplate.audience}</p>
        <p className="mt-4 flex-1 text-pretty text-base leading-7 text-charcoal">{localizedTemplate.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ButtonLink href={`/templates/${template.slug}`} variant="secondary" className="w-full">
            {t("View Kit", locale)}
          </ButtonLink>
          <ButtonLink href={localizedTemplate.checkoutUrl} className="w-full" target="_blank" rel="noreferrer">
            {t("Buy", locale)} {localizedTemplate.price}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

