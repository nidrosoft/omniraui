"use client";

import { cn } from "../../../lib/cn";
import type { NavItemType, NavItemDividerType } from "./types";
import styles from "./SidebarNavigation.module.css";

interface SidebarSlimProps {
    items: (NavItemType | NavItemDividerType)[];
    activeUrl?: string;
    brandLogo?: string;
    footer?: React.ReactNode;
    className?: string;
}

function isDivider(item: NavItemType | NavItemDividerType): item is NavItemDividerType {
    return "divider" in item && item.divider === true;
}

export function SidebarSlim({ items, activeUrl, brandLogo, footer, className }: SidebarSlimProps) {
    return (
        <nav className={cn(styles.sidebar, styles.sidebarSlim, className)}>
            {brandLogo && (
                <div className={styles.brandLogo} style={{ marginBottom: 8 }}>
                    {brandLogo}
                </div>
            )}
            {items.map((item, i) => {
                if (isDivider(item)) {
                    return <hr key={`div-${i}`} className={styles.divider} style={{ width: "100%" }} />;
                }
                const isActive = activeUrl === item.href;
                return (
                    <a
                        key={item.href + item.label}
                        href={item.href}
                        className={cn(styles.navItemSlim, isActive && styles.navItemSlimActive)}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                    >
                        {item.icon}
                        <span className={styles.slimTooltip}>{item.label}</span>
                    </a>
                );
            })}
            {footer && <div className={styles.sidebarFooter}>{footer}</div>}
        </nav>
    );
}
