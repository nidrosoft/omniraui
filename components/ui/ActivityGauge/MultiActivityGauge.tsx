import { cn } from "@/lib/cn";
import styles from "./ActivityGauge.module.css";

/* ── Types ── */

export type MultiGaugeColor = "lime" | "info" | "warning" | "error" | "success";

export interface RingData {
    value: number;
    max?: number;
    label: string;
}

export interface MultiActivityGaugeProps {
    rings: RingData[];
    centerLabel?: string;
    centerValue?: string | number;
    color?: MultiGaugeColor;
    size?: number;
    strokeWidth?: number;
    gap?: number;
    showLegend?: boolean;
    className?: string;
}

/* ── Color shades (dark → medium → light for each base color) ── */

const COLOR_SHADES: Record<MultiGaugeColor, string[]> = {
    lime: [
        "var(--color-lime)",
        "rgba(163, 230, 53, 0.6)",
        "rgba(163, 230, 53, 0.3)",
    ],
    info: [
        "var(--color-info)",
        "rgba(96, 165, 250, 0.6)",
        "rgba(96, 165, 250, 0.3)",
    ],
    warning: [
        "var(--color-warning)",
        "rgba(251, 191, 36, 0.6)",
        "rgba(251, 191, 36, 0.3)",
    ],
    error: [
        "var(--color-error)",
        "rgba(248, 113, 113, 0.6)",
        "rgba(248, 113, 113, 0.3)",
    ],
    success: [
        "var(--color-success)",
        "rgba(74, 222, 128, 0.6)",
        "rgba(74, 222, 128, 0.3)",
    ],
};

/* ── Component ── */

export function MultiActivityGauge({
    rings,
    centerLabel,
    centerValue,
    color = "lime",
    size = 180,
    strokeWidth = 10,
    gap = 4,
    showLegend = true,
    className,
}: MultiActivityGaugeProps) {
    const shades = COLOR_SHADES[color];
    const ringCount = Math.min(rings.length, 3);

    return (
        <div className={cn(styles.gaugeCard, className)}>
            <div className={styles.gaugeWrapper} style={{ width: size, height: size }}>
                <svg
                    className={styles.gaugeSvg}
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                >
                    {rings.slice(0, 3).map((ring, i) => {
                        const ringRadius =
                            (size - strokeWidth) / 2 - i * (strokeWidth + gap);
                        const circumference = 2 * Math.PI * ringRadius;
                        const percentage = Math.min(ring.value / (ring.max ?? 100), 1);
                        const offset = circumference * (1 - percentage);

                        return (
                            <g key={i}>
                                {/* Track */}
                                <circle
                                    className={styles.gaugeTrack}
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={ringRadius}
                                    strokeWidth={strokeWidth}
                                />
                                {/* Fill */}
                                <circle
                                    className={styles.gaugeFill}
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={ringRadius}
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    style={{ stroke: shades[i] }}
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* Center text */}
                <div className={styles.gaugeCenter}>
                    {centerLabel && (
                        <span className={styles.multiCenterLabel}>{centerLabel}</span>
                    )}
                    {centerValue !== undefined && (
                        <span className={styles.gaugeValue}>{centerValue}</span>
                    )}
                </div>
            </div>

            {/* Legend */}
            {showLegend && (
                <div className={styles.legend}>
                    {rings.slice(0, 3).map((ring, i) => (
                        <div key={i} className={styles.legendItem}>
                            <span
                                className={styles.legendDot}
                                style={{ background: shades[i] }}
                            />
                            <span className={styles.legendText}>{ring.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
