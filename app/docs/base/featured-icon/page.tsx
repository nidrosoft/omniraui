"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { FeaturedIcon } from "@/components/ui/FeaturedIcon";
import {
    TickCircle, Warning2, InfoCircle, Flash, ShieldTick,
    Star1, Heart, Setting2, Notification1, Chart,
} from "iconsax-react";

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

export default function FeaturedIconPage() {
    return (
        <div>
            <DocHeader
                title="Featured Icon"
                description="Decorative icon containers used to visually highlight icons in feature sections, empty states, and modal headers. Available in 6 theme variants with brand, gray, and semantic color options."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Featured Icon" },
                ]}
            />

            <InstallBlock slug="featured-icon" components={["FeaturedIcon"]} />

            {/* ── Theme: Light ── */}
            <h2 style={sectionHeading}>Light Theme</h2>
            <p style={sectionDesc}>Soft, light-colored background with a brand-colored icon. Subtle and minimal.</p>

            <ComponentPreview
                title="Light — All Colors"
                code={`<FeaturedIcon icon={<TickCircle size={20} variant="Bulk" />} theme="light" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="light" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="light" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="light" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="light" color="error" />`}
            >
                <FeaturedIcon icon={<TickCircle size={20} variant="Bulk" />} theme="light" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="light" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="light" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="light" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="light" color="error" />
            </ComponentPreview>

            {/* ── Theme: Gradient ── */}
            <h2 style={sectionHeading}>Gradient Theme</h2>
            <p style={sectionDesc}>Background uses a gradient wash for more visual depth than the light theme.</p>

            <ComponentPreview
                title="Gradient — All Colors"
                code={`<FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="gradient" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="gradient" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="gradient" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="gradient" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="gradient" color="error" />`}
            >
                <FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="gradient" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="gradient" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="gradient" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="gradient" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="gradient" color="error" />
            </ComponentPreview>

            {/* ── Theme: Dark ── */}
            <h2 style={sectionHeading}>Dark Theme</h2>
            <p style={sectionDesc}>Inverted color scheme — dark/solid background with lighter icon rendering. High contrast.</p>

            <ComponentPreview
                title="Dark — All Colors"
                code={`<FeaturedIcon icon={<Star1 size={20} variant="Bulk" />} theme="dark" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="dark" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="dark" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="dark" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="dark" color="error" />`}
            >
                <FeaturedIcon icon={<Star1 size={20} variant="Bulk" />} theme="dark" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="dark" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="dark" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="dark" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="dark" color="error" />
            </ComponentPreview>

            {/* ── Theme: Outline ── */}
            <h2 style={sectionHeading}>Outline Theme</h2>
            <p style={sectionDesc}>Transparent background with a visible border ring. Clean, line-based aesthetic.</p>

            <ComponentPreview
                title="Outline — All Colors"
                code={`<FeaturedIcon icon={<Heart size={20} variant="Bulk" />} theme="outline" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="outline" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="outline" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="outline" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="outline" color="error" />`}
            >
                <FeaturedIcon icon={<Heart size={20} variant="Bulk" />} theme="outline" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="outline" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="outline" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="outline" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="outline" color="error" />
            </ComponentPreview>

            {/* ── Theme: Modern ── */}
            <h2 style={sectionHeading}>Modern Theme</h2>
            <p style={sectionDesc}>Card-style container with subtle border and shadow. Contemporary flat styling.</p>

            <ComponentPreview
                title="Modern — All Colors"
                code={`<FeaturedIcon icon={<Notification1 size={20} variant="Bulk" />} theme="modern" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="modern" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="modern" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="modern" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="modern" color="error" />`}
            >
                <FeaturedIcon icon={<Notification1 size={20} variant="Bulk" />} theme="modern" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="modern" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="modern" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="modern" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="modern" color="error" />
            </ComponentPreview>

            {/* ── Theme: Modern Neue ── */}
            <h2 style={sectionHeading}>Modern Neue Theme</h2>
            <p style={sectionDesc}>Refined modern variant with an outer ring shadow for added depth and emphasis.</p>

            <ComponentPreview
                title="Modern Neue — All Colors"
                code={`<FeaturedIcon icon={<Chart size={20} variant="Bulk" />} theme="modern-neue" color="brand" />
<FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="modern-neue" color="gray" />
<FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="modern-neue" color="success" />
<FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="modern-neue" color="warning" />
<FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="modern-neue" color="error" />`}
            >
                <FeaturedIcon icon={<Chart size={20} variant="Bulk" />} theme="modern-neue" color="brand" />
                <FeaturedIcon icon={<Setting2 size={20} variant="Bulk" />} theme="modern-neue" color="gray" />
                <FeaturedIcon icon={<ShieldTick size={20} variant="Bulk" />} theme="modern-neue" color="success" />
                <FeaturedIcon icon={<Warning2 size={20} variant="Bulk" />} theme="modern-neue" color="warning" />
                <FeaturedIcon icon={<InfoCircle size={20} variant="Bulk" />} theme="modern-neue" color="error" />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Four size options for different contexts — from compact inline use to large feature displays.</p>

            <ComponentPreview
                title="Sizes — Light Brand"
                code={`<FeaturedIcon icon={<Flash size={16} variant="Bulk" />} size="sm" />
<FeaturedIcon icon={<Flash size={20} variant="Bulk" />} size="md" />
<FeaturedIcon icon={<Flash size={24} variant="Bulk" />} size="lg" />
<FeaturedIcon icon={<Flash size={28} variant="Bulk" />} size="xl" />`}
            >
                <FeaturedIcon icon={<Flash size={16} variant="Bulk" />} size="sm" />
                <FeaturedIcon icon={<Flash size={20} variant="Bulk" />} size="md" />
                <FeaturedIcon icon={<Flash size={24} variant="Bulk" />} size="lg" />
                <FeaturedIcon icon={<Flash size={28} variant="Bulk" />} size="xl" />
            </ComponentPreview>

            <ComponentPreview
                title="Sizes — Dark Brand"
                code={`<FeaturedIcon icon={<Flash size={16} variant="Bulk" />} theme="dark" size="sm" />
<FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="dark" size="md" />
<FeaturedIcon icon={<Flash size={24} variant="Bulk" />} theme="dark" size="lg" />
<FeaturedIcon icon={<Flash size={28} variant="Bulk" />} theme="dark" size="xl" />`}
            >
                <FeaturedIcon icon={<Flash size={16} variant="Bulk" />} theme="dark" size="sm" />
                <FeaturedIcon icon={<Flash size={20} variant="Bulk" />} theme="dark" size="md" />
                <FeaturedIcon icon={<Flash size={24} variant="Bulk" />} theme="dark" size="lg" />
                <FeaturedIcon icon={<Flash size={28} variant="Bulk" />} theme="dark" size="xl" />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the FeaturedIcon component and pass any icon element.</p>

            <CodeBlock
                code={`import { FeaturedIcon } from "omnira-ui/FeaturedIcon";
import { TickCircle } from "iconsax-react";

export default function MyFeature() {
    return (
        <div>
            <FeaturedIcon
                icon={<TickCircle size={24} variant="Bulk" />}
                theme="modern-neue"
                color="brand"
                size="lg"
            />
            <h3>Feature Title</h3>
            <p>Feature description goes here.</p>
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "icon", type: "ReactNode", default: "—", description: "Icon element to display inside the container" },
                    { name: "color", type: '"brand" | "gray" | "error" | "warning" | "success"', default: '"brand"', description: "Color scheme" },
                    { name: "theme", type: '"light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue"', default: '"light"', description: "Visual theme variant" },
                    { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Container size" },
                ]}
            />
        </div>
    );
}
