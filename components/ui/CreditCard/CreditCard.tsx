"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./CreditCard.module.css";

export interface CreditCardProps {
    type?: "brand-dark" | "brand-light" | "gradient" | "minimal";
    company?: string;
    cardNumber?: string;
    cardHolder?: string;
    cardExpiration?: string;
    className?: string;
}

export const CreditCard = forwardRef<HTMLDivElement, CreditCardProps>(
    (
        {
            type = "brand-dark",
            company = "Omnira.",
            cardNumber = "1234 1234 1234 1234",
            cardHolder = "CARD HOLDER",
            cardExpiration = "00/00",
            className,
        },
        ref,
    ) => {
        const last4 = cardNumber.replace(/\s/g, "").slice(-4);
        const masked = `**** **** **** ${last4}`;

        return (
            <div ref={ref} className={cn(styles.card, styles[`card_${type}`], className)}>
                {/* Background pattern */}
                <div className={styles.pattern} />

                {/* Top row: company + chip */}
                <div className={styles.top}>
                    <span className={styles.company}>{company}</span>
                    <ChipIcon />
                </div>

                {/* Card number */}
                <div className={styles.number}>{masked}</div>

                {/* Bottom row: holder + expiry + network */}
                <div className={styles.bottom}>
                    <div className={styles.field}>
                        <span className={styles.fieldLabel}>Card Holder</span>
                        <span className={styles.fieldValue}>{cardHolder}</span>
                    </div>
                    <div className={styles.field}>
                        <span className={styles.fieldLabel}>Expires</span>
                        <span className={styles.fieldValue}>{cardExpiration}</span>
                    </div>
                    <div className={styles.network}>
                        <CardNetworkIcon />
                    </div>
                </div>
            </div>
        );
    },
);

CreditCard.displayName = "CreditCard";

/* ── Inline SVG Icons ── */
function ChipIcon() {
    return (
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className={styles.chip}>
            <rect x="0.5" y="0.5" width="35" height="27" rx="4" fill="rgba(255,215,0,0.25)" stroke="rgba(255,215,0,0.4)" />
            <line x1="0" y1="10" x2="36" y2="10" stroke="rgba(255,215,0,0.3)" strokeWidth="0.5" />
            <line x1="0" y1="18" x2="36" y2="18" stroke="rgba(255,215,0,0.3)" strokeWidth="0.5" />
            <line x1="12" y1="0" x2="12" y2="28" stroke="rgba(255,215,0,0.3)" strokeWidth="0.5" />
            <line x1="24" y1="0" x2="24" y2="28" stroke="rgba(255,215,0,0.3)" strokeWidth="0.5" />
        </svg>
    );
}

function CardNetworkIcon() {
    return (
        <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
            <circle cx="15" cy="13" r="12" fill="rgba(255,255,255,0.25)" />
            <circle cx="25" cy="13" r="12" fill="rgba(255,255,255,0.2)" />
        </svg>
    );
}
