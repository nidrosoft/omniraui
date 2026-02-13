"use client";

import {
    useState,
    useRef,
    useEffect,
    useCallback,
} from "react";
import { ArrowDown2, SearchNormal1, CloseCircle, TickCircle } from "iconsax-react";
import { cn } from "../../../lib/cn";
import styles from "./Select.module.css";

/* ── Types ── */

export type SelectSize = "sm" | "md" | "lg";

export interface SelectItem {
    id: string;
    label: string;
    supportingText?: string;
    icon?: React.ReactNode;
    avatarSrc?: string;
    dot?: boolean;
    disabled?: boolean;
}

/* ── Select ── */

export interface SelectProps {
    items: SelectItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    hint?: string;
    error?: string;
    size?: SelectSize;
    disabled?: boolean;
    required?: boolean;
    placeholderIcon?: React.ReactNode;
    className?: string;
}

export function Select({
    items,
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    placeholder = "Select an option",
    label,
    hint,
    error,
    size = "md",
    disabled = false,
    required = false,
    placeholderIcon,
    className,
}: SelectProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const selectedItem = items.find((i) => i.id === selectedValue);

    const handleSelect = useCallback(
        (id: string) => {
            if (controlledValue === undefined) setInternalValue(id);
            onValueChange?.(id);
            setOpen(false);
        },
        [controlledValue, onValueChange],
    );

    /* Close on outside click */
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    /* Close on Escape */
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open]);

    return (
            <div className={cn(styles.wrapper, className)} ref={rootRef}>
                {label && (
                    <label className={styles.label}>
                        {label}
                        {required && <span className={styles.required}>*</span>}
                    </label>
                )}
                <button
                    type="button"
                    className={cn(
                        styles.trigger,
                        styles[size],
                        open && styles.triggerOpen,
                        error && styles.triggerError,
                        disabled && styles.triggerDisabled,
                    )}
                    onClick={() => !disabled && setOpen(!open)}
                    disabled={disabled}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                >
                    <span className={styles.triggerValue}>
                        {selectedItem ? (
                            <ItemContent item={selectedItem} />
                        ) : (
                            <span className={styles.placeholder}>
                                {placeholderIcon && <span className={styles.placeholderIcon}>{placeholderIcon}</span>}
                                {placeholder}
                            </span>
                        )}
                    </span>
                    <ArrowDown2
                        size={size === "sm" ? 14 : 16}
                        color="var(--color-text-tertiary)"
                        className={cn(styles.chevron, open && styles.chevronOpen)}
                    />
                </button>

                {open && (
                    <div className={styles.listbox} role="listbox">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={cn(
                                    styles.option,
                                    selectedValue === item.id && styles.optionSelected,
                                    item.disabled && styles.optionDisabled,
                                )}
                                role="option"
                                aria-selected={selectedValue === item.id}
                                disabled={item.disabled}
                                onClick={() => !item.disabled && handleSelect(item.id)}
                            >
                                <ItemContent item={item} />
                                {selectedValue === item.id && (
                                    <TickCircle size={16} variant="Bulk" color="var(--color-lime)" />
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {error && <span className={styles.errorText}>{error}</span>}
                {hint && !error && <span className={styles.hint}>{hint}</span>}
            </div>
    );
}

/* ── Search / ComboBox ── */

export interface SelectComboBoxProps extends Omit<SelectProps, "placeholderIcon"> {
    searchPlaceholder?: string;
}

export function SelectComboBox({
    items,
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    placeholder = "Select an option",
    searchPlaceholder = "Search...",
    label,
    hint,
    error,
    size = "md",
    disabled = false,
    required = false,
    className,
}: SelectComboBoxProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const rootRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const selectedItem = items.find((i) => i.id === selectedValue);
    const filtered = items.filter(
        (i) =>
            i.label.toLowerCase().includes(search.toLowerCase()) ||
            (i.supportingText && i.supportingText.toLowerCase().includes(search.toLowerCase())),
    );

    const handleSelect = useCallback(
        (id: string) => {
            if (controlledValue === undefined) setInternalValue(id);
            onValueChange?.(id);
            setOpen(false);
            setSearch("");
        },
        [controlledValue, onValueChange],
    );

    useEffect(() => {
        if (open && searchRef.current) searchRef.current.focus();
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                setOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open]);

    return (
        <div className={cn(styles.wrapper, className)} ref={rootRef}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <button
                type="button"
                className={cn(
                    styles.trigger,
                    styles[size],
                    open && styles.triggerOpen,
                    error && styles.triggerError,
                    disabled && styles.triggerDisabled,
                )}
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={styles.triggerValue}>
                    {selectedItem ? (
                        <ItemContent item={selectedItem} />
                    ) : (
                        <span className={styles.placeholder}>{placeholder}</span>
                    )}
                </span>
                <ArrowDown2
                    size={size === "sm" ? 14 : 16}
                    color="var(--color-text-tertiary)"
                    className={cn(styles.chevron, open && styles.chevronOpen)}
                />
            </button>

            {open && (
                <div className={styles.listbox} role="listbox">
                    <div className={styles.searchBox}>
                        <SearchNormal1 size={14} variant="Bulk" color="var(--color-text-tertiary)" />
                        <input
                            ref={searchRef}
                            className={styles.searchInput}
                            type="text"
                            placeholder={searchPlaceholder}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {filtered.length === 0 && (
                        <div className={styles.noResults}>No results found</div>
                    )}
                    {filtered.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={cn(
                                styles.option,
                                selectedValue === item.id && styles.optionSelected,
                                item.disabled && styles.optionDisabled,
                            )}
                            role="option"
                            aria-selected={selectedValue === item.id}
                            disabled={item.disabled}
                            onClick={() => !item.disabled && handleSelect(item.id)}
                        >
                            <ItemContent item={item} />
                            {selectedValue === item.id && (
                                <TickCircle size={16} variant="Bulk" color="var(--color-lime)" />
                            )}
                        </button>
                    ))}
                </div>
            )}

            {error && <span className={styles.errorText}>{error}</span>}
            {hint && !error && <span className={styles.hint}>{hint}</span>}
        </div>
    );
}

/* ── Multi-Select (Tags) ── */

export interface SelectTagsProps {
    items: SelectItem[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    hint?: string;
    error?: string;
    size?: SelectSize;
    disabled?: boolean;
    required?: boolean;
    className?: string;
}

export function SelectTags({
    items,
    value: controlledValue,
    defaultValue = [],
    onValueChange,
    placeholder = "Select options",
    label,
    hint,
    error,
    size = "md",
    disabled = false,
    required = false,
    className,
}: SelectTagsProps) {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const selectedValues = controlledValue !== undefined ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const selectedItems = items.filter((i) => selectedValues.includes(i.id));

    const toggleItem = useCallback(
        (id: string) => {
            const next = selectedValues.includes(id)
                ? selectedValues.filter((v) => v !== id)
                : [...selectedValues, id];
            if (controlledValue === undefined) setInternalValue(next);
            onValueChange?.(next);
        },
        [controlledValue, selectedValues, onValueChange],
    );

    const removeItem = useCallback(
        (id: string) => {
            const next = selectedValues.filter((v) => v !== id);
            if (controlledValue === undefined) setInternalValue(next);
            onValueChange?.(next);
        },
        [controlledValue, selectedValues, onValueChange],
    );

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
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
        <div className={cn(styles.wrapper, className)} ref={rootRef}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <button
                type="button"
                className={cn(
                    styles.trigger,
                    styles.triggerTags,
                    styles[size],
                    open && styles.triggerOpen,
                    error && styles.triggerError,
                    disabled && styles.triggerDisabled,
                )}
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={styles.tagsContainer}>
                    {selectedItems.length > 0 ? (
                        selectedItems.map((item) => (
                            <span key={item.id} className={styles.tagChip}>
                                {item.avatarSrc && (
                                    <img src={item.avatarSrc} alt="" className={styles.tagChipAvatar} />
                                )}
                                <span>{item.label}</span>
                                <button
                                    type="button"
                                    className={styles.tagChipRemove}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeItem(item.id);
                                    }}
                                    aria-label={`Remove ${item.label}`}
                                >
                                    <CloseCircle size={12} variant="Bold" color="currentColor" />
                                </button>
                            </span>
                        ))
                    ) : (
                        <span className={styles.placeholder}>{placeholder}</span>
                    )}
                </span>
                <ArrowDown2
                    size={size === "sm" ? 14 : 16}
                    color="var(--color-text-tertiary)"
                    className={cn(styles.chevron, open && styles.chevronOpen)}
                />
            </button>

            {open && (
                <div className={styles.listbox} role="listbox">
                    {items.map((item) => {
                        const isSelected = selectedValues.includes(item.id);
                        return (
                            <button
                                key={item.id}
                                type="button"
                                className={cn(
                                    styles.option,
                                    isSelected && styles.optionSelected,
                                    item.disabled && styles.optionDisabled,
                                )}
                                role="option"
                                aria-selected={isSelected}
                                disabled={item.disabled}
                                onClick={() => !item.disabled && toggleItem(item.id)}
                            >
                                <ItemContent item={item} />
                                {isSelected && (
                                    <TickCircle size={16} variant="Bulk" color="var(--color-lime)" />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {error && <span className={styles.errorText}>{error}</span>}
            {hint && !error && <span className={styles.hint}>{hint}</span>}
        </div>
    );
}

/* ── Item Content (shared renderer) ── */

function ItemContent({ item }: { item: SelectItem }) {
    return (
        <span className={styles.itemContent}>
            {item.dot && <span className={styles.dot} />}
            {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
            {item.avatarSrc && (
                <img src={item.avatarSrc} alt="" className={styles.avatar} loading="lazy" />
            )}
            <span className={styles.itemText}>
                <span className={styles.itemLabel}>{item.label}</span>
                {item.supportingText && (
                    <span className={styles.itemSupporting}>{item.supportingText}</span>
                )}
            </span>
        </span>
    );
}
