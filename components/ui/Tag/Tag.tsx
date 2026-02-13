"use client";

import { useState } from "react";
import { CloseCircle, TickSquare, MinusSquare } from "iconsax-react";
import { cn } from "../../../lib/cn";
import styles from "./Tag.module.css";

export type TagSize = "sm" | "md" | "lg";

export interface TagProps {
    children: React.ReactNode;
    size?: TagSize;
    dot?: boolean;
    avatarSrc?: string;
    count?: number;
    onRemove?: () => void;
    checkbox?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

export function Tag({
    children,
    size = "md",
    dot = false,
    avatarSrc,
    count,
    onRemove,
    checkbox = false,
    checked: controlledChecked,
    onCheckedChange,
    disabled = false,
    className,
}: TagProps) {
    const [internalChecked, setInternalChecked] = useState(false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const handleCheckboxToggle = () => {
        if (disabled) return;
        const next = !isChecked;
        if (controlledChecked === undefined) setInternalChecked(next);
        onCheckedChange?.(next);
    };

    const isInteractive = checkbox || !!onRemove;

    return (
        <span
            className={cn(
                styles.tag,
                styles[size],
                checkbox && styles.checkable,
                checkbox && isChecked && styles.checked,
                disabled && styles.disabled,
                className,
            )}
            role={checkbox ? "checkbox" : undefined}
            aria-checked={checkbox ? isChecked : undefined}
            aria-disabled={disabled || undefined}
            tabIndex={isInteractive ? 0 : undefined}
            onClick={checkbox ? handleCheckboxToggle : undefined}
            onKeyDown={
                checkbox
                    ? (e) => {
                          if (e.key === " " || e.key === "Enter") {
                              e.preventDefault();
                              handleCheckboxToggle();
                          }
                      }
                    : undefined
            }
        >
            {checkbox && (
                <span className={styles.checkbox}>
                    {isChecked ? (
                        <TickSquare size={size === "sm" ? 14 : size === "lg" ? 18 : 16} variant="Bulk" color="var(--color-lime)" />
                    ) : (
                        <MinusSquare size={size === "sm" ? 14 : size === "lg" ? 18 : 16} variant="Linear" color="var(--color-text-tertiary)" />
                    )}
                </span>
            )}

            {dot && <span className={styles.dot} />}

            {avatarSrc && (
                <img
                    src={avatarSrc}
                    alt=""
                    className={styles.avatar}
                    loading="lazy"
                />
            )}

            <span className={styles.label}>{children}</span>

            {count !== undefined && (
                <span className={styles.count}>{count}</span>
            )}

            {onRemove && (
                <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!disabled) onRemove();
                    }}
                    aria-label="Remove tag"
                    tabIndex={-1}
                    disabled={disabled}
                >
                    <CloseCircle
                        size={size === "sm" ? 12 : size === "lg" ? 16 : 14}
                        variant="Bold"
                        color="currentColor"
                    />
                </button>
            )}
        </span>
    );
}

export interface TagGroupProps {
    children: React.ReactNode;
    label?: string;
    size?: TagSize;
    className?: string;
}

export function TagGroup({
    children,
    label,
    size = "md",
    className,
}: TagGroupProps) {
    return (
        <div
            className={cn(styles.tagGroup, className)}
            role="group"
            aria-label={label}
        >
            {label && <span className={cn(styles.tagGroupLabel, styles[`label${size}`])}>{label}</span>}
            {children}
        </div>
    );
}

export interface TagListProps {
    children: React.ReactNode;
    className?: string;
}

export function TagList({ children, className }: TagListProps) {
    return (
        <div className={cn(styles.tagList, className)}>
            {children}
        </div>
    );
}
