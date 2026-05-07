"use client";

import { InfoCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import styles from "./CashflowAnalytics.module.css";

export interface CashflowAnalyticsProps {
    title?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    /** Current rate as a percentage (0–100). */
    value?: number;
    /** Change vs comparison period. Positive = up, negative = down. */
    changePercent?: number;
    comparisonLabel?: string;
    /** Previous period value rendered after the comparison label. */
    comparisonValue?: number;
    footerText?: string;
    /** Number of tick marks around the gauge ring. Higher = denser. */
    tickCount?: number;
    className?: string;
}

const DEFAULTS = {
    title: "Cashflow Analytics",
    ctaLabel: "See All",
    value: 83.6,
    changePercent: 2.8,
    comparisonLabel: "vs last month",
    comparisonValue: 80.3,
    footerText: "Reporting rate for reported active capital project",
    tickCount: 96,
} as const;

export function CashflowAnalytics({
    title = DEFAULTS.title,
    ctaLabel = DEFAULTS.ctaLabel,
    onCtaClick,
    value = DEFAULTS.value,
    changePercent = DEFAULTS.changePercent,
    comparisonLabel = DEFAULTS.comparisonLabel,
    comparisonValue = DEFAULTS.comparisonValue,
    footerText = DEFAULTS.footerText,
    tickCount = DEFAULTS.tickCount,
    className,
}: CashflowAnalyticsProps) {
    const safeValue = Math.min(Math.max(value, 0), 100);
    const filledTicks = Math.round((safeValue / 100) * tickCount);
    const isPositive = changePercent >= 0;

    const integer = Math.floor(safeValue);
    const decimal = Math.round((safeValue - integer) * 10);
    const valueDisplay = `${integer},${decimal}`;

    const center = 130;
    const innerR = 102;
    const outerR = 128;
    const ticks = Array.from({ length: tickCount }, (_, i) => {
        const angle = (i / tickCount) * Math.PI * 2 - Math.PI / 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
            x1: center + innerR * cos,
            y1: center + innerR * sin,
            x2: center + outerR * cos,
            y2: center + outerR * sin,
            filled: i < filledTicks,
        };
    });

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                {onCtaClick ? (
                    <button type="button" className={styles.headerCta} onClick={onCtaClick}>
                        {ctaLabel}
                    </button>
                ) : (
                    <span className={styles.headerCta}>{ctaLabel}</span>
                )}
            </div>

            <div className={styles.chart}>
                <svg
                    viewBox="0 0 260 260"
                    className={styles.gauge}
                    role="img"
                    aria-label={`${title} ${valueDisplay} percent`}
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
                    <span
                        className={cn(
                            styles.change,
                            isPositive ? styles.changeUp : styles.changeDown
                        )}
                    >
                        {isPositive ? "+" : ""}
                        {changePercent}%
                    </span>
                    <p className={styles.value}>
                        <span className={styles.valueNumber}>{valueDisplay}</span>
                        <span className={styles.valueUnit}>%</span>
                    </p>
                    <span className={styles.comparison}>
                        {comparisonLabel} : {comparisonValue}%
                    </span>
                </div>
            </div>

            <div className={styles.footer}>
                <span className={styles.footerIcon} aria-hidden="true">
                    <InfoCircle size={12} variant="Bulk" color="currentColor" />
                </span>
                <span className={styles.footerText}>{footerText}</span>
            </div>
        </div>
    );
}
