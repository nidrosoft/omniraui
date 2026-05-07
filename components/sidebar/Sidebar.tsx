"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";
import {
    Home2, TaskSquare, Calendar, DocumentText,
    Chart21, Wallet2, People, MessageText1,
    Setting2, MessageQuestion, Magicpen, SearchNormal,
    ArrowUp2
} from "iconsax-react";
import s from "./Sidebar.module.css";

/* ══════════════════════════════════════════════
   Mock Data
   ══════════════════════════════════════════════ */

const SECTIONS = [
    {
        label: "Workspace",
        items: [
            { icon: Home2, label: "Dashboard", href: "/dashboard" },
            { icon: TaskSquare, label: "Projects", href: "/projects", badge: "12" },
            { icon: Calendar, label: "Calendar", href: "/calendar" },
            { icon: DocumentText, label: "Documents", href: "/documents" },
        ],
    },
    {
        label: "Operations",
        items: [
            { icon: Chart21, label: "Analytics", href: "/analytics" },
            { icon: Wallet2, label: "Finances", href: "/finances", badge: "3" },
            { icon: People, label: "Team", href: "/team" },
            { icon: MessageText1, label: "Messages", href: "/messages", badge: "8" },
        ],
    },
    {
        label: "System",
        items: [
            { icon: Setting2, label: "Settings", href: "/settings" },
            { icon: MessageQuestion, label: "Help", href: "/help" },
        ],
    },
];

/* ══════════════════════════════════════════════
   Components
   ══════════════════════════════════════════════ */

export function Sidebar() {
    // We'd use next/navigation usePathname in a real app,
    // but for this demo we'll use a local state or just check window.location if we want.
    // For now we'll pass active path as prop or assume it's handled by links.
    // To keep it simple, let's hardcode active state for now or use a basic check.
    const [activePath, setActivePath] = useState("/dashboard");

    return (
        <aside className={s.sidebar}>
            {/* Brand Header */}
            <div className={s.brandHeader}>
                <div className={s.brandLogo}>P</div>
                <span className={s.brandName}>Pulse</span>
            </div>

            {/* Search */}
            <div className={s.searchBar}>
                <SearchNormal size={14} variant="Linear" className={s.searchIcon} />
                <span className={s.searchText}>Search...</span>
                <span className={s.searchShortcut}>⌘K</span>
            </div>

            {/* Navigation */}
            <nav className={s.nav}>
                {SECTIONS.map((section, idx) => (
                    <div key={idx} className={s.section}>
                        <h4 className={s.sectionTitle}>{section.label}</h4>
                        {section.items.map((item, itemIdx) => {
                            const Icon = item.icon;
                            const isActive = activePath === item.href;
                            return (
                                <a
                                    key={itemIdx}
                                    href={item.href}
                                    className={cn(s.navItem, isActive && s.navItemActive)}
                                    onClick={(e) => {
                                        // e.preventDefault();
                                        setActivePath(item.href);
                                    }}
                                >
                                    <Icon size={18} variant={isActive ? "Bulk" : "Linear"} color="currentColor" />
                                    <span className={s.navLabel}>{item.label}</span>
                                    {item.badge && (
                                        <span className={s.navBadge}>{item.badge}</span>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                ))}
            </nav>

            {/* Footer / User Profile */}
            <div className={s.footer}>
                <button className={s.aiButton}>
                    <Magicpen size={16} variant="Bulk" color="currentColor" />
                    Ask AI Assistant
                </button>

                <div className={s.userCard}>
                    <div className={s.userAvatar}>
                        AJ
                        <span className={s.onlineDot} />
                    </div>
                    <div className={s.userInfo}>
                        <span className={s.userName}>Alex Johnson</span>
                        <span className={s.userEmail}>alex@pulse.io</span>
                    </div>
                    <ArrowUp2 size={14} variant="Linear" className={s.userChevron} />
                </div>
            </div>
        </aside>
    );
}
