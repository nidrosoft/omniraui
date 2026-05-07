"use client";

import { cn } from "@/lib/cn";
import styles from "./TotalBalance.module.css";

export interface TotalBalanceProps {
    title?: string;
    /** Main amount, e.g. "154,520". */
    amount?: string;
    amountPrefix?: string;
    amountDecimal?: string;
    /** Right-aligned caption + value (e.g. Net Revenue). */
    secondaryLabel?: string;
    secondaryValue?: string;
    /** Sparkline data — values are normalised to fit the chart height. */
    sparkline?: number[];
    /** Indices in `sparkline` to highlight with a teal dot (peaks/troughs). */
    highlightIndices?: number[];
    className?: string;
}

const DEFAULT_SPARKLINE = [
    18, 22, 14, 24, 16, 30, 19, 26, 14, 32, 22, 18, 26, 14, 30, 22, 18, 32, 22, 14,
    26, 18, 30, 14, 24, 32, 18, 14, 28, 16, 22, 30, 18, 14, 24, 18,
];

const DEFAULT_HIGHLIGHTS = [5, 13, 21, 29];

export function TotalBalance({
    title = "Total Balance",
    amount = "154,520",
    amountPrefix,
    amountDecimal,
    secondaryLabel = "Net Revenue",
    secondaryValue = "$96,120",
    sparkline = DEFAULT_SPARKLINE,
    highlightIndices = DEFAULT_HIGHLIGHTS,
    className,
}: TotalBalanceProps) {
    // Build SVG path from sparkline values. Use a 0–100 viewBox for portability.
    const max = Math.max(...sparkline, 1);
    const min = Math.min(...sparkline, 0);
    const range = Math.max(1, max - min);
    const w = 300;
    const h = 60;
    const points = sparkline.map((v, i) => {
        const x = (i / Math.max(1, sparkline.length - 1)) * w;
        const y = h - ((v - min) / range) * h;
        return { x, y };
    });
    const pathD = points.length
        ? `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} ` +
          points.slice(1).map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ")
        : "";

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <p className={styles.amount}>
                {amountPrefix && <span className={styles.amountPrefix}>{amountPrefix}</span>}
                <span className={styles.amountMain}>{amount}</span>
                {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
            </p>

            {(secondaryLabel || secondaryValue) && (
                <div className={styles.secondary}>
                    {secondaryLabel && <span className={styles.secondaryLabel}>{secondaryLabel}</span>}
                    {secondaryValue && <span className={styles.secondaryValue}>{secondaryValue}</span>}
                </div>
            )}

            <div className={styles.chart} aria-hidden="true">
                <svg
                    viewBox={`0 0 ${w} ${h}`}
                    preserveAspectRatio="none"
                    className={styles.chartSvg}
                >
                    <path
                        d={pathD}
                        className={styles.chartLine}
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="2 2"
                        vectorEffect="non-scaling-stroke"
                    />
                    {highlightIndices
                        .filter((i) => i >= 0 && i < points.length)
                        .map((i) => (
                            <circle
                                key={i}
                                cx={points[i].x}
                                cy={points[i].y}
                                r="3"
                                className={styles.chartDot}
                                vectorEffect="non-scaling-stroke"
                            />
                        ))}
                </svg>
            </div>
        </div>
    );
}
