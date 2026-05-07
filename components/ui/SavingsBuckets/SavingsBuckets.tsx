"use client";

import { cn } from "@/lib/cn";
import styles from "./SavingsBuckets.module.css";

export interface SavingsBucket {
    label: string;
    amount: string;
    /** Progress toward this bucket's goal, 0–100. */
    percent: number;
}

export interface SavingsBucketsProps {
    title?: string;
    /** Up to 3 buckets recommended for the medium 348×164 footprint. */
    buckets?: SavingsBucket[];
    /** Number of dots in each progress bar. */
    dotCount?: number;
    className?: string;
}

const DEFAULT_BUCKETS: SavingsBucket[] = [
    { label: "Wedding", amount: "$2,872", percent: 65 },
    { label: "House",   amount: "$9,233", percent: 50 },
    { label: "Car",     amount: "$1,324", percent: 70 },
];

export function SavingsBuckets({
    title = "Savings",
    buckets = DEFAULT_BUCKETS,
    dotCount = 28,
    className,
}: SavingsBucketsProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.buckets}>
                {buckets.map((b, i) => {
                    const safe = Math.min(Math.max(b.percent, 0), 100);
                    const filled = Math.round((safe / 100) * dotCount);
                    return (
                        <div key={i} className={styles.col}>
                            <div className={styles.bar} aria-hidden="true">
                                {Array.from({ length: dotCount }, (_, j) => {
                                    const isFilled = j < filled;
                                    const isMarker = j === filled - 1 && filled > 0 && filled < dotCount;
                                    return (
                                        <span
                                            key={j}
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
                            <div className={styles.colMeta}>
                                <span className={styles.colLabel}>{b.label}</span>
                                <span className={styles.colAmount}>{b.amount}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
