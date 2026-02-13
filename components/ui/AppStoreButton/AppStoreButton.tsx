"use client";

import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import styles from "./AppStoreButton.module.css";

export type AppStoreSize = "sm" | "md" | "lg";

interface BaseStoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: AppStoreSize;
}

/* ── Apple App Store ── */
export interface AppStoreButtonProps extends BaseStoreButtonProps {}

export const AppStoreButton = forwardRef<HTMLButtonElement, AppStoreButtonProps>(
    ({ size = "md", className, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(styles.storeButton, styles[size], className)}
            {...props}
        >
            <AppleLogo size={size} />
            <div className={styles.textBlock}>
                <span className={styles.subtitle}>Download on the</span>
                <span className={styles.title}>App Store</span>
            </div>
        </button>
    )
);
AppStoreButton.displayName = "AppStoreButton";

/* ── Google Play ── */
export interface GooglePlayButtonProps extends BaseStoreButtonProps {}

export const GooglePlayButton = forwardRef<HTMLButtonElement, GooglePlayButtonProps>(
    ({ size = "md", className, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(styles.storeButton, styles[size], className)}
            {...props}
        >
            <GooglePlayLogo size={size} />
            <div className={styles.textBlock}>
                <span className={styles.subtitle}>GET IT ON</span>
                <span className={styles.title}>Google Play</span>
            </div>
        </button>
    )
);
GooglePlayButton.displayName = "GooglePlayButton";

/* ── Samsung Galaxy Store ── */
export interface GalaxyStoreButtonProps extends BaseStoreButtonProps {}

export const GalaxyStoreButton = forwardRef<HTMLButtonElement, GalaxyStoreButtonProps>(
    ({ size = "md", className, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(styles.storeButton, styles[size], className)}
            {...props}
        >
            <GalaxyStoreLogo size={size} />
            <div className={styles.textBlock}>
                <span className={styles.subtitle}>Available on</span>
                <span className={styles.title}>Galaxy Store</span>
            </div>
        </button>
    )
);
GalaxyStoreButton.displayName = "GalaxyStoreButton";

/* ── SVG Logos ── */

function AppleLogo({ size }: { size: AppStoreSize }) {
    const s = size === "sm" ? 20 : size === "md" ? 24 : 28;
    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
            <path
                d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                fill="#ffffff"
            />
        </svg>
    );
}

function GooglePlayLogo({ size }: { size: AppStoreSize }) {
    const s = size === "sm" ? 20 : size === "md" ? 24 : 28;
    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
            <path d="M3.61 1.814L13.793 12 3.61 22.186a1.12 1.12 0 01-.61-.995V2.81c0-.416.232-.78.61-.995z" fill="#4285F4" />
            <path d="M17.318 8.475L5.09.95C4.556.64 3.95.58 3.41.78l10.39 10.39 3.518-2.695z" fill="#34A853" />
            <path d="M3.41 23.22c.54.2 1.146.14 1.68-.17l12.228-7.525-3.518-2.695L3.41 23.22z" fill="#EA4335" />
            <path d="M21.39 10.473l-4.072-2.498L13.8 11.17l3.518 2.695 4.072-2.498c.74-.456.74-1.438 0-1.894z" fill="#FBBC05" />
        </svg>
    );
}

function GalaxyStoreLogo({ size }: { size: AppStoreSize }) {
    const s = size === "sm" ? 20 : size === "md" ? 24 : 28;
    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="#FF6B35"
            />
            <path
                d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                fill="#FF6B35"
            />
            <circle cx="12" cy="12" r="2" fill="#FF6B35" />
        </svg>
    );
}
