"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./Browser.module.css";

export interface BrowserProps {
    address?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Browser = forwardRef<HTMLDivElement, BrowserProps>(
    ({ address = "example.com", children, className }, ref) => {
        return (
            <div ref={ref} className={cn(styles.browser, className)}>
                {/* Chrome bar */}
                <div className={styles.chrome}>
                    <div className={styles.trafficLights}>
                        <span className={cn(styles.dot, styles.dotRed)} />
                        <span className={cn(styles.dot, styles.dotYellow)} />
                        <span className={cn(styles.dot, styles.dotGreen)} />
                    </div>

                    <div className={styles.nav}>
                        <button className={styles.navBtn} aria-label="Back">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className={styles.navBtn} aria-label="Forward">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className={styles.navBtn} aria-label="Reload">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7A4.5 4.5 0 1 1 4 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 8.5L4 10.5L6 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </div>

                    <div className={styles.addressBar}>
                        <span className={styles.addressText}>{address}</span>
                        <button className={styles.copyBtn} aria-label="Copy URL">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 4V2.5A1.5 1.5 0 0 0 6.5 1H2.5A1.5 1.5 0 0 0 1 2.5V6.5A1.5 1.5 0 0 0 2.5 8H4" stroke="currentColor" strokeWidth="1.2"/></svg>
                        </button>
                    </div>
                </div>

                {/* Content area */}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        );
    },
);

Browser.displayName = "Browser";
