"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, TickCircle } from "iconsax-react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cn } from "@/lib/cn";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
    code: string;
    language?: string;
    showHeader?: boolean;
}

const languageMap: Record<string, string> = {
    tsx: "tsx",
    ts: "typescript",
    typescript: "typescript",
    js: "javascript",
    javascript: "javascript",
    jsx: "jsx",
    css: "css",
    html: "html",
    bash: "bash",
    shell: "bash",
    json: "json",
};

export function CodeBlock({ code, language = "tsx", showHeader = true }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const success = await copyToClipboard(code);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const syntaxLang = languageMap[language] || language;

    return (
        <div className={styles.wrapper}>
            {showHeader && (
                <div className={styles.header}>
                    <span className={styles.language}>{language}</span>
                    <button
                        className={cn(styles.copyBtn, copied && styles.copied)}
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <>
                                <TickCircle size={14} variant="Bulk" color="var(--color-lime)" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy size={14} variant="Bulk" color="currentColor" />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            )}
            <div className={styles.codeArea}>
                <SyntaxHighlighter
                    language={syntaxLang}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: 0,
                        background: "transparent",
                        fontSize: "13px",
                        lineHeight: "1.7",
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                        },
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
