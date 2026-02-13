"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Textarea.module.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    hint?: string;
    isRequired?: boolean;
    wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            error,
            helperText,
            hint,
            isRequired = false,
            wrapperClassName,
            className,
            disabled,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={cn(styles.wrapper, wrapperClassName)}>
                {label && (
                    <label className={styles.label}>
                        {label}
                        {isRequired && <span className={styles.required}>*</span>}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={cn(
                        styles.textarea,
                        error ? styles.error : undefined,
                        disabled ? styles.disabled : undefined,
                        className,
                    )}
                    disabled={disabled}
                    {...props}
                />
                {error && <span className={styles.errorText}>{error}</span>}
                {(hint || helperText) && !error && (
                    <span className={styles.helperText}>{hint || helperText}</span>
                )}
            </div>
        );
    },
);

Textarea.displayName = "Textarea";
