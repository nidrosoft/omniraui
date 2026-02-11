"use client";

import {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    useCallback,
    forwardRef,
} from "react";
import { TickSquare, MinusSquare, Record as RadioIcon, ArrowRight2 } from "iconsax-react";
import { cn } from "@/lib/cn";
import styles from "./Dropdown.module.css";

/* ── Context ── */

interface DropdownCtx {
    open: boolean;
    setOpen: (v: boolean) => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const Ctx = createContext<DropdownCtx>({
    open: false,
    setOpen: () => {},
    triggerRef: { current: null },
});

/* ── Root ── */

export interface DropdownMenuProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function DropdownMenu({ children, open: controlledOpen, onOpenChange }: DropdownMenuProps) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const setOpen = useCallback(
        (v: boolean) => {
            if (controlledOpen === undefined) setInternalOpen(v);
            onOpenChange?.(v);
        },
        [controlledOpen, onOpenChange],
    );

    return (
        <Ctx.Provider value={{ open: isOpen, setOpen, triggerRef }}>
            <div className={styles.root}>{children}</div>
        </Ctx.Provider>
    );
}

/* ── Trigger ── */

export interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    className?: string;
}

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
    ({ children, className }, ref) => {
        const { open, setOpen, triggerRef } = useContext(Ctx);

        return (
            <button
                ref={(node) => {
                    triggerRef.current = node;
                    if (typeof ref === "function") ref(node);
                    else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
                }}
                className={cn(styles.trigger, className)}
                onClick={() => setOpen(!open)}
                aria-haspopup="menu"
                aria-expanded={open}
                type="button"
            >
                {children}
            </button>
        );
    },
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

/* ── Content ── */

export type DropdownAlign = "start" | "center" | "end";

export interface DropdownMenuContentProps {
    children: React.ReactNode;
    align?: DropdownAlign;
    sideOffset?: number;
    className?: string;
    minWidth?: number;
}

export function DropdownMenuContent({
    children,
    align = "start",
    sideOffset = 6,
    className,
    minWidth = 200,
}: DropdownMenuContentProps) {
    const { open, setOpen, triggerRef } = useContext(Ctx);
    const contentRef = useRef<HTMLDivElement>(null);

    /* Close on outside click */
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                contentRef.current &&
                !contentRef.current.contains(target) &&
                triggerRef.current &&
                !triggerRef.current.contains(target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open, setOpen, triggerRef]);

    /* Close on Escape */
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, setOpen]);

    if (!open) return null;

    return (
        <div
            ref={contentRef}
            className={cn(styles.content, styles[`align${align}`], className)}
            style={{ marginTop: sideOffset, minWidth }}
            role="menu"
        >
            {children}
        </div>
    );
}

/* ── Group ── */

export interface DropdownMenuGroupProps {
    children: React.ReactNode;
    className?: string;
}

export function DropdownMenuGroup({ children, className }: DropdownMenuGroupProps) {
    return <div className={cn(styles.group, className)} role="group">{children}</div>;
}

/* ── Label ── */

export interface DropdownMenuLabelProps {
    children: React.ReactNode;
    className?: string;
}

export function DropdownMenuLabel({ children, className }: DropdownMenuLabelProps) {
    return <div className={cn(styles.label, className)}>{children}</div>;
}

/* ── Separator ── */

export function DropdownMenuSeparator({ className }: { className?: string }) {
    return <div className={cn(styles.separator, className)} role="separator" />;
}

/* ── Item ── */

export interface DropdownMenuItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    destructive?: boolean;
    onSelect?: () => void;
    className?: string;
}

export function DropdownMenuItem({
    children,
    icon,
    shortcut,
    disabled = false,
    destructive = false,
    onSelect,
    className,
}: DropdownMenuItemProps) {
    const { setOpen } = useContext(Ctx);

    const handleClick = () => {
        if (disabled) return;
        onSelect?.();
        setOpen(false);
    };

    return (
        <button
            className={cn(
                styles.item,
                destructive && styles.destructive,
                disabled && styles.itemDisabled,
                className,
            )}
            role="menuitem"
            disabled={disabled}
            onClick={handleClick}
            type="button"
        >
            {icon && <span className={styles.itemIcon}>{icon}</span>}
            <span className={styles.itemLabel}>{children}</span>
            {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
        </button>
    );
}

/* ── Checkbox Item ── */

export interface DropdownMenuCheckboxItemProps {
    children: React.ReactNode;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export function DropdownMenuCheckboxItem({
    children,
    checked,
    onCheckedChange,
    icon,
    disabled = false,
    className,
}: DropdownMenuCheckboxItemProps) {
    return (
        <button
            className={cn(styles.item, styles.checkItem, checked && styles.checkItemChecked, disabled && styles.itemDisabled, className)}
            role="menuitemcheckbox"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => !disabled && onCheckedChange(!checked)}
            type="button"
        >
            <span className={styles.checkIndicator}>
                {checked ? (
                    <TickSquare size={16} variant="Bulk" color="var(--color-lime)" />
                ) : (
                    <MinusSquare size={16} variant="Linear" color="var(--color-text-tertiary)" />
                )}
            </span>
            {icon && <span className={styles.itemIcon}>{icon}</span>}
            <span className={styles.itemLabel}>{children}</span>
        </button>
    );
}

/* ── Radio Group ── */

interface RadioCtx {
    value: string;
    onChange: (value: string) => void;
}

const RadioGroupCtx = createContext<RadioCtx>({ value: "", onChange: () => {} });

export interface DropdownMenuRadioGroupProps {
    children: React.ReactNode;
    value: string;
    onValueChange: (value: string) => void;
}

export function DropdownMenuRadioGroup({ children, value, onValueChange }: DropdownMenuRadioGroupProps) {
    return (
        <RadioGroupCtx.Provider value={{ value, onChange: onValueChange }}>
            <div role="group">{children}</div>
        </RadioGroupCtx.Provider>
    );
}

/* ── Radio Item ── */

export interface DropdownMenuRadioItemProps {
    children: React.ReactNode;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export function DropdownMenuRadioItem({
    children,
    value,
    icon,
    disabled = false,
    className,
}: DropdownMenuRadioItemProps) {
    const { value: selectedValue, onChange } = useContext(RadioGroupCtx);
    const isSelected = selectedValue === value;

    return (
        <button
            className={cn(styles.item, styles.radioItem, isSelected && styles.radioItemSelected, disabled && styles.itemDisabled, className)}
            role="menuitemradio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => !disabled && onChange(value)}
            type="button"
        >
            <span className={styles.radioIndicator}>
                <RadioIcon
                    size={16}
                    variant={isSelected ? "Bulk" : "Linear"}
                    color={isSelected ? "var(--color-lime)" : "var(--color-text-tertiary)"}
                />
            </span>
            {icon && <span className={styles.itemIcon}>{icon}</span>}
            <span className={styles.itemLabel}>{children}</span>
        </button>
    );
}

/* ── Sub Menu ── */

const SubCtx = createContext<{ subOpen: boolean; setSubOpen: (v: boolean) => void }>({ subOpen: false, setSubOpen: () => {} });

export interface DropdownMenuSubProps {
    children: React.ReactNode;
}

export function DropdownMenuSub({ children }: DropdownMenuSubProps) {
    const [subOpen, setSubOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleEnter = () => {
        if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        setSubOpen(true);
    };

    const handleLeave = () => {
        timeoutRef.current = window.setTimeout(() => setSubOpen(false), 150);
    };

    return (
        <SubCtx.Provider value={{ subOpen, setSubOpen }}>
            <div
                className={styles.sub}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                {children}
            </div>
        </SubCtx.Provider>
    );
}

/* ── Sub Trigger ── */

export interface DropdownMenuSubTriggerProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export function DropdownMenuSubTrigger({
    children,
    icon,
    className,
}: DropdownMenuSubTriggerProps) {
    const { subOpen, setSubOpen } = useContext(SubCtx);

    return (
        <button
            className={cn(styles.item, styles.subTrigger, subOpen && styles.subTriggerOpen, className)}
            onClick={() => setSubOpen(!subOpen)}
            type="button"
            aria-haspopup="menu"
            aria-expanded={subOpen}
        >
            {icon && <span className={styles.itemIcon}>{icon}</span>}
            <span className={styles.itemLabel}>{children}</span>
            <span className={styles.subArrow}>
                <ArrowRight2 size={12} color="currentColor" />
            </span>
        </button>
    );
}

/* ── Sub Content ── */

export interface DropdownMenuSubContentProps {
    children: React.ReactNode;
    className?: string;
}

export function DropdownMenuSubContent({ children, className }: DropdownMenuSubContentProps) {
    const { subOpen } = useContext(SubCtx);

    if (!subOpen) return null;

    return (
        <div className={cn(styles.subContent, className)} role="menu">
            {children}
        </div>
    );
}
