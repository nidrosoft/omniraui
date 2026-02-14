"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";
import s from "./Tabs.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type TabVariant = "brand" | "gray" | "border" | "minimal" | "underline" | "line";
export type TabSize = "sm" | "md" | "lg";
export type TabOrientation = "horizontal" | "vertical";

export interface TabItem {
    /** Unique key for the tab */
    key: string;
    /** Display label */
    label: string;
    /** Optional badge text (e.g. count) */
    badge?: string;
    /** Optional icon element */
    icon?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
}

export interface TabsProps {
    /** Array of tab items */
    items: TabItem[];
    /** Visual variant */
    variant?: TabVariant;
    /** Size */
    size?: TabSize;
    /** Orientation */
    orientation?: TabOrientation;
    /** Currently active tab key (controlled) */
    activeKey?: string;
    /** Default active tab key (uncontrolled) */
    defaultActiveKey?: string;
    /** Callback when tab changes */
    onChange?: (key: string) => void;
    /** Make tabs take full width */
    fullWidth?: boolean;
    /** Additional CSS class */
    className?: string;
}

export interface TabPanelsProps {
    /** Active tab key */
    activeKey: string;
    /** Children should be TabPanel components */
    children: React.ReactNode;
}

export interface TabPanelProps {
    /** Key matching a TabItem key */
    tabKey: string;
    /** Panel content */
    children: React.ReactNode;
}

/* ══════════════════════════════════════════════
   Tabs
   ══════════════════════════════════════════════ */

export function Tabs({
    items,
    variant = "brand",
    size = "md",
    orientation = "horizontal",
    activeKey: controlledKey,
    defaultActiveKey,
    onChange,
    fullWidth = false,
    className,
}: TabsProps) {
    const [internalKey, setInternalKey] = useState(defaultActiveKey ?? items[0]?.key ?? "");
    const activeKey = controlledKey ?? internalKey;

    const handleClick = (key: string) => {
        if (!controlledKey) setInternalKey(key);
        onChange?.(key);
    };

    const variantCls =
        variant === "gray" ? s.variantGray :
        variant === "border" ? s.variantBorder :
        variant === "minimal" ? s.variantMinimal :
        variant === "underline" ? s.variantUnderline :
        variant === "line" ? s.variantLine :
        s.variantBrand;

    const sizeCls =
        size === "sm" ? s.tabSm :
        size === "lg" ? s.tabLg :
        s.tabMd;

    const isVertical = orientation === "vertical";

    return (
        <div
            className={cn(
                s.tabList,
                isVertical ? s.tabListVertical : s.tabListHorizontal,
                variantCls,
                fullWidth && s.fullWidth,
                className,
            )}
            role="tablist"
            aria-orientation={orientation}
        >
            {items.map((item) => (
                <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={activeKey === item.key}
                    disabled={item.disabled}
                    className={cn(
                        s.tab,
                        sizeCls,
                        activeKey === item.key && s.tabActive,
                    )}
                    onClick={() => handleClick(item.key)}
                >
                    {item.icon}
                    {item.label}
                    {item.badge && <span className={s.badge}>{item.badge}</span>}
                </button>
            ))}
        </div>
    );
}

/* ══════════════════════════════════════════════
   TabPanels + TabPanel
   ══════════════════════════════════════════════ */

export function TabPanels({ activeKey, children }: TabPanelsProps) {
    const panels = React.Children.toArray(children) as React.ReactElement<TabPanelProps>[];
    const active = panels.find((p) => p.props.tabKey === activeKey);
    if (!active) return null;
    return <div className={s.panel} role="tabpanel">{active.props.children}</div>;
}

export function TabPanel({ children }: TabPanelProps) {
    return <>{children}</>;
}
