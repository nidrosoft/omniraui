import { cn } from "@/lib/cn";
import styles from "./CardHeader.module.css";

/* ── Types ── */

export interface CardHeaderProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    avatar?: React.ReactNode;
    badge?: React.ReactNode;
    actions?: React.ReactNode;
    divider?: boolean;
    className?: string;
}

/* ── Component ── */

export function CardHeader({
    title,
    description,
    icon,
    avatar,
    badge,
    actions,
    divider = false,
    className,
}: CardHeaderProps) {
    return (
        <div className={cn(styles.cardHeader, divider && styles.cardHeaderDivider, className)}>
            <div className={styles.content}>
                {avatar}
                {icon && <div className={styles.iconWrapper}>{icon}</div>}
                <div className={styles.textContent}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.title}>{title}</h3>
                        {badge}
                    </div>
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            </div>
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
    );
}
