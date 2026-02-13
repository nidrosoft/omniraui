"use client";

import { cn } from "../../../lib/cn";
import type { NavItemType, NavItemDividerType } from "./types";
import { isDivider, NavRow, SidebarSearchBar, SidebarUserCard } from "./SidebarParts";
import type { UserCardProps } from "./SidebarParts";
import styles from "./SidebarNavigation.module.css";

interface SidebarSectionDividersProps {
    items: (NavItemType | NavItemDividerType)[];
    activeUrl?: string;
    brand?: { name: string; logo?: string };
    search?: boolean;
    user?: UserCardProps;
    footer?: React.ReactNode;
    className?: string;
}

export function SidebarSectionDividers({ items, activeUrl, brand, search, user, footer, className }: SidebarSectionDividersProps) {
    return (
        <nav className={cn(styles.sidebar, className)}>
            {brand && (
                <div className={styles.brand}>
                    <div className={styles.brandLogo}>{brand.logo ?? brand.name.charAt(0)}</div>
                    <span className={styles.brandName}>{brand.name}</span>
                </div>
            )}
            {search && <SidebarSearchBar />}
            {items.map((item, i) => {
                if (isDivider(item)) {
                    return <hr key={`div-${i}`} className={styles.divider} />;
                }
                return (
                    <NavRow
                        key={item.href + item.label}
                        item={item}
                        isActive={activeUrl === item.href}
                        activeUrl={activeUrl}
                    />
                );
            })}
            {footer && <div className={styles.sidebarFooter}>{footer}</div>}
            {user && <SidebarUserCard {...user} />}
        </nav>
    );
}
