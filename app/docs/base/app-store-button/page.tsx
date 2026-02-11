"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { AppStoreButton, GooglePlayButton, GalaxyStoreButton } from "@/components/ui/AppStoreButton";

const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.01em",
    marginBottom: 8,
    marginTop: 48,
};

const sectionDesc: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 24,
};

const rowWrap: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "center",
};

const colStack: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-start",
};

export default function AppStoreButtonPage() {
    return (
        <div>
            <DocHeader
                title="App Store Button"
                description="Native-looking app store download buttons for Apple App Store, Google Play, and Samsung Galaxy Store. Available in three sizes with authentic store branding."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "App Store Button" },
                ]}
            />

            {/* ── All Stores ── */}
            <h2 style={sectionHeading}>All Stores</h2>
            <p style={sectionDesc}>Display download buttons for all three major app stores side by side.</p>

            <ComponentPreview
                title="All Stores — Default (md)"
                code={`<GooglePlayButton size="md" />
<AppStoreButton size="md" />
<GalaxyStoreButton size="md" />`}
            >
                <div style={rowWrap}>
                    <GooglePlayButton size="md" />
                    <AppStoreButton size="md" />
                    <GalaxyStoreButton size="md" />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="All Stores — Large"
                code={`<GooglePlayButton size="lg" />
<AppStoreButton size="lg" />
<GalaxyStoreButton size="lg" />`}
            >
                <div style={rowWrap}>
                    <GooglePlayButton size="lg" />
                    <AppStoreButton size="lg" />
                    <GalaxyStoreButton size="lg" />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="All Stores — Small"
                code={`<GooglePlayButton size="sm" />
<AppStoreButton size="sm" />
<GalaxyStoreButton size="sm" />`}
            >
                <div style={rowWrap}>
                    <GooglePlayButton size="sm" />
                    <AppStoreButton size="sm" />
                    <GalaxyStoreButton size="sm" />
                </div>
            </ComponentPreview>

            {/* ── Apple App Store ── */}
            <h2 style={sectionHeading}>Apple App Store</h2>
            <p style={sectionDesc}>The classic &quot;Download on the App Store&quot; button with the Apple logo.</p>

            <ComponentPreview
                title="App Store — All Sizes"
                code={`<AppStoreButton size="sm" />
<AppStoreButton size="md" />
<AppStoreButton size="lg" />`}
            >
                <div style={colStack}>
                    <AppStoreButton size="sm" />
                    <AppStoreButton size="md" />
                    <AppStoreButton size="lg" />
                </div>
            </ComponentPreview>

            {/* ── Google Play ── */}
            <h2 style={sectionHeading}>Google Play</h2>
            <p style={sectionDesc}>The &quot;GET IT ON Google Play&quot; button with the Play Store triangle logo.</p>

            <ComponentPreview
                title="Google Play — All Sizes"
                code={`<GooglePlayButton size="sm" />
<GooglePlayButton size="md" />
<GooglePlayButton size="lg" />`}
            >
                <div style={colStack}>
                    <GooglePlayButton size="sm" />
                    <GooglePlayButton size="md" />
                    <GooglePlayButton size="lg" />
                </div>
            </ComponentPreview>

            {/* ── Galaxy Store ── */}
            <h2 style={sectionHeading}>Samsung Galaxy Store</h2>
            <p style={sectionDesc}>The &quot;Available on Galaxy Store&quot; button for Samsung devices.</p>

            <ComponentPreview
                title="Galaxy Store — All Sizes"
                code={`<GalaxyStoreButton size="sm" />
<GalaxyStoreButton size="md" />
<GalaxyStoreButton size="lg" />`}
            >
                <div style={colStack}>
                    <GalaxyStoreButton size="sm" />
                    <GalaxyStoreButton size="md" />
                    <GalaxyStoreButton size="lg" />
                </div>
            </ComponentPreview>

            {/* ── Stacked Layout ── */}
            <h2 style={sectionHeading}>Stacked Layout</h2>
            <p style={sectionDesc}>Vertically stacked for mobile-friendly download sections.</p>

            <ComponentPreview
                title="Stacked"
                code={`<div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 220 }}>
    <AppStoreButton size="md" />
    <GooglePlayButton size="md" />
    <GalaxyStoreButton size="md" />
</div>`}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 220 }}>
                    <AppStoreButton size="md" />
                    <GooglePlayButton size="md" />
                    <GalaxyStoreButton size="md" />
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the store buttons and use them in your application.</p>

            <CodeBlock
                code={`import {
    AppStoreButton,
    GooglePlayButton,
    GalaxyStoreButton,
} from "omnira-ui/AppStoreButton";

export default function DownloadSection() {
    return (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <AppStoreButton size="md" />
            <GooglePlayButton size="md" />
            <GalaxyStoreButton size="md" />
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                title="Props (shared by all three)"
                props={[
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size — sm (40px), md (48px), lg (56px)" },
                    { name: "disabled", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </div>
    );
}
