import { cn } from "@/lib/cn";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
    status: "new" | "updated" | "coming-soon" | "stable";
}

const statusLabels: Record<string, string> = {
    new: "New",
    updated: "Updated",
    "coming-soon": "Coming Soon",
    stable: "Stable",
};

const statusStyles: Record<string, string> = {
    new: styles.new,
    updated: styles.updated,
    "coming-soon": styles.comingSoon,
    stable: styles.stable,
};

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span className={cn(styles.badge, statusStyles[status])}>
            {statusLabels[status]}
        </span>
    );
}
