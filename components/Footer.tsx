"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/i18n";
import { site } from "@/lib/site";

const links = [
  { href: "/templates", en: "Templates", pt: "Templates" },
  { href: "/installation-service", en: "Installation", pt: "Instalação" },
  { href: "/faq", en: "FAQ", pt: "FAQ" },
  { href: "/contact", en: "Contact", pt: "Contato" }
];

const socialLinks = [
  { href: "https://x.com/uxpress", label: "X" },
  { href: "https://www.linkedin.com/company/uxpress", label: "LinkedIn" },
  { href: "https://www.instagram.com/uxpress", label: "Instagram" }
];

export function Footer() {
  const { locale } = useLanguage();
  const isPortuguese = locale === "pt";

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-xl font-semibold">
            Uxpress
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d8d0c4]">
            {isPortuguese
              ? "Kits premium para coaches, consultores, mentores e profissionais de serviços que querem lançar mais rápido."
              : "Premium website kits for coaches, consultants, mentors, and service professionals who want to launch faster."}
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-gold">{isPortuguese ? "Explore" : "Explore"}</p>
          <div className="grid gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#d8d0c4] hover:text-background">
                {isPortuguese ? link.pt : link.en}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-gold">Social</p>
          <div className="grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#d8d0c4] hover:text-background"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-gold">{isPortuguese ? "Suporte" : "Support"}</p>
          <a className="text-sm text-[#d8d0c4] hover:text-background" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-[#d8d0c4] hover:text-background">
              {isPortuguese ? "Termos" : "Terms"}
            </Link>
            <Link href="/privacy" className="text-[#d8d0c4] hover:text-background">
              {isPortuguese ? "Política de privacidade" : "Privacy Policy"}
            </Link>
          </div>
          <p className="mt-6 text-xs text-[#a99f90]">© {new Date().getFullYear()} Uxpress. {t("All rights reserved.", locale)}</p>
        </div>
      </div>
    </footer>
  );
}
