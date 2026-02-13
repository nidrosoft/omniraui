import { cn } from "@/lib/cn";
import styles from "./PageHeader.module.css";

/* ── Types ── */

export interface PageHeaderBreadcrumb {
    label: string;
    href?: string;
}

export interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: PageHeaderBreadcrumb[];
    badge?: React.ReactNode;
    actions?: React.ReactNode;
    tabs?: React.ReactNode;
    className?: string;
}

/* ── Component ── */

export function PageHeader({
    title,
    description,
    breadcrumbs,
    badge,
    actions,
    tabs,
    className,
}: PageHeaderProps) {
    return (
        <div className={cn(styles.pageHeader, className)}>
            <div className={styles.content}>
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className={styles.breadcrumbs}>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i}>
                                {i > 0 && <span className={styles.breadcrumbSeparator}> / </span>}
                                {crumb.href ? (
                                    <a href={crumb.href} className={styles.breadcrumbLink}>
                                        {crumb.label}
                                    </a>
                                ) : (
                                    <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>{title}</h1>
                    {badge}
                </div>
                {description && <p className={styles.description}>{description}</p>}
                {tabs && <div className={styles.tabsWrapper}>{tabs}</div>}
            </div>
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
    );
}
