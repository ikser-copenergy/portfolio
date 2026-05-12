import type { Locale } from "@/lib/messages";

/** BCP 47 primary language subtag → supported app locale */
export function primaryLanguageToLocale(primary: string): Locale | null {
  const p = primary.toLowerCase();
  if (p === "es") return "es";
  if (p === "en") return "en";
  return null;
}

/**
 * RFC 7231 Accept-Language: ordered tags with quality values.
 * Returns full tags (e.g. es-HN, en-US) sorted by descending q.
 */
export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (!header || typeof header !== "string") return [];
  const parts = header.split(",");
  const scored: { tag: string; q: number }[] = [];
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const [rawTag, ...params] = trimmed.split(";").map((s) => s.trim());
    if (!rawTag) continue;
    let q = 1;
    for (const p of params) {
      if (p.toLowerCase().startsWith("q=")) {
        const n = parseFloat(p.slice(2));
        if (Number.isFinite(n)) q = n;
        break;
      }
    }
    scored.push({ tag: rawTag, q });
  }
  scored.sort((a, b) => b.q - a.q);
  return scored.map((s) => s.tag);
}

export function resolveLocaleFromLanguageTags(tags: readonly string[]): Locale {
  for (const tag of tags) {
    const primary = tag.split("-")[0]?.toLowerCase();
    if (!primary) continue;
    const loc = primaryLanguageToLocale(primary);
    if (loc) return loc;
  }
  return "en";
}

/** Best BCP 47 tag for <html lang> (keeps region when possible). */
export function resolveHtmlLang(locale: Locale, preferredTags: readonly string[]): string {
  const prefix = locale === "es" ? "es" : "en";
  for (const tag of preferredTags) {
    const t = tag.toLowerCase();
    if (t === prefix || t.startsWith(`${prefix}-`)) return tag;
  }
  return prefix;
}

export function resolveLocaleFromNavigator(): Locale {
  if (typeof navigator === "undefined") return "en";
  const list = navigator.languages?.length
    ? [...navigator.languages]
    : navigator.language
      ? [navigator.language]
      : [];
  return resolveLocaleFromLanguageTags(list);
}
