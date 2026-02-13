"use client";

import { useState, useCallback, forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Rating.module.css";

/* ══════════════════════════════════════
   Rating (interactive stars)
   ══════════════════════════════════════ */
export interface RatingProps {
    value?: number;
    defaultValue?: number;
    max?: number;
    onChange?: (value: number) => void;
    size?: "sm" | "md" | "lg";
    readOnly?: boolean;
    className?: string;
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
    (
        {
            value: controlledValue,
            defaultValue = 0,
            max = 5,
            onChange,
            size = "md",
            readOnly = false,
            className,
        },
        ref,
    ) => {
        const isControlled = controlledValue !== undefined;
        const [internalValue, setInternalValue] = useState(defaultValue);
        const [hoverValue, setHoverValue] = useState(0);
        const value = isControlled ? controlledValue : internalValue;
        const displayValue = hoverValue || value;

        const handleClick = useCallback(
            (star: number) => {
                if (readOnly) return;
                const newVal = star === value ? 0 : star;
                if (!isControlled) setInternalValue(newVal);
                onChange?.(newVal);
            },
            [readOnly, value, isControlled, onChange],
        );

        return (
            <div
                ref={ref}
                className={cn(styles.rating, styles[`rating_${size}`], readOnly && styles.readOnly, className)}
                role="radiogroup"
                aria-label="Rating"
            >
                {Array.from({ length: max }, (_, i) => {
                    const star = i + 1;
                    const filled = star <= displayValue;
                    return (
                        <button
                            key={star}
                            type="button"
                            className={cn(styles.star, filled && styles.starFilled)}
                            onClick={() => handleClick(star)}
                            onMouseEnter={() => !readOnly && setHoverValue(star)}
                            onMouseLeave={() => !readOnly && setHoverValue(0)}
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                            tabIndex={readOnly ? -1 : 0}
                        >
                            <StarIcon />
                        </button>
                    );
                })}
            </div>
        );
    },
);

Rating.displayName = "Rating";

/* ══════════════════════════════════════
   Rating Badge
   ══════════════════════════════════════ */
export interface RatingBadgeProps {
    value: number;
    max?: number;
    count?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function RatingBadge({
    value,
    max = 5,
    count,
    size = "md",
    className,
}: RatingBadgeProps) {
    return (
        <div className={cn(styles.badge, styles[`badge_${size}`], className)}>
            <div className={styles.badgeStars}>
                {Array.from({ length: max }, (_, i) => (
                    <span key={i} className={cn(styles.badgeStar, i < Math.round(value) && styles.badgeStarFilled)}>
                        <StarIcon />
                    </span>
                ))}
            </div>
            <span className={styles.badgeValue}>{value.toFixed(1)}</span>
            {count !== undefined && (
                <span className={styles.badgeCount}>({count})</span>
            )}
        </div>
    );
}

/* ── Star SVG ── */
function StarIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={styles.starSvg}>
            <path d="M10 1.5L12.47 7.03L18.5 7.72L13.97 11.67L15.35 17.5L10 14.27L4.65 17.5L6.03 11.67L1.5 7.72L7.53 7.03L10 1.5Z" />
        </svg>
    );
}
