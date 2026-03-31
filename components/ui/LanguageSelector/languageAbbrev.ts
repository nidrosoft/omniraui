/** ISO 639 primary language subtag (2–3 ASCII letters) before first hyphen */
const ISO639_PRIMARY = /^[a-zA-Z]{2,3}$/;

/**
 * Display abbreviation for a BCP 47 tag (language-first, not a country flag).
 * Uses the primary language subtag in uppercase; optional override per option.
 */
export function languageCodeAbbrev(code: string, abbreviation?: string): string {
    if (abbreviation !== undefined && abbreviation !== "") {
        const t = abbreviation.trim();
        if (t) return t.toUpperCase();
    }
    const primary = code.split("-")[0];
    if (ISO639_PRIMARY.test(primary)) {
        return primary.toUpperCase();
    }
    return primary.slice(0, 2).toUpperCase();
}
