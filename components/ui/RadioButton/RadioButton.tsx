"use client";

import { createContext, useContext, useState, useCallback, forwardRef, useId } from "react";
import { cn } from "../../../lib/cn";
import styles from "./RadioButton.module.css";

/* ── Group Context ── */
interface RadioGroupCtx {
    value: string;
    onChange: (value: string) => void;
    size: "sm" | "md";
    disabled: boolean;
}

const Ctx = createContext<RadioGroupCtx | null>(null);

/* ── RadioGroup ── */
export interface RadioGroupProps {
    children: React.ReactNode;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    size?: "sm" | "md";
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
}

export function RadioGroup({
    children,
    defaultValue = "",
    value: controlledValue,
    onChange,
    size = "sm",
    disabled = false,
    className,
    ...props
}: RadioGroupProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleChange = useCallback(
        (v: string) => {
            if (!isControlled) setInternalValue(v);
            onChange?.(v);
        },
        [isControlled, onChange],
    );

    return (
        <Ctx.Provider value={{ value, onChange: handleChange, size, disabled }}>
            <div
                role="radiogroup"
                aria-label={props["aria-label"]}
                className={cn(styles.group, className)}
            >
                {children}
            </div>
        </Ctx.Provider>
    );
}

/* ── RadioButton ── */
export interface RadioButtonProps {
    label?: string;
    hint?: string;
    value: string;
    size?: "sm" | "md";
    disabled?: boolean;
    checked?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}

export const RadioButton = forwardRef<HTMLButtonElement, RadioButtonProps>(
    (
        {
            label,
            hint,
            value,
            size: sizeProp,
            disabled: disabledProp,
            checked: checkedProp,
            onChange: onChangeProp,
            className,
        },
        ref,
    ) => {
        const ctx = useContext(Ctx);
        const size = sizeProp ?? ctx?.size ?? "sm";
        const disabled = disabledProp ?? ctx?.disabled ?? false;
        const checked = checkedProp ?? (ctx ? ctx.value === value : false);

        const handleClick = () => {
            if (disabled) return;
            if (ctx) {
                ctx.onChange(value);
            } else {
                onChangeProp?.(value);
            }
        };

        return (
            <div className={cn(styles.wrapper, disabled && styles.wrapperDisabled, className)}>
                <button
                    ref={ref}
                    type="button"
                    role="radio"
                    aria-checked={checked}
                    disabled={disabled}
                    onClick={handleClick}
                    className={cn(
                        styles.radio,
                        styles[`radio_${size}`],
                        checked && styles.radioChecked,
                    )}
                >
                    {checked && (
                        <span className={cn(styles.dot, styles[`dot_${size}`])} />
                    )}
                </button>
                {(label || hint) && (
                    <div className={styles.textWrap} onClick={handleClick}>
                        {label && <span className={styles.label}>{label}</span>}
                        {hint && <span className={styles.hint}>{hint}</span>}
                    </div>
                )}
            </div>
        );
    },
);

RadioButton.displayName = "RadioButton";
