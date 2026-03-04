import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./FeaturedIcon.module.css";

export interface FeaturedIconProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Icon element to display */
    icon: React.ReactNode;
    /** Color scheme */
    color?: "brand" | "gray" | "error" | "warning" | "success";
    /** Visual theme variant */
    theme?: "light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue";
    /** Size */
    size?: "sm" | "md" | "lg" | "xl";
}

export const FeaturedIcon = forwardRef<HTMLDivElement, FeaturedIconProps>(
    (
        {
            icon,
            color = "brand",
            theme = "light",
            size = "md",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    styles.featuredIcon,
                    styles[`color-${color}`],
                    styles[`theme-${theme}`],
                    styles[size],
                    className
                )}
                {...props}
            >
                <span className={styles.iconWrapper}>{icon}</span>
            </div>
        );
    }
);

FeaturedIcon.displayName = "FeaturedIcon";
