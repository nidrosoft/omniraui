import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "accent";
    size?: "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "leading" | "trailing";
    iconOnly?: boolean;
    isLoading?: boolean;
    showTextWhileLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            fullWidth,
            icon,
            iconPosition = "leading",
            iconOnly,
            isLoading,
            showTextWhileLoading,
            disabled,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || isLoading;

        return (
            <button
                ref={ref}
                className={cn(
                    styles.button,
                    styles[variant],
                    styles[size],
                    fullWidth ? styles.fullWidth : undefined,
                    iconOnly ? styles.iconOnly : undefined,
                    isLoading ? styles.loading : undefined,
                    className
                )}
                disabled={isDisabled}
                {...props}
            >
                {isLoading && (
                    <span className={styles.spinner} />
                )}
                {isLoading && !showTextWhileLoading ? null : (
                    <>
                        {icon && iconPosition === "leading" && !iconOnly && (
                            <span className={styles.iconWrapper}>{icon}</span>
                        )}
                        {iconOnly ? (
                            <span className={styles.iconWrapper}>{icon}</span>
                        ) : (
                            <span className={styles.label}>{children}</span>
                        )}
                        {icon && iconPosition === "trailing" && !iconOnly && (
                            <span className={styles.iconWrapper}>{icon}</span>
                        )}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";
