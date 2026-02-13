import { cn } from "@/lib/cn";
import styles from "./EmptyState.module.css";

/* ── Types ── */

export interface EmptyStateProps {
    icon?: React.ReactNode;
    iconAccent?: boolean;
    title: string;
    description?: string;
    actions?: React.ReactNode;
    className?: string;
}

/* ── Component ── */

export function EmptyState({
    icon,
    iconAccent = false,
    title,
    description,
    actions,
    className,
}: EmptyStateProps) {
    return (
        <div className={cn(styles.emptyState, className)}>
            {icon && (
                <div className={cn(styles.iconWrapper, iconAccent && styles.iconWrapperLime)}>
                    {icon}
                </div>
            )}
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
    );
}
