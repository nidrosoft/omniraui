"use client";

import { forwardRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import styles from "./Pagination.module.css";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current page (1-indexed) */
    page: number;
    /** Total number of pages */
    totalPages: number;
    /** Called when page changes */
    onPageChange: (page: number) => void;
    /** Visual variant */
    variant?: "default" | "minimal" | "card" | "dots" | "line";
    /** Alignment */
    align?: "left" | "center" | "right";
    /** Show page numbers (for default/card variants) */
    showPageNumbers?: boolean;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
    (
        {
            page,
            totalPages,
            onPageChange,
            variant = "default",
            align = "center",
            showPageNumbers = false,
            className,
            ...props
        },
        ref
    ) => {
        const canPrev = page > 1;
        const canNext = page < totalPages;

        const handlePrev = useCallback(() => {
            if (canPrev) onPageChange(page - 1);
        }, [canPrev, page, onPageChange]);

        const handleNext = useCallback(() => {
            if (canNext) onPageChange(page + 1);
        }, [canNext, page, onPageChange]);

        // Page number buttons for default/card
        const pageNumbers = (() => {
            if (!showPageNumbers) return [];
            const pages: (number | "...")[] = [];
            if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                if (page > 3) pages.push("...");
                const start = Math.max(2, page - 1);
                const end = Math.min(totalPages - 1, page + 1);
                for (let i = start; i <= end; i++) pages.push(i);
                if (page < totalPages - 2) pages.push("...");
                pages.push(totalPages);
            }
            return pages;
        })();

        if (variant === "dots") {
            return (
                <div ref={ref} className={cn(styles.root, styles[`align-${align}`], className)} {...props}>
                    <div className={styles.dots}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={cn(styles.dot, i + 1 === page && styles.dotActive)}
                                onClick={() => onPageChange(i + 1)}
                                aria-label={`Page ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            );
        }

        if (variant === "line") {
            return (
                <div ref={ref} className={cn(styles.root, styles[`align-${align}`], className)} {...props}>
                    <div className={styles.lineTrack}>
                        <div
                            className={styles.lineFill}
                            style={{ width: `${(page / totalPages) * 100}%` }}
                        />
                    </div>
                    <span className={styles.pageText}>Page {page} of {totalPages}</span>
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(
                    styles.root,
                    styles[`align-${align}`],
                    variant === "card" && styles.card,
                    className
                )}
                {...props}
            >
                <button
                    className={cn(styles.navBtn, !canPrev && styles.disabled)}
                    onClick={handlePrev}
                    disabled={!canPrev}
                >
                    <ArrowLeft2 size={16} />
                    <span className={styles.navLabel}>Previous</span>
                </button>

                {showPageNumbers && pageNumbers.length > 0 ? (
                    <div className={styles.pageNumbers}>
                        {pageNumbers.map((p, i) =>
                            p === "..." ? (
                                <span key={`ellipsis-${i}`} className={styles.ellipsis}>...</span>
                            ) : (
                                <button
                                    key={p}
                                    className={cn(styles.pageBtn, p === page && styles.pageBtnActive)}
                                    onClick={() => onPageChange(p as number)}
                                >
                                    {p}
                                </button>
                            )
                        )}
                    </div>
                ) : (
                    <span className={styles.pageText}>Page {page} of {totalPages}</span>
                )}

                <button
                    className={cn(styles.navBtn, !canNext && styles.disabled)}
                    onClick={handleNext}
                    disabled={!canNext}
                >
                    <span className={styles.navLabel}>Next</span>
                    <ArrowRight2 size={16} />
                </button>
            </div>
        );
    }
);

Pagination.displayName = "Pagination";
