"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FeaturedIcon } from "@/components/ui/FeaturedIcon";
import { Star1, Setting2, ShieldTick } from "iconsax-react";

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

const cardTitle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 700,
    color: "var(--color-text-primary)",
    marginBottom: 8,
};

const cardText: React.CSSProperties = {
    color: "var(--color-text-secondary)",
    fontSize: 14,
    lineHeight: 1.6,
};

export default function CardPage() {
    return (
        <div>
            <DocHeader
                title="Card"
                description="Cards are versatile containers for grouping related content with consistent styling. Available in standard, light, accent, and framework variants with five padding sizes."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Card" },
                ]}
            />

            <InstallBlock slug="card" components={["Card"]} />

            {/* ── Variants ── */}
            <h2 style={sectionHeading}>Variants</h2>
            <p style={sectionDesc}>Four visual variants for different contexts and emphasis levels.</p>

            <ComponentPreview
                title="Standard"
                description="Default card with solid background, border, and shadow."
                code={`<Card variant="standard">
    <h3>Standard Card</h3>
    <p>Default card styling with border and shadow.</p>
</Card>`}
            >
                <Card variant="standard" style={{ maxWidth: 360 }}>
                    <h3 style={cardTitle}>Standard Card</h3>
                    <p style={cardText}>Default card styling with a solid background, border, and subtle shadow for content grouping.</p>
                </Card>
            </ComponentPreview>

            <ComponentPreview
                title="Light"
                description="Subtle card with minimal border and lighter shadow."
                code={`<Card variant="light">
    <h3>Light Card</h3>
    <p>Minimal styling for less emphasis.</p>
</Card>`}
            >
                <Card variant="light" style={{ maxWidth: 360 }}>
                    <h3 style={cardTitle}>Light Card</h3>
                    <p style={cardText}>Subtle styling with a thin border and lighter shadow. Great for secondary content or nested cards.</p>
                </Card>
            </ComponentPreview>

            <ComponentPreview
                title="Accent"
                description="Brand-tinted card with lime background and border."
                code={`<Card variant="accent">
    <h3>Accent Card</h3>
    <p>Brand-tinted styling for highlighted content.</p>
</Card>`}
            >
                <Card variant="accent" style={{ maxWidth: 360 }}>
                    <h3 style={cardTitle}>Accent Card</h3>
                    <p style={cardText}>Brand-tinted background and border for content that needs visual emphasis and distinction.</p>
                </Card>
            </ComponentPreview>

            <ComponentPreview
                title="Framework"
                description="Large rounded card with gradient background for hero sections."
                code={`<Card variant="framework">
    <h3>Framework Card</h3>
    <p>Gradient background for hero sections.</p>
</Card>`}
            >
                <Card variant="framework" style={{ maxWidth: 360 }}>
                    <h3 style={cardTitle}>Framework Card</h3>
                    <p style={cardText}>Bold gradient background with extra-rounded corners. Ideal for hero sections and feature highlights.</p>
                </Card>
            </ComponentPreview>

            {/* ── Padding ── */}
            <h2 style={sectionHeading}>Padding</h2>
            <p style={sectionDesc}>Five padding sizes from none to extra large.</p>

            <ComponentPreview
                title="Padding Sizes"
                code={`<Card padding="none">None</Card>
<Card padding="sm">Small (16px)</Card>
<Card padding="md">Medium (24px)</Card>
<Card padding="lg">Large (32px)</Card>
<Card padding="xl">Extra Large (48px)</Card>`}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
                    <Card padding="none"><div style={{ padding: "12px 16px", ...cardText }}>padding=&quot;none&quot;</div></Card>
                    <Card padding="sm"><p style={cardText}>padding=&quot;sm&quot; — 16px</p></Card>
                    <Card padding="md"><p style={cardText}>padding=&quot;md&quot; — 24px</p></Card>
                    <Card padding="lg"><p style={cardText}>padding=&quot;lg&quot; — 32px</p></Card>
                    <Card padding="xl"><p style={cardText}>padding=&quot;xl&quot; — 48px</p></Card>
                </div>
            </ComponentPreview>

            {/* ── Hoverable ── */}
            <h2 style={sectionHeading}>Hoverable</h2>
            <p style={sectionDesc}>Cards can lift on hover for interactive lists and grids.</p>

            <ComponentPreview
                title="Hoverable Cards"
                code={`<Card hoverable>
    <h3>Hover me</h3>
    <p>This card lifts on hover.</p>
</Card>`}
            >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, width: "100%" }}>
                    <Card hoverable padding="md">
                        <FeaturedIcon icon={<Star1 size={20} variant="Bulk" />} theme="light" color="brand" />
                        <h3 style={{ ...cardTitle, marginTop: 12 }}>Analytics</h3>
                        <p style={cardText}>View your dashboard metrics and insights.</p>
                    </Card>
                    <Card hoverable padding="md">
                        <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="light" color="success" />
                        <h3 style={{ ...cardTitle, marginTop: 12 }}>Security</h3>
                        <p style={cardText}>Manage authentication and permissions.</p>
                    </Card>
                    <Card hoverable padding="md">
                        <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="light" color="gray" />
                        <h3 style={{ ...cardTitle, marginTop: 12 }}>Settings</h3>
                        <p style={cardText}>Configure your account preferences.</p>
                    </Card>
                </div>
            </ComponentPreview>

            {/* ── Composed Example ── */}
            <h2 style={sectionHeading}>Composed Example</h2>
            <p style={sectionDesc}>Cards work well with other components to build rich content blocks.</p>

            <ComponentPreview
                title="Card with Actions"
                code={`<Card padding="lg">
    <Badge variant="accent">Pro</Badge>
    <h3>Upgrade your plan</h3>
    <p>Get access to advanced features.</p>
    <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <Button variant="secondary" size="sm">Learn more</Button>
        <Button variant="primary" size="sm">Upgrade</Button>
    </div>
</Card>`}
            >
                <Card padding="lg" style={{ maxWidth: 400 }}>
                    <Badge variant="accent">Pro</Badge>
                    <h3 style={{ ...cardTitle, marginTop: 12 }}>Upgrade your plan</h3>
                    <p style={cardText}>Get access to advanced analytics, team collaboration, and priority support.</p>
                    <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                        <Button variant="secondary" size="sm">Learn more</Button>
                        <Button variant="primary" size="sm">Upgrade</Button>
                    </div>
                </Card>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "variant", type: '"standard" | "light" | "accent" | "framework"', default: '"standard"', description: "Visual style variant" },
                    { name: "padding", type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"lg"', description: "Internal padding size" },
                    { name: "hoverable", type: "boolean", default: "false", description: "Lift on hover with enhanced shadow" },
                ]}
            />
        </div>
    );
}
