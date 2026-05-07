"use client";

import { cn } from "@/lib/cn";
import styles from "./DailyRevenue.module.css";

export interface DailyRevenueProps {
    title?: string;
    /** Big revenue amount, e.g. "217,000". */
    amount?: string;
    amountPrefix?: string;
    amountDecimal?: string;
    /** Goal completion percent, 0–100. */
    progressPercent?: number;
    /** Number of dots in the progress bar. */
    dotCount?: number;
    /** Footer left caption. */
    goalLabel?: string;
    /** Footer right value (target). */
    goalValue?: string;
    className?: string;
}

export function DailyRevenue({
    title = "Daily Revenue",
    amount = "217,000",
    amountPrefix,
    amountDecimal,
    progressPercent = 64,
    dotCount = 80,
    goalLabel = "Goals",
    goalValue = "$250,000",
    className,
}: DailyRevenueProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filled = Math.round((safe / 100) * dotCount);

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <p className={styles.amount}>
                {amountPrefix && <span className={styles.amountPrefix}>{amountPrefix}</span>}
                <span className={styles.amountMain}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </p>

            <div className={styles.bar} aria-hidden="true">
                {Array.from({ length: dotCount }, (_, i) => {
                    const isFilled = i < filled;
                    const isMarker = i === filled - 1 && filled > 0 && filled < dotCount;
                    return (
                        <span
                            key={i}
                            className={cn(
                                styles.dot,
                                isFilled && styles.dotFilled,
                                isMarker && styles.dotMarker,
                            )}
                        />
                    );
                })}
            </div>

            <div className={styles.footer}>
                <span>{goalLabel}</span>
                <span>{goalValue}</span>
            </div>
        </div>
    );
}
