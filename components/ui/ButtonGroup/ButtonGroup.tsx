"use client";

import { forwardRef, createContext, useContext, useCallback } from "react";
import { cn } from "@/lib/cn";
import styles from "./ButtonGroup.module.css";

/* ══════════════════════════════════════
   Context for selection state
   ══════════════════════════════════════ */

interface ButtonGroupContextValue {
    selected: string[];
    toggle: (value: string) => void;
    selectionMode: "none" | "single" | "multiple";
    size: "sm" | "md" | "lg";
}

const ButtonGroupContext = createContext<ButtonGroupContextValue>({
    selected: [],
    toggle: () => {},
    selectionMode: "none",
    size: "md",
});

/* ══════════════════════════════════════
   ButtonGroup Root
   ══════════════════════════════════════ */

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Selection mode */
    selectionMode?: "none" | "single" | "multiple";
    /** Currently selected values (controlled) */
    selected?: string[];
    /** Called when selection changes */
    onSelectionChange?: (selected: string[]) => void;
    /** Size of all items */
    size?: "sm" | "md" | "lg";
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
    (
        {
            selectionMode = "none",
            selected = [],
            onSelectionChange,
            size = "md",
            className,
            children,
            ...props
        },
        ref
    ) => {
        const toggle = useCallback(
            (value: string) => {
                if (selectionMode === "none") return;

                let next: string[];
                if (selectionMode === "single") {
                    next = selected.includes(value) ? [] : [value];
                } else {
                    next = selected.includes(value)
                        ? selected.filter((v) => v !== value)
                        : [...selected, value];
                }
                onSelectionChange?.(next);
            },
            [selectionMode, selected, onSelectionChange]
        );

        return (
            <ButtonGroupContext.Provider value={{ selected, toggle, selectionMode, size }}>
                <div
                    ref={ref}
                    role="group"
                    className={cn(styles.group, styles[size], className)}
                    {...props}
                >
                    {children}
                </div>
            </ButtonGroupContext.Provider>
        );
    }
);

ButtonGroup.displayName = "ButtonGroup";

/* ══════════════════════════════════════
   ButtonGroupItem
   ══════════════════════════════════════ */

export interface ButtonGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Value for selection tracking */
    value?: string;
    /** Leading icon */
    icon?: React.ReactNode;
    /** Show dot indicator */
    dot?: boolean;
    /** Dot color */
    dotColor?: string;
}

export const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
    (
        {
            value = "",
            icon,
            dot,
            dotColor,
            disabled,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const { selected, toggle, selectionMode, size } = useContext(ButtonGroupContext);
        const isSelected = value ? selected.includes(value) : false;

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (value) toggle(value);
            props.onClick?.(e);
        };

        return (
            <button
                ref={ref}
                type="button"
                role={selectionMode !== "none" ? "option" : undefined}
                aria-selected={selectionMode !== "none" ? isSelected : undefined}
                disabled={disabled}
                className={cn(
                    styles.item,
                    styles[`item-${size}`],
                    isSelected && styles.selected,
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                {dot && (
                    <span
                        className={styles.dot}
                        style={dotColor ? { background: dotColor } : undefined}
                    />
                )}
                {icon && <span className={styles.iconWrapper}>{icon}</span>}
                {children && <span className={styles.label}>{children}</span>}
            </button>
        );
    }
);

ButtonGroupItem.displayName = "ButtonGroupItem";
