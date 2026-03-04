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
   Simple syntax tokenizer
   ══════════════════════════════════════════════ */

interface Token {
    type: string;
    value: string;
}

const KEYWORDS = new Set([
    "import", "export", "from", "const", "let", "var", "function", "return",
    "if", "else", "for", "while", "do", "switch", "case", "break", "continue",
    "class", "extends", "new", "this", "super", "typeof", "instanceof",
    "try", "catch", "finally", "throw", "async", "await", "yield",
    "default", "interface", "type", "enum", "implements", "package",
    "private", "protected", "public", "static", "void", "null", "undefined",
    "def", "print", "elif", "except", "raise", "with", "as", "pass", "lambda",
    "in", "not", "and", "or", "is", "None", "self", "cls",
]);

const TYPES = new Set([
    "string", "number", "boolean", "any", "object", "Array", "Promise",
    "Record", "Map", "Set", "React", "HTMLElement", "void",
    "int", "float", "str", "list", "dict", "tuple", "bool",
]);

const BOOLEANS = new Set(["true", "false", "True", "False"]);

function tokenizeLine(line: string): Token[] {
    const tokens: Token[] = [];
    const regex = /(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+\.?\d*\b)|(=>|===?|!==?|<=?|>=?|&&|\|\||[+\-*/%]=?|\.\.\.)|(\b[A-Z][a-zA-Z0-9]*\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\())|(\b[a-zA-Z_$][a-zA-Z0-9_$]*\b)|([{}()\[\];:,.])|([^\S]+)|(.)/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
        const [full, comment, str, num, op, pascalCase, fn, word, punct, ws, other] = match;
        if (comment) tokens.push({ type: "comment", value: comment });
        else if (str) tokens.push({ type: "string", value: str });
        else if (num) tokens.push({ type: "number", value: num });
        else if (op) tokens.push({ type: "operator", value: op });
        else if (pascalCase) {
            if (TYPES.has(pascalCase)) tokens.push({ type: "type", value: pascalCase });
            else tokens.push({ type: "type", value: pascalCase });
        }
        else if (fn) {
            if (KEYWORDS.has(fn)) tokens.push({ type: "keyword", value: fn });
            else tokens.push({ type: "function", value: fn });
        }
        else if (word) {
            if (KEYWORDS.has(word)) tokens.push({ type: "keyword", value: word });
            else if (BOOLEANS.has(word)) tokens.push({ type: "bool", value: word });
            else if (TYPES.has(word)) tokens.push({ type: "type", value: word });
            else tokens.push({ type: "plain", value: word });
        }
        else if (punct) tokens.push({ type: "punctuation", value: punct });
        else tokens.push({ type: "plain", value: full });
    }
    return tokens;
}

const TOKEN_CLASS_MAP: Record<string, string> = {
    keyword: s.tokenKeyword,
    string: s.tokenString,
    comment: s.tokenComment,
    function: s.tokenFunction,
    number: s.tokenNumber,
    punctuation: s.tokenPunctuation,
    type: s.tokenType,
    operator: s.tokenOperator,
    bool: s.tokenBool,
};

function renderTokenizedLine(line: string, lineIdx: number) {
    if (!line) return "\n";
    const tokens = tokenizeLine(line);
    return tokens.map((tok, i) => {
        const cls = TOKEN_CLASS_MAP[tok.type];
        if (cls) return <span key={`${lineIdx}-${i}`} className={cls}>{tok.value}</span>;
        return <React.Fragment key={`${lineIdx}-${i}`}>{tok.value}</React.Fragment>;
    });
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
                                    {renderTokenizedLine(line, i)}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <pre className={s.codeBlock}>{lines.map((line, i) => (
                        <React.Fragment key={i}>{renderTokenizedLine(line, i)}{"\n"}</React.Fragment>
                    ))}</pre>
                )}
            </div>
        </div>
    );
}
