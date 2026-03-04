"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./ActivityFeed.module.css";

/* ── Types ── */

export interface ActivityFeedItem {
    id: string;
    /** User display name */
    user: string;
    /** Avatar URL (falls back to initials) */
    avatar?: string;
    /** Event content — plain text or ReactNode */
    content: React.ReactNode;
    /** Timestamp label (e.g. "2 hours ago") */
    timestamp: string;
    /** Optional icon (replaces avatar dot) */
    icon?: React.ReactNode;
    /** Icon background color */
    iconBg?: string;
    /** Event type for styling */
    type?: "default" | "comment" | "status" | "assignment" | "commit";
}

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ActivityFeedItem[];
    /** Visual variant */
    variant?: "default" | "compact" | "card";
}

/* ── Helpers ── */

function getInitials(name: string) {
    return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

/* ── Component ── */

export const ActivityFeed = forwardRef<HTMLDivElement, ActivityFeedProps>(
    ({ items, variant = "default", className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(styles.root, styles[variant], className)}
                {...props}
            >
                {items.map((item, i) => (
                    <div key={item.id} className={styles.item}>
                        {/* Timeline column */}
                        <div className={styles.timeline}>
                            {item.icon ? (
                                <div
                                    className={styles.iconBubble}
                                    style={item.iconBg ? { background: item.iconBg } : undefined}
                                >
                                    {item.icon}
                                </div>
                            ) : item.avatar ? (
                                <img
                                    src={item.avatar}
                                    alt={item.user}
                                    className={styles.avatar}
                                />
                            ) : (
                                <div className={styles.avatarFallback}>
                                    {getInitials(item.user)}
                                </div>
                            )}
                            {i < items.length - 1 && <div className={styles.connector} />}
                        </div>

                        {/* Content column */}
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.userName}>{item.user}</span>
                                <span className={styles.timestamp}>{item.timestamp}</span>
                            </div>
                            <div className={styles.body}>{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
);

ActivityFeed.displayName = "ActivityFeed";
