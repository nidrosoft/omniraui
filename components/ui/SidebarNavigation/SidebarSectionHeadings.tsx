"use client";

import { cn } from "../../../lib/cn";
import type { NavSectionType } from "./types";
import { isDivider, NavRow, SidebarSearchBar, SidebarUserCard } from "./SidebarParts";
import type { UserCardProps } from "./SidebarParts";
import styles from "./SidebarNavigation.module.css";

interface SidebarSectionHeadingsProps {
    sections: NavSectionType[];
    activeUrl?: string;
    brand?: { name: string; logo?: string };
    search?: boolean;
    user?: UserCardProps;
    footer?: React.ReactNode;
    className?: string;
}

export function SidebarSectionHeadings({ sections, activeUrl, brand, search, user, footer, className }: SidebarSectionHeadingsProps) {
    return (
        <nav className={cn(styles.sidebar, className)}>
            {brand && (
                <div className={styles.brand}>
                    <div className={styles.brandLogo}>{brand.logo ?? brand.name.charAt(0)}</div>
                    <span className={styles.brandName}>{brand.name}</span>
                </div>
            )}
            {search && <SidebarSearchBar />}
            {sections.map((section, si) => (
                <div key={section.heading}>
                    {si > 0 && <hr className={styles.divider} />}
                    <div className={styles.sectionHeading}>{section.heading}</div>
                    {section.items.map((item, i) => {
                        if (isDivider(item)) {
                            return <hr key={`div-${si}-${i}`} className={styles.divider} />;
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
                </div>
            ))}
            {footer && <div className={styles.sidebarFooter}>{footer}</div>}
            {user && <SidebarUserCard {...user} />}
        </nav>
    );
}
