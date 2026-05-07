"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SendMoneyCompact.module.css";

export interface SendMoneyCompactProps {
    title?: string;
    /** Recipient display name shown top-right next to the avatar. */
    recipientName?: string;
    /** Avatar element. Defaults to a gradient circle with the recipient's initials. */
    recipientAvatar?: ReactNode;
    /** Caption above the amount. */
    amountLabel?: string;
    amount?: string;
    buttonLabel?: string;
    onSend?: () => void;
    className?: string;
}

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase() ?? "")
        .join("");
}

export function SendMoneyCompact({
    title = "Send Money",
    recipientName = "Mike Wheeler",
    recipientAvatar,
    amountLabel = "Enter amount",
    amount = "$100.00",
    buttonLabel = "Send Money",
    onSend,
    className,
}: SendMoneyCompactProps) {
    const initials = getInitials(recipientName);

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <div className={styles.recipient}>
                    <span className={styles.recipientName}>{recipientName}</span>
                    <div className={styles.avatar} aria-hidden="true">
                        {recipientAvatar ?? <span>{initials}</span>}
                    </div>
                </div>
            </div>

            <div className={styles.amountWrap}>
                <span className={styles.amountLabel}>{amountLabel}</span>
                <p className={styles.amount}>{amount}</p>
            </div>

            <button type="button" className={styles.sendBtn} onClick={onSend}>
                {buttonLabel}
            </button>
        </div>
    );
}
