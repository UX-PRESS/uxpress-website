"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";

const links = [
  { href: "/templates", en: "Templates", pt: "Templates" },
  { href: "/installation-service", en: "Installation", pt: "Instalação" },
  { href: "/faq", en: "FAQ", pt: "FAQ" },
  { href: "/contact", en: "Contact", pt: "Contato" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLanguage();
  const isPortuguese = locale === "pt";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-semibold" aria-label="Uxpress home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm text-background">
            Ux
          </span>
          <span>Uxpress</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-taupe hover:text-foreground">
              {isPortuguese ? link.pt : link.en}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-sand"
            aria-label={isPortuguese ? "Switch to English" : "Mudar para português"}
            onClick={toggleLocale}
          >
            {isPortuguese ? "EN" : "PT"}
          </button>
          <ButtonLink href="/templates" className="min-h-10 px-5 py-2">
            {isPortuguese ? "Ver templates" : "Browse Templates"}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-shell grid gap-2 py-4" aria-label="Mobile navigation">
            <button
              type="button"
              className="mb-2 w-fit rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-sand"
              aria-label={isPortuguese ? "Switch to English" : "Mudar para português"}
              onClick={toggleLocale}
            >
              {isPortuguese ? "English" : "Português"}
            </button>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {isPortuguese ? link.pt : link.en}
              </Link>
            ))}
            <ButtonLink href="/templates" className="mt-2 w-full" onClick={() => setOpen(false)}>
              {isPortuguese ? "Ver templates" : "Browse Templates"}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

