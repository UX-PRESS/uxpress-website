"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "pt";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "uxpress-locale";

function getBrowserLocale(): Locale {
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    const nextLocale: Locale = savedLocale === "pt" || savedLocale === "en" ? savedLocale : getBrowserLocale();

    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
    document.documentElement.lang = nextLocale;
  }

  function toggleLocale() {
    setLocale(locale === "en" ? "pt" : "en");
  }

  return <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
