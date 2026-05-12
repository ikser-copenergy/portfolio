import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Inter } from "next/font/google";
import {
  parseAcceptLanguage,
  resolveHtmlLang,
  resolveLocaleFromLanguageTags,
} from "@/lib/locale-resolver";
import { Providers } from "./providers";
import type { Locale } from "@/lib/messages";
import { messages, STORAGE_KEY } from "@/lib/messages";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ikser Marquez | Full Stack Engineer",
  description: messages.en["meta.description"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const acceptHeader = headerStore.get("accept-language");
  const acceptTags = parseAcceptLanguage(acceptHeader);

  const cookieVal = cookieStore.get(STORAGE_KEY)?.value;
  let initialLocale: Locale = "en";
  if (cookieVal === "en" || cookieVal === "es") {
    initialLocale = cookieVal;
  } else {
    initialLocale = resolveLocaleFromLanguageTags(acceptTags);
  }

  const htmlLang = resolveHtmlLang(
    initialLocale,
    acceptTags.length ? acceptTags : [initialLocale]
  );

  return (
    <html lang={htmlLang} className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#050505] text-white selection:bg-zinc-800 selection:text-white">
        <Providers initialLocale={initialLocale} acceptLanguageTags={acceptTags}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
