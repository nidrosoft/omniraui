"use client";

import { cn } from "@/lib/cn";
import styles from "./ProgressBar.module.css";

/* ── Linear Progress Bar ── */
export interface ProgressBarProps {
    min?: number;
    max?: number;
    value: number;
    label?: string;
    /** Where to display the percentage text */
    textPosition?: "right" | "bottom" | "top-floating" | "bottom-floating" | "none";
    size?: "sm" | "md" | "lg";
    color?: "lime" | "blue" | "red" | "orange";
    className?: string;
}

export function ProgressBar({
    min = 0,
    max = 100,
    value,
    label,
    textPosition = "right",
    size = "md",
    color = "lime",
    className,
}: ProgressBarProps) {
    const pct = Math.round(((value - min) / (max - min)) * 100);
    const clampedPct = Math.max(0, Math.min(100, pct));

    return (
        <div className={cn(styles.wrapper, styles[`wrapper_${textPosition}`], className)}>
            {label && <span className={styles.label}>{label}</span>}

            {textPosition === "top-floating" && (
                <div className={styles.floatingWrap}>
                    <div className={styles.floatingBubble} style={{ left: `${clampedPct}%` }}>
                        {clampedPct}%
                    </div>
                </div>
            )}

            <div className={styles.barRow}>
                <div
                    className={cn(styles.track, styles[`track_${size}`])}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={min}
                    aria-valuemax={max}
                >
                    <div
                        className={cn(styles.fill, styles[`fill_${color}`])}
                        style={{ width: `${clampedPct}%` }}
                    />
                </div>
                {textPosition === "right" && (
                    <span className={styles.textRight}>{clampedPct}%</span>
                )}
            </div>

            {textPosition === "bottom" && (
                <span className={styles.textBottom}>{clampedPct}%</span>
            )}

            {textPosition === "bottom-floating" && (
                <div className={styles.floatingWrap}>
                    <div className={cn(styles.floatingBubble, styles.floatingBubbleBottom)} style={{ left: `${clampedPct}%` }}>
                        {clampedPct}%
                    </div>
                </div>
            )}
        </div>
    );
}

/* ── Circle Progress Bar ── */
export interface ProgressBarCircleProps {
    min?: number;
    max?: number;
    value: number;
    label?: string;
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    color?: "lime" | "blue" | "red" | "orange";
    className?: string;
}

const circleSizes: Record<string, { dim: number; stroke: number; fontSize: number }> = {
    xxs: { dim: 48, stroke: 4, fontSize: 11 },
    xs: { dim: 64, stroke: 5, fontSize: 13 },
    sm: { dim: 96, stroke: 6, fontSize: 16 },
    md: { dim: 128, stroke: 8, fontSize: 20 },
    lg: { dim: 160, stroke: 10, fontSize: 24 },
};

export function ProgressBarCircle({
    min = 0,
    max = 100,
    value,
    label,
    size = "sm",
    color = "lime",
    className,
}: ProgressBarCircleProps) {
    const pct = Math.round(((value - min) / (max - min)) * 100);
    const clampedPct = Math.max(0, Math.min(100, pct));
    const cfg = circleSizes[size];
    const r = (cfg.dim - cfg.stroke) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (clampedPct / 100) * circ;

    return (
        <div className={cn(styles.circleWrap, className)} style={{ width: cfg.dim, height: cfg.dim }}>
            <svg width={cfg.dim} height={cfg.dim} viewBox={`0 0 ${cfg.dim} ${cfg.dim}`}>
                <circle
                    cx={cfg.dim / 2}
                    cy={cfg.dim / 2}
                    r={r}
                    fill="none"
                    className={styles.circleTrack}
                    strokeWidth={cfg.stroke}
                    strokeLinecap="round"
                />
                <circle
                    cx={cfg.dim / 2}
                    cy={cfg.dim / 2}
                    r={r}
                    fill="none"
                    className={cn(styles.circleFill, styles[`fill_${color}`])}
                    strokeWidth={cfg.stroke}
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${cfg.dim / 2} ${cfg.dim / 2})`}
                />
            </svg>
            <div className={styles.circleText} style={{ fontSize: cfg.fontSize }}>
                <span className={styles.circlePct}>{clampedPct}%</span>
                {label && <span className={styles.circleLabel} style={{ fontSize: Math.max(9, cfg.fontSize - 4) }}>{label}</span>}
            </div>
        </div>
    );
}

/* ── Half Circle Progress Bar ── */
export interface ProgressBarHalfCircleProps {
    min?: number;
    max?: number;
    value: number;
    label?: string;
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    color?: "lime" | "blue" | "red" | "orange";
    className?: string;
}

const halfSizes: Record<string, { w: number; h: number; stroke: number; fontSize: number }> = {
    xxs: { w: 64, h: 36, stroke: 4, fontSize: 11 },
    xs: { w: 88, h: 48, stroke: 5, fontSize: 13 },
    sm: { w: 128, h: 68, stroke: 6, fontSize: 16 },
    md: { w: 168, h: 88, stroke: 8, fontSize: 20 },
    lg: { w: 208, h: 108, stroke: 10, fontSize: 24 },
};

export function ProgressBarHalfCircle({
    min = 0,
    max = 100,
    value,
    label,
    size = "sm",
    color = "lime",
    className,
}: ProgressBarHalfCircleProps) {
    const pct = Math.round(((value - min) / (max - min)) * 100);
    const clampedPct = Math.max(0, Math.min(100, pct));
    const cfg = halfSizes[size];
    const r = (cfg.w - cfg.stroke) / 2;
    const halfCirc = Math.PI * r;
    const offset = halfCirc - (clampedPct / 100) * halfCirc;

    return (
        <div className={cn(styles.halfWrap, className)} style={{ width: cfg.w, height: cfg.h }}>
            <svg width={cfg.w} height={cfg.h} viewBox={`0 0 ${cfg.w} ${cfg.h}`} overflow="visible">
                <path
                    d={`M ${cfg.stroke / 2} ${cfg.h} A ${r} ${r} 0 0 1 ${cfg.w - cfg.stroke / 2} ${cfg.h}`}
                    fill="none"
                    className={styles.circleTrack}
                    strokeWidth={cfg.stroke}
                    strokeLinecap="round"
                />
                <path
                    d={`M ${cfg.stroke / 2} ${cfg.h} A ${r} ${r} 0 0 1 ${cfg.w - cfg.stroke / 2} ${cfg.h}`}
                    fill="none"
                    className={cn(styles.circleFill, styles[`fill_${color}`])}
                    strokeWidth={cfg.stroke}
                    strokeDasharray={halfCirc}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <div className={styles.halfText} style={{ bottom: 0 }}>
                <span className={styles.circlePct} style={{ fontSize: cfg.fontSize }}>{clampedPct}%</span>
                {label && <span className={styles.circleLabel} style={{ fontSize: Math.max(9, cfg.fontSize - 4) }}>{label}</span>}
            </div>
        </div>
    );
}
