"use client";

import React, { useState, useCallback } from "react";
import { Home2, ArrowLeft, SearchNormal1, MessageQuestion, Book1, Headphone } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./NotFoundPage.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface QuickLink {
    /** Icon name from iconsax */
    icon: React.ReactNode;
    /** Link title */
    title: string;
    /** Short description */
    description: string;
    /** Link URL or click handler */
    href?: string;
    onClick?: () => void;
}

export interface NotFoundPageProps {
    /** Error code to display */
    errorCode?: string | number;
    /** Main heading */
    heading?: string;
    /** Subheading/description */
    subheading?: string;
    /** Show the search bar */
    showSearch?: boolean;
    /** Placeholder text for the search bar */
    searchPlaceholder?: string;
    /** Show quick-link cards below the error message */
    showQuickLinks?: boolean;
    /** Custom quick links */
    quickLinks?: QuickLink[];
    /** Called when user searches */
    onSearch?: (query: string) => void;
    /** Called when "Go home" button is clicked */
    onGoHome?: () => void;
    /** Called when "Go back" button is clicked */
    onGoBack?: () => void;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Default quick links
   ══════════════════════════════════════════════ */

const defaultQuickLinks: QuickLink[] = [
    {
        icon: <Book1 size={20} variant="Bulk" color="currentColor" />,
        title: "Documentation",
        description: "Learn how to integrate our tools.",
    },
    {
        icon: <MessageQuestion size={20} variant="Bulk" color="currentColor" />,
        title: "Help Center",
        description: "Get help from our support team.",
    },
    {
        icon: <Headphone size={20} variant="Bulk" color="currentColor" />,
        title: "Contact Us",
        description: "Reach out directly for assistance.",
    },
];

/* ══════════════════════════════════════════════
   NotFoundPage Component
   ══════════════════════════════════════════════ */

export function NotFoundPage({
    errorCode = 404,
    heading = "Page not found",
    subheading = "Sorry, the page you are looking for doesn't exist. Here are some helpful links:",
    showSearch = true,
    searchPlaceholder = "Search our site...",
    showQuickLinks = true,
    quickLinks = defaultQuickLinks,
    onSearch,
    onGoHome,
    onGoBack,
    className,
}: NotFoundPageProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch?.(searchQuery.trim());
        }
    }, [searchQuery, onSearch]);

    return (
        <div className={cn(s.wrapper, className)}>
            <div className={s.bgGrid} />

            <div className={s.content}>
                <span className={s.errorBadge}>{errorCode} error</span>

                <p className={s.errorCode}>{errorCode}</p>

                <h1 className={s.heading}>{heading}</h1>
                <p className={s.subheading}>{subheading}</p>

                {/* Search */}
                {showSearch && (
                    <form className={s.searchWrap} onSubmit={handleSearch}>
                        <span className={s.searchIcon}>
                            <SearchNormal1 size={16} variant="Linear" color="currentColor" />
                        </span>
                        <input
                            className={s.searchInput}
                            type="text"
                            placeholder={searchPlaceholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                )}

                {/* Action Buttons */}
                <div className={s.buttonRow}>
                    <button type="button" className={s.secondaryBtn} onClick={onGoBack}>
                        <ArrowLeft size={16} variant="Linear" color="currentColor" />
                        Go back
                    </button>
                    <button type="button" className={s.primaryBtn} onClick={onGoHome}>
                        <Home2 size={18} variant="Bold" color="currentColor" />
                        Take me home
                    </button>
                </div>

                {/* Quick Links */}
                {showQuickLinks && quickLinks.length > 0 && (
                    <div className={s.linksGrid}>
                        {quickLinks.map((link, i) => (
                            <div
                                key={i}
                                className={s.linkCard}
                                onClick={link.onClick}
                                role={link.onClick ? "button" : undefined}
                                tabIndex={link.onClick ? 0 : undefined}
                            >
                                <div className={s.linkCardIcon}>{link.icon}</div>
                                <span className={s.linkCardTitle}>{link.title}</span>
                                <span className={s.linkCardDesc}>{link.description}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
