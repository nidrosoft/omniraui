"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Component, Brush2, Sun1, ColorSwatch, Code1, Copy, CommandSquare, DocumentCode2, Layer, TickCircle, ArrowDown2, MessageQuestion, Global, Sms, Lock1, Call, InfoCircle } from "iconsax-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BadgeGroup } from "@/components/ui/BadgeGroup";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { GridLines } from "@/components/ui/GridLines";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import styles from "./page.module.css";

const ACCENT_COLORS = [
    { name: "Lime", hex: "#D2FE17" },
    { name: "Blue", hex: "#2196F3" },
    { name: "Cyan", hex: "#00BCD4" },
    { name: "Teal", hex: "#009688" },
    { name: "Green", hex: "#4CAF50" },
    { name: "Purple", hex: "#9C27B0" },
    { name: "Pink", hex: "#E91E63" },
    { name: "Orange", hex: "#FF5722" },
    { name: "Red", hex: "#F44336" },
    { name: "Yellow", hex: "#FFEB3B" },
];

const FAQ_ITEMS = [
    {
        q: "Is Omnira UI free to use?",
        a: "Yes. Omnira UI is open source and free for personal and commercial projects. Install the base design system and copy any components you need.",
    },
    {
        q: "Does it work with Next.js, Remix, or Vite?",
        a: "Absolutely. Omnira UI uses CSS Modules and CSS custom properties with zero framework lock-in. It works with any React-based framework out of the box.",
    },
    {
        q: "How is this different from shadcn/ui or Radix?",
        a: "Omnira UI is built around a glassmorphism design language — backdrop blur, inset shadows, and glass surfaces on every component. It ships with 10 accent color presets and a dark-first theme system.",
    },
    {
        q: "Do I need Tailwind CSS?",
        a: "No. Omnira UI is built entirely with CSS Modules and CSS custom properties. No Tailwind dependency — you have full control over every token.",
    },
    {
        q: "Can I customize the accent color?",
        a: "Yes. Run npx omnira-ui init to choose from 10 accent colors (Lime, Blue, Teal, Purple, Pink, and more). The CLI generates your config and CSS overrides automatically.",
    },
];

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
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

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

    const handleFormSubmit = useCallback(() => {
        if (formSubmitting || formSubmitted) return;
        setFormSubmitting(true);
        setTimeout(() => {
            setFormSubmitting(false);
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 2500);
        }, 1500);
    }, [formSubmitting, formSubmitted]);

    const handleColorCopy = useCallback((hex: string) => {
        copyToClipboard(hex);
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 1500);
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
                            <Link href="/docs/getting-started" className={styles.headerCta}>
                                <Button variant="primary" size="sm">Get Started</Button>
                            </Link>
                            <button
                                className={cn(styles.burger, menuOpen && styles.burgerOpen)}
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span className={styles.burgerLine} />
                                <span className={styles.burgerLine} />
                            </button>
                        </div>

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
                    The Glassmorphism
                    <br />
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

            {/* Component Preview */}
            <section className={styles.componentPreview}>
                <GridLines />
                <h2 className={styles.showcaseTitle}>See It in Action</h2>
                <p className={styles.showcaseDescription}>
                    Real components, rendered live. Every element follows the glassmorphism design language.
                </p>
                <div className={styles.previewGrid}>
                    {/* Buttons */}
                    <div className={styles.previewCard}>
                        <span className={styles.previewLabel}>Buttons</span>
                        <div className={styles.previewContent}>
                            <Button variant="primary" size="md">Get Started</Button>
                            <Button variant="secondary" size="md">Learn More</Button>
                            <Button variant="ghost" size="md">Cancel</Button>
                            <Button variant="accent" size="sm">Upgrade</Button>
                            <Button variant="primary" size="md" isLoading showTextWhileLoading>Loading</Button>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className={styles.previewCard}>
                        <span className={styles.previewLabel}>Badges</span>
                        <div className={styles.previewContent}>
                            <Badge variant="accent">New</Badge>
                            <span className={styles.badgeGlow}>
                                <Badge variant="success" dot>Active</Badge>
                            </span>
                            <Badge variant="warning">Beta</Badge>
                            <Badge variant="section">Default</Badge>
                            <Badge variant="error">Deprecated</Badge>
                            <span className={styles.badgeInfoWrap}>
                                <Badge variant="info">Info</Badge>
                                <span className={styles.badgeTooltip}>
                                    <InfoCircle size={12} variant="Bulk" color="var(--color-lime)" />
                                    Informational status indicator
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Inputs + Form */}
                    <div className={styles.previewCard}>
                        <span className={styles.previewLabel}>Form</span>
                        <div className={styles.previewForm}>
                            <Input
                                placeholder="you@example.com"
                                inputSize="md"
                                type="email"
                                leadingIcon={<Sms size={18} variant="Bulk" color="var(--color-text-tertiary)" />}
                            />
                            <Input
                                placeholder="••••••••"
                                inputSize="md"
                                type="password"
                                leadingIcon={<Lock1 size={18} variant="Bulk" color="var(--color-text-tertiary)" />}
                            />
                            <Input
                                placeholder="+1 (555) 000-0000"
                                inputSize="md"
                                type="tel"
                                leadingIcon={<Call size={18} variant="Bulk" color="var(--color-text-tertiary)" />}
                            />
                            <Button
                                variant="primary"
                                size="md"
                                fullWidth
                                isLoading={formSubmitting}
                                showTextWhileLoading
                                onClick={handleFormSubmit}
                            >
                                {formSubmitted ? (
                                    <span className={styles.submitSuccess}>
                                        <TickCircle size={18} variant="Bulk" color="#121212" />
                                        Submitted!
                                    </span>
                                ) : formSubmitting ? "Submitting…" : "Submit"}
                            </Button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className={styles.previewCard}>
                        <span className={styles.previewLabel}>Cards</span>
                        <div className={styles.previewContent}>
                            <Card variant="standard" padding="md" hoverable>
                                <div className={styles.miniCardInner}>
                                    <div className={styles.showcaseCardIcon}>
                                        <Layer size={20} variant="Bulk" color="var(--color-lime)" />
                                    </div>
                                    <span className={styles.miniCardTitle}>Glass Card</span>
                                    <span className={styles.miniCardText}>Backdrop blur, inset shadows, subtle borders.</span>
                                </div>
                            </Card>
                            <Card variant="accent" padding="md" hoverable>
                                <div className={styles.miniCardInner}>
                                    <div className={styles.showcaseCardIcon}>
                                        <ColorSwatch size={20} variant="Bulk" color="var(--color-lime)" />
                                    </div>
                                    <span className={styles.miniCardTitle}>Accent Card</span>
                                    <span className={styles.miniCardText}>Lime-tinted glass with accent borders.</span>
                                </div>
                            </Card>
                        </div>
                    </div>
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
                    <span className={styles.statNumber}>70+</span>
                    <span className={styles.statLabel}>Components</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>10</span>
                    <span className={styles.statLabel}>Accent Colors</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>2</span>
                    <span className={styles.statLabel}>Theme Modes</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>0</span>
                    <span className={styles.statLabel}>Dependencies</span>
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

            {/* Accent Colors */}
            <section className={styles.accentColors}>
                <GridLines />
                <h2 className={styles.showcaseTitle}>Your Brand, Your Color</h2>
                <p className={styles.showcaseDescription}>
                    Choose from 10 built-in accent color presets. Every token, shadow, and border adapts instantly.
                </p>
                <div className={styles.colorGrid}>
                    {ACCENT_COLORS.map((color) => (
                        <div
                            key={color.name}
                            className={cn(styles.colorSwatch, copiedColor === color.hex && styles.colorSwatchCopied)}
                            onClick={() => handleColorCopy(color.hex)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === "Enter") handleColorCopy(color.hex); }}
                        >
                            <div
                                className={styles.colorDot}
                                style={{ background: color.hex, boxShadow: `0 0 12px ${color.hex}40, 0 0 24px ${color.hex}20` }}
                            />
                            <span className={styles.colorName}>
                                {copiedColor === color.hex ? "Copied!" : color.name}
                            </span>
                            <span className={styles.colorHex}>{color.hex}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.colorCta}>
                    <code className={styles.inlineCode}>npx omnira-ui init</code>
                    <span className={styles.colorCtaText}>to pick your accent color</span>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faq}>
                <GridLines />
                <h2 className={styles.showcaseTitle}>Frequently Asked Questions</h2>
                <p className={styles.showcaseDescription}>
                    Everything you need to know about Omnira UI.
                </p>
                <div className={styles.faqList}>
                    {FAQ_ITEMS.map((item, i) => (
                        <details key={i} className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>
                                <span>{item.q}</span>
                                <ArrowDown2 size={18} variant="Bold" color="var(--color-text-tertiary)" className={styles.faqArrow} />
                            </summary>
                            <p className={styles.faqAnswer}>{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Open Source CTA */}
            <section className={styles.openSource}>
                <GridLines />
                <div className={styles.openSourceInner}>
                    <div className={styles.openSourceIcon}>
                        <Global size={32} variant="Bulk" color="var(--color-lime)" />
                    </div>
                    <h2 className={styles.openSourceTitle}>Open Source & Free</h2>
                    <p className={styles.openSourceDescription}>
                        Omnira UI is open source, free forever, and built for the community.
                        Star us on GitHub, contribute components, or just copy what you need.
                    </p>
                    <div className={styles.openSourceCtas}>
                        <a href="https://github.com/nidrosoft/omniraui" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" size="lg">Star on GitHub</Button>
                        </a>
                        <Link href="/docs/getting-started">
                            <Button variant="ghost" size="lg">Read the Docs</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <GridLines />
                <div className={styles.footerInner}>
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
                            <a href="https://github.com/nidrosoft/omniraui" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
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
                </div>
            </footer>
        </div>
    );
}
