"use client";

import { forwardRef, useState, useCallback, useId } from "react";
import { cn } from "@/lib/cn";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
    label?: string;
    hint?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label,
            hint,
            size = "sm",
            disabled = false,
            checked: controlledChecked,
            defaultChecked = false,
            onChange,
            className,
        },
        ref,
    ) => {
        const id = useId();
        const [internalChecked, setInternalChecked] = useState(defaultChecked);
        const isControlled = controlledChecked !== undefined;
        const checked = isControlled ? controlledChecked : internalChecked;

        const handleChange = useCallback(() => {
            if (disabled) return;
            const next = !checked;
            if (!isControlled) setInternalChecked(next);
            onChange?.(next);
        }, [checked, disabled, isControlled, onChange]);

        return (
            <div className={cn(styles.wrapper, disabled && styles.wrapperDisabled, className)}>
                <input
                    ref={ref}
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    className={styles.hiddenInput}
                    aria-checked={checked}
                />
                <button
                    type="button"
                    role="checkbox"
                    aria-checked={checked}
                    disabled={disabled}
                    onClick={handleChange}
                    className={cn(
                        styles.box,
                        styles[`box_${size}`],
                        checked && styles.boxChecked,
                    )}
                >
                    {checked && (
                        <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            className={styles.checkIcon}
                        >
                            <path
                                d="M2.5 6L5 8.5L9.5 3.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
                {(label || hint) && (
                    <label htmlFor={id} className={styles.textWrap}>
                        {label && <span className={styles.label}>{label}</span>}
                        {hint && <span className={styles.hint}>{hint}</span>}
                    </label>
                )}
            </div>
        );
    },
);

Checkbox.displayName = "Checkbox";
