"use client";

import { cn } from "@/lib/cn";
import styles from "./CreditScore.module.css";

export interface CreditScoreProps {
    title?: string;
    /** Score (e.g. FICO 300–850). */
    score?: number;
    /** Lower bound of the score range. */
    minScore?: number;
    /** Upper bound of the score range. */
    maxScore?: number;
    /** Override the displayed central number (defaults to `score`). */
    displayValue?: string;
    /** Comparison caption beneath the score (e.g. "vs last month : 780"). */
    comparisonLabel?: string;
    /** Number of tick marks across the half-arc. */
    tickCount?: number;
    className?: string;
}

export function CreditScore({
    title = "Credit Score",
    score = 803,
    minScore = 300,
    maxScore = 850,
    displayValue,
    comparisonLabel = "vs last month : 780",
    tickCount = 80,
    className,
}: CreditScoreProps) {
    const range = Math.max(1, maxScore - minScore);
    const safe = Math.min(Math.max(score, minScore), maxScore);
    const percent = (safe - minScore) / range;
    const filledTicks = Math.round(percent * tickCount);

    // Half-arc anchored at the bottom of the widget — sweeps left → right
    // over the top, like a speedometer.
    const cx = 200;
    const cy = 200;
    const innerR = 150;
    const outerR = 180;

    const ticks = Array.from({ length: tickCount }, (_, i) => {
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

    const resolvedDisplay = displayValue ?? `${Math.round(safe)}`;

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.gaugeWrap}>
                <svg
                    viewBox="0 0 400 200"
                    className={styles.gauge}
                    role="img"
                    aria-label={`${title} ${resolvedDisplay}`}
                >
                    {ticks.map((t, i) => (
                        <line
                            key={i}
                            x1={t.x1}
                            y1={t.y1}
                            x2={t.x2}
                            y2={t.y2}
                            className={t.filled ? styles.tickFilled : styles.tickEmpty}
                            strokeWidth={2}
                            strokeLinecap="round"
                        />
                    ))}
                </svg>

                <div className={styles.center}>
                    <span className={styles.score}>{resolvedDisplay}</span>
                    {comparisonLabel && <span className={styles.comparison}>{comparisonLabel}</span>}
                </div>
            </div>
        </div>
    );
}
