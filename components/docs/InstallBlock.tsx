"use client";

import { useState } from "react";
import { Copy, TickSquare } from "iconsax-react";
import { cn } from "@/lib/cn";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import styles from "./InstallBlock.module.css";

interface InstallBlockProps {
    slug: string;
    components: string[];
}

export function InstallBlock({ slug, components }: InstallBlockProps) {
    const [tab, setTab] = useState<"cli" | "manual">("cli");
    const [copied, setCopied] = useState(false);

    const command = `npx omnira-ui@latest add ${slug}`;

    const handleCopy = async () => {
        await copyToClipboard(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.installBlock}>
            <h2 className={styles.installTitle}>Installation</h2>
            <p className={styles.installDescription}>
                You can add this component using our CLI or manually:
            </p>

            <div className={styles.tabContainer}>
                <div className={styles.tabs}>
                    <button
                        className={cn(styles.tab, tab === "cli" && styles.tabActive)}
                        onClick={() => setTab("cli")}
                    >
                        CLI
                    </button>
                    <button
                        className={cn(styles.tab, tab === "manual" && styles.tabActive)}
                        onClick={() => setTab("manual")}
                    >
                        Manual
                    </button>
                </div>

                {tab === "cli" && (
                    <div className={styles.cliBox}>
                        <div className={styles.cliCommand}>
                            <span className={styles.cliPrompt}>$</span>
                            <span className={styles.cliText}>{command}</span>
                        </div>
                        <button className={styles.copyBtn} onClick={handleCopy} title="Copy command">
                            {copied ? (
                                <TickSquare size={16} variant="Bulk" color="var(--color-lime)" />
                            ) : (
                                <Copy size={16} variant="Bulk" color="currentColor" />
                            )}
                        </button>
                    </div>
                )}

                {tab === "manual" && (
                    <div className={styles.manualContent}>
                        <p>Copy the following component folders into your project&apos;s <code>src/components/ui/</code> directory:</p>
                        <p>
                            {components.map((c, i) => (
                                <span key={c}>
                                    <code>{c}</code>
                                    {i < components.length - 1 ? " " : ""}
                                </span>
                            ))}
                        </p>
                        <p>Also ensure you have <code>lib/cn.ts</code> and <code>app/globals.css</code> from the Omnira UI package.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
