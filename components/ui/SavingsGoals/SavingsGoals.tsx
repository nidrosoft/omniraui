"use client";

import { Heart, House, Car } from "iconsax-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SavingsGoals.module.css";

export interface SavingsGoalItem {
    icon: ReactNode;
    label: string;
    /** Right-side amount, e.g. "$8,000". */
    amount: string;
    /** Progress toward the goal, 0–100. Drives the dotted bar fill. */
    percent: number;
}

export interface SavingsGoalsProps {
    title?: string;
    summaryLabel?: string;
    /** Total balance / amount label. */
    amount?: string;
    amountDecimal?: string;
    items?: SavingsGoalItem[];
    /** Number of dots in each progress bar. Higher = finer resolution. */
    dotCount?: number;
    className?: string;
}

const DEFAULT_ITEMS: SavingsGoalItem[] = [
    { icon: <Heart size={18} variant="Linear" color="currentColor" />, label: "Wedding",      amount: "$8,000",  percent: 65 },
    { icon: <House size={18} variant="Linear" color="currentColor" />, label: "Buying House", amount: "$10,000", percent: 40 },
    { icon: <Car   size={18} variant="Linear" color="currentColor" />, label: "Car",          amount: "$2,000",  percent: 80 },
];

export function SavingsGoals({
    title = "Savings",
    summaryLabel = "Total amount",
    amount = "$13,300",
    amountDecimal = ".00",
    items = DEFAULT_ITEMS,
    dotCount = 56,
    className,
}: SavingsGoalsProps) {
    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.summary}>
                <span className={styles.summaryLabel}>{summaryLabel}</span>
                <p className={styles.summaryAmount}>
                    <span className={styles.amountMain}>{amount}</span>
                    {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                </p>
            </div>

            <ul className={styles.list}>
                {items.map((item, i) => {
                    const safe = Math.min(Math.max(item.percent, 0), 100);
                    const filled = Math.round((safe / 100) * dotCount);
                    return (
                        <li key={i} className={styles.row}>
                            <span className={styles.iconWrap} aria-hidden="true">
                                {item.icon}
                            </span>
                            <div className={styles.rowBody}>
                                <div className={styles.rowHeader}>
                                    <span className={styles.rowLabel}>{item.label}</span>
                                    <span className={styles.rowAmount}>{item.amount}</span>
                                </div>
                                <div className={styles.bar} aria-hidden="true">
                                    {Array.from({ length: dotCount }, (_, j) => (
                                        <span
                                            key={j}
                                            className={cn(
                                                styles.dot,
                                                j < filled ? styles.dotFilled : styles.dotEmpty,
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
