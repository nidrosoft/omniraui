import { cn } from "@/lib/cn";
import styles from "./ActivityGauge.module.css";

/* ── Types ── */

export type GaugeColor = "lime" | "info" | "warning" | "error" | "success";

export interface ActivityGaugeProps {
    value: number;
    max?: number;
    label?: string;
    description?: string;
    unit?: string;
    color?: GaugeColor;
    size?: number;
    strokeWidth?: number;
    className?: string;
}

/* ── Helpers ── */

function getColorClass(color: GaugeColor) {
    switch (color) {
        case "lime": return styles.gaugeFillLime;
        case "info": return styles.gaugeFillInfo;
        case "warning": return styles.gaugeFillWarning;
        case "error": return styles.gaugeFillError;
        case "success": return styles.gaugeFillSuccess;
        default: return styles.gaugeFillLime;
    }
}

/* ── Component ── */

export function ActivityGauge({
    value,
    max = 100,
    label,
    description,
    unit = "%",
    color = "lime",
    size = 140,
    strokeWidth = 10,
    className,
}: ActivityGaugeProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(value / max, 1);
    const offset = circumference * (1 - percentage);
    const displayValue = unit === "%" ? Math.round(percentage * 100) : value;

    return (
        <div className={cn(styles.gaugeCard, className)}>
            <div className={styles.gaugeWrapper} style={{ width: size, height: size }}>
                <svg
                    className={styles.gaugeSvg}
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                >
                    <circle
                        className={styles.gaugeTrack}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        className={cn(styles.gaugeFill, getColorClass(color))}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>
                <div className={styles.gaugeCenter}>
                    <span className={styles.gaugeValue}>{displayValue}</span>
                    <span className={styles.gaugeUnit}>{unit}</span>
                </div>
            </div>
            {label && <span className={styles.gaugeLabel}>{label}</span>}
            {description && <span className={styles.gaugeDescription}>{description}</span>}
        </div>
    );
}
