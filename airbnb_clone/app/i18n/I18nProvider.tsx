"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./translations";
import { languageOptions, translations } from "./translations";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  options: Array<{ code: Lang; label: string }>;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "staynest.lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && translations[saved]) {
      setLang(saved);
      return;
    }

    const browser = navigator.language.slice(0, 2) as Lang;
    if (translations[browser]) {
      setLang(browser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    return {
      lang,
      setLang,
      options: languageOptions,
      t: (key: string) => translations[lang][key] ?? translations.en[key] ?? key,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
