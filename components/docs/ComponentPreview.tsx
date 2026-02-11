"use client";

import { useState } from "react";
import { Code1, Eye } from "iconsax-react";
import { cn } from "@/lib/cn";
import { CodeBlock } from "./CodeBlock";
import styles from "./ComponentPreview.module.css";

interface ComponentPreviewProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
    code?: string;
}

export function ComponentPreview({ title, description, children, code }: ComponentPreviewProps) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div className={styles.wrapper}>
            {(title || description) && (
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        {title && <h3 className={styles.previewTitle}>{title}</h3>}
                        {description && <p className={styles.previewDescription}>{description}</p>}
                    </div>
                    {code && (
                        <div className={styles.actions}>
                            <button
                                className={cn(styles.actionBtn, !showCode && styles.actionBtnActive)}
                                onClick={() => setShowCode(false)}
                            >
                                <Eye size={14} variant="Bulk" color="currentColor" />
                                Preview
                            </button>
                            <button
                                className={cn(styles.actionBtn, showCode && styles.actionBtnActive)}
                                onClick={() => setShowCode(true)}
                            >
                                <Code1 size={14} variant="Bulk" color="currentColor" />
                                Code
                            </button>
                        </div>
                    )}
                </div>
            )}
            {!showCode && (
                <div className={styles.preview}>
                    {children}
                </div>
            )}
            {showCode && code && (
                <div className={styles.codeWrapper}>
                    <CodeBlock code={code} language="tsx" />
                </div>
            )}
        </div>
    );
}
