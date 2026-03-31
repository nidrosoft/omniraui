export interface LanguageOption {
    /** BCP 47 language tag or short code, e.g. "en", "es", "zh-Hans" */
    code: string;
    /** Display label, e.g. "English" */
    label: string;
    /** Override for the leading code badge (e.g. "ZH-HANS" vs "ZH" for two Chinese scripts) */
    abbreviation?: string;
    disabled?: boolean;
}
