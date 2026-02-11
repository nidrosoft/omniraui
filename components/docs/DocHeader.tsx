import { StatusBadge } from "./StatusBadge";
import styles from "./DocHeader.module.css";

interface DocHeaderProps {
    title: string;
    description: string;
    status?: "new" | "updated" | "coming-soon" | "stable";
    breadcrumbs?: { label: string; href?: string }[];
}

export function DocHeader({ title, description, status, breadcrumbs }: DocHeaderProps) {
    return (
        <div className={styles.header}>
            {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className={styles.breadcrumb}>
                    {breadcrumbs.map((crumb, i) => (
                        <span key={i}>
                            {i > 0 && <span className={styles.breadcrumbSep}>/</span>}
                            {crumb.href ? (
                                <a href={crumb.href} className={styles.breadcrumbLink}>
                                    {" "}{crumb.label}
                                </a>
                            ) : (
                                <span className={styles.breadcrumbCurrent}> {crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            )}
            <div className={styles.titleRow}>
                <h1 className={styles.title}>{title}</h1>
                {status && <StatusBadge status={status} />}
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
