"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./StockPosition.module.css";

export interface StockPositionProps {
    /** Logo element (image, SVG, or letter). Renders inside a white rounded square. */
    logo?: ReactNode;
    /** Asset name, e.g. "Apple". */
    name?: string;
    /** Ticker, e.g. "AAPL". */
    ticker?: string;
    /** Display price, e.g. "$5,321.35". */
    price?: string;
    /** Change percent (positive renders in success, negative in error). */
    changePercent?: number;
    /** Override change badge text. */
    changeLabel?: string;
    /** Variable-height dot bars (each value = bar height percent, 0–100). */
    bars?: number[];
    /** Maximum dots a bar can render when value === 100. */
    maxDotsPerBar?: number;
    className?: string;
}

const DEFAULT_BARS = [
    20, 35, 18, 30, 22, 50, 32, 70, 60, 45, 38, 55, 42, 25, 48, 70, 38, 50,
    60, 35, 80, 55, 65, 30, 45, 25, 38, 22, 30, 18, 45, 35, 28, 22, 18, 30,
    20, 14, 12, 10,
];

const DEFAULT_LOGO = <span className={styles.logoFallback}>A</span>;

export function StockPosition({
    logo,
    name = "Apple",
    ticker = "AAPL",
    price = "$5,321.35",
    changePercent = 13.45,
    changeLabel,
    bars = DEFAULT_BARS,
    maxDotsPerBar = 14,
    className,
}: StockPositionProps) {
    const isPositive = changePercent >= 0;
    const resolvedChange = changeLabel ?? `${isPositive ? "+" : ""}${changePercent}%`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.logo}>
                    {logo ?? DEFAULT_LOGO}
                </span>
                <div className={styles.headerText}>
                    <div className={styles.headerLeft}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.ticker}>{ticker}</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.price}>{price}</span>
                        <span className={cn(styles.change, isPositive ? styles.changeUp : styles.changeDown)}>
                            {resolvedChange}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.chart} aria-hidden="true">
                {bars.map((value, i) => {
                    const safe = Math.min(Math.max(value, 0), 100);
                    const dotCount = Math.max(1, Math.round((safe / 100) * maxDotsPerBar));
                    return (
                        <div key={i} className={styles.col}>
                            {Array.from({ length: dotCount }, (_, j) => (
                                <span key={j} className={styles.dot} />
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
