"use client";

import { cn } from "@/lib/cn";
import styles from "./MonthlySubscription.module.css";

export interface MonthlySubscriptionService {
    /** Display label for the service (used as initials when avatar is omitted). */
    name: string;
    /** Optional avatar element (image, SVG, etc.). Defaults to a colored circle with initials. */
    avatar?: React.ReactNode;
    /** Optional tinted background for the default initials avatar. */
    color?: string;
}

export interface MonthlySubscriptionProps {
    title?: string;
    /** Change percent (e.g. 2.45 → "+2.45%"). Positive renders in success, negative in error. */
    changePercent?: number;
    /** Override the change badge text outright. */
    changeLabel?: string;
    summaryLabel?: string;
    amount?: string;
    amountDecimal?: string;
    /** Right-side stack of service avatars. */
    services?: MonthlySubscriptionService[];
    className?: string;
}

const DEFAULT_SERVICES: MonthlySubscriptionService[] = [
    { name: "Spotify",  color: "#1ed760" },
    { name: "Netflix",  color: "#e50914" },
    { name: "TikTok",   color: "#69c9d0" },
];

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 1)
        .map((n) => n[0]?.toUpperCase() ?? "")
        .join("");
}

export function MonthlySubscription({
    title = "Monthly Subscription",
    changePercent = 2.45,
    changeLabel,
    summaryLabel = "Total Amount Saved",
    amount = "$14,212",
    amountDecimal = ".00",
    services = DEFAULT_SERVICES,
    className,
}: MonthlySubscriptionProps) {
    const isPositive = changePercent >= 0;
    const resolvedChangeLabel = changeLabel ?? `${isPositive ? "+" : ""}${changePercent}%`;

    return (
        <div className={cn(styles.widget, className)}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>{title}</span>
                <span className={cn(styles.change, isPositive ? styles.changeUp : styles.changeDown)}>
                    {resolvedChangeLabel}
                </span>
            </div>

            <div className={styles.body}>
                <div className={styles.amountWrap}>
                    <span className={styles.summaryLabel}>{summaryLabel}</span>
                    <p className={styles.amount}>
                        <span className={styles.amountMain}>{amount}</span>
                        {amountDecimal && <span className={styles.amountDecimal}>{amountDecimal}</span>}
                    </p>
                </div>

                <div className={styles.services} aria-hidden="true">
                    {services.map((service, i) => (
                        <span
                            key={i}
                            className={styles.serviceAvatar}
                            style={{
                                ["--bg" as string]: service.color ?? "var(--color-bg-elevated)",
                                zIndex: services.length - i,
                            }}
                        >
                            {service.avatar ?? getInitials(service.name)}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
