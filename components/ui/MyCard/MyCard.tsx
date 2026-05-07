"use client";

import { Add, ArrowSwapHorizontal, Refresh } from "iconsax-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./MyCard.module.css";

export interface MyCardAction {
    /** Icon shown to the left of the label. */
    icon: ReactNode;
    label: string;
    onClick?: () => void;
}

export interface MyCardProps {
    title?: string;
    /** Right-aligned badge in the header. Pass a flag image, country code, or any node. */
    badge?: ReactNode;
    /** Main amount, e.g. "$2.762". */
    amount?: string;
    /** Currency / unit caption beneath the amount. */
    currency?: string;
    /** Up to 3 actions recommended for the medium footprint. */
    actions?: MyCardAction[];
    className?: string;
}

const DEFAULT_BADGE = (
    <span className={styles.flagDefault} aria-hidden="true">
        <span className={styles.flagStripe} />
        <span className={styles.flagStripe} />
        <span className={styles.flagStripe} />
    </span>
);

export function MyCard({
    title = "My Card",
    badge,
    amount = "$2,762",
    currency = "USD",
    actions,
    className,
}: MyCardProps) {
    const resolvedActions: MyCardAction[] = actions ?? [
        { icon: <Add size={14} variant="Linear" color="currentColor" />, label: "Add Money" },
        { icon: <ArrowSwapHorizontal size={14} variant="Linear" color="currentColor" />, label: "Transfer" },
        { icon: <Refresh size={14} variant="Linear" color="currentColor" />, label: "Convert" },
    ];

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <span className={styles.badge}>{badge ?? DEFAULT_BADGE}</span>
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amount}>{amount}</span>
                {currency && <span className={styles.currency}>{currency}</span>}
            </div>

            <div className={styles.actions}>
                {resolvedActions.map((a, i) => (
                    <button
                        key={i}
                        type="button"
                        className={styles.action}
                        onClick={a.onClick}
                    >
                        <span className={styles.actionIcon} aria-hidden="true">{a.icon}</span>
                        <span className={styles.actionLabel}>{a.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
