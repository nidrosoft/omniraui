"use client";

import { cn } from "@/lib/cn";
import styles from "./CashflowRing.module.css";

export interface CashflowRingProps {
    title?: string;
    /** Current rate as a percentage (0–100). Drives the ring fill. */
    value?: number;
    /** Override the central display number (defaults to formatted `value`). */
    displayValue?: string;
    /** Comparison caption beneath the value (e.g. "vs last month : 80.3%"). */
    comparisonLabel?: string;
    /** Number of tick marks around the ring. */
    tickCount?: number;
    className?: string;
}

export function CashflowRing({
    title = "Cashflow Analytics",
    value = 83.6,
    displayValue,
    comparisonLabel = "vs last month : 80.3%",
    tickCount = 80,
    className,
}: CashflowRingProps) {
    const safe = Math.min(Math.max(value, 0), 100);
    const filledTicks = Math.round((safe / 100) * tickCount);

    const integer = Math.floor(safe);
    const decimal = Math.round((safe - integer) * 10);
    const resolvedDisplay = displayValue ?? `${integer},${decimal}`;

    // Ring centered in viewBox. The SVG itself is positioned so its centre
    // lines up with the widget's right edge — half the ring sits inside the
    // widget, half overflows past the right edge and gets clipped.
    const cx = 100;
    const cy = 100;
    const innerR = 78;
    const outerR = 92;

    const ticks = Array.from({ length: tickCount }, (_, i) => {
        const angle = (i / tickCount) * Math.PI * 2 - Math.PI / 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
            x1: cx + innerR * cos,
            y1: cy + innerR * sin,
            x2: cx + outerR * cos,
            y2: cy + outerR * sin,
            filled: i < filledTicks,
        };
    });

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.left}>
                <span className={styles.title}>{title}</span>
                <div className={styles.stats}>
                    <p className={styles.value}>
                        <span className={styles.valueNumber}>{resolvedDisplay}</span>
                        <span className={styles.valueUnit}>%</span>
                    </p>
                    {comparisonLabel && <span className={styles.comparison}>{comparisonLabel}</span>}
                </div>
            </div>

            <svg viewBox="0 0 200 200" className={styles.ring} aria-hidden="true">
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
        </div>
    );
}
