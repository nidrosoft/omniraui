"use client";

import { useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./SlideOut.module.css";

/* ── Types ── */

export interface SlideOutProps {
    /** Whether the slide-out is open */
    open: boolean;
    /** Callback when the slide-out should close */
    onClose: () => void;
    /** Width preset */
    size?: "sm" | "md" | "lg" | "xl";
    /** Whether clicking the overlay closes the panel */
    closeOnOverlay?: boolean;
    /** Whether pressing Escape closes the panel */
    closeOnEscape?: boolean;
    /** Hide the close (X) button */
    hideClose?: boolean;
    /** Additional class for the panel */
    className?: string;
    /** Panel content */
    children?: React.ReactNode;
}

/* ── Component ── */

export function SlideOut({
    open,
    onClose,
    size = "md",
    closeOnOverlay = true,
    closeOnEscape = true,
    hideClose = false,
    className,
    children,
}: SlideOutProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (closeOnEscape && e.key === "Escape") onClose();
        },
        [closeOnEscape, onClose],
    );

    useEffect(() => {
        if (!open) return;
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={closeOnOverlay ? onClose : undefined}>
            <div
                ref={panelRef}
                className={cn(styles.panel, styles[`size-${size}`], className)}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                {!hideClose && (
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                )}
                {children}
            </div>
        </div>
    );
}
