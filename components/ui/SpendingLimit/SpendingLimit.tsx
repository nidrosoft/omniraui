"use client";

import { cn } from "@/lib/cn";
import styles from "./SpendingLimit.module.css";

export interface SpendingLimitProps {
    title?: string;
    /** Right-aligned period label, e.g. "This Month". */
    period?: string;
    /** Spent percent of the budget, 0–100. */
    progressPercent?: number;
    /** Number of dots in the progress bar. */
    dotCount?: number;
    /** Footer left caption + value (typically what's been spent). */
    spentLabel?: string;
    spentValue?: string;
    /** Footer right caption + value (typically what's remaining). */
    remainingLabel?: string;
    remainingValue?: string;
    className?: string;
}

export function SpendingLimit({
    title = "Spending Limit",
    period = "This Month",
    progressPercent = 72,
    dotCount = 80,
    spentLabel = "Today Spent",
    spentValue = "$7,212",
    remainingLabel = "Remaining",
    remainingValue = "$2,762",
    className,
}: SpendingLimitProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filled = Math.round((safe / 100) * dotCount);

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {period && <span className={styles.headerPeriod}>{period}</span>}
            </div>

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

            <div className={styles.summary}>
                <div className={styles.summaryCol}>
                    <span className={styles.summaryLabel}>{spentLabel}</span>
                    <span className={styles.summaryValue}>{spentValue}</span>
                </div>
                <div className={styles.summaryCol}>
                    <span className={styles.summaryLabel}>{remainingLabel}</span>
                    <span className={styles.summaryValue}>{remainingValue}</span>
                </div>
            </div>
        </div>
    );
}
