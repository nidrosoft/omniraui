"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { ArrowDown2, ArrowRight, HambergerMenu, CloseCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./MarketingHeader.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface MarketingHeaderMenuItem {
    /** Icon element */
    icon?: React.ReactNode;
    /** Item title */
    title: string;
    /** Short description */
    description?: string;
    /** Link href */
    href?: string;
    /** Click handler */
    onClick?: () => void;
}

export interface MarketingHeaderDropdownFooter {
    /** Footer text */
    text?: string;
    /** Footer CTA label */
    ctaLabel?: string;
    /** Footer CTA href */
    ctaHref?: string;
    /** Footer CTA click handler */
    onCtaClick?: () => void;
}

export interface MarketingHeaderFeaturedCard {
    /** Image URL */
    image?: string;
    /** Card title */
    title: string;
    /** Card description */
    description?: string;
    /** Card link */
    href?: string;
    /** Click handler */
    onClick?: () => void;
    /** Action links shown below the description */
    actions?: {
        label: string;
        href?: string;
        onClick?: () => void;
        primary?: boolean;
    }[];
}

export interface MarketingHeaderNavItem {
    /** Display label */
    label: string;
    /** Direct link href (no dropdown) */
    href?: string;
    /** Click handler */
    onClick?: () => void;
    /** Active state */
    active?: boolean;
    /** Dropdown layout */
    dropdownLayout?: "simple" | "two-columns" | "three-columns" | "four-columns";
    /** Whether the dropdown is floating (rounded) or full-width */
    dropdownStyle?: "floating" | "full-width";
    /** Column groups for multi-column layouts */
    columns?: {
        label?: string;
        items: MarketingHeaderMenuItem[];
    }[];
    /** Simple items (for single-column layout) */
    items?: MarketingHeaderMenuItem[];
    /** Dropdown footer */
    footer?: MarketingHeaderDropdownFooter;
    /** Sidebar featured card */
    sidebar?: {
        featuredCard?: MarketingHeaderFeaturedCard;
    };
}

export interface MarketingHeaderProps {
    /** Navigation items */
    navItems?: MarketingHeaderNavItem[];
    /** Brand logo element */
    logo?: React.ReactNode;
    /** Brand logo text fallback */
    logoText?: string;
    /** Brand name */
    brandName?: string;
    /** Brand click / link */
    onBrandClick?: () => void;
    /** Brand href */
    brandHref?: string;
    /** Floating style (rounded bar) */
    floating?: boolean;
    /** Sticky positioning */
    sticky?: boolean;
    /** Right-side action buttons */
    actions?: React.ReactNode;
    /** Mobile menu footer content */
    mobileFooter?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════ */

function MenuItem({ item }: { item: MarketingHeaderMenuItem }) {
    const Tag = item.href ? "a" : "button";
    const linkProps = item.href ? { href: item.href } : {};
    return (
        <Tag
            className={s.menuItem}
            onClick={item.onClick}
            {...linkProps}
        >
            {item.icon && <div className={s.menuItemIcon}>{item.icon}</div>}
            <div className={s.menuItemContent}>
                <span className={s.menuItemTitle}>{item.title}</span>
                {item.description && (
                    <span className={s.menuItemDesc}>{item.description}</span>
                )}
            </div>
        </Tag>
    );
}

function DropdownFooter({ footer }: { footer: MarketingHeaderDropdownFooter }) {
    return (
        <div className={s.dropdownFooter}>
            {footer.text && <span className={s.footerText}>{footer.text}</span>}
            {footer.ctaLabel && (
                <a
                    href={footer.ctaHref || "#"}
                    className={s.footerLink}
                    onClick={footer.onCtaClick}
                >
                    {footer.ctaLabel}
                    <ArrowRight size={14} variant="Linear" color="currentColor" />
                </a>
            )}
        </div>
    );
}

function FeaturedCard({ card }: { card: MarketingHeaderFeaturedCard }) {
    const hasActions = card.actions && card.actions.length > 0;
    const Tag = !hasActions && card.href ? "a" : "div";
    const linkProps = !hasActions && card.href ? { href: card.href } : {};
    return (
        <Tag className={s.featuredCard} onClick={!hasActions ? card.onClick : undefined} {...linkProps}>
            {card.image && (
                <img src={card.image} alt={card.title} className={s.featuredCardImage} />
            )}
            <div className={s.featuredCardBody}>
                <span className={s.featuredCardTitle}>{card.title}</span>
                {card.description && (
                    <span className={s.featuredCardDesc}>{card.description}</span>
                )}
                {hasActions && (
                    <div className={s.featuredCardActions}>
                        {card.actions!.map((action, ai) => (
                            <a
                                key={ai}
                                href={action.href || "#"}
                                className={cn(s.featuredCardAction, action.primary && s.featuredCardActionPrimary)}
                                onClick={(e) => { if (action.onClick) { e.preventDefault(); action.onClick(); } }}
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </Tag>
    );
}

/* ══════════════════════════════════════════════
   Dropdown Panel
   ══════════════════════════════════════════════ */

function DropdownPanel({ navItem }: { navItem: MarketingHeaderNavItem }) {
    const layout = navItem.dropdownLayout || "simple";
    const hasSidebar = !!navItem.sidebar;
    const items = navItem.items || [];
    const columns = navItem.columns || [];

    const renderColumns = () => {
        if (columns.length > 0) {
            return columns.map((col, ci) => (
                <div key={ci} className={s.columnGroup}>
                    {col.label && <p className={s.columnLabel}>{col.label}</p>}
                    {col.items.map((item, ii) => (
                        <MenuItem key={ii} item={item} />
                    ))}
                </div>
            ));
        }
        return items.map((item, i) => <MenuItem key={i} item={item} />);
    };

    const gridClass =
        layout === "two-columns" ? s.dropdownTwoCols :
        layout === "three-columns" ? s.dropdownThreeCols :
        layout === "four-columns" ? s.dropdownFourCols : "";

    if (hasSidebar) {
        return (
            <div className={s.dropdownWithSidebar}>
                <div className={s.dropdownMain}>
                    {layout === "simple" ? (
                        <div className={s.dropdownSimple}>{renderColumns()}</div>
                    ) : (
                        <div className={cn(s.dropdownColumns, gridClass)}>
                            {renderColumns()}
                        </div>
                    )}
                    {navItem.footer && <DropdownFooter footer={navItem.footer} />}
                </div>
                <div className={s.dropdownSidebar}>
                    {navItem.sidebar?.featuredCard && (
                        <FeaturedCard card={navItem.sidebar.featuredCard} />
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            {layout === "simple" ? (
                <div className={s.dropdownSimple}>{renderColumns()}</div>
            ) : (
                <div className={cn(s.dropdownColumns, gridClass)}>
                    {renderColumns()}
                </div>
            )}
            {navItem.footer && <DropdownFooter footer={navItem.footer} />}
        </>
    );
}

/* ══════════════════════════════════════════════
   Mobile Menu
   ══════════════════════════════════════════════ */

function MobileMenu({
    navItems,
    actions,
    mobileFooter,
    onClose,
    brandContent,
}: {
    navItems: MarketingHeaderNavItem[];
    actions?: React.ReactNode;
    mobileFooter?: React.ReactNode;
    onClose: () => void;
    brandContent: React.ReactNode;
}) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <>
            <div className={s.mobileOverlay} onClick={onClose} />
            <div className={s.mobileMenu}>
                <div className={s.mobileMenuHeader}>
                    {brandContent}
                    <button
                        type="button"
                        className={s.mobileCloseBtn}
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <CloseCircle size={22} variant="Linear" color="currentColor" />
                    </button>
                </div>

                <div className={s.mobileMenuBody}>
                    {navItems.map((item, i) => {
                        const hasDropdown = (item.items && item.items.length > 0) || (item.columns && item.columns.length > 0);
                        const isExpanded = expandedIndex === i;

                        if (!hasDropdown) {
                            return (
                                <a
                                    key={i}
                                    href={item.href || "#"}
                                    className={s.mobileNavItem}
                                    onClick={(e) => {
                                        if (item.onClick) { e.preventDefault(); item.onClick(); }
                                        onClose();
                                    }}
                                >
                                    {item.label}
                                </a>
                            );
                        }

                        const allItems: MarketingHeaderMenuItem[] = item.items || [];
                        if (item.columns) {
                            item.columns.forEach(col => allItems.push(...col.items));
                        }

                        return (
                            <div key={i}>
                                <button
                                    type="button"
                                    className={s.mobileNavItem}
                                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                                >
                                    {item.label}
                                    <span className={cn(s.chevron, isExpanded && s.chevronOpen)}>
                                        <ArrowDown2 size={16} variant="Linear" color="currentColor" />
                                    </span>
                                </button>
                                {isExpanded && (
                                    <div className={s.mobileSubMenu}>
                                        {allItems.map((sub, si) => {
                                            const SubTag = sub.href ? "a" : "button";
                                            const subLinkProps = sub.href ? { href: sub.href } : {};
                                            return (
                                                <SubTag
                                                    key={si}
                                                    className={s.mobileSubItem}
                                                    onClick={() => { sub.onClick?.(); onClose(); }}
                                                    {...subLinkProps}
                                                >
                                                    {sub.icon && <div className={s.mobileSubIcon}>{sub.icon}</div>}
                                                    {sub.title}
                                                </SubTag>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className={s.mobileMenuFooter}>
                    {mobileFooter || actions}
                </div>
            </div>
        </>
    );
}

/* ══════════════════════════════════════════════
   MarketingHeader Component
   ══════════════════════════════════════════════ */

export function MarketingHeader({
    navItems = [],
    logo,
    logoText = "O",
    brandName = "Omnira",
    onBrandClick,
    brandHref = "/",
    floating = false,
    sticky = false,
    actions,
    mobileFooter,
    className,
}: MarketingHeaderProps) {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLElement>(null);

    /* ── Hover open / close with generous delay ── */
    const handleNavEnter = useCallback((index: number) => {
        setOpenDropdown(index);
    }, []);

    const handleNavLeave = useCallback(() => {
        setOpenDropdown(null);
    }, []);

    /* ── Close on outside click + Escape ── */
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpenDropdown(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    /* ── Brand content ── */
    const brandContent = (
        <a
            href={brandHref}
            className={s.brand}
            onClick={(e) => { if (onBrandClick) { e.preventDefault(); onBrandClick(); } }}
        >
            <div className={s.brandLogo}>{logo ?? logoText}</div>
            <span className={s.brandName}>{brandName}</span>
        </a>
    );

    return (
        <header
            ref={headerRef}
            className={cn(
                s.root,
                floating && s.rootFloating,
                sticky && s.rootSticky,
                className,
            )}
        >
            <div className={s.bar}>
                <div className={s.barInner}>
                    {/* ── Brand ── */}
                    {brandContent}

                    {/* ── Desktop Nav ── */}
                    <nav className={s.nav}>
                        {navItems.map((item, i) => {
                            const hasDropdown = (item.items && item.items.length > 0) || (item.columns && item.columns.length > 0);
                            const isOpen = openDropdown === i;

                            if (!hasDropdown) {
                                return (
                                    <a
                                        key={i}
                                        href={item.href || "#"}
                                        className={cn(s.navItem, item.active && s.navItemActive)}
                                        onClick={(e) => {
                                            if (item.onClick) { e.preventDefault(); item.onClick(); }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                );
                            }

                            const isFloatingDropdown = item.dropdownStyle !== "full-width";

                            return (
                                <div
                                    key={i}
                                    className={s.dropdownAnchor}
                                    onMouseEnter={() => handleNavEnter(i)}
                                    onMouseLeave={handleNavLeave}
                                >
                                    <button
                                        type="button"
                                        className={cn(s.navItem, isOpen && s.navItemOpen, item.active && s.navItemActive)}
                                        onClick={() => setOpenDropdown(isOpen ? null : i)}
                                        aria-expanded={isOpen}
                                    >
                                        {item.label}
                                        <span className={cn(s.chevron, isOpen && s.chevronOpen)}>
                                            <ArrowDown2 size={14} variant="Linear" color="currentColor" />
                                        </span>
                                    </button>

                                    {isOpen && isFloatingDropdown && (
                                        <div className={s.dropdown}>
                                            <DropdownPanel navItem={item} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* ── Actions ── */}
                    {actions && <div className={s.actions}>{actions}</div>}

                    {/* ── Hamburger ── */}
                    <button
                        type="button"
                        className={s.hamburger}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <HambergerMenu size={24} variant="Linear" color="currentColor" />
                    </button>
                </div>
            </div>

            {/* ── Full-width dropdowns render below bar ── */}
            {navItems.map((item, i) => {
                const isOpen = openDropdown === i;
                const isFullWidth = item.dropdownStyle === "full-width";
                if (!isOpen || !isFullWidth) return null;
                return (
                    <div
                        key={`fw-${i}`}
                        className={s.dropdownFullWidth}
                        onMouseEnter={() => setOpenDropdown(i)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <div className={s.dropdownFullWidthInner}>
                            <DropdownPanel navItem={item} />
                        </div>
                    </div>
                );
            })}

            {/* ── Mobile Menu ── */}
            {mobileOpen && (
                <MobileMenu
                    navItems={navItems}
                    actions={actions}
                    mobileFooter={mobileFooter}
                    onClose={() => setMobileOpen(false)}
                    brandContent={brandContent}
                />
            )}
        </header>
    );
}
