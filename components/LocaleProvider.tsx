"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { resolveHtmlLang } from "@/lib/locale-resolver";
import {
  type Locale,
  type MessageKey,
  messages,
  STORAGE_KEY,
} from "@/lib/messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const parts = document.cookie.split(";").map((s) => s.trim());
  for (const p of parts) {
    const i = p.indexOf("=");
    if (i === -1) continue;
    const k = p.slice(0, i).trim();
    const v = p.slice(i + 1).trim();
    if (k === name && (v === "en" || v === "es")) return v;
  }
  return null;
}

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${STORAGE_KEY}=${locale}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function LocaleProvider({
  children,
  initialLocale,
  acceptLanguageTags,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
  acceptLanguageTags: string[];
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  /** Client precedence: explicit localStorage > cookie > server initial > navigator */
  useLayoutEffect(() => {
    let next: Locale | null = null;
    try {
      const ls = window.localStorage.getItem(STORAGE_KEY);
      if (ls === "en" || ls === "es") next = ls;
    } catch {
      /* ignore */
    }
    if (!next) {
      const ck = getCookie(STORAGE_KEY);
      if (ck === "en" || ck === "es") next = ck;
    }
    if (next && next !== initialLocale) {
      setLocaleState(next);
    }
    setMounted(true);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const t = useCallback(
    (key: MessageKey) => messages[locale][key] ?? messages.en[key] ?? key,
    [locale]
  );

  useEffect(() => {
    if (!mounted) return;
    const navTags =
      typeof navigator !== "undefined" && navigator.languages?.length
        ? [...navigator.languages]
        : typeof navigator !== "undefined" && navigator.language
          ? [navigator.language]
          : acceptLanguageTags;
    const tags = navTags.length ? navTags : acceptLanguageTags;
    document.documentElement.lang = resolveHtmlLang(locale, tags);
    const desc = messages[locale]["meta.description"];
    document.title =
      locale === "es"
        ? "Ikser Marquez | Ingeniero Full Stack"
        : "Ikser Marquez | Full Stack Engineer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", desc);
  }, [locale, mounted, acceptLanguageTags]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
