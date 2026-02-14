"use client";

import { Star1 } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { ContentDivider } from "@/components/ui/ContentDivider";

/* ── Demo 01: Single Line (no label) ── */

function SingleLineDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider />
            <ContentDivider color="medium" />
            <ContentDivider color="strong" />
            <ContentDivider color="accent" />
        </div>
    );
}

const singleLineCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider />
<ContentDivider color="medium" />
<ContentDivider color="strong" />
<ContentDivider color="accent" />`;

/* ── Demo 02: Single Line with Label ── */

function SingleLineLabelDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider label="OR" />
            <ContentDivider label="Section" align="start" />
            <ContentDivider label="End" align="end" />
        </div>
    );
}

const singleLineLabelCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider label="OR" />
<ContentDivider label="Section" align="start" />
<ContentDivider label="End" align="end" />`;

/* ── Demo 03: Single Line with Icon ── */

function SingleLineIconDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider icon={<Star1 size={16} variant="Bulk" />} />
            <ContentDivider icon={<Star1 size={16} variant="Bulk" />} label="Featured" />
        </div>
    );
}

const singleLineIconCode = `import { Star1 } from "iconsax-react";
import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider icon={<Star1 size={16} variant="Bulk" />} />
<ContentDivider icon={<Star1 size={16} variant="Bulk" />} label="Featured" />`;

/* ── Demo 04: Dual Line ── */

function DualLineDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider variant="dual" />
            <ContentDivider variant="dual" label="OR" />
            <ContentDivider variant="dual" label="Chapter 2" align="start" />
        </div>
    );
}

const dualLineCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider variant="dual" />
<ContentDivider variant="dual" label="OR" />
<ContentDivider variant="dual" label="Chapter 2" align="start" />`;

/* ── Demo 05: Background Fill ── */

function BackgroundFillDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider variant="fill" />
            <ContentDivider variant="fill" label="Today" />
            <ContentDivider variant="fill" label="New messages" align="start" />
            <ContentDivider variant="fill" color="accent" label="Highlighted" />
        </div>
    );
}

const backgroundFillCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider variant="fill" />
<ContentDivider variant="fill" label="Today" />
<ContentDivider variant="fill" label="New messages" align="start" />
<ContentDivider variant="fill" color="accent" label="Highlighted" />`;

/* ── Demo 06: Sizes ── */

function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            <ContentDivider label="Small" size="sm" />
            <ContentDivider label="Medium (default)" size="md" />
            <ContentDivider label="Large" size="lg" />
        </div>
    );
}

const sizesCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<ContentDivider label="Small" size="sm" />
<ContentDivider label="Medium (default)" size="md" />
<ContentDivider label="Large" size="lg" />`;

/* ── Demo 07: Vertical ── */

function VerticalDemo() {
    return (
        <div style={{ display: "flex", gap: 32, height: 120, alignItems: "stretch" }}>
            <ContentDivider orientation="vertical" />
            <ContentDivider orientation="vertical" variant="dual" />
            <ContentDivider orientation="vertical" label="OR" />
        </div>
    );
}

const verticalCode = `import { ContentDivider } from "@/components/ui/ContentDivider";

<div style={{ display: "flex", gap: 32, height: 120 }}>
  <ContentDivider orientation="vertical" />
  <ContentDivider orientation="vertical" variant="dual" />
  <ContentDivider orientation="vertical" label="OR" />
</div>`;

/* ── Props ── */

const props = [
    { name: "variant", type: '"single" | "dual" | "fill"', default: '"single"', description: "Visual style of the divider. Single line, dual parallel lines, or a background-filled bar." },
    { name: "label", type: "string", description: "Text label displayed along the divider." },
    { name: "icon", type: "React.ReactNode", description: "Icon element displayed alongside or instead of the label." },
    { name: "children", type: "React.ReactNode", description: "Custom content in the label slot. Overrides label and icon." },
    { name: "color", type: '"default" | "medium" | "strong" | "accent"', default: '"default"', description: "Color intensity of the divider line." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls label font size and spacing." },
    { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment of the label when present." },
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Orientation of the divider." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

/* ── Page ── */

export default function ContentDividerPage() {
    return (
        <div>
            <DocHeader
                title="Content Divider"
                description="Versatile dividers for separating content sections. Available in single line, dual line, and background fill variants with optional labels, icons, and vertical orientation."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Content Divider" },
                ]}
            />

            <InstallBlock slug="content-divider" components={["ContentDivider"]} />

            <ComponentPreview
                title="Single Line"
                description="Simple horizontal rule with color variants. The most common divider for separating content sections."
                code={singleLineCode}
            >
                <SingleLineDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Single Line with Label"
                description="Divider with a text label. Align the label to the start, center, or end."
                code={singleLineLabelCode}
            >
                <SingleLineLabelDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Single Line with Icon"
                description="Divider with an icon element, optionally combined with a text label."
                code={singleLineIconCode}
            >
                <SingleLineIconDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Dual Line"
                description="Two parallel lines for a more prominent visual break. Supports labels and alignment."
                code={dualLineCode}
            >
                <DualLineDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Background Fill"
                description="A filled bar that spans the full width, ideal for chat-style date separators or section breaks."
                code={backgroundFillCode}
            >
                <BackgroundFillDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Sizes"
                description="Three size options that control label font size and spacing between the line and label."
                code={sizesCode}
            >
                <SizesDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Vertical Orientation"
                description="Vertical dividers for side-by-side layouts. Works with all variants."
                code={verticalCode}
            >
                <VerticalDemo />
            </ComponentPreview>

            <PropsTable title="ContentDivider" props={props} />
        </div>
    );
}
