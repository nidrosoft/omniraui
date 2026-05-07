"use client";

import { Wallet3, Coin1, ArrowRight2 } from "iconsax-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SendMoney.module.css";

export interface SendMoneyRow {
    icon?: ReactNode;
    label: string;
    value: string;
}

export interface SendMoneyProps {
    title?: string;
    recipientLabel?: string;
    recipientName?: string;
    /** Avatar element. Defaults to a gradient circle with the recipient's initials. */
    recipientAvatar?: ReactNode;
    /** Main amount, rendered in display type. */
    amount?: string;
    /** Optional currency / unit suffix shown small after the amount. */
    amountSuffix?: string;
    rows?: SendMoneyRow[];
    buttonLabel?: string;
    onTransfer?: () => void;
    className?: string;
}

const DEFAULT_ROWS: SendMoneyRow[] = [
    { icon: <Wallet3 size={14} variant="Linear" color="currentColor" />, label: "Balance", value: "$12,000" },
    { icon: <Coin1 size={14} variant="Linear" color="currentColor" />, label: "Tax", value: "$3,50" },
];

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase() ?? "")
        .join("");
}

export function SendMoney({
    title = "Send Money",
    recipientLabel = "Sending to",
    recipientName = "Mike Wheeler",
    recipientAvatar,
    amount = "154,520",
    amountSuffix,
    rows = DEFAULT_ROWS,
    buttonLabel = "Swipe to Transfer",
    onTransfer,
    className,
}: SendMoneyProps) {
    const initials = getInitials(recipientName);

    return (
        <div className={cn(styles.widget, className)}>
            <span className={styles.title}>{title}</span>

            <div className={styles.recipient}>
                <div className={styles.avatar} aria-hidden="true">
                    {recipientAvatar ?? <span>{initials}</span>}
                </div>
                <span className={styles.recipientLabel}>{recipientLabel}</span>
                <span className={styles.recipientName}>{recipientName}</span>
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amount}>{amount}</span>
                {amountSuffix && <span className={styles.amountSuffix}>{amountSuffix}</span>}
            </div>

            <ul className={styles.rows}>
                {rows.map((row, i) => (
                    <li key={i} className={styles.row}>
                        {row.icon && <span className={styles.rowIcon}>{row.icon}</span>}
                        <span className={styles.rowLabel}>{row.label}</span>
                        <span className={styles.rowValue}>{row.value}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.transfer}>
                <button
                    type="button"
                    className={styles.transferBtn}
                    onClick={onTransfer}
                    aria-label={buttonLabel}
                >
                    <ArrowRight2 size={16} variant="Bold" color="currentColor" />
                </button>
                <span className={styles.transferLabel}>{buttonLabel}</span>
            </div>
        </div>
    );
}
