"use client";

import { cn } from "@/lib/cn";
import styles from "./CashflowSummary.module.css";

export interface CashflowSummaryProps {
    title?: string;
    /** Main amount, e.g. "$789,870". */
    amount?: string;
    /** Optional decimals rendered small after the amount. */
    amountDecimal?: string;
    /** Mid-line "money in" amount overlaid on the chart. */
    inflowAmount?: string;
    inflowDecimal?: string;
    /** Caption beneath the inflow amount (e.g. "vs $211,280.30 Last month"). */
    comparisonLabel?: string;
    /** Right-aligned caption (e.g. "68% money in"). */
    inflowPercentLabel?: string;
    /** Variable-height dot bars (each value 0–100 = bar height percent). */
    bars?: number[];
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_BARS = [
    100, 28, 30, 22, 32, 26, 18, 24, 30, 22, 26, 18, 32, 28, 22, 26, 30, 28,
    24, 18, 22, 26, 30, 28, 22, 18, 30, 24, 28, 22, 32, 26, 22, 18, 30, 28,
    26, 22, 18, 30, 24, 28, 22, 26, 30, 28, 22, 18, 26, 28, 22, 18, 24, 30,
    28, 22, 18, 26, 30,
];

export function CashflowSummary({
    title = "Cashflow",
    amount = "$789,870",
    amountDecimal = ".21",
    inflowAmount = "$234,882",
    inflowDecimal = ".21",
    comparisonLabel = "vs $211,280.30 Last month",
    inflowPercentLabel = "68% money in",
    bars = DEFAULT_BARS,
    maxDotsPerBar = 10,
    className,
}: CashflowSummaryProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <p className={styles.amount}>
                <span className={styles.amountMain}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </p>

            {(inflowAmount || comparisonLabel || inflowPercentLabel) && (
                <div className={styles.inflow}>
                    {inflowAmount && (
                        <p className={styles.inflowAmount}>
                            <span className={styles.inflowAmountMain}>{inflowAmount}</span>
                            {inflowDecimal && (
                                <span className={styles.inflowAmountDecimal}>{inflowDecimal}</span>
                            )}
                        </p>
                    )}
                    <div className={styles.inflowRow}>
                        {comparisonLabel && <span className={styles.inflowLabel}>{comparisonLabel}</span>}
                        {inflowPercentLabel && (
                            <span className={styles.inflowPercent}>{inflowPercentLabel}</span>
                        )}
                    </div>
                </div>
            )}

            <div className={styles.chart} aria-hidden="true">
                {bars.map((value, i) => {
                    const safe = Math.min(Math.max(value, 0), 100);
                    const dotCount = Math.max(1, Math.round((safe / 100) * maxDotsPerBar));
                    return (
                        <div key={i} className={styles.col}>
                            {Array.from({ length: dotCount }, (_, j) => (
                                <span key={j} className={styles.dot} />
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
