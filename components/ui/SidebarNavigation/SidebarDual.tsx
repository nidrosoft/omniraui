"use client";

import { useState } from "react";
import { cn } from "../../../lib/cn";
import type { NavItemType, NavItemDividerType } from "./types";
import { isDivider, NavRow, SidebarSearchBar, SidebarUserCard } from "./SidebarParts";
import type { UserCardProps } from "./SidebarParts";
import styles from "./SidebarNavigation.module.css";

export interface DualSection {
    icon: React.ReactNode;
    label: string;
    items: (NavItemType | NavItemDividerType)[];
}

interface SidebarDualProps {
    sections: DualSection[];
    activeUrl?: string;
    brand?: { name: string; logo?: string };
    search?: boolean;
    user?: UserCardProps;
    footer?: React.ReactNode;
    className?: string;
}

export function SidebarDual({ sections, activeUrl, brand, search, user, footer, className }: SidebarDualProps) {
    const [activeSectionIdx, setActiveSectionIdx] = useState(0);
    const activeSection = sections[activeSectionIdx];

    return (
        <nav className={cn(styles.sidebar, styles.sidebarDual, className)}>
            <div className={styles.dualRail}>
                {brand && (
                    <div className={styles.brandLogo} style={{ marginBottom: 8 }}>
                        {brand.logo ?? brand.name.charAt(0)}
                    </div>
                )}
                {sections.map((section, i) => (
                    <button
                        key={section.label}
                        className={cn(styles.dualRailItem, i === activeSectionIdx && styles.dualRailItemActive)}
                        onClick={() => setActiveSectionIdx(i)}
                        type="button"
                        title={section.label}
                    >
                        {section.icon}
                    </button>
                ))}
            </div>
            <div className={styles.dualContent}>
                {search && <SidebarSearchBar />}
                <div className={styles.sectionHeading}>{activeSection.label}</div>
                {activeSection.items.map((item, i) => {
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
            </div>
        </nav>
    );
}
