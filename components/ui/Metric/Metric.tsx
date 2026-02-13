import { cn } from "@/lib/cn";
import styles from "./Metric.module.css";

/* ── Types ── */

export interface MetricProps {
    label: string;
    value: string;
    change?: {
        value: string;
        direction: "up" | "down";
    };
    description?: string;
    icon?: React.ReactNode;
    progress?: {
        value: number;
        label?: string;
        max?: string;
    };
    className?: string;
}

/* ── Component ── */

export function Metric({
    label,
    value,
    change,
    description,
    icon,
    progress,
    className,
}: MetricProps) {
    return (
        <div className={cn(styles.metricCard, className)}>
            <div className={styles.header}>
                <span className={styles.label}>{label}</span>
                {icon && <div className={styles.iconWrapper}>{icon}</div>}
            </div>

            <div className={styles.valueRow}>
                <span className={styles.value}>{value}</span>
                {change && (
                    <span
                        className={cn(
                            styles.change,
                            change.direction === "up" ? styles.changeUp : styles.changeDown,
                        )}
                    >
                        <span className={styles.changeArrow}>
                            {change.direction === "up" ? "↑" : "↓"}
                        </span>
                        {change.value}
                    </span>
                )}
            </div>

            {description && <p className={styles.description}>{description}</p>}

            {progress && (
                <div className={styles.progressWrapper}>
                    <div className={styles.progressTrack}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${Math.min(progress.value, 100)}%` }}
                        />
                    </div>
                    {(progress.label || progress.max) && (
                        <div className={styles.progressLabel}>
                            <span>{progress.label ?? `${progress.value}%`}</span>
                            {progress.max && <span>{progress.max}</span>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
