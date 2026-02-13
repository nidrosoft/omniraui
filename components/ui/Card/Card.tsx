import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "standard" | "light" | "accent" | "framework";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ variant = "standard", padding = "lg", hoverable = false, className, children, ...props }, ref) => {
        const paddingMap: Record<string, string> = {
            none: styles.paddingNone,
            sm: styles.paddingSm,
            md: styles.paddingMd,
            lg: styles.paddingLg,
            xl: styles.paddingXl,
        };

        return (
            <div
                ref={ref}
                className={cn(
                    styles.card,
                    styles[variant],
                    paddingMap[padding],
                    hoverable ? styles.hoverable : undefined,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
