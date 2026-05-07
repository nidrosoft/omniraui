"use client";

import { cn } from "@/lib/cn";
import styles from "./SpendsBreakdown.module.css";

export interface SpendsBreakdownCategory {
    label: string;
    /** Display amount, e.g. "$2,000". */
    amount: string;
    /** CSS color used for both the legend bullet and the dots in this category's portion of the bar. */
    color: string;
    /** Relative weight used to size this category's portion of the dotted bar. */
    weight: number;
}

export interface SpendsBreakdownProps {
    title?: string;
    period?: string;
    summaryLabel?: string;
    /** Total amount, e.g. "$3,300". */
    amount?: string;
    amountDecimal?: string;
    categories?: SpendsBreakdownCategory[];
    /** Number of dots in the bar. Higher = finer resolution. */
    dotCount?: number;
    /** Number of decorative highlight blocks behind the dotted bar. Set to 0 to hide. */
    highlightBlocks?: number;
    className?: string;
}

const DEFAULT_CATEGORIES: SpendsBreakdownCategory[] = [
    { label: "Groceries", amount: "$300",   color: "var(--color-lime-gradient)", weight: 300 },
    { label: "House",     amount: "$2,000", color: "var(--color-lime)",          weight: 2000 },
    { label: "Car",       amount: "$800",   color: "var(--color-lime-hover)",    weight: 800 },
    { label: "Food",      amount: "$200",   color: "var(--color-bg-elevated)",   weight: 200 },
];

export function SpendsBreakdown({
    title = "Spends Breakdown",
    period = "Monthly",
    summaryLabel = "Total Spent this month",
    amount = "$3,300",
    amountDecimal = ".00",
    categories = DEFAULT_CATEGORIES,
    dotCount = 80,
    highlightBlocks = 4,
    className,
}: SpendsBreakdownProps) {
    const totalWeight = Math.max(1, categories.reduce((sum, c) => sum + c.weight, 0));

    const dots: string[] = [];
    for (const c of categories) {
        const count = Math.round((c.weight / totalWeight) * dotCount);
        for (let i = 0; i < count; i++) dots.push(c.color);
    }
    while (dots.length < dotCount) dots.push(categories[categories.length - 1]?.color ?? "rgba(255,255,255,0.2)");
    dots.length = dotCount;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                <span className={styles.headerPeriod}>{period}</span>
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amountLabel}>{summaryLabel}</span>
                <p className={styles.amount}>
                    <span className={styles.amountMain}>{amount}</span>
                    {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                </p>
            </div>

            <div className={styles.barWrap} aria-hidden="true">
                {highlightBlocks > 0 && (
                    <div className={styles.highlights}>
                        {Array.from({ length: highlightBlocks }, (_, i) => (
                            <span key={i} className={styles.highlight} />
                        ))}
                    </div>
                )}
                <div className={styles.bar}>
                    {dots.map((color, i) => (
                        <span key={i} className={styles.barCol}>
                            <span className={styles.dot} style={{ background: color }} />
                            <span className={styles.dot} style={{ background: color }} />
                            <span className={styles.dot} style={{ background: color }} />
                        </span>
                    ))}
                </div>
            </div>

            <ul className={styles.legend}>
                {categories.map((c, i) => (
                    <li key={i} className={styles.legendRow}>
                        <span
                            className={styles.legendBullet}
                            style={{ background: c.color, boxShadow: `0 0 6px ${c.color}66` }}
                        />
                        <span className={styles.legendLabel}>{c.label}</span>
                        <span className={styles.legendAmount}>{c.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
