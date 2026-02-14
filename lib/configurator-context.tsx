"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
    ACCENT_PRESETS,
    FONT_PRESETS,
    RADIUS_PRESETS,
    GRAY_PRESETS,
} from "./configurator-presets";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export interface ConfiguratorState {
    accent: string;
    font: string;
    radius: string;
    grayPalette: string;
}

interface ConfiguratorContextValue extends ConfiguratorState {
    setAccent: (key: string) => void;
    setFont: (key: string) => void;
    setRadius: (key: string) => void;
    setGrayPalette: (key: string) => void;
    reset: () => void;
    isOpen: boolean;
    togglePanel: () => void;
}

const STORAGE_KEY = "omnira-configurator";
const PANEL_KEY = "omnira-configurator-panel";

const DEFAULTS: ConfiguratorState = {
    accent: "lime",
    font: "rubik",
    radius: "default",
    grayPalette: "neutral",
};

/* ══════════════════════════════════════════════
   Context
   ══════════════════════════════════════════════ */

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(null);

export function useConfigurator() {
    const ctx = useContext(ConfiguratorContext);
    if (!ctx) throw new Error("useConfigurator must be used within ConfiguratorProvider");
    return ctx;
}

/* ══════════════════════════════════════════════
   CSS Variable Injection
   ══════════════════════════════════════════════ */

function applyAccent(key: string, theme: string) {
    const preset = ACCENT_PRESETS[key];
    if (!preset) return;
    const tokens = theme === "light" ? preset.light : preset.dark;
    const root = document.documentElement;
    Object.entries(tokens).forEach(([prop, val]) => {
        root.style.setProperty(prop, val);
    });
}

function applyFont(key: string) {
    const preset = FONT_PRESETS[key];
    if (!preset) return;
    const root = document.documentElement;

    if (preset.googleUrl) {
        const id = `omnira-font-${key}`;
        if (!document.getElementById(id)) {
            const link = document.createElement("link");
            link.id = id;
            link.rel = "stylesheet";
            link.href = preset.googleUrl;
            document.head.appendChild(link);
        }
    }

    root.style.setProperty("--font-body", preset.body);
    root.style.setProperty("--font-display", preset.display);
}

function applyRadius(key: string) {
    const preset = RADIUS_PRESETS[key];
    if (!preset) return;
    const root = document.documentElement;
    Object.entries(preset.values).forEach(([prop, val]) => {
        root.style.setProperty(prop, val);
    });
}

function applyGrayPalette(key: string, theme: string) {
    const preset = GRAY_PRESETS[key];
    if (!preset) return;
    const tokens = theme === "light" ? preset.light : preset.dark;
    const root = document.documentElement;
    Object.entries(tokens).forEach(([prop, val]) => {
        root.style.setProperty(prop, val);
    });
}

function clearAllOverrides() {
    const root = document.documentElement;
    const allProps = [
        ...Object.keys(ACCENT_PRESETS.lime.dark),
        ...Object.keys(RADIUS_PRESETS.default.values),
        ...Object.keys(GRAY_PRESETS.neutral.dark),
        "--font-body",
        "--font-display",
    ];
    allProps.forEach((prop) => root.style.removeProperty(prop));
}

function getCurrentTheme(): string {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.getAttribute("data-theme") || "dark";
}

/* ══════════════════════════════════════════════
   Provider
   ══════════════════════════════════════════════ */

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<ConfiguratorState>(DEFAULTS);
    const [isOpen, setIsOpen] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as Partial<ConfiguratorState>;
                setState((prev) => ({ ...prev, ...parsed }));
            }
            const panelStored = localStorage.getItem(PANEL_KEY);
            if (panelStored !== null) {
                setIsOpen(panelStored === "open");
            }
        } catch {}
        setMounted(true);
    }, []);

    const applyAll = useCallback((s: ConfiguratorState) => {
        const theme = getCurrentTheme();
        applyAccent(s.accent, theme);
        applyFont(s.font);
        applyRadius(s.radius);
        applyGrayPalette(s.grayPalette, theme);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        applyAll(state);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state, mounted, applyAll]);

    useEffect(() => {
        if (!mounted) return;
        const observer = new MutationObserver(() => {
            applyAll(state);
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
        return () => observer.disconnect();
    }, [state, mounted, applyAll]);

    const setAccent = (key: string) => setState((p) => ({ ...p, accent: key }));
    const setFont = (key: string) => setState((p) => ({ ...p, font: key }));
    const setRadius = (key: string) => setState((p) => ({ ...p, radius: key }));
    const setGrayPalette = (key: string) => setState((p) => ({ ...p, grayPalette: key }));

    const reset = () => {
        clearAllOverrides();
        setState(DEFAULTS);
        localStorage.removeItem(STORAGE_KEY);
    };

    const togglePanel = () => {
        setIsOpen((p) => {
            const next = !p;
            try { localStorage.setItem(PANEL_KEY, next ? "open" : "closed"); } catch {}
            return next;
        });
    };

    return (
        <ConfiguratorContext.Provider
            value={{
                ...state,
                setAccent,
                setFont,
                setRadius,
                setGrayPalette,
                reset,
                isOpen,
                togglePanel,
            }}
        >
            {children}
        </ConfiguratorContext.Provider>
    );
}
