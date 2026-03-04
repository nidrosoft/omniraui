import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./SectionFooter.module.css";

/* ══════════════════════════════════════
   SectionFooter.Root
   ══════════════════════════════════════ */

export interface SectionFooterRootProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as card variant (with background, border, padding) */
    isCard?: boolean;
}

const Root = forwardRef<HTMLDivElement, SectionFooterRootProps>(
    ({ isCard = false, className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(styles.root, isCard && styles.card, className)}
            {...props}
        >
            {children}
        </div>
    )
);
Root.displayName = "SectionFooter.Root";

/* ══════════════════════════════════════
   SectionFooter.Actions
   ══════════════════════════════════════ */

const Actions = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn(styles.actions, className)} {...props}>
            {children}
        </div>
    )
);
Actions.displayName = "SectionFooter.Actions";

/* ══════════════════════════════════════
   SectionFooter.Link
   ══════════════════════════════════════ */

export interface SectionFooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const FooterLink = forwardRef<HTMLAnchorElement, SectionFooterLinkProps>(
    ({ className, children, ...props }, ref) => (
        <a ref={ref} className={cn(styles.link, className)} {...props}>
            {children}
        </a>
    )
);
FooterLink.displayName = "SectionFooter.Link";

/* ══════════════════════════════════════
   Compound export
   ══════════════════════════════════════ */

export const SectionFooter = {
    Root,
    Actions,
    Link: FooterLink,
};
