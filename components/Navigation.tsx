"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "/installation-service", label: "Installation" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

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
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/templates" className="min-h-10 px-5 py-2">
            Browse Templates
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/templates" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Browse Templates
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

