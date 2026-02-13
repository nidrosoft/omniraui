"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import { ArrowRight2 } from "iconsax-react";
import styles from "./BadgeGroup.module.css";

export type BadgeGroupColor = "gray" | "brand" | "error" | "warning" | "success";
export type BadgeGroupTheme = "modern" | "light";
export type BadgeGroupAlign = "leading" | "trailing";
export type BadgeGroupSize = "sm" | "md" | "lg";

export interface BadgeGroupProps {
    children: React.ReactNode;
    addonText: string;
    color?: BadgeGroupColor;
    theme?: BadgeGroupTheme;
    align?: BadgeGroupAlign;
    size?: BadgeGroupSize;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const BadgeGroup = forwardRef<HTMLDivElement, BadgeGroupProps>(
    (
        {
            children,
            addonText,
            color = "gray",
            theme = "modern",
            align = "leading",
            size = "md",
            icon,
            className,
            onClick,
        },
        ref
    ) => {
        const addonBadge = (
            <span className={cn(styles.addon, styles[`addon-${color}`], styles[`addon-${theme}`])}>
                {icon && <span className={styles.addonIcon}>{icon}</span>}
                {addonText}
            </span>
        );

        const messageText = (
            <span className={styles.message}>{children}</span>
        );

        const arrow = (
            <ArrowRight2 size={size === "sm" ? 12 : size === "md" ? 14 : 16} color="currentColor" variant="Bold" />
        );

        return (
            <div
                ref={ref}
                className={cn(
                    styles.badgeGroup,
                    styles[`color-${color}`],
                    styles[`theme-${theme}`],
                    styles[`size-${size}`],
                    onClick && styles.clickable,
                    className
                )}
                onClick={onClick}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
            >
                {align === "leading" ? (
                    <>
                        {addonBadge}
                        {messageText}
                        {arrow}
                    </>
                ) : (
                    <>
                        {messageText}
                        {addonBadge}
                        {arrow}
                    </>
                )}
            </div>
        );
    }
);

BadgeGroup.displayName = "BadgeGroup";
