"use client";

import { forwardRef, useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/cn";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import styles from "./Carousel.module.css";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Show navigation arrows */
    showArrows?: boolean;
    /** Show dot indicators */
    showDots?: boolean;
    /** Auto-play interval in ms (0 = off) */
    autoPlay?: number;
    /** Gap between items in px */
    gap?: number;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
    (
        {
            showArrows = true,
            showDots = true,
            autoPlay = 0,
            gap = 16,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const trackRef = useRef<HTMLDivElement>(null);
        const [activeIndex, setActiveIndex] = useState(0);
        const [childCount, setChildCount] = useState(0);

        useEffect(() => {
            if (trackRef.current) {
                setChildCount(trackRef.current.children.length);
            }
        }, [children]);

        const scrollTo = useCallback((index: number) => {
            const track = trackRef.current;
            if (!track || !track.children[index]) return;
            const child = track.children[index] as HTMLElement;
            track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
            setActiveIndex(index);
        }, []);

        const handlePrev = useCallback(() => {
            scrollTo(Math.max(0, activeIndex - 1));
        }, [activeIndex, scrollTo]);

        const handleNext = useCallback(() => {
            scrollTo(Math.min(childCount - 1, activeIndex + 1));
        }, [activeIndex, childCount, scrollTo]);

        // Auto-play
        useEffect(() => {
            if (autoPlay <= 0 || childCount <= 1) return;
            const interval = setInterval(() => {
                setActiveIndex((i) => {
                    const next = (i + 1) % childCount;
                    scrollTo(next);
                    return next;
                });
            }, autoPlay);
            return () => clearInterval(interval);
        }, [autoPlay, childCount, scrollTo]);

        // Track scroll position
        useEffect(() => {
            const track = trackRef.current;
            if (!track) return;
            const handleScroll = () => {
                const children = Array.from(track.children) as HTMLElement[];
                let closest = 0;
                let closestDist = Infinity;
                children.forEach((child, i) => {
                    const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
            };
            track.addEventListener("scroll", handleScroll, { passive: true });
            return () => track.removeEventListener("scroll", handleScroll);
        }, []);

        return (
            <div ref={ref} className={cn(styles.root, className)} {...props}>
                <div className={styles.viewport}>
                    {showArrows && (
                        <button
                            className={cn(styles.arrow, styles.arrowLeft, activeIndex === 0 && styles.arrowHidden)}
                            onClick={handlePrev}
                            aria-label="Previous"
                        >
                            <ArrowLeft2 size={18} />
                        </button>
                    )}

                    <div ref={trackRef} className={styles.track} style={{ gap }}>
                        {children}
                    </div>

                    {showArrows && (
                        <button
                            className={cn(styles.arrow, styles.arrowRight, activeIndex >= childCount - 1 && styles.arrowHidden)}
                            onClick={handleNext}
                            aria-label="Next"
                        >
                            <ArrowRight2 size={18} />
                        </button>
                    )}
                </div>

                {showDots && childCount > 1 && (
                    <div className={styles.dots}>
                        {Array.from({ length: childCount }, (_, i) => (
                            <button
                                key={i}
                                className={cn(styles.dot, i === activeIndex && styles.dotActive)}
                                onClick={() => scrollTo(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

Carousel.displayName = "Carousel";
