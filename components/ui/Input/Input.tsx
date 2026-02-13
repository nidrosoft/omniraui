"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    hint?: string;
    inputSize?: "sm" | "md" | "lg";
    required?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    leadingDropdown?: React.ReactNode;
    trailingDropdown?: React.ReactNode;
    leadingText?: string;
    trailingButton?: React.ReactNode;
    wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            hint,
            inputSize = "md",
            required = false,
            leadingIcon,
            trailingIcon,
            leadingDropdown,
            trailingDropdown,
            leadingText,
            trailingButton,
            wrapperClassName,
            className,
            disabled,
            ...props
        },
        ref,
    ) => {
        const hasLeadingAddon = !!(leadingIcon || leadingDropdown || leadingText);
        const hasTrailingAddon = !!(trailingIcon || trailingDropdown || trailingButton);

        return (
            <div className={cn(styles.wrapper, wrapperClassName)}>
                {label && (
                    <label className={styles.label}>
                        {label}
                        {required && <span className={styles.required}>*</span>}
                    </label>
                )}
                <div
                    className={cn(
                        styles.inputContainer,
                        styles[inputSize],
                        error && styles.containerError,
                        disabled && styles.containerDisabled,
                    )}
                >
                    {leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
                    {leadingDropdown && <span className={styles.leadingDropdown}>{leadingDropdown}</span>}
                    {leadingText && <span className={styles.leadingText}>{leadingText}</span>}
                    <input
                        ref={ref}
                        className={cn(
                            styles.input,
                            hasLeadingAddon ? styles.hasLeadingAddon : undefined,
                            hasTrailingAddon ? styles.hasTrailingAddon : undefined,
                            leadingIcon ? styles.hasLeadingIcon : undefined,
                            trailingIcon ? styles.hasTrailingIcon : undefined,
                            className,
                        )}
                        disabled={disabled}
                        {...props}
                    />
                    {trailingIcon && <span className={styles.trailingIcon}>{trailingIcon}</span>}
                    {trailingDropdown && <span className={styles.trailingDropdown}>{trailingDropdown}</span>}
                    {trailingButton && <span className={styles.trailingButton}>{trailingButton}</span>}
                </div>
                {error && <span className={styles.errorText}>{error}</span>}
                {(hint || helperText) && !error && (
                    <span className={styles.helperText}>{hint || helperText}</span>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";
