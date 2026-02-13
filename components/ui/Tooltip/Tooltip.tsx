"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/cn";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactElement;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    className?: string;
}

export function Tooltip({
    content,
    children,
    position = "top",
    delay = 200,
    className,
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    const show = useCallback(() => {
        timeoutRef.current = setTimeout(() => setVisible(true), delay);
    }, [delay]);

    const hide = useCallback(() => {
        clearTimeout(timeoutRef.current);
        setVisible(false);
    }, []);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div
            className={cn(styles.wrapper, className)}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
        >
            {children}
            {visible && (
                <div className={cn(styles.tooltip, styles[`tooltip_${position}`])}>
                    <div className={styles.content}>{content}</div>
                    <div className={cn(styles.arrow, styles[`arrow_${position}`])} />
                </div>
            )}
        </div>
    );
}
