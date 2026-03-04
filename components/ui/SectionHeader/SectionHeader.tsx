import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./SectionHeader.module.css";

/* ══════════════════════════════════════
   SectionHeader.Root
   ══════════════════════════════════════ */

export interface SectionHeaderRootProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Show bottom divider line */
    divider?: boolean;
}

const Root = forwardRef<HTMLDivElement, SectionHeaderRootProps>(
    ({ divider = true, className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(styles.root, divider && styles.divider, className)}
            {...props}
        >
            {children}
        </div>
    )
);
Root.displayName = "SectionHeader.Root";

/* ══════════════════════════════════════
   SectionHeader.Group
   ══════════════════════════════════════ */

const Group = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.group, className)} {...props}>
            {children}
        </div>
    )
);
Group.displayName = "SectionHeader.Group";

/* ══════════════════════════════════════
   SectionHeader.TextGroup
   ══════════════════════════════════════ */

const TextGroup = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.textGroup, className)} {...props}>
            {children}
        </div>
    )
);
TextGroup.displayName = "SectionHeader.TextGroup";

/* ══════════════════════════════════════
   SectionHeader.Heading
   ══════════════════════════════════════ */

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ as: Tag = "h2", className, children, ...props }, ref) => (
        <Tag ref={ref} className={cn(styles.heading, className)} {...props}>
            {children}
        </Tag>
    )
);
Heading.displayName = "SectionHeader.Heading";

/* ══════════════════════════════════════
   SectionHeader.Subheading
   ══════════════════════════════════════ */

const Subheading = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => (
        <p ref={ref} className={cn(styles.subheading, className)} {...props}>
            {children}
        </p>
    )
);
Subheading.displayName = "SectionHeader.Subheading";

/* ══════════════════════════════════════
   SectionHeader.Actions
   ══════════════════════════════════════ */

const Actions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.actions, className)} {...props}>
            {children}
        </div>
    )
);
Actions.displayName = "SectionHeader.Actions";

/* ══════════════════════════════════════
   SectionHeader.Tabs
   ══════════════════════════════════════ */

const TabsSlot = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.tabs, className)} {...props}>
            {children}
        </div>
    )
);
TabsSlot.displayName = "SectionHeader.Tabs";

/* ══════════════════════════════════════
   Compound export
   ══════════════════════════════════════ */

export const SectionHeader = {
    Root,
    Group,
    TextGroup,
    Heading,
    Subheading,
    Actions,
    Tabs: TabsSlot,
};
