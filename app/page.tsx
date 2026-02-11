"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Component, Brush2, Sun1, ColorSwatch, Code1, Copy, CommandSquare, DocumentCode2, Layer, TickCircle } from "iconsax-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { BadgeGroup } from "@/components/ui/BadgeGroup";
import { cn } from "@/lib/cn";
import { GridLines } from "@/components/ui/GridLines";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import styles from "./page.module.css";

const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "Quick Start", href: "#quickstart" },
    { label: "Components", href: "/docs/base/overview" },
    { label: "Documentation", href: "/docs/getting-started" },
];

function useScrolled() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const check = () => setScrolled(window.scrollY > 0);
        check();
        window.addEventListener("scroll", check, { passive: true });
        return () => window.removeEventListener("scroll", check);
    }, []);
    return scrolled;
}

export default function Home() {
    const scrolled = useScrolled();
    const [menuOpen, setMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMenuOpen(false);
    };

    const handleCopy = useCallback(() => {
        copyToClipboard("npx omnira-ui init");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, []);

    return (
        <div className={styles.landing}>
            {/* Mobile Menu Overlay */}
            <div className={cn(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/docs/getting-started"
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                >
                    Get Started
                </Link>
            </div>

            {/* Header */}
            <header className={cn(styles.header, scrolled && styles.headerFixed)}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerInner}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoIcon}>O</div>
                            <span className={styles.logoText}>
                                Omnira <span className={styles.logoAccent}>UI</span>
                            </span>
                        </Link>

                        <nav className={styles.nav}>
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className={styles.headerRight}>
                            <ThemeToggle />
                            <Link href="/docs/getting-started">
                                <Button variant="primary" size="sm">Get Started</Button>
                            </Link>
                        </div>

                        <button
                            className={cn(styles.burger, menuOpen && styles.burgerOpen)}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={styles.burgerLine} />
                            <span className={styles.burgerLine} />
                        </button>

                        <div className={cn(styles.overlay, scrolled && styles.overlayVisible)} />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <GridLines />
                <BadgeGroup
                    addonText="New"
                    color="brand"
                    theme="modern"
                    align="leading"
                    size="md"
                    onClick={() => {
                        const el = document.querySelector("#quickstart");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    Omnira UI is now available — Get started in seconds
                </BadgeGroup>
                <h1 className={styles.heroTitle}>
                    The Glassmorphism{" "}
                    <span className={styles.heroTitleAccent}>Design System</span>
                </h1>
                <p className={styles.heroDescription}>
                    A premium component library with glass effects, dark-first theming, and
                    500+ modular components. Install the foundation, extend with what you need.
                </p>
                <div className={styles.heroCtas}>
                    <Link href="/docs/getting-started">
                        <Button variant="primary" size="lg">Get Started</Button>
                    </Link>
                    <Link href="/docs/base/overview">
                        <Button variant="ghost" size="lg">Browse Components</Button>
                    </Link>
                </div>
            </section>

            {/* Quick Start */}
            <section id="quickstart" className={styles.quickStart}>
                <GridLines />
                <div className={styles.quickStartInner}>
                    <h2 className={styles.quickStartTitle}>
                        <CommandSquare size={24} variant="Bulk" color="var(--color-lime)" />
                        Quick Start
                    </h2>
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalDots}>
                                <span className={styles.dotRed} />
                                <span className={styles.dotYellow} />
                                <span className={styles.dotGreen} />
                            </div>
                            <span className={styles.terminalLabel}>Terminal</span>
                            <button className={cn(styles.terminalCopy, copied && styles.terminalCopied)} onClick={handleCopy} aria-label="Copy command">
                                {copied ? (
                                    <>
                                        <TickCircle size={14} variant="Bulk" color="var(--color-lime)" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy size={14} variant="Bold" color="currentColor" />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <div className={styles.terminalBody}>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalComment}># Set up Omnira UI with interactive config</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalPrompt}>$</span>
                                <span className={styles.terminalCommand}>npx omnira-ui init</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalOutput}>&nbsp;</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalSuccess}>✦</span>
                                <span className={styles.terminalOutputBold}>Omnira UI Setup</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalOutput}>&nbsp;</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalCyan}>?</span>
                                <span className={styles.terminalOutputBold}>Project name:</span>
                                <span className={styles.terminalOutput}>my-app</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalCyan}>?</span>
                                <span className={styles.terminalOutputBold}>Accent color:</span>
                                <span className={styles.terminalAccentDot}>●</span>
                                <span className={styles.terminalOutput}>Lime</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalCyan}>?</span>
                                <span className={styles.terminalOutputBold}>Theme mode:</span>
                                <span className={styles.terminalOutput}>Dark-first</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalOutput}>&nbsp;</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalSuccess}>✓</span>
                                <span className={styles.terminalOutput}>Created omnira.config.ts</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalSuccess}>✓</span>
                                <span className={styles.terminalOutput}>Generated CSS variables</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.terminalSuccess}>✓</span>
                                <span className={styles.terminalOutputBold}>Ready to go!</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.quickStartHint}>
                        Choose from 10 accent colors — Lime, Blue, Teal, Purple, Pink, and more.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <GridLines />
                <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Components</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>2</span>
                    <span className={styles.statLabel}>Theme Modes</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Modular</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>CSS</span>
                    <span className={styles.statLabel}>Modules Only</span>
                </div>
            </section>

            {/* Showcase */}
            <section id="features" className={styles.showcase}>
                <GridLines />
                <h2 className={styles.showcaseTitle}>Built for Modern Apps</h2>
                <p className={styles.showcaseDescription}>
                    Every component follows the glassmorphism design language with consistent tokens and patterns.
                </p>
                <div className={styles.showcaseGrid}>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <Brush2 size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>Glass Design System</h3>
                        <p className={styles.showcaseCardDescription}>
                            Every surface uses backdrop blur, subtle borders, and inset shadows for a premium glass effect.
                        </p>
                    </div>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <ColorSwatch size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>Dark & Light Mode</h3>
                        <p className={styles.showcaseCardDescription}>
                            Seamless theme switching with CSS custom properties. Every token adapts automatically.
                        </p>
                    </div>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <Code1 size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>Install & Extend</h3>
                        <p className={styles.showcaseCardDescription}>
                            Install the base package for design tokens and theming, then copy individual components into your project.
                        </p>
                    </div>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <Component size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>Modular Components</h3>
                        <p className={styles.showcaseCardDescription}>
                            Each component is a self-contained folder with TSX, CSS Module, and barrel export — built on the Omnira foundation.
                        </p>
                    </div>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <DocumentCode2 size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>CSS Modules</h3>
                        <p className={styles.showcaseCardDescription}>
                            No Tailwind required. Built entirely with CSS Modules and custom properties for full control.
                        </p>
                    </div>
                    <div className={styles.showcaseCard}>
                        <div className={styles.showcaseCardIcon}>
                            <Sun1 size={24} variant="Bulk" color="var(--color-lime)" />
                        </div>
                        <h3 className={styles.showcaseCardTitle}>Accessible</h3>
                        <p className={styles.showcaseCardDescription}>
                            Built with semantic HTML, ARIA attributes, keyboard navigation, and focus management.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.howItWorks}>
                <GridLines />
                <h2 className={styles.showcaseTitle}>How It Works</h2>
                <p className={styles.showcaseDescription}>
                    Three steps to a beautiful glassmorphism UI.
                </p>
                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <h3 className={styles.stepTitle}>Install & Configure</h3>
                        <p className={styles.stepDescription}>
                            Run <code className={styles.inlineCode}>npx omnira-ui init</code> to choose your accent color, theme mode, and generate your config.
                        </p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.stepTitle}>Browse & Copy Components</h3>
                        <p className={styles.stepDescription}>
                            Pick the components you need from the docs. Each one is a self-contained folder — just drop it into your project.
                        </p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.stepTitle}>Customize & Ship</h3>
                        <p className={styles.stepDescription}>
                            Tweak the CSS variables to match your brand. The glassmorphism system adapts to any color palette.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <GridLines />
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.footerLogoLink}>
                            <div className={styles.footerLogoIcon}>O</div>
                            <span className={styles.footerLogoText}>
                                Omnira <span className={styles.logoAccent}>UI</span>
                            </span>
                        </Link>
                        <p className={styles.footerTagline}>
                            The premium glassmorphism design system for modern web applications.
                        </p>
                    </div>
                    <div className={styles.footerLinks}>
                        <Link href="/docs/getting-started" className={styles.footerLink}>Documentation</Link>
                        <Link href="/docs/base/overview" className={styles.footerLink}>Components</Link>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <span className={styles.footerText}>
                        &copy; {new Date().getFullYear()} Omnira UI. All rights reserved.
                    </span>
                    <span className={styles.footerDivider}>·</span>
                    <span className={styles.footerCredit}>
                        Created by{" "}
                        <a
                            href="https://www.linkedin.com/in/cyriac-zeh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerCreditLink}
                        >
                            Cyriac Zeh
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}
