"use client";

import { forwardRef, useState, useCallback } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Toggle.module.css";

export interface ToggleProps {
    label?: string;
    hint?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
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
        const [internalChecked, setInternalChecked] = useState(defaultChecked);
        const isControlled = controlledChecked !== undefined;
        const checked = isControlled ? controlledChecked : internalChecked;

        const handleToggle = useCallback(() => {
            if (disabled) return;
            const next = !checked;
            if (!isControlled) setInternalChecked(next);
            onChange?.(next);
        }, [checked, disabled, isControlled, onChange]);

        return (
            <div className={cn(styles.wrapper, disabled && styles.wrapperDisabled, className)}>
                <button
                    ref={ref}
                    type="button"
                    role="switch"
                    aria-checked={checked}
                    disabled={disabled}
                    onClick={handleToggle}
                    className={cn(
                        styles.track,
                        styles[`track_${size}`],
                        checked && styles.trackChecked,
                    )}
                >
                    <span
                        className={cn(
                            styles.thumb,
                            styles[`thumb_${size}`],
                            checked && styles.thumbChecked,
                        )}
                    />
                </button>
                {(label || hint) && (
                    <div className={styles.textWrap}>
                        {label && <span className={styles.label}>{label}</span>}
                        {hint && <span className={styles.hint}>{hint}</span>}
                    </div>
                )}
            </div>
        );
    },
);

Toggle.displayName = "Toggle";
