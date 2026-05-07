"use client";

import { cn } from "@/lib/cn";
import styles from "./AssetAllocation.module.css";

export interface AssetAllocationSegment {
    label: string;
    /** Share percent of the pie (0–100). Segment percents should sum to 100. */
    percent: number;
    /** CSS color used for the pie slice and the legend bullet. */
    color: string;
}

export interface AssetAllocationProps {
    title?: string;
    /** Total amount centered in the pie, e.g. "$13,420". */
    amount?: string;
    segments?: AssetAllocationSegment[];
    className?: string;
}

const DEFAULT_SEGMENTS: AssetAllocationSegment[] = [
    { label: "Crypto",       percent: 7.5,  color: "var(--color-lime-gradient)" },
    { label: "Mutual Funds", percent: 25.5, color: "var(--color-lime-hover)" },
    { label: "Cash",         percent: 67,   color: "var(--color-lime)" },
];

/** Generate an SVG path for a pie slice from `startPct` → `endPct` (0–100). */
function pieSlicePath(cx: number, cy: number, r: number, startPct: number, endPct: number): string {
    if (endPct - startPct >= 100) {
        // Full circle — draw two half-arcs to avoid the degenerate same-point issue.
        return `M ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} Z`;
    }
    const startAngle = (startPct / 100) * 360 - 90;
    const endAngle = (endPct / 100) * 360 - 90;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = endPct - startPct > 50 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export function AssetAllocation({
    title = "Asset Class Allocation",
    amount = "$13,420",
    segments = DEFAULT_SEGMENTS,
    className,
}: AssetAllocationProps) {
    const total = Math.max(1, segments.reduce((sum, s) => sum + s.percent, 0));
    let runningPct = 0;
    const slices = segments.map((s) => {
        const startPct = runningPct;
        const endPct = runningPct + (s.percent / total) * 100;
        runningPct = endPct;
        return { ...s, path: pieSlicePath(50, 50, 44, startPct, endPct) };
    });

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.body}>
                <div className={styles.pieWrap}>
                    <svg viewBox="0 0 100 100" className={styles.pie} aria-hidden="true">
                        {slices.map((s, i) => (
                            <path key={i} d={s.path} fill={s.color} />
                        ))}
                        {/* Larger hole = thinner visible ring + more room for the central amount. */}
                        <circle cx="50" cy="50" r="34" className={styles.pieHole} />
                    </svg>
                    <span className={styles.pieAmount}>{amount}</span>
                </div>

                <ul className={styles.legend}>
                    {segments.map((s, i) => (
                        <li key={i} className={styles.legendRow}>
                            <span className={styles.legendLabel}>{s.label}</span>
                            <span className={styles.legendPercent}>{s.percent}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
