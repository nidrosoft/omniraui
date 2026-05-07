"use client";

import { cn } from "@/lib/cn";
import styles from "./EmergencyFunds.module.css";

export interface EmergencyFundsProps {
    title?: string;
    /** Subtitle shown top-right (e.g. "6 Months Expenses"). */
    subtitle?: string;
    /** Main amount, e.g. "$4,520". */
    amount?: string;
    /** Optional decimal suffix rendered small after the amount. */
    amountDecimal?: string;
    /** Goal completion percent, 0–100. */
    progressPercent?: number;
    /** Override left footer caption (defaults to "{percent}% Completed"). */
    progressLabel?: string;
    /** Right footer value, e.g. "$12,000". */
    target?: string;
    /** Number of dots in the progress bar. */
    progressDotCount?: number;
    className?: string;
}

export function EmergencyFunds({
    title = "Emergency Funds",
    subtitle = "6 Months Expenses",
    amount = "$4,520",
    amountDecimal,
    progressPercent = 34,
    progressLabel,
    target = "$12,000",
    progressDotCount = 64,
    className,
}: EmergencyFundsProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filled = Math.round((safe / 100) * progressDotCount);
    const resolvedLabel = progressLabel ?? `${Math.round(safe)}% Completed`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {subtitle && <span className={styles.headerSubtitle}>{subtitle}</span>}
            </div>

            <p className={styles.amount}>
                <span className={styles.amountMain}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </p>

            <div className={styles.bar} aria-hidden="true">
                {Array.from({ length: progressDotCount }, (_, i) => {
                    const isFilled = i < filled;
                    const isMarker = i === filled - 1 && filled > 0 && filled < progressDotCount;
                    return (
                        <span
                            key={i}
                            className={cn(
                                styles.barCol,
                                isFilled && styles.barColFilled,
                                isMarker && styles.barColMarker,
                            )}
                        >
                            <span className={styles.barDot} />
                            <span className={styles.barDot} />
                            {isMarker && <span className={styles.barDot} />}
                        </span>
                    );
                })}
            </div>

            <div className={styles.footer}>
                <span>{resolvedLabel}</span>
                <span>{target}</span>
            </div>
        </div>
    );
}
