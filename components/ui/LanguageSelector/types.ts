import type { ReactNode } from "react";

export interface LanguageOption {
    /** BCP 47 language tag or short code, e.g. "en", "es", "fr" */
    code: string;
    /** Display label, e.g. "English" */
    label: string;
    /** Optional emoji flag or icon node */
    flag?: ReactNode;
    disabled?: boolean;
}
