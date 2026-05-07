"use client";

import { cn } from "@/lib/cn";
import styles from "./GoalProgress.module.css";

export interface GoalProgressProps {
    title?: string;
    /** Right-aligned timeframe, e.g. "1 Years". */
    timeframe?: string;
    /** Current saved amount, e.g. "$22,231". */
    amount?: string;
    amountDecimal?: string;
    /** Goal completion percent, 0–100. */
    progressPercent?: number;
    /** Footer left caption. */
    goalLabel?: string;
    /** Footer right value (target). */
    goalValue?: string;
    /** Number of dots in the progress bar. */
    dotCount?: number;
    className?: string;
}

export function GoalProgress({
    title = "Buy a New Car",
    timeframe = "1 Years",
    amount = "$22,231",
    amountDecimal = ".00",
    progressPercent = 37,
    goalLabel = "Goals",
    goalValue = "$60,000",
    dotCount = 80,
    className,
}: GoalProgressProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filled = Math.round((safe / 100) * dotCount);

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {timeframe && <span className={styles.headerTimeframe}>{timeframe}</span>}
            </div>

            <p className={styles.amount}>
                <span className={styles.amountMain}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </p>

            <div className={styles.barWrap} aria-hidden="true">
                <div
                    className={styles.barFill}
                    style={{ width: `${safe}%` }}
                />
                <span
                    className={styles.barIndicator}
                    style={{ left: `${safe}%` }}
                />
                <div className={styles.bar}>
                    {Array.from({ length: dotCount }, (_, i) => (
                        <span
                            key={i}
                            className={cn(
                                styles.dot,
                                i < filled ? styles.dotFilled : styles.dotEmpty,
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <span>{goalLabel}</span>
                <span>{goalValue}</span>
            </div>
        </div>
    );
}
