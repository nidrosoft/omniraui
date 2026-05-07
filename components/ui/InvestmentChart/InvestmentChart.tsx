"use client";

import { cn } from "@/lib/cn";
import styles from "./InvestmentChart.module.css";

export interface InvestmentChartProps {
    title?: string;
    /** Right-aligned total amount in the header (e.g. "$710,520"). */
    total?: string;
    /** Percent change to display large in the body. Positive renders in success, negative in error. */
    changePercent?: number;
    /** Override the change badge text outright. */
    changeLabel?: string;
    /** Variable-height dot bars (each value 0–100 = bar height percent). */
    bars?: number[];
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_BARS = [
    18, 12, 28, 18, 24, 32, 20, 16, 28, 22, 12, 6, 18, 10, 14, 6, 22, 28, 6, 6,
    18, 12, 6, 24, 32, 18, 12, 6, 6, 24, 14, 30, 32, 28, 18, 12, 6, 12, 14, 12,
    14, 12, 22, 32, 18, 28, 14, 24, 14, 6, 12, 12, 12, 14, 22, 6, 14, 6, 14, 14,
];

export function InvestmentChart({
    title = "Investment",
    total = "$710,520",
    changePercent = 28,
    changeLabel,
    bars = DEFAULT_BARS,
    maxDotsPerBar = 18,
    className,
}: InvestmentChartProps) {
    const isPositive = changePercent >= 0;
    const resolvedChange = changeLabel ?? `${isPositive ? "+" : ""}${changePercent}`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {total && <span className={styles.headerTotal}>{total}</span>}
            </div>

            <p className={cn(styles.change, isPositive ? styles.changeUp : styles.changeDown)}>
                <span className={styles.changeNumber}>{resolvedChange}</span>
                <span className={styles.changeUnit}>%</span>
            </p>

            <div className={styles.chart} aria-hidden="true">
                {(() => {
                    // Normalise to the chart's own max so users can pass values
                    // in any range (1–10, 0–100, raw $ amounts) and the tallest
                    // bar always reaches `maxDotsPerBar`.
                    const max = Math.max(1, ...bars);
                    return bars.map((value, i) => {
                        const safe = Math.max(0, value);
                        const dotCount = Math.max(1, Math.round((safe / max) * maxDotsPerBar));
                        return (
                            <div key={i} className={styles.col}>
                                {Array.from({ length: dotCount }, (_, j) => (
                                    <span key={j} className={styles.dot} />
                                ))}
                            </div>
                        );
                    });
                })()}
            </div>
        </div>
    );
}
