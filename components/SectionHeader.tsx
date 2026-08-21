"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  light = false
}: SectionHeaderProps) {
  const { locale } = useLanguage();

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.16em] ${
            light ? "text-gold" : "text-taupe"
          }`}
        >
          {t(eyebrow, locale)}
        </p>
      ) : null}
      <h2
        className={`text-balance text-4xl font-semibold leading-tight md:text-5xl ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {t(title, locale)}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-pretty text-lg leading-8 ${
            light ? "text-[#efe7d9]" : "text-taupe"
          }`}
        >
          {t(body, locale)}
        </p>
      ) : null}
    </div>
  );
}

