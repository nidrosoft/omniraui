"use client";

import { cn } from "@/lib/cn";
import styles from "./IncomeBreakdown.module.css";

export interface IncomeBreakdownSource {
    label: string;
    /** Display amount, e.g. "$1,200". */
    amount: string;
    /** Bar height as a percent of the chart area, 0–100. */
    percent: number;
    /** Optional CSS color override for this source's bar. */
    color?: string;
}

export interface IncomeBreakdownProps {
    title?: string;
    sources?: IncomeBreakdownSource[];
    /** Number of dots when a source's percent === 100. */
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_SOURCES: IncomeBreakdownSource[] = [
    { label: "Part time",    amount: "$1,200", percent: 38,  color: "var(--color-lime-gradient)" },
    { label: "Pay check",    amount: "1,731",  percent: 55,  color: "var(--color-lime-hover)" },
    { label: "Fulltime Job", amount: "$3,500", percent: 100, color: "var(--color-lime)" },
];

export function IncomeBreakdown({
    title = "Income Breakdown",
    sources = DEFAULT_SOURCES,
    maxDotsPerBar = 16,
    className,
}: IncomeBreakdownProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.sources}>
                {sources.map((s, i) => {
                    const safe = Math.min(Math.max(s.percent, 0), 100);
                    const dotCount = Math.max(1, Math.round((safe / 100) * maxDotsPerBar));
                    const colorVar = s.color ?? "var(--color-text-primary)";
                    return (
                        <div key={i} className={styles.col} style={{ ["--source" as string]: colorVar }}>
                            <div className={styles.bar} aria-hidden="true">
                                {Array.from({ length: dotCount }, (_, j) => (
                                    <span key={j} className={styles.barDot} />
                                ))}
                            </div>
                            <div className={styles.colMeta}>
                                <span className={styles.colLabel}>{s.label}</span>
                                <span className={styles.colAmount}>{s.amount}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
