"use client";

import {
    useState,
    useRef,
    useEffect,
    useCallback,
    useId,
    type KeyboardEvent as ReactKeyboardEvent,
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
    const listboxRef = useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.code === selectedCode);

    const enabledOptions = options.filter((o) => !o.disabled);

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

    /* Focus first enabled option when opening (keyboard / screen reader friendly) */
    useEffect(() => {
        if (!open || !listboxRef.current) return;
        const first = listboxRef.current.querySelector<HTMLButtonElement>(
            'button[role="option"]:not(:disabled)',
        );
        requestAnimationFrame(() => first?.focus());
    }, [open]);

    const focusOptionByCode = useCallback((code: string) => {
        const container = listboxRef.current;
        if (!container) return;
        const buttons = container.querySelectorAll<HTMLButtonElement>('button[role="option"]');
        for (const b of buttons) {
            if (b.dataset.code === code) {
                b.focus();
                return;
            }
        }
    }, []);

    const handleOptionKeyDown = useCallback(
        (e: ReactKeyboardEvent<HTMLButtonElement>, code: string) => {
            const idx = enabledOptions.findIndex((o) => o.code === code);
            if (idx < 0) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                const next = enabledOptions[idx + 1];
                if (next) focusOptionByCode(next.code);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                const prev = enabledOptions[idx - 1];
                if (prev) focusOptionByCode(prev.code);
            } else if (e.key === "Home") {
                e.preventDefault();
                const first = enabledOptions[0];
                if (first) focusOptionByCode(first.code);
            } else if (e.key === "End") {
                e.preventDefault();
                const last = enabledOptions[enabledOptions.length - 1];
                if (last) focusOptionByCode(last.code);
            }
        },
        [enabledOptions, focusOptionByCode],
    );

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
                onKeyDown={(e) => {
                    if (disabled || open) return;
                    if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpen(true);
                    }
                }}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={open ? `${labelId}-listbox` : undefined}
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
                    ref={listboxRef}
                    id={`${labelId}-listbox`}
                    className={cn(
                        styles.listbox,
                        placement === "bottom" ? styles.listboxBottom : styles.listboxTop,
                    )}
                    role="listbox"
                    aria-label={label ?? "Languages"}
                    tabIndex={-1}
                >
                    {options.map((opt) => (
                        <button
                            key={opt.code}
                            type="button"
                            data-code={opt.code}
                            className={cn(
                                styles.option,
                                selectedCode === opt.code && styles.optionSelected,
                                opt.disabled && styles.optionDisabled,
                            )}
                            role="option"
                            aria-selected={selectedCode === opt.code}
                            disabled={opt.disabled}
                            onClick={() => !opt.disabled && handleSelect(opt.code)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    if (!opt.disabled) handleSelect(opt.code);
                                    return;
                                }
                                handleOptionKeyDown(e, opt.code);
                            }}
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
