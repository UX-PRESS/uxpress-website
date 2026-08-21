"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";

type StartFormProps = {
  selectedTemplate: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const businessTypes = ["Coach", "Consultant", "Mentor", "Freelancer", "Agency", "Service Business", "Other"];

export function StartForm({ selectedTemplate }: StartFormProps) {
  const router = useRouter();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const { locale } = useLanguage();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const lead = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      businessName: String(formData.get("businessName") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      websiteGoal: String(formData.get("websiteGoal") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      instagram: String(formData.get("instagram") ?? ""),
      selectedTemplate: String(formData.get("selectedTemplate") ?? "")
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(lead)
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setSubmitState("success");
      window.setTimeout(() => {
        router.push("/start/success");
      }, 700);
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      className="grid gap-5 rounded-3xl border border-border bg-background p-5 shadow-[0_24px_70px_rgba(36,33,28,0.08)] md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {t("Full name", locale)}
          <input
            name="fullName"
            required
            className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {t("Email", locale)}
          <input
            name="email"
            type="email"
            required
            className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {t("Business name", locale)}
          <input
            name="businessName"
            required
            className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal"
            placeholder="Your business"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {t("Business type", locale)}
          <select name="businessType" className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal">
            {businessTypes.map((type) => (
              <option key={type} value={type}>{t(type, locale)}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        {t("Website goal", locale)}
        <textarea
          name="websiteGoal"
          required
          rows={4}
          className="rounded-xl border border-border bg-white px-4 py-3 text-base font-normal"
          placeholder={t("Example: book more discovery calls, sell a consulting package, launch a personal brand site...", locale)}
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          {t("WhatsApp", locale)}
          <input
            name="whatsapp"
            className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal"
            placeholder="+351 ..."
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {t("Instagram", locale)}
          <input
            name="instagram"
            className="min-h-12 rounded-xl border border-border bg-white px-4 text-base font-normal"
            placeholder="@yourhandle"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        {t("Selected template", locale)}
        <input
          name="selectedTemplate"
          readOnly
          value={selectedTemplate}
          className="min-h-12 rounded-xl border border-border bg-sand px-4 text-base font-normal text-charcoal"
        />
      </label>

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/35 border-t-background" />
            {t("Submitting...", locale)}
          </>
        ) : (
          t("Submit Launch Request", locale)
        )}
      </button>

      {submitState === "success" ? (
        <div role="status" className="rounded-2xl border border-gold/30 bg-gold/20 px-4 py-3 text-sm font-semibold text-charcoal">
          {t("Lead saved. Redirecting to next steps...", locale)}
        </div>
      ) : null}

      {submitState === "error" ? (
        <div role="alert" className="rounded-2xl border border-[#9f3a32]/20 bg-[#9f3a32]/10 px-4 py-3 text-sm font-semibold text-[#9f3a32]">
          {t("Something went wrong. Please try again.", locale)}
        </div>
      ) : null}
    </form>
  );
}
