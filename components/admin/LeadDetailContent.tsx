"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";
import type { Lead } from "@/lib/leads";

export function LeadDetailContent({ lead }: { lead: Lead | null }) {
  const { locale } = useLanguage();
  const formatDate = (value: string) => new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));

  if (!lead) {
    return <section className="bg-beige py-16 md:py-24"><div className="container-shell"><div className="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-8 text-center"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{locale === "pt" ? "Lead inválido" : "Invalid lead"}</p><h1 className="mt-4 text-4xl font-semibold">{locale === "pt" ? "Lead não encontrado" : "Lead not found"}</h1><p className="mt-4 text-taupe">{locale === "pt" ? "Este ID de lead não existe no arquivo JSON local." : "This lead id does not exist in the local JSON file."}</p><div className="mt-7"><ButtonLink href="/admin/leads">{locale === "pt" ? "Voltar para leads" : "Back to Leads"}</ButtonLink></div></div></div></section>;
  }

  const rows = [["Full name", lead.fullName], ["Email", lead.email], ["Business name", lead.businessName], ["Business type", lead.businessType], ["Website goal", lead.websiteGoal], ["WhatsApp", lead.whatsapp || "Not provided"], ["Instagram", lead.instagram || "Not provided"], ["Selected template", lead.selectedTemplate || "No template selected"], ["Submitted", formatDate(lead.submittedAt)], ["Lead ID", lead.id]];

  return <section className="bg-beige py-12 md:py-20"><div className="container-shell"><div className="mb-8"><ButtonLink href="/admin/leads" variant="ghost">{locale === "pt" ? "Voltar para leads" : "Back to Leads"}</ButtonLink></div><div className="rounded-3xl border border-border bg-background p-6 shadow-[0_24px_70px_rgba(36,33,28,0.08)] md:p-8"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{locale === "pt" ? "Detalhes do lead" : "Lead detail"}</p><h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">{lead.fullName}</h1><p className="mt-4 text-lg text-taupe">{lead.email}</p><div className="mt-10 grid gap-4">{rows.map(([label, value]) => <div key={label} className="grid gap-2 rounded-2xl border border-border bg-sand p-5 md:grid-cols-[220px_1fr]"><p className="text-sm font-semibold text-taupe">{t(label, locale)}</p><p className="text-pretty font-medium text-charcoal">{value}</p></div>)}</div></div></div></section>;
}
