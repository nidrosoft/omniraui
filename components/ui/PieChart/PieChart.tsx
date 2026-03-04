"use client";

import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/cn";
import styles from "./PieChart.module.css";

/* ══════════════════════════════════════
   Types
   ══════════════════════════════════════ */

export interface PieChartSegment {
    label: string;
    value: number;
    color?: string;
}

export interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Chart segments */
    segments: PieChartSegment[];
    /** Chart diameter */
    size?: number;
    /** Donut hole ratio (0 = solid, 0.6 = donut) */
    innerRadius?: number;
    /** Show legend */
    showLegend?: boolean;
    /** Center label (for donut charts) */
    centerLabel?: string;
    /** Center value (for donut charts) */
    centerValue?: string;
}

/* ══════════════════════════════════════
   Helpers
   ══════════════════════════════════════ */

const defaultColors = [
    "var(--color-lime)",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#ec4899",
    "#14b8a6",
];

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

/* ══════════════════════════════════════
   Component
   ══════════════════════════════════════ */

export const PieChart = forwardRef<HTMLDivElement, PieChartProps>(
    (
        {
            segments,
            size = 200,
            innerRadius = 0,
            showLegend = true,
            centerLabel,
            centerValue,
            className,
            ...props
        },
        ref
    ) => {
        const total = useMemo(() => segments.reduce((sum, s) => sum + s.value, 0), [segments]);

        const arcs = useMemo(() => {
            let current = 0;
            return segments.map((seg, i) => {
                const start = current;
                const angle = (seg.value / Math.max(total, 1)) * 360;
                current += angle;
                return {
                    ...seg,
                    color: seg.color || defaultColors[i % defaultColors.length],
                    startAngle: start,
                    endAngle: start + angle,
                    percentage: Math.round((seg.value / Math.max(total, 1)) * 100),
                };
            });
        }, [segments, total]);

        const cx = size / 2;
        const cy = size / 2;
        const outerR = size / 2 - 2;
        const innerR = outerR * innerRadius;

        return (
            <div ref={ref} className={cn(styles.root, className)} {...props}>
                <div className={styles.chartWrapper}>
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                        {arcs.map((arc, i) => {
                            if (arc.endAngle - arc.startAngle >= 359.9) {
                                // Full circle
                                return (
                                    <circle
                                        key={i}
                                        cx={cx}
                                        cy={cy}
                                        r={outerR}
                                        fill={arc.color}
                                        className={styles.segment}
                                    />
                                );
                            }

                            const outerStart = polarToCartesian(cx, cy, outerR, arc.endAngle);
                            const outerEnd = polarToCartesian(cx, cy, outerR, arc.startAngle);
                            const largeArc = arc.endAngle - arc.startAngle > 180 ? 1 : 0;

                            let d: string;
                            if (innerRadius > 0) {
                                const innerStart = polarToCartesian(cx, cy, innerR, arc.endAngle);
                                const innerEnd = polarToCartesian(cx, cy, innerR, arc.startAngle);
                                d = [
                                    `M ${outerStart.x} ${outerStart.y}`,
                                    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
                                    `L ${innerEnd.x} ${innerEnd.y}`,
                                    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${innerStart.x} ${innerStart.y}`,
                                    "Z",
                                ].join(" ");
                            } else {
                                d = [
                                    `M ${cx} ${cy}`,
                                    `L ${outerEnd.x} ${outerEnd.y}`,
                                    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerStart.x} ${outerStart.y}`,
                                    "Z",
                                ].join(" ");
                            }

                            return (
                                <path
                                    key={i}
                                    d={d}
                                    fill={arc.color}
                                    className={styles.segment}
                                />
                            );
                        })}

                        {/* Inner circle (donut hole) */}
                        {innerRadius > 0 && (
                            <circle cx={cx} cy={cy} r={innerR} fill="var(--color-bg-card)" />
                        )}
                    </svg>

                    {/* Center label for donut */}
                    {innerRadius > 0 && (centerLabel || centerValue) && (
                        <div className={styles.center}>
                            {centerValue && <span className={styles.centerValue}>{centerValue}</span>}
                            {centerLabel && <span className={styles.centerLabel}>{centerLabel}</span>}
                        </div>
                    )}
                </div>

                {/* Legend */}
                {showLegend && (
                    <div className={styles.legend}>
                        {arcs.map((arc, i) => (
                            <div key={i} className={styles.legendItem}>
                                <span className={styles.legendDot} style={{ background: arc.color }} />
                                <span className={styles.legendLabel}>{arc.label}</span>
                                <span className={styles.legendValue}>{arc.percentage}%</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

PieChart.displayName = "PieChart";
