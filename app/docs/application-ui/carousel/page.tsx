"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Carousel } from "@/components/ui/Carousel";
import { Card } from "@/components/ui/Card";

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

const slideStyle: React.CSSProperties = {
    width: 280,
    height: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 700,
    color: "var(--color-text-primary)",
};

export default function CarouselPage() {
    return (
        <div>
            <DocHeader
                title="Carousel"
                description="Horizontally scrolling content slider with snap scrolling, navigation arrows, and dot indicators. Supports auto-play and custom gaps."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Carousel" },
                ]}
            />

            <InstallBlock slug="carousel" components={["Carousel"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Carousel with arrows and dot indicators.</p>

            <ComponentPreview
                title="Default Carousel"
                code={`<Carousel>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 1</Card>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 2</Card>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 3</Card>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 4</Card>
</Carousel>`}
            >
                <div style={{ width: "100%", padding: "0 24px" }}>
                    <Carousel>
                        <Card padding="lg" style={slideStyle}>Slide 1</Card>
                        <Card padding="lg" style={slideStyle}>Slide 2</Card>
                        <Card padding="lg" style={slideStyle}>Slide 3</Card>
                        <Card padding="lg" style={slideStyle}>Slide 4</Card>
                    </Carousel>
                </div>
            </ComponentPreview>

            {/* ── Without Arrows ── */}
            <h2 style={sectionHeading}>Dots Only</h2>
            <p style={sectionDesc}>Navigation with dots only, no arrow buttons.</p>

            <ComponentPreview
                title="Dots Only"
                code={`<Carousel showArrows={false}>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 1</Card>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 2</Card>
    <Card padding="lg" style={{ width: 280, height: 180 }}>Slide 3</Card>
</Carousel>`}
            >
                <div style={{ width: "100%" }}>
                    <Carousel showArrows={false}>
                        <Card padding="lg" style={slideStyle}>Slide 1</Card>
                        <Card padding="lg" style={slideStyle}>Slide 2</Card>
                        <Card padding="lg" style={slideStyle}>Slide 3</Card>
                    </Carousel>
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "showArrows", type: "boolean", default: "true", description: "Show prev/next navigation arrows" },
                    { name: "showDots", type: "boolean", default: "true", description: "Show dot indicators" },
                    { name: "autoPlay", type: "number", default: "0", description: "Auto-play interval in ms (0 = off)" },
                    { name: "gap", type: "number", default: "16", description: "Gap between slides in pixels" },
                ]}
            />
        </div>
    );
}
