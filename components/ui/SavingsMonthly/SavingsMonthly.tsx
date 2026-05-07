"use client";

import { cn } from "@/lib/cn";
import styles from "./SavingsMonthly.module.css";

export interface SavingsMonthlyDonut {
    /** Display amount, e.g. "$5,292". */
    amount: string;
    label: string;
    /** Fill percent, 0–100. */
    percent: number;
}

export interface SavingsMonthlyProps {
    title?: string;
    period?: string;
    /** Total amount, e.g. "$13,300". */
    amount?: string;
    amountDecimal?: string;
    summaryLabel?: string;
    /** Progress percent for the dotted bar, 0–100. */
    progressPercent?: number;
    progressLabel?: string;
    /** Three donut charts shown beneath the progress bar. */
    donuts?: SavingsMonthlyDonut[];
    /** Footer caption (left), default "Balance". */
    footerLabel?: string;
    /** Footer value (right), default "$24,212". */
    footerValue?: string;
    /** Number of dots in the progress bar. */
    progressDotCount?: number;
    className?: string;
}

const DEFAULT_DONUTS: SavingsMonthlyDonut[] = [
    { amount: "$5,292", label: "Wedding", percent: 55 },
    { amount: "$8,231", label: "House",   percent: 92 },
    { amount: "$1,155", label: "Car",     percent: 18 },
];

interface DonutProps {
    amount: string;
    label: string;
    percent: number;
}

function Donut({ amount, label, percent }: DonutProps) {
    const safe = Math.min(Math.max(percent, 0), 100);
    const cx = 50;
    const cy = 50;
    const radius = 46;

    // Build a path for the filled arc so the stroke-dasharray "ticks" only
    // appear up to the percent (rather than wrapping the full circle).
    let arcPath: string | null = null;
    if (safe > 0) {
        const startAngle = -90;
        const endAngle = startAngle + (safe >= 100 ? 359.999 : (safe / 100) * 360);
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        const x1 = cx + radius * Math.cos(startRad);
        const y1 = cy + radius * Math.sin(startRad);
        const x2 = cx + radius * Math.cos(endRad);
        const y2 = cy + radius * Math.sin(endRad);
        const largeArc = safe > 50 ? 1 : 0;
        arcPath = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
    }

    return (
        <div className={styles.donut}>
            <svg viewBox="0 0 100 100" className={styles.donutSvg} aria-hidden="true">
                <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    className={styles.donutTrack}
                    strokeWidth="3"
                    strokeDasharray="1.5 3"
                    strokeLinecap="butt"
                />
                {arcPath && (
                    <path
                        d={arcPath}
                        className={styles.donutFill}
                        strokeWidth="3"
                        strokeDasharray="1.5 3"
                        strokeLinecap="butt"
                    />
                )}
            </svg>
            <div className={styles.donutCenter}>
                <span className={styles.donutAmount}>{amount}</span>
                <span className={styles.donutLabel}>{label}</span>
            </div>
        </div>
    );
}

export function SavingsMonthly({
    title = "Savings",
    period = "Monthly",
    amount = "$13,300",
    amountDecimal = ".00",
    summaryLabel = "Total amount saved",
    progressPercent = 72,
    progressLabel,
    donuts = DEFAULT_DONUTS,
    footerLabel = "Balance",
    footerValue = "$24,212",
    progressDotCount = 60,
    className,
}: SavingsMonthlyProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filled = Math.round((safe / 100) * progressDotCount);
    const resolvedProgressLabel = progressLabel ?? `${Math.round(safe)}%`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                <span className={styles.headerPeriod}>{period}</span>
            </div>

            <div className={styles.amountWrap}>
                <p className={styles.amount}>
                    <span className={styles.amountMain}>{amount}</span>
                    {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                </p>
                <span className={styles.summaryLabel}>{summaryLabel}</span>
            </div>

            <div className={styles.progressWrap}>
                <div className={styles.bar} aria-hidden="true">
                    {Array.from({ length: progressDotCount }, (_, i) => {
                        const isFilled = i < filled;
                        const isMarker = i === filled - 1 && filled > 0 && filled < progressDotCount;
                        return (
                            <span
                                key={i}
                                className={cn(
                                    styles.barCol,
                                    isFilled ? styles.barColFilled : styles.barColEmpty,
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
                <div className={styles.progressLegend}>
                    <span>Progress</span>
                    <span>{resolvedProgressLabel}</span>
                </div>
            </div>

            <div className={styles.donuts}>
                {donuts.map((d, i) => (
                    <Donut key={i} {...d} />
                ))}
            </div>

            <div className={styles.footer}>
                <span>{footerLabel}</span>
                <span>{footerValue}</span>
            </div>
        </div>
    );
}
