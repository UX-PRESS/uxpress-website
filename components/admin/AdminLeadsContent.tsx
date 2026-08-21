"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";
import type { Lead, LeadMetrics } from "@/lib/leads";

function formatDate(value: string, locale: "en" | "pt") {
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function AdminLeadsContent({ leads, metrics }: { leads: Lead[]; metrics: LeadMetrics }) {
  const { locale } = useLanguage();

  return (
    <section className="bg-beige py-12 md:py-20">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-taupe">Admin</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold md:text-6xl">Uxpress leads</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal">{locale === "pt" ? "Captação local de leads do MVP a partir do formulário de onboarding." : "Local MVP lead capture from the onboarding form."}</p>
          </div>
          <ButtonLink href="/api/leads/export" variant="secondary">{locale === "pt" ? "Exportar JSON" : "Export JSON"}</ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-5"><p className="text-sm font-semibold text-taupe">{locale === "pt" ? "Total de leads" : "Total leads"}</p><p className="mt-3 text-4xl font-semibold">{metrics.totalLeads}</p></div>
          <div className="rounded-2xl border border-border bg-background p-5"><p className="text-sm font-semibold text-taupe">{locale === "pt" ? "Template mais solicitado" : "Most requested template"}</p><p className="mt-3 text-2xl font-semibold">{metrics.mostRequestedTemplate}</p></div>
          <div className="rounded-2xl border border-border bg-background p-5"><p className="text-sm font-semibold text-taupe">{locale === "pt" ? "Leads por template" : "Leads by template"}</p><div className="mt-3 grid gap-2 text-sm">{metrics.leadsByTemplate.length > 0 ? metrics.leadsByTemplate.map((item) => <p key={item.template} className="flex justify-between gap-4"><span className="truncate">{item.template}</span><span className="font-semibold">{item.count}</span></p>) : <p className="text-taupe">{locale === "pt" ? "Ainda não há dados de templates." : "No template data yet."}</p>}</div></div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background">
          {leads.length > 0 ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-border bg-sand text-xs uppercase tracking-[0.14em] text-taupe"><tr><th className="px-5 py-4">{t("Full name", locale)}</th><th className="px-5 py-4">{t("Email", locale)}</th><th className="px-5 py-4">{locale === "pt" ? "Empresa" : "Company"}</th><th className="px-5 py-4">{t("Selected template", locale)}</th><th className="px-5 py-4">{locale === "pt" ? "Enviado" : "Submitted"}</th></tr></thead><tbody className="divide-y divide-border">{leads.map((lead) => <tr key={lead.id} className="hover:bg-sand/60"><td className="px-5 py-4 font-semibold"><Link href={`/admin/leads/${lead.id}`} className="hover:underline">{lead.fullName}</Link></td><td className="px-5 py-4 text-taupe">{lead.email}</td><td className="px-5 py-4">{lead.businessName}</td><td className="px-5 py-4 text-taupe">{lead.selectedTemplate || t("No template selected", locale)}</td><td className="px-5 py-4 text-taupe">{formatDate(lead.submittedAt, locale)}</td></tr>)}</tbody></table></div> : <div className="p-8 text-center md:p-12"><p className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/25 text-xl font-semibold">0</p><h2 className="mt-5 text-2xl font-semibold">{locale === "pt" ? "Nenhum lead ainda" : "No leads yet"}</h2><p className="mx-auto mt-3 max-w-xl text-taupe">{locale === "pt" ? "Quando alguém enviar o formulário, o lead aparecerá aqui com os dados de template e contato." : "Once someone submits the onboarding form, their lead will appear here with template and contact details."}</p><div className="mt-6"><ButtonLink href="/templates">{t("Browse Templates", locale)}</ButtonLink></div></div>}
        </div>
      </div>
    </section>
  );
}
