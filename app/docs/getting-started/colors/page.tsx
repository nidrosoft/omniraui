"use client";

import { DocHeader } from "@/components/docs/DocHeader";

const colorGroups = [
    {
        title: "Accent",
        colors: [
            { name: "--color-lime", dark: "#D2FE17", light: "#8AB400" },
            { name: "--color-lime-hover", dark: "#c0e616", light: "#7DA310" },
            { name: "--color-lime-gradient", dark: "#ABC928", light: "#6B9A00" },
        ],
    },
    {
        title: "Backgrounds",
        colors: [
            { name: "--color-bg-primary", dark: "#202020", light: "#f5f5f7" },
            { name: "--color-bg-secondary", dark: "#1a1a1a", light: "#ebebed" },
            { name: "--color-bg-sidebar", dark: "#1a1a1a", light: "#ffffff" },
        ],
    },
    {
        title: "Semantic",
        colors: [
            { name: "--color-error", dark: "#ef4444", light: "#dc2626" },
            { name: "--color-warning", dark: "#ffbd2e", light: "#d97706" },
            { name: "--color-success", dark: "#28c840", light: "#16a34a" },
            { name: "--color-info", dark: "#3b82f6", light: "#2563eb" },
        ],
    },
];

export default function ColorsPage() {
    return (
        <div>
            <DocHeader
                title="Colors"
                description="The complete color palette for Omnira UI. All colors are defined as CSS custom properties and automatically adapt between dark and light mode."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Getting Started", href: "/docs/getting-started" },
                    { label: "Colors" },
                ]}
            />

            {colorGroups.map((group) => (
                <section key={group.title} style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: 20 }}>
                        {group.title}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
                        {group.colors.map((color) => (
                            <div key={color.name} style={{
                                borderRadius: "var(--radius-md)",
                                border: "1px solid var(--color-border-standard)",
                                overflow: "hidden",
                                background: "var(--color-bg-card)",
                            }}>
                                <div style={{
                                    height: 80,
                                    background: color.dark,
                                    display: "flex",
                                    alignItems: "flex-end",
                                    padding: 8,
                                }}>
                                    <span style={{ fontSize: 10, fontWeight: 600, color: color.dark === "#202020" || color.dark === "#1a1a1a" ? "rgba(255,255,255,0.5)" : "#121212", background: "rgba(0,0,0,0.2)", padding: "2px 6px", borderRadius: 4 }}>
                                        {color.dark}
                                    </span>
                                </div>
                                <div style={{ padding: "10px 12px" }}>
                                    <div style={{ fontFamily: "monospace", fontSize: 12, color: "var(--color-lime)", marginBottom: 2 }}>
                                        {color.name}
                                    </div>
                                    <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>
                                        Light: {color.light}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
