"use client";

import {
    useState,
    useRef,
    useEffect,
    useCallback,
    useId,
} from "react";
import { ArrowDown2, Global, TickCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import styles from "./LanguageSelector.module.css";
import type { LanguageOption } from "./types";

export type LanguageSelectorSize = "sm" | "md" | "lg";

export interface LanguageSelectorProps {
    options: LanguageOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (code: string) => void;
    placeholder?: string;
    label?: string;
    /** Minimal trigger (icon only); pair with aria-label or label */
    compact?: boolean;
    /** Show flag column when provided on options */
    showFlag?: boolean;
    /** Open the menu above or below the trigger */
    placement?: "top" | "bottom";
    size?: LanguageSelectorSize;
    disabled?: boolean;
    className?: string;
    /** Accessible name for the trigger when using compact mode without a visible label */
    "aria-label"?: string;
}

export function LanguageSelector({
    options,
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    placeholder = "Language",
    label,
    compact = false,
    showFlag = true,
    placement = "bottom",
    size = "md",
    disabled = false,
    className,
    "aria-label": ariaLabel,
}: LanguageSelectorProps) {
    const labelId = useId();
    const [internalValue, setInternalValue] = useState(defaultValue);
    const selectedCode = controlledValue !== undefined ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.code === selectedCode);

    const handleSelect = useCallback(
        (code: string) => {
            if (controlledValue === undefined) setInternalValue(code);
            onValueChange?.(code);
            setOpen(false);
        },
        [controlledValue, onValueChange],
    );

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open]);

    const showFlagsEffective = showFlag && options.some((o) => o.flag != null);

    const triggerAriaLabel = label && !compact
        ? undefined
        : (ariaLabel ?? (compact ? "Select language" : undefined));

    return (
        <div
            className={cn(styles.wrapper, compact && styles.wrapperCompact, className)}
            ref={rootRef}
        >
            {label && !compact && (
                <span className={styles.label} id={labelId}>
                    {label}
                </span>
            )}
            <button
                type="button"
                className={cn(
                    styles.trigger,
                    styles[size],
                    compact && styles.triggerCompact,
                    open && styles.triggerOpen,
                    disabled && styles.triggerDisabled,
                )}
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={triggerAriaLabel}
                aria-labelledby={label && !compact ? labelId : undefined}
            >
                <span className={styles.triggerValue}>
                    {compact ? (
                        <Global size={size === "sm" ? 18 : 20} variant="Bulk" color="var(--color-text-secondary)" />
                    ) : selected ? (
                        <>
                            {showFlagsEffective && selected.flag != null && (
                                <span className={styles.flag} aria-hidden>
                                    {selected.flag}
                                </span>
                            )}
                            <span className={styles.optionLabel}>{selected.label}</span>
                        </>
                    ) : (
                        <span className={styles.placeholder}>{placeholder}</span>
                    )}
                </span>
                <ArrowDown2
                    size={compact ? 14 : size === "sm" ? 14 : 16}
                    color="var(--color-text-tertiary)"
                    className={cn(styles.chevron, open && styles.chevronOpen)}
                />
            </button>

            {open && (
                <div
                    className={cn(
                        styles.listbox,
                        placement === "bottom" ? styles.listboxBottom : styles.listboxTop,
                    )}
                    role="listbox"
                    aria-label={label ?? "Languages"}
                >
                    {options.map((opt) => (
                        <button
                            key={opt.code}
                            type="button"
                            className={cn(
                                styles.option,
                                selectedCode === opt.code && styles.optionSelected,
                                opt.disabled && styles.optionDisabled,
                            )}
                            role="option"
                            aria-selected={selectedCode === opt.code}
                            disabled={opt.disabled}
                            onClick={() => !opt.disabled && handleSelect(opt.code)}
                        >
                            <span className={styles.optionInner}>
                                {showFlagsEffective && opt.flag != null && (
                                    <span className={styles.flag} aria-hidden>
                                        {opt.flag}
                                    </span>
                                )}
                                <span className={styles.optionLabel}>{opt.label}</span>
                            </span>
                            {selectedCode === opt.code && (
                                <TickCircle size={16} variant="Bulk" color="var(--color-lime)" className={styles.check} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
