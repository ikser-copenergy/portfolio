"use client";

import { LocaleProvider } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/messages";

export function Providers({
  children,
  initialLocale,
  acceptLanguageTags,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
  acceptLanguageTags: string[];
}) {
  return (
    <LocaleProvider initialLocale={initialLocale} acceptLanguageTags={acceptLanguageTags}>
      {children}
    </LocaleProvider>
  );
}
