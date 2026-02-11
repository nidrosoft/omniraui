"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import styles from "./ButtonUtility.module.css";

export type UtilitySize = "xs" | "sm" | "md" | "lg";
export type UtilityColor = "primary" | "secondary" | "tertiary" | "destructive";

export interface ButtonUtilityProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    size?: UtilitySize;
    color?: UtilityColor;
    tooltip?: string;
}

export const ButtonUtility = forwardRef<HTMLButtonElement, ButtonUtilityProps>(
    ({ icon, size = "sm", color = "secondary", tooltip, disabled, className, ...props }, ref) => {
        const [showTooltip, setShowTooltip] = useState(false);
        const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

        const handleMouseEnter = () => {
            if (!tooltip || disabled) return;
            timeoutRef.current = setTimeout(() => setShowTooltip(true), 300);
        };

        const handleMouseLeave = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setShowTooltip(false);
        };

        useEffect(() => {
            return () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            };
        }, []);

        return (
            <div
                className={styles.wrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    ref={ref}
                    className={cn(
                        styles.utilityButton,
                        styles[`size-${size}`],
                        styles[`color-${color}`],
                        className
                    )}
                    disabled={disabled}
                    {...props}
                >
                    <span className={styles.iconWrap}>{icon}</span>
                </button>
                {tooltip && showTooltip && (
                    <span className={styles.tooltip}>{tooltip}</span>
                )}
            </div>
        );
    }
);

ButtonUtility.displayName = "ButtonUtility";
