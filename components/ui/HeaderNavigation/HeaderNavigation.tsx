"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./HeaderNavigation.module.css";

/* ══════════════════════════════════════
   HeaderNavigation.Root
   ══════════════════════════════════════ */

export interface HeaderNavigationRootProps extends React.HTMLAttributes<HTMLElement> {
    /** Sticky positioning */
    sticky?: boolean;
}

const Root = forwardRef<HTMLElement, HeaderNavigationRootProps>(
    ({ sticky = false, className, children, ...props }, ref) => (
        <nav
            ref={ref}
            className={cn(styles.root, sticky && styles.sticky, className)}
            {...props}
        >
            <div className={styles.inner}>
                {children}
            </div>
        </nav>
    )
);
Root.displayName = "HeaderNavigation.Root";

/* ══════════════════════════════════════
   HeaderNavigation.Brand
   ══════════════════════════════════════ */

const Brand = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.brand, className)} {...props}>
            {children}
        </div>
    )
);
Brand.displayName = "HeaderNavigation.Brand";

/* ══════════════════════════════════════
   HeaderNavigation.Links
   ══════════════════════════════════════ */

const Links = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.links, className)} {...props}>
            {children}
        </div>
    )
);
Links.displayName = "HeaderNavigation.Links";

/* ══════════════════════════════════════
   HeaderNavigation.Link
   ══════════════════════════════════════ */

export interface HeaderNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    icon?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, HeaderNavLinkProps>(
    ({ active, icon, className, children, ...props }, ref) => (
        <a
            ref={ref}
            className={cn(styles.link, active && styles.linkActive, className)}
            {...props}
        >
            {icon && <span className={styles.linkIcon}>{icon}</span>}
            {children}
        </a>
    )
);
NavLink.displayName = "HeaderNavigation.Link";

/* ══════════════════════════════════════
   HeaderNavigation.Actions
   ══════════════════════════════════════ */

const Actions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.actions, className)} {...props}>
            {children}
        </div>
    )
);
Actions.displayName = "HeaderNavigation.Actions";

/* ══════════════════════════════════════
   Compound export
   ══════════════════════════════════════ */

export const HeaderNavigation = {
    Root,
    Brand,
    Links,
    Link: NavLink,
    Actions,
};
