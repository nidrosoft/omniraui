"use client";

import { useState, useCallback, createContext, useContext, forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Collapse.module.css";

/* ══════════════════════════════════════
   Collapse Group (accordion wrapper)
   ══════════════════════════════════════ */
interface CollapseContextValue {
    openItems: Set<string>;
    toggle: (id: string) => void;
}

const CollapseContext = createContext<CollapseContextValue | null>(null);

export interface CollapseGroupProps {
    children: React.ReactNode;
    multiple?: boolean;
    defaultOpen?: string[];
    className?: string;
}

export const CollapseGroup = forwardRef<HTMLDivElement, CollapseGroupProps>(
    ({ children, multiple = false, defaultOpen = [], className }, ref) => {
        const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

        const toggle = useCallback(
            (id: string) => {
                setOpenItems((prev) => {
                    const next = new Set(prev);
                    if (next.has(id)) {
                        next.delete(id);
                    } else {
                        if (!multiple) next.clear();
                        next.add(id);
                    }
                    return next;
                });
            },
            [multiple],
        );

        return (
            <CollapseContext.Provider value={{ openItems, toggle }}>
                <div ref={ref} className={cn(styles.group, className)}>
                    {children}
                </div>
            </CollapseContext.Provider>
        );
    },
);

CollapseGroup.displayName = "CollapseGroup";

/* ══════════════════════════════════════
   Collapse Item
   ══════════════════════════════════════ */
export interface CollapseItemProps {
    id: string;
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

export const CollapseItem = forwardRef<HTMLDivElement, CollapseItemProps>(
    ({ id, title, children, defaultOpen = false, className }, ref) => {
        const ctx = useContext(CollapseContext);

        // Standalone mode (no group)
        const [standaloneOpen, setStandaloneOpen] = useState(defaultOpen);
        const isOpen = ctx ? ctx.openItems.has(id) : standaloneOpen;
        const handleToggle = ctx ? () => ctx.toggle(id) : () => setStandaloneOpen((p) => !p);

        return (
            <div ref={ref} className={cn(styles.item, className)}>
                <button
                    className={styles.itemHeader}
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                >
                    <span className={styles.itemTitle}>{title}</span>
                    <span className={cn(styles.itemChevron, isOpen && styles.itemChevronOpen)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
                {isOpen && (
                    <div className={styles.itemContent}>
                        {children}
                    </div>
                )}
            </div>
        );
    },
);

CollapseItem.displayName = "CollapseItem";
