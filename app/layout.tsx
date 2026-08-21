import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uxpress.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uxpress - Premium Website Templates for Coaches and Consultants",
    template: "%s | Uxpress"
  },
  description:
    "Launch a professional website in days, not weeks with ready-to-launch website kits for coaches, consultants, mentors, and service professionals.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Uxpress",
    title: "Uxpress - Premium Website Templates for Coaches and Consultants",
    description:
      "Launch a professional website in days, not weeks with ready-to-launch website kits for service professionals."
  },
  twitter: {
    card: "summary_large_image",
    title: "Uxpress - Premium Website Templates for Coaches and Consultants",
    description:
      "Launch a professional website in days, not weeks with ready-to-launch website kits for service professionals."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.UXPRESS_ANALYTICS_PLACEHOLDER = window.UXPRESS_ANALYTICS_PLACEHOLDER || { loaded: true };"
          }}
        />
      </body>
    </html>
  );
}

