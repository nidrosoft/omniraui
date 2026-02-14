"use client";

import React, { useState, useCallback } from "react";
import { Copy, TickCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./CodeSnippet.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface CodeSnippetProps {
    /** The code string to display */
    code: string;
    /** Programming language label shown in the header */
    language?: string;
    /** Optional file name shown in the header */
    fileName?: string;
    /** Show line numbers */
    showLineNumbers?: boolean;
    /** Show the copy button */
    showCopy?: boolean;
    /** Show the header bar */
    showHeader?: boolean;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   CodeSnippet
   ══════════════════════════════════════════════ */

export function CodeSnippet({
    code,
    language,
    fileName,
    showLineNumbers = true,
    showCopy = true,
    showHeader = true,
    className,
}: CodeSnippetProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* fallback */
        }
    }, [code]);

    const lines = code.split("\n");

    return (
        <div className={cn(s.wrapper, className)}>
            {showHeader && (
                <div className={s.header}>
                    <div className={s.headerLeft}>
                        {language && <span className={s.lang}>{language}</span>}
                        {fileName && <span className={s.fileName}>{fileName}</span>}
                    </div>
                    {showCopy && (
                        <button
                            type="button"
                            className={cn(s.copyBtn, copied && s.copyBtnCopied)}
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <>
                                    <TickCircle size={14} variant="Bulk" color="currentColor" />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy size={14} variant="Linear" color="currentColor" />
                                    Copy
                                </>
                            )}
                        </button>
                    )}
                </div>
            )}

            <div className={s.body}>
                {showLineNumbers ? (
                    <div className={s.table} role="table">
                        {lines.map((line, i) => (
                            <div key={i} className={s.lineRow} role="row">
                                <span className={s.lineNumber} role="cell" aria-label={`Line ${i + 1}`}>
                                    {i + 1}
                                </span>
                                <span className={s.lineContent} role="cell">
                                    {line || "\n"}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <pre className={s.codeBlock}>{code}</pre>
                )}
            </div>
        </div>
    );
}
