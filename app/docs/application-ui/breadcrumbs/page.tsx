"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const sampleItems = [
    { label: "Settings", href: "#" },
    { label: "Account", href: "#" },
    { label: "Team" },
];

const longItems = [
    { label: "Home", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Account", href: "#" },
    { label: "Security", href: "#" },
    { label: "Team" },
];

/* ── Demos ── */

function TextDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Breadcrumbs items={sampleItems} />
            <Breadcrumbs items={sampleItems} showHome />
        </div>
    );
}

const textCode = `import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

<Breadcrumbs items={[
  { label: "Settings", href: "#" },
  { label: "Account", href: "#" },
  { label: "Team" },
]} />

<Breadcrumbs items={items} showHome />`;

function TextLineDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Breadcrumbs items={sampleItems} variant="textLine" />
            <Breadcrumbs items={sampleItems} variant="textLine" showHome />
        </div>
    );
}

const textLineCode = `import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

<Breadcrumbs items={items} variant="textLine" />
<Breadcrumbs items={items} variant="textLine" showHome />`;

function ButtonDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Breadcrumbs items={sampleItems} variant="button" />
            <Breadcrumbs items={sampleItems} variant="button" showHome />
        </div>
    );
}

const buttonCode = `import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

<Breadcrumbs items={items} variant="button" />
<Breadcrumbs items={items} variant="button" showHome />`;

function CollapsedDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Breadcrumbs items={longItems} maxItems={3} />
            <Breadcrumbs items={longItems} maxItems={3} variant="button" showHome />
        </div>
    );
}

const collapsedCode = `import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

<Breadcrumbs items={longItems} maxItems={3} />
<Breadcrumbs items={longItems} maxItems={3} variant="button" showHome />`;

/* ── Props ── */

const breadcrumbsProps = [
    { name: "items", type: "BreadcrumbItem[]", description: "Array of breadcrumb items." },
    { name: "variant", type: '"text" | "textLine" | "button"', default: '"text"', description: "Visual variant. Text uses chevron separators, textLine uses angled lines, button uses pill-shaped items." },
    { name: "showHome", type: "boolean", default: "false", description: "Show a home icon as the first breadcrumb." },
    { name: "homeHref", type: "string", default: '"/"', description: "URL for the home icon link." },
    { name: "maxItems", type: "number", default: "0", description: "Max items to show before collapsing with ellipsis. 0 = no collapse." },
    { name: "separator", type: "React.ReactNode", description: "Custom separator element between items." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

const itemProps = [
    { name: "label", type: "string", description: "Display label for the breadcrumb." },
    { name: "href", type: "string", description: "URL to navigate to. Omit for the current (last) item." },
    { name: "icon", type: "React.ReactNode", description: "Custom icon element displayed before the label." },
];

/* ── Page ── */

export default function BreadcrumbsPage() {
    return (
        <div>
            <DocHeader
                title="Breadcrumbs"
                description="Navigation breadcrumbs for showing the user's location in a hierarchy. Available in text, text with line separators, and button variants with home icon and auto-collapse."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Breadcrumbs" },
                ]}
            />

            <InstallBlock slug="breadcrumbs" components={["Breadcrumbs"]} />

            <ComponentPreview
                title="Breadcrumbs Text"
                description="Default text breadcrumbs with chevron arrow separators."
                code={textCode}
            >
                <TextDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Breadcrumbs Text with Line"
                description="Text breadcrumbs with angled line separators."
                code={textLineCode}
            >
                <TextLineDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Breadcrumbs Button"
                description="Pill-shaped button breadcrumbs with hover backgrounds. The current item has an elevated background."
                code={buttonCode}
            >
                <ButtonDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Collapsed"
                description="Long breadcrumb trails auto-collapse with an ellipsis when maxItems is set."
                code={collapsedCode}
            >
                <CollapsedDemo />
            </ComponentPreview>

            <PropsTable title="Breadcrumbs" props={breadcrumbsProps} />
            <PropsTable title="BreadcrumbItem" props={itemProps} />
        </div>
    );
}
