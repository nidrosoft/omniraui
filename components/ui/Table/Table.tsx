"use client";

import {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
    forwardRef,
} from "react";
import { ArrowUp2, More, InfoCircle, Edit, Trash, ExportSquare, Copy } from "iconsax-react";
import { cn } from "@/lib/cn";
import styles from "./Table.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type SortDirection = "ascending" | "descending";

export interface SortDescriptor {
    column: string;
    direction: SortDirection;
}

/* ══════════════════════════════════════════════
   Table Context
   ══════════════════════════════════════════════ */

interface TableCtx {
    sortDescriptor?: SortDescriptor;
    onSortChange?: (descriptor: SortDescriptor) => void;
    selectionMode?: "none" | "single" | "multiple";
    selectedKeys: Set<string>;
    toggleSelection: (key: string) => void;
    toggleAll: () => void;
    allKeys: string[];
    registerKey: (key: string) => void;
    unregisterKey: (key: string) => void;
}

const TableContext = createContext<TableCtx>({
    selectedKeys: new Set(),
    toggleSelection: () => {},
    toggleAll: () => {},
    allKeys: [],
    registerKey: () => {},
    unregisterKey: () => {},
});

/* ══════════════════════════════════════════════
   TableCard — Card wrapper with header/footer
   ══════════════════════════════════════════════ */

interface TableCardRootProps {
    children: React.ReactNode;
    size?: "sm" | "md";
    className?: string;
}

function TableCardRoot({ children, size = "md", className }: TableCardRootProps) {
    return (
        <div className={cn(styles.cardRoot, size === "sm" && styles.cardRootSm, className)}>
            {children}
        </div>
    );
}

interface TableCardHeaderProps {
    title: string;
    description?: string;
    badge?: string;
    contentTrailing?: React.ReactNode;
    className?: string;
}

function TableCardHeader({ title, description, badge, contentTrailing, className }: TableCardHeaderProps) {
    return (
        <div className={cn(styles.cardHeader, className)}>
            <div>
                <h3 className={styles.cardTitle}>{title}</h3>
                {description && <p className={styles.cardDescription}>{description}</p>}
            </div>
            {badge && <span className={styles.cardBadge}>{badge}</span>}
            {contentTrailing}
        </div>
    );
}

export const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader,
};

/* ══════════════════════════════════════════════
   Table — Root table element
   ══════════════════════════════════════════════ */

export interface TableProps {
    children: React.ReactNode;
    "aria-label"?: string;
    selectionMode?: "none" | "single" | "multiple";
    sortDescriptor?: SortDescriptor;
    onSortChange?: (descriptor: SortDescriptor) => void;
    selectedKeys?: Set<string>;
    onSelectionChange?: (keys: Set<string>) => void;
    className?: string;
}

export function Table({
    children,
    "aria-label": ariaLabel,
    selectionMode = "none",
    sortDescriptor,
    onSortChange,
    selectedKeys: controlledKeys,
    onSelectionChange,
    className,
}: TableProps) {
    const [internalKeys, setInternalKeys] = useState<Set<string>>(new Set());
    const [allKeys, setAllKeys] = useState<string[]>([]);

    const selectedKeys = controlledKeys ?? internalKeys;

    const setSelectedKeys = useCallback(
        (keys: Set<string>) => {
            if (!controlledKeys) setInternalKeys(keys);
            onSelectionChange?.(keys);
        },
        [controlledKeys, onSelectionChange],
    );

    const toggleSelection = useCallback(
        (key: string) => {
            const next = new Set(selectedKeys);
            if (selectionMode === "single") {
                if (next.has(key)) {
                    next.clear();
                } else {
                    next.clear();
                    next.add(key);
                }
            } else {
                if (next.has(key)) next.delete(key);
                else next.add(key);
            }
            setSelectedKeys(next);
        },
        [selectedKeys, selectionMode, setSelectedKeys],
    );

    const toggleAll = useCallback(() => {
        if (selectedKeys.size === allKeys.length) {
            setSelectedKeys(new Set());
        } else {
            setSelectedKeys(new Set(allKeys));
        }
    }, [selectedKeys, allKeys, setSelectedKeys]);

    const registerKey = useCallback((key: string) => {
        setAllKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
    }, []);

    const unregisterKey = useCallback((key: string) => {
        setAllKeys((prev) => prev.filter((k) => k !== key));
    }, []);

    const ctx = useMemo<TableCtx>(
        () => ({
            sortDescriptor,
            onSortChange,
            selectionMode,
            selectedKeys,
            toggleSelection,
            toggleAll,
            allKeys,
            registerKey,
            unregisterKey,
        }),
        [sortDescriptor, onSortChange, selectionMode, selectedKeys, toggleSelection, toggleAll, allKeys, registerKey, unregisterKey],
    );

    return (
        <TableContext.Provider value={ctx}>
            <div className={styles.scrollWrap}>
                <table className={cn(styles.table, className)} aria-label={ariaLabel}>
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
}

/* ══════════════════════════════════════════════
   Table.Header
   ══════════════════════════════════════════════ */

interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
}

function TableHeader({ children, className }: TableHeaderProps) {
    const { selectionMode, selectedKeys, allKeys, toggleAll } = useContext(TableContext);
    const allSelected = allKeys.length > 0 && selectedKeys.size === allKeys.length;
    const someSelected = selectedKeys.size > 0 && !allSelected;

    return (
        <thead className={cn(styles.thead, className)}>
            <tr>
                {selectionMode === "multiple" && (
                    <th className={styles.checkboxCell}>
                        <input
                            type="checkbox"
                            className={cn(
                                styles.headerCheckbox,
                                someSelected && styles.headerCheckboxIndeterminate,
                            )}
                            checked={allSelected}
                            onChange={toggleAll}
                            aria-label="Select all rows"
                        />
                    </th>
                )}
                {children}
            </tr>
        </thead>
    );
}

/* ══════════════════════════════════════════════
   Table.Head — Column header cell
   ══════════════════════════════════════════════ */

interface TableHeadProps {
    id?: string;
    label?: string;
    allowsSorting?: boolean;
    isRowHeader?: boolean;
    tooltip?: string;
    className?: string;
    children?: React.ReactNode;
}

function TableHead({
    id,
    label,
    allowsSorting = false,
    tooltip,
    className,
    children,
}: TableHeadProps) {
    const { sortDescriptor, onSortChange } = useContext(TableContext);
    const [showTooltip, setShowTooltip] = useState(false);
    const isActive = sortDescriptor?.column === id;
    const direction = isActive ? sortDescriptor?.direction : undefined;

    const handleSort = () => {
        if (!allowsSorting || !id || !onSortChange) return;
        const nextDir: SortDirection =
            isActive && direction === "ascending" ? "descending" : "ascending";
        onSortChange({ column: id, direction: nextDir });
    };

    return (
        <th
            className={cn(allowsSorting && styles.sortableHead, className)}
            onClick={allowsSorting ? handleSort : undefined}
            aria-sort={isActive ? (direction === "ascending" ? "ascending" : "descending") : undefined}
        >
            <span className={styles.headInner}>
                {label ?? children}
                {allowsSorting && (
                    <span
                        className={cn(
                            styles.sortIcon,
                            isActive && styles.sortIconActive,
                            direction === "descending" && styles.sortIconDesc,
                        )}
                    >
                        <ArrowUp2 size={12} variant="Bold" color="currentColor" />
                    </span>
                )}
                {tooltip && (
                    <span
                        className={styles.headTooltipWrap}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <span className={styles.headTooltipIcon}>
                            <InfoCircle size={14} variant="Bulk" color="currentColor" />
                        </span>
                        {showTooltip && (
                            <span className={styles.headTooltipBubble}>{tooltip}</span>
                        )}
                    </span>
                )}
            </span>
        </th>
    );
}

/* ══════════════════════════════════════════════
   Table.Body
   ══════════════════════════════════════════════ */

interface TableBodyProps<T> {
    items?: T[];
    children: ((item: T) => React.ReactNode) | React.ReactNode;
    className?: string;
}

function TableBody<T>({ items, children, className }: TableBodyProps<T>) {
    if (items && typeof children === "function") {
        return (
            <tbody className={cn(styles.tbody, className)}>
                {items.map((item, i) => (children as (item: T) => React.ReactNode)(item))}
            </tbody>
        );
    }

    return (
        <tbody className={cn(styles.tbody, className)}>
            {children as React.ReactNode}
        </tbody>
    );
}

/* ══════════════════════════════════════════════
   Table.Row
   ══════════════════════════════════════════════ */

interface TableRowProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

function TableRow({ id, children, className }: TableRowProps) {
    const { selectionMode, selectedKeys, toggleSelection, registerKey, unregisterKey } =
        useContext(TableContext);
    const isSelected = selectedKeys.has(id);

    useEffect(() => {
        registerKey(id);
        return () => unregisterKey(id);
    }, [id, registerKey, unregisterKey]);

    return (
        <tr className={cn(isSelected && styles.rowSelected, className)}>
            {selectionMode === "multiple" && (
                <td className={cn(styles.td, styles.checkboxCell)}>
                    <input
                        type="checkbox"
                        className={styles.rowCheckbox}
                        checked={isSelected}
                        onChange={() => toggleSelection(id)}
                        aria-label={`Select row ${id}`}
                    />
                </td>
            )}
            {children}
        </tr>
    );
}

/* ══════════════════════════════════════════════
   Table.Cell
   ══════════════════════════════════════════════ */

interface TableCellProps {
    children?: React.ReactNode;
    className?: string;
}

function TableCell({ children, className }: TableCellProps) {
    return <td className={cn(styles.td, className)}>{children}</td>;
}

/* ══════════════════════════════════════════════
   TableRowActionsDropdown
   ══════════════════════════════════════════════ */

export interface TableRowActionsDropdownProps {
    items?: {
        label: string;
        icon?: React.ReactNode;
        destructive?: boolean;
        onSelect?: () => void;
    }[];
    className?: string;
}

export function TableRowActionsDropdown({ items, className }: TableRowActionsDropdownProps) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);

    const defaultItems: TableRowActionsDropdownProps["items"] = [
        { label: "Edit", icon: <Edit size={14} variant="Linear" color="currentColor" /> },
        { label: "Duplicate", icon: <Copy size={14} variant="Linear" color="currentColor" /> },
        { label: "Export", icon: <ExportSquare size={14} variant="Linear" color="currentColor" /> },
        { label: "Delete", icon: <Trash size={14} variant="Linear" color="currentColor" />, destructive: true },
    ];

    const menuItems = items ?? defaultItems;

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open]);

    return (
        <div ref={wrapRef} className={cn(styles.rowActionsWrap, className)}>
            <button
                type="button"
                className={styles.rowActionsBtn}
                onClick={() => setOpen((v) => !v)}
                aria-label="Row actions"
                aria-expanded={open}
            >
                <More size={18} variant="Linear" color="currentColor" />
            </button>
            {open && (
                <div className={styles.rowActionsMenu} role="menu">
                    {menuItems.map((item, i) => (
                        <div key={item.label}>
                            {item.destructive && i > 0 && <div className={styles.rowActionsSeparator} />}
                            <button
                                type="button"
                                className={cn(
                                    styles.rowActionsMenuItem,
                                    item.destructive && styles.rowActionsMenuItemDestructive,
                                )}
                                role="menuitem"
                                onClick={() => {
                                    item.onSelect?.();
                                    setOpen(false);
                                }}
                            >
                                {item.icon && (
                                    <span className={styles.rowActionsMenuItemIcon}>{item.icon}</span>
                                )}
                                {item.label}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   PaginationMinimal
   ══════════════════════════════════════════════ */

export interface PaginationMinimalProps {
    page: number;
    total: number;
    onPageChange?: (page: number) => void;
    align?: "left" | "right" | "between";
    className?: string;
}

export function PaginationMinimal({
    page,
    total,
    onPageChange,
    align = "right",
    className,
}: PaginationMinimalProps) {
    return (
        <div
            className={cn(
                styles.paginationFooter,
                align === "right" && styles.paginationFooterRight,
                className,
            )}
        >
            {align === "between" && (
                <span className={styles.paginationInfo}>
                    Page {page} of {total}
                </span>
            )}
            <div className={styles.paginationActions}>
                <button
                    type="button"
                    className={styles.paginationBtn}
                    disabled={page <= 1}
                    onClick={() => onPageChange?.(page - 1)}
                    aria-label="Previous page"
                >
                    <ArrowUp2
                        size={14}
                        variant="Bold"
                        color="currentColor"
                        style={{ transform: "rotate(-90deg)" }}
                    />
                </button>
                <span className={styles.paginationInfo}>
                    {page} / {total}
                </span>
                <button
                    type="button"
                    className={styles.paginationBtn}
                    disabled={page >= total}
                    onClick={() => onPageChange?.(page + 1)}
                    aria-label="Next page"
                >
                    <ArrowUp2
                        size={14}
                        variant="Bold"
                        color="currentColor"
                        style={{ transform: "rotate(90deg)" }}
                    />
                </button>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   Compound export
   ══════════════════════════════════════════════ */

Table.Header = TableHeader;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
