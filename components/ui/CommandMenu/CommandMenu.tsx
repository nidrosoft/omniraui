"use client";

import { forwardRef, useState, useRef, useEffect, useCallback, useMemo } from "react";
import { cn } from "@/lib/cn";
import { SearchNormal1 } from "iconsax-react";
import styles from "./CommandMenu.module.css";

/* ══════════════════════════════════════
   Types
   ══════════════════════════════════════ */

export interface CommandMenuItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    description?: string;
    onSelect?: () => void;
}

export interface CommandMenuGroup {
    heading: string;
    items: CommandMenuItem[];
}

export interface CommandMenuProps {
    /** Whether the menu is open */
    open: boolean;
    /** Close handler */
    onClose: () => void;
    /** Grouped items */
    groups: CommandMenuGroup[];
    /** Placeholder for search input */
    placeholder?: string;
    /** Called when an item is selected */
    onSelect?: (item: CommandMenuItem) => void;
}

/* ══════════════════════════════════════
   Component
   ══════════════════════════════════════ */

export const CommandMenu = forwardRef<HTMLDivElement, CommandMenuProps>(
    (
        {
            open,
            onClose,
            groups,
            placeholder = "Type a command or search...",
            onSelect,
        },
        ref
    ) => {
        const [query, setQuery] = useState("");
        const [activeIndex, setActiveIndex] = useState(0);
        const inputRef = useRef<HTMLInputElement>(null);

        // Filter items based on query
        const filteredGroups = useMemo(() => {
            if (!query.trim()) return groups;
            const q = query.toLowerCase();
            return groups
                .map((group) => ({
                    ...group,
                    items: group.items.filter(
                        (item) =>
                            item.label.toLowerCase().includes(q) ||
                            item.description?.toLowerCase().includes(q)
                    ),
                }))
                .filter((group) => group.items.length > 0);
        }, [groups, query]);

        // Flat list for keyboard navigation
        const flatItems = useMemo(
            () => filteredGroups.flatMap((g) => g.items),
            [filteredGroups]
        );

        // Reset state when opening
        useEffect(() => {
            if (open) {
                setQuery("");
                setActiveIndex(0);
                setTimeout(() => inputRef.current?.focus(), 50);
            }
        }, [open]);

        // Clamp active index
        useEffect(() => {
            if (activeIndex >= flatItems.length) {
                setActiveIndex(Math.max(0, flatItems.length - 1));
            }
        }, [flatItems.length, activeIndex]);

        const handleSelect = useCallback(
            (item: CommandMenuItem) => {
                item.onSelect?.();
                onSelect?.(item);
                onClose();
            },
            [onSelect, onClose]
        );

        const handleKeyDown = useCallback(
            (e: React.KeyboardEvent) => {
                switch (e.key) {
                    case "ArrowDown":
                        e.preventDefault();
                        setActiveIndex((i) => (i + 1) % Math.max(1, flatItems.length));
                        break;
                    case "ArrowUp":
                        e.preventDefault();
                        setActiveIndex((i) => (i - 1 + flatItems.length) % Math.max(1, flatItems.length));
                        break;
                    case "Enter":
                        e.preventDefault();
                        if (flatItems[activeIndex]) handleSelect(flatItems[activeIndex]);
                        break;
                    case "Escape":
                        e.preventDefault();
                        onClose();
                        break;
                }
            },
            [flatItems, activeIndex, handleSelect, onClose]
        );

        if (!open) return null;

        let itemCounter = 0;

        return (
            <>
                <div className={styles.overlay} onClick={onClose} />
                <div ref={ref} className={styles.root} onKeyDown={handleKeyDown}>
                    {/* Search */}
                    <div className={styles.searchWrapper}>
                        <SearchNormal1 size={18} className={styles.searchIcon} />
                        <input
                            ref={inputRef}
                            className={styles.searchInput}
                            placeholder={placeholder}
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setActiveIndex(0);
                            }}
                            autoComplete="off"
                            spellCheck={false}
                        />
                        <kbd className={styles.kbd}>ESC</kbd>
                    </div>

                    {/* Results */}
                    <div className={styles.results}>
                        {filteredGroups.length === 0 && (
                            <div className={styles.empty}>No results found.</div>
                        )}
                        {filteredGroups.map((group) => (
                            <div key={group.heading} className={styles.group}>
                                <div className={styles.groupHeading}>{group.heading}</div>
                                {group.items.map((item) => {
                                    const idx = itemCounter++;
                                    return (
                                        <button
                                            key={item.id}
                                            className={cn(
                                                styles.item,
                                                idx === activeIndex && styles.itemActive
                                            )}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setActiveIndex(idx)}
                                            type="button"
                                        >
                                            {item.icon && (
                                                <span className={styles.itemIcon}>{item.icon}</span>
                                            )}
                                            <span className={styles.itemLabel}>{item.label}</span>
                                            {item.description && (
                                                <span className={styles.itemDesc}>{item.description}</span>
                                            )}
                                            {item.shortcut && (
                                                <kbd className={styles.itemShortcut}>{item.shortcut}</kbd>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                        <span><kbd className={styles.kbd}>↑↓</kbd> Navigate</span>
                        <span><kbd className={styles.kbd}>↵</kbd> Select</span>
                        <span><kbd className={styles.kbd}>ESC</kbd> Close</span>
                    </div>
                </div>
            </>
        );
    }
);

CommandMenu.displayName = "CommandMenu";
