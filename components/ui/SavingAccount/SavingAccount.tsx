"use client";

import { cn } from "@/lib/cn";
import styles from "./SavingAccount.module.css";

export interface SavingAccountBar {
    label: string;
    /** Numeric value driving the bar height (e.g. dollars saved that month). */
    value: number;
}

export interface SavingAccountProps {
    title?: string;
    /** Card mask shown top-right, e.g. "**** 4567". */
    cardSuffix?: string;
    balanceLabel?: string;
    balance?: string;
    /** Optional small decimal suffix (e.g. ".00"). */
    balanceDecimal?: string;
    /** Bar chart data. Each entry is one column. */
    bars?: SavingAccountBar[];
    /** Forecast caption above the goal progress bar. */
    forecastText?: string;
    /** Goal completion percent, 0–100. */
    progressPercent?: number;
    progressLabel?: string;
    goalLabel?: string;
    /** Number of dots per bar column when value === chartMax. */
    maxDotsPerBar?: number;
    /** Number of dots in the bottom progress bar. */
    progressDotCount?: number;
    className?: string;
}

const DEFAULT_BARS: SavingAccountBar[] = [
    { label: "Sep", value: 1800 },
    { label: "Oct", value: 1800 },
    { label: "Nov", value: 900 },
    { label: "Dec", value: 2600 },
    { label: "Jan", value: 2000 },
    { label: "Feb", value: 2800 },
    { label: "Mar", value: 2400 },
];

export function SavingAccount({
    title = "Saving Account",
    cardSuffix = "**** 4567",
    balanceLabel = "Available balance",
    balance = "$35,600",
    balanceDecimal = ".00",
    bars = DEFAULT_BARS,
    forecastText = "You'll reach $100,000 in 12 month of your current pace",
    progressPercent = 34,
    progressLabel,
    goalLabel = "Goal : 100,000",
    maxDotsPerBar = 14,
    progressDotCount = 64,
    className,
}: SavingAccountProps) {
    const max = Math.max(1, ...bars.map((b) => b.value));
    const safePercent = Math.min(Math.max(progressPercent, 0), 100);
    const filledProgressDots = Math.round((safePercent / 100) * progressDotCount);
    const resolvedProgressLabel = progressLabel ?? `${Math.round(safePercent)}% Done`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {cardSuffix && <span className={styles.headerCard}>{cardSuffix}</span>}
            </div>

            <div className={styles.balanceWrap}>
                <span className={styles.balanceLabel}>{balanceLabel}</span>
                <p className={styles.balance}>
                    <span className={styles.balanceMain}>{balance}</span>
                    {balanceDecimal && <span className={styles.balanceDecimal}>{balanceDecimal}</span>}
                </p>
            </div>

            <div className={styles.chart} aria-hidden="true">
                <div className={styles.chartBars}>
                    {bars.map((bar, i) => {
                        const dotCount = Math.max(1, Math.round((bar.value / max) * maxDotsPerBar));
                        return (
                            <div key={i} className={styles.barCol}>
                                <div className={styles.barDots}>
                                    {Array.from({ length: dotCount }, (_, j) => (
                                        <span key={j} className={styles.barDot} />
                                    ))}
                                </div>
                                <span className={styles.barLabel}>{bar.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.footer}>
                {forecastText && <p className={styles.forecast}>{forecastText}</p>}
                <div className={styles.progressBar} aria-hidden="true">
                    <span className={styles.progressAccent} />
                    <div className={styles.progressTrack}>
                        {Array.from({ length: progressDotCount }, (_, i) => (
                            <span
                                key={i}
                                className={cn(
                                    styles.progressDot,
                                    i < filledProgressDots ? styles.progressDotFilled : styles.progressDotEmpty,
                                )}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.goalRow}>
                    <span className={styles.goalLeft}>{resolvedProgressLabel}</span>
                    <span className={styles.goalRight}>{goalLabel}</span>
                </div>
            </div>
        </div>
    );
}
