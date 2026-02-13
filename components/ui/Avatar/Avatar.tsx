"use client";

import { useState, forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Avatar.module.css";

export interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    shape?: "circle" | "rounded";
    status?: "online" | "offline" | "away" | "busy";
    className?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    (
        {
            src,
            alt = "",
            fallback,
            size = "md",
            shape = "circle",
            status,
            className,
        },
        ref,
    ) => {
        const [imgError, setImgError] = useState(false);

        const initials = fallback
            ? fallback
            : alt
                ? alt
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                : "?";

        return (
            <div
                ref={ref}
                className={cn(
                    styles.avatar,
                    styles[`avatar_${size}`],
                    styles[`avatar_${shape}`],
                    className,
                )}
            >
                {src && !imgError ? (
                    <img
                        src={src}
                        alt={alt}
                        className={styles.img}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className={styles.fallback}>{initials}</span>
                )}
                {status && (
                    <span
                        className={cn(
                            styles.status,
                            styles[`status_${status}`],
                            styles[`statusPos_${size}`],
                        )}
                    />
                )}
            </div>
        );
    },
);

Avatar.displayName = "Avatar";

/* ── Avatar Group ── */
export interface AvatarGroupProps {
    children: React.ReactNode;
    max?: number;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
}

export function AvatarGroup({ children, max, size = "md", className }: AvatarGroupProps) {
    const items = Array.isArray(children) ? children : [children];
    const visible = max ? items.slice(0, max) : items;
    const remaining = max ? items.length - max : 0;

    return (
        <div className={cn(styles.group, className)}>
            {visible}
            {remaining > 0 && (
                <div className={cn(styles.avatar, styles[`avatar_${size}`], styles.avatar_circle, styles.overflow)}>
                    <span className={styles.fallback}>+{remaining}</span>
                </div>
            )}
        </div>
    );
}
