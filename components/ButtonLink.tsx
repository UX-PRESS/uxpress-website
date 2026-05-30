import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "ghost";
};

const styles = {
  primary:
    "bg-foreground text-background hover:bg-charcoal border border-foreground shadow-sm",
  secondary:
    "bg-transparent text-foreground hover:bg-foreground hover:text-background border border-foreground",
  gold: "bg-gold text-foreground hover:bg-[#b79748] border border-gold shadow-sm",
  ghost:
    "bg-transparent text-foreground hover:bg-sand border border-border"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${styles[variant]} ${className}`;

  if (href.startsWith("http") || href.includes("_URL")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

