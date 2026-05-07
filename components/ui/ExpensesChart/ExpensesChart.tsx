"use client";

import { cn } from "@/lib/cn";
import styles from "./ExpensesChart.module.css";

export interface ExpensesChartBar {
    label: string;
    /** Value driving the bar height (e.g. dollars spent that month). */
    value: number;
}

export interface ExpensesChartProps {
    title?: string;
    period?: string;
    summaryLabel?: string;
    /** Total amount, e.g. "$13,300". */
    amount?: string;
    amountDecimal?: string;
    /** Bar chart data. Each entry is one column. */
    bars?: ExpensesChartBar[];
    /** Number of dots when a bar's value equals the chart maximum. */
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_BARS: ExpensesChartBar[] = [
    { label: "Sep", value: 2800 },
    { label: "Oct", value: 2400 },
    { label: "Nov", value: 1100 },
    { label: "Dec", value: 700 },
    { label: "Jan", value: 2200 },
    { label: "Feb", value: 2600 },
    { label: "Mar", value: 1900 },
];

export function ExpensesChart({
    title = "Expenses",
    period = "Monthly",
    summaryLabel = "Total Expenses",
    amount = "$13,300",
    amountDecimal = ".00",
    bars = DEFAULT_BARS,
    maxDotsPerBar = 26,
    className,
}: ExpensesChartProps) {
    const max = Math.max(1, ...bars.map((b) => b.value));

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                <span className={styles.headerPeriod}>{period}</span>
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amountLabel}>{summaryLabel}</span>
                <p className={styles.amount}>
                    <span className={styles.amountMain}>{amount}</span>
                    {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                </p>
            </div>

            <div className={styles.chart} aria-hidden="true">
                <div className={styles.bars}>
                    {bars.map((bar, i) => {
                        const dotCount = Math.max(1, Math.round((bar.value / max) * maxDotsPerBar));
                        return (
                            <div key={i} className={styles.col}>
                                <div className={styles.dots}>
                                    {Array.from({ length: dotCount }, (_, j) => (
                                        <span key={j} className={styles.dot} />
                                    ))}
                                </div>
                                <span className={styles.colLabel}>{bar.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
