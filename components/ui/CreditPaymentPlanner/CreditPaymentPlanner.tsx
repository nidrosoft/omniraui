"use client";

import { cn } from "@/lib/cn";
import styles from "./CreditPaymentPlanner.module.css";

export interface CreditPaymentStat {
    value: string;
    label: string;
}

export interface CreditPaymentPlannerProps {
    title?: string;
    /** Caption above the central amount, e.g. "To be deposited by 1 June, 2026". */
    dueText?: string;
    /** Central amount, e.g. "$8,000". */
    amount?: string;
    amountDecimal?: string;
    /** Caption beneath the amount, e.g. "Next Payment in 10 days". */
    nextPaymentText?: string;
    /** Progress percent of the half-arc gauge, 0–100. */
    progressPercent?: number;
    /** Footer stats — recommended exactly 3 entries. */
    stats?: CreditPaymentStat[];
    /** Number of tick marks around the half-arc. */
    tickCount?: number;
    className?: string;
}

const DEFAULT_STATS: CreditPaymentStat[] = [
    { value: "$10,000", label: "Total Balance" },
    { value: "12%",     label: "Interest Rate" },
    { value: "$4,000",  label: "Credit Limit" },
];

export function CreditPaymentPlanner({
    title = "Credit payment planner",
    dueText = "To be deposited by 1 June, 2026",
    amount = "$8,000",
    amountDecimal = ".00",
    nextPaymentText = "Next Payment in 10 days",
    progressPercent = 67,
    stats = DEFAULT_STATS,
    tickCount = 64,
    className,
}: CreditPaymentPlannerProps) {
    const safe = Math.min(Math.max(progressPercent, 0), 100);
    const filledTicks = Math.round((safe / 100) * tickCount);

    // Half-arc: angles range from 180° (left) → 360°/0° (right), going over the top.
    // Sweeping clockwise: i=0 → leftmost (180°), i=tickCount → rightmost (0°).
    // Inner radius is intentionally generous so the central caption doesn't
    // visually collide with the arc's vertical edges.
    const cx = 130;
    const cy = 130;
    const innerR = 114;
    const outerR = 130;

    const ticks = Array.from({ length: tickCount }, (_, i) => {
        // i=0 starts at left (PI), i=tickCount-1 ends near right (0).
        const angle = Math.PI - (i / (tickCount - 1)) * Math.PI;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
            x1: cx + innerR * cos,
            y1: cy - innerR * sin,
            x2: cx + outerR * cos,
            y2: cy - outerR * sin,
            filled: i < filledTicks,
        };
    });

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.gaugeWrap}>
                <svg
                    viewBox="0 0 260 132"
                    className={styles.gauge}
                    role="img"
                    aria-label={`${title} ${Math.round(safe)} percent`}
                >
                    {ticks.map((t, i) => (
                        <line
                            key={i}
                            x1={t.x1}
                            y1={t.y1}
                            x2={t.x2}
                            y2={t.y2}
                            className={t.filled ? styles.tickFilled : styles.tickEmpty}
                            strokeWidth={1.6}
                            strokeLinecap="round"
                        />
                    ))}
                </svg>

                <div className={styles.center}>
                    {dueText && <span className={styles.dueText}>{dueText}</span>}
                    <p className={styles.amount}>
                        <span className={styles.amountMain}>{amount}</span>
                        {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                    </p>
                </div>

                {nextPaymentText && (
                    <span className={styles.nextPayment}>{nextPaymentText}</span>
                )}
            </div>

            <div className={styles.stats}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.stat}>
                        <span className={styles.statValue}>{s.value}</span>
                        <span className={styles.statLabel}>{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
