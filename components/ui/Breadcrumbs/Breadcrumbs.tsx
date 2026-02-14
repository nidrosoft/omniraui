"use client";

import React from "react";
import { Home2, ArrowRight2 } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./Breadcrumbs.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type BreadcrumbVariant = "text" | "textLine" | "button";

export interface BreadcrumbItem {
    /** Display label */
    label: string;
    /** URL to navigate to. Omit for the current (last) item. */
    href?: string;
    /** Custom icon element */
    icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
    /** Array of breadcrumb items */
    items: BreadcrumbItem[];
    /** Visual variant */
    variant?: BreadcrumbVariant;
    /** Show a home icon as the first item */
    showHome?: boolean;
    /** Home URL */
    homeHref?: string;
    /** Max items to show before collapsing with ellipsis. 0 = no collapse. */
    maxItems?: number;
    /** Custom separator element */
    separator?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Breadcrumbs
   ══════════════════════════════════════════════ */

export function Breadcrumbs({
    items,
    variant = "text",
    showHome = false,
    homeHref = "/",
    maxItems = 0,
    separator,
    className,
}: BreadcrumbsProps) {
    const isButton = variant === "button";
    const isLine = variant === "textLine";

    /* Collapse items if maxItems is set */
    let displayItems = items;
    let collapsed = false;
    if (maxItems > 0 && items.length > maxItems) {
        const first = items.slice(0, 1);
        const last = items.slice(-(maxItems - 1));
        displayItems = [...first, { label: "…" }, ...last];
        collapsed = true;
    }

    const renderSeparator = (key: string) => {
        if (separator) {
            return <span key={key} className={s.separator}>{separator}</span>;
        }
        if (isLine) {
            return <span key={key} className={s.separatorLine} />;
        }
        return (
            <span key={key} className={s.separator}>
                <ArrowRight2 size={14} variant="Linear" color="currentColor" />
            </span>
        );
    };

    const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
        /* Ellipsis */
        if (item.label === "…" && collapsed) {
            return <span className={s.ellipsis}>…</span>;
        }

        /* Current (last) item */
        if (isLast) {
            return (
                <span className={isButton ? s.btnCurrent : s.current} aria-current="page">
                    {item.icon}
                    {item.label}
                </span>
            );
        }

        /* Link item */
        if (item.href) {
            return (
                <a href={item.href} className={isButton ? s.btnLink : s.link}>
                    {item.icon}
                    {item.label}
                </a>
            );
        }

        return (
            <span className={isButton ? s.btnLink : s.link}>
                {item.icon}
                {item.label}
            </span>
        );
    };

    return (
        <nav className={cn(s.nav, className)} aria-label="Breadcrumb">
            <ol className={s.list}>
                {showHome && (
                    <>
                        <li className={s.item}>
                            <a href={homeHref} className={cn(isButton ? s.btnLink : s.link, s.homeIcon)} aria-label="Home">
                                <Home2 size={16} variant="Bulk" color="currentColor" />
                            </a>
                        </li>
                        {renderSeparator("home-sep")}
                    </>
                )}
                {displayItems.map((item, i) => {
                    const isLast = i === displayItems.length - 1;
                    return (
                        <React.Fragment key={i}>
                            <li className={s.item}>{renderItem(item, i, isLast)}</li>
                            {!isLast && renderSeparator(`sep-${i}`)}
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
