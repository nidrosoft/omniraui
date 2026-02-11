import { cn } from "@/lib/cn";
import styles from "./Badge.module.css";

export interface BadgeProps {
    variant?: "section" | "accent" | "success" | "error" | "warning" | "info";
    size?: "sm" | "md" | "lg";
    dot?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Badge({
    variant = "section",
    size = "md",
    dot = false,
    children,
    className,
}: BadgeProps) {
    return (
        <span className={cn(styles.badge, styles[variant], styles[size], className)}>
            {dot && <span className={styles.dot} />}
            {children}
        </span>
    );
}
