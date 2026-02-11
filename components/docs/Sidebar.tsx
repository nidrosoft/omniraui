"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchNormal1, ArrowDown2, HambergerMenu, CloseSquare, Book1, FolderOpen, Component, Monitor, Grid5, DocumentCopy, Magicpen, Star1 } from "iconsax-react";
import { sidebarConfig } from "@/lib/sidebar-config";
import { StatusBadge } from "./StatusBadge";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/cn";
import styles from "./Sidebar.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionIconMap: Record<string, any> = {
    Book1,
    FolderOpen,
    Component,
    Monitor,
    Grid5,
    DocumentCopy,
    Magicpen,
    Star1,
};

function SectionIcon({ name }: { name: string }) {
    const Icon = sectionIconMap[name];
    if (!Icon) return null;
    return <Icon size={14} variant="Bulk" color="var(--color-lime)" />;
}

export function Sidebar() {
    const pathname = usePathname();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        for (const section of sidebarConfig) {
            initial[section.title] = section.title === "Getting Started";
        }
        return initial;
    });
    const [mobileOpen, setMobileOpen] = useState(false);
    const [search, setSearch] = useState("");

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const filteredConfig = sidebarConfig
        .map((section) => ({
            ...section,
            items: section.items.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((section) => section.items.length > 0);

    return (
        <>
            <button
                className={styles.mobileToggle}
                onClick={() => setMobileOpen(true)}
                aria-label="Open sidebar"
            >
                <HambergerMenu size={20} variant="Bulk" color="var(--color-lime)" />
            </button>

            {mobileOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <aside className={cn(styles.sidebar, mobileOpen && styles.sidebarOpen)}>
                <div className={styles.topBar}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>O</div>
                        <span className={styles.logoText}>
                            Omnira <span className={styles.logoAccent}>UI</span>
                        </span>
                    </Link>
                    <div className={styles.topBarActions}>
                        <ThemeToggle />
                        {mobileOpen && (
                            <button
                                onClick={() => setMobileOpen(false)}
                                style={{ background: "none", border: "none", display: "flex" }}
                                aria-label="Close sidebar"
                            >
                                <CloseSquare size={20} variant="Bulk" color="var(--color-text-tertiary)" />
                            </button>
                        )}
                    </div>
                </div>

                <div className={styles.searchWrapper}>
                    <div className={styles.searchContainer}>
                        <span className={styles.searchIcon}>
                            <SearchNormal1 size={14} variant="Bulk" color="var(--color-text-tertiary)" />
                        </span>
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Search components..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <nav>
                    {filteredConfig.map((section, idx) => {
                        const isOpen = openSections[section.title] ?? false;
                        return (
                            <div key={section.title}>
                                {idx > 0 && <div className={styles.separator} />}
                                <div className={styles.section}>
                                    <button
                                        className={styles.sectionTitle}
                                        onClick={() => toggleSection(section.title)}
                                    >
                                        <span className={styles.sectionTitleLeft}>
                                            <SectionIcon name={section.icon} />
                                            {section.title}
                                        </span>
                                        <span className={cn(styles.chevron, isOpen ? styles.chevronOpen : styles.chevronClosed)}>
                                            <ArrowDown2 size={12} color="currentColor" />
                                        </span>
                                    </button>
                                {isOpen && (
                                    <ul className={styles.itemsList}>
                                        {section.items.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className={cn(styles.item, isActive && styles.itemActive)}
                                                        onClick={() => setMobileOpen(false)}
                                                    >
                                                        <span className={styles.itemName}>{item.name}</span>
                                                        {item.status && <StatusBadge status={item.status} />}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.sidebarCredit}>
                        Created by{" "}
                        <a
                            href="https://www.linkedin.com/in/cyriac-zeh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sidebarCreditLink}
                        >
                            Cyriac Zeh
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}
