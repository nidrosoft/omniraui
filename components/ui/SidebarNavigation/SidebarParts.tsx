"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowDown2, SearchNormal1, ExportSquare, ArrowUp2, User, Setting2, Book1, LogoutCurve, AddCircle } from "iconsax-react";
import { cn } from "../../../lib/cn";
import type { NavItemType, NavItemDividerType, NavSubItem } from "./types";
import styles from "./SidebarNavigation.module.css";

/* ── Type guard ── */
export function isDivider(item: NavItemType | NavItemDividerType): item is NavItemDividerType {
    return "divider" in item && item.divider === true;
}

/* ── Search Bar ── */
export function SidebarSearchBar() {
    return (
        <div className={styles.searchBar}>
            <span className={styles.searchIcon}>
                <SearchNormal1 size={16} variant="Bulk" color="currentColor" />
            </span>
            <span className={styles.searchText}>Search</span>
            <span className={styles.searchShortcut}>⌘K</span>
        </div>
    );
}

/* ── User Card ── */
export interface UserCardProps {
    name: string;
    email: string;
    initials?: string;
    online?: boolean;
}

export interface SwitchAccount {
    name: string;
    email: string;
    initials?: string;
    online?: boolean;
}

export function SidebarUserCard({ name, email, initials, online = true }: UserCardProps) {
    const [open, setOpen] = useState(false);
    const [activeAccount, setActiveAccount] = useState(0);
    const wrapRef = useRef<HTMLDivElement>(null);

    const accounts: SwitchAccount[] = [
        { name, email, initials, online },
        { name: "Alex Rivera", email: "alex@omnira.space", initials: "AR", online: true },
    ];

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close();
        };
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, [open, close]);

    return (
        <div className={styles.userCardWrap} ref={wrapRef}>
            {open && (
                <div className={styles.userPopup}>
                    <a href="/profile" className={styles.popupItem} onClick={close}>
                        <span className={styles.popupItemIcon}><User size={16} variant="Bulk" color="currentColor" /></span>
                        View profile
                        <span className={styles.popupItemShortcut}>⌘K→P</span>
                    </a>
                    <a href="/settings/account" className={styles.popupItem} onClick={close}>
                        <span className={styles.popupItemIcon}><Setting2 size={16} variant="Bulk" color="currentColor" /></span>
                        Account settings
                        <span className={styles.popupItemShortcut}>⌘S</span>
                    </a>
                    <a href="/docs" className={styles.popupItem} onClick={close}>
                        <span className={styles.popupItemIcon}><Book1 size={16} variant="Bulk" color="currentColor" /></span>
                        Documentation
                    </a>
                    <hr className={styles.popupDivider} />
                    <div className={styles.popupSectionLabel}>Switch account</div>
                    {accounts.map((acc, i) => (
                        <button
                            key={acc.email}
                            className={styles.popupAccountRow}
                            onClick={() => setActiveAccount(i)}
                            type="button"
                        >
                            <div className={styles.popupAccountAvatar}>{acc.initials ?? acc.name.charAt(0)}</div>
                            <div className={styles.popupAccountInfo}>
                                <span className={styles.popupAccountName}>{acc.name}</span>
                                <span className={styles.popupAccountEmail}>
                                    {acc.online && <span className={styles.userOnlineDot} />}
                                    {acc.email}
                                </span>
                            </div>
                            <span className={cn(styles.popupRadio, i === activeAccount && styles.popupRadioActive)} />
                        </button>
                    ))}
                    <button className={styles.popupItem} type="button">
                        <span className={styles.popupItemIcon}><AddCircle size={16} variant="Bulk" color="currentColor" /></span>
                        Add account
                    </button>
                    <hr className={styles.popupDivider} />
                    <button className={cn(styles.popupItem, styles.popupItemDanger)} type="button" onClick={close}>
                        <span className={styles.popupItemIcon}><LogoutCurve size={16} color="currentColor" /></span>
                        Sign out
                        <span className={styles.popupItemShortcut}>⌥⇧Q</span>
                    </button>
                </div>
            )}
            <div className={styles.userCard} onClick={() => setOpen((v) => !v)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen((v) => !v); }}>
                <div className={styles.userAvatar}>{initials ?? name.charAt(0)}</div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{name}</span>
                    <span className={styles.userEmail}>
                        {online && <span className={styles.userOnlineDot} />}
                        {email}
                    </span>
                </div>
                <span className={styles.userChevron}>
                    <ArrowUp2 size={14} color="currentColor" />
                </span>
            </div>
        </div>
    );
}

/* ── Sub Item Row ── */
export function SubItemRow({ item, isActive }: { item: NavSubItem; isActive: boolean }) {
    return (
        <a href={item.href} className={cn(styles.subItem, isActive && styles.subItemActive)}>
            <span>{item.label}</span>
            {item.badge != null && (
                <span className={styles.subItemBadge}>
                    {typeof item.badge === "number" ? item.badge : item.badge}
                </span>
            )}
        </a>
    );
}

/* ── Nav Row ── */
export function NavRow({
    item,
    isActive,
    activeUrl,
}: {
    item: NavItemType;
    isActive: boolean;
    activeUrl?: string;
}) {
    const [open, setOpen] = useState(false);
    const hasChildren = item.items && item.items.length > 0;

    const handleClick = () => {
        if (hasChildren) setOpen((prev) => !prev);
    };

    const content = (
        <>
            {item.icon && <span className={styles.navItemIcon}>{item.icon}</span>}
            <span className={styles.navItemLabel}>{item.label}</span>
            {item.badge && <span className={styles.navItemBadge}>{item.badge}</span>}
            {item.external && (
                <span className={styles.externalIcon}>
                    <ExportSquare size={14} color="currentColor" />
                </span>
            )}
            {hasChildren && (
                <span className={cn(styles.navItemChevron, open && styles.navItemChevronOpen)}>
                    <ArrowDown2 size={14} color="currentColor" />
                </span>
            )}
        </>
    );

    return (
        <div>
            {hasChildren ? (
                <button
                    className={cn(styles.navItem, isActive && styles.navItemActive)}
                    onClick={handleClick}
                    type="button"
                >
                    {content}
                </button>
            ) : (
                <a
                    href={item.href}
                    className={cn(styles.navItem, isActive && styles.navItemActive)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            )}
            {hasChildren && open && (
                <div className={styles.subItems}>
                    {item.items!.map((sub) => (
                        <SubItemRow key={sub.href} item={sub} isActive={activeUrl === sub.href} />
                    ))}
                </div>
            )}
        </div>
    );
}
