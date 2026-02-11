"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { ButtonUtility } from "@/components/ui/ButtonUtility";
import { Copy, Trash, Edit2, CloseCircle, Setting2, ArrowDown2, TickCircle, Add, SearchNormal1, Refresh2 } from "iconsax-react";

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
    gap: 12,
    alignItems: "center",
};

export default function UtilityPage() {
    return (
        <div>
            <DocHeader
                title="Utility Button"
                description="Small icon-only buttons with tooltip on hover. Use for toolbar actions, close buttons, and inline controls. Available in four sizes and four color variants."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Utility" },
                ]}
            />

            {/* ── Secondary (Default) ── */}
            <h2 style={sectionHeading}>Secondary</h2>
            <p style={sectionDesc}>The default variant. Bordered glass-style buttons that blend with the Omnira UI design system. Hover to see tooltips.</p>

            <ComponentPreview
                title="Secondary — xs"
                code={`<ButtonUtility size="xs" color="secondary" tooltip="Copy" icon={<Copy size={14} />} />
<ButtonUtility size="xs" color="secondary" tooltip="Download" icon={<ArrowDown2 size={14} />} />
<ButtonUtility size="xs" color="secondary" tooltip="Delete" icon={<Trash size={14} />} />
<ButtonUtility size="xs" color="secondary" tooltip="Edit" icon={<Edit2 size={14} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="secondary" tooltip="Copy" icon={<Copy size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="xs" color="secondary" tooltip="Download" icon={<ArrowDown2 size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="xs" color="secondary" tooltip="Delete" icon={<Trash size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="xs" color="secondary" tooltip="Edit" icon={<Edit2 size={14} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Secondary — sm"
                code={`<ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} />} />
<ButtonUtility size="sm" color="secondary" tooltip="Download" icon={<ArrowDown2 size={16} />} />
<ButtonUtility size="sm" color="secondary" tooltip="Delete" icon={<Trash size={16} />} />
<ButtonUtility size="sm" color="secondary" tooltip="Edit" icon={<Edit2 size={16} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="secondary" tooltip="Download" icon={<ArrowDown2 size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="secondary" tooltip="Delete" icon={<Trash size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="secondary" tooltip="Edit" icon={<Edit2 size={16} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Secondary — md"
                code={`<ButtonUtility size="md" color="secondary" tooltip="Copy" icon={<Copy size={18} />} />
<ButtonUtility size="md" color="secondary" tooltip="Settings" icon={<Setting2 size={18} />} />
<ButtonUtility size="md" color="secondary" tooltip="Search" icon={<SearchNormal1 size={18} />} />
<ButtonUtility size="md" color="secondary" tooltip="Refresh" icon={<Refresh2 size={18} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="md" color="secondary" tooltip="Copy" icon={<Copy size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="secondary" tooltip="Settings" icon={<Setting2 size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="secondary" tooltip="Search" icon={<SearchNormal1 size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="secondary" tooltip="Refresh" icon={<Refresh2 size={18} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Secondary — lg"
                code={`<ButtonUtility size="lg" color="secondary" tooltip="Copy" icon={<Copy size={20} />} />
<ButtonUtility size="lg" color="secondary" tooltip="Settings" icon={<Setting2 size={20} />} />
<ButtonUtility size="lg" color="secondary" tooltip="Add" icon={<Add size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="lg" color="secondary" tooltip="Copy" icon={<Copy size={20} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="secondary" tooltip="Settings" icon={<Setting2 size={20} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="secondary" tooltip="Add" icon={<Add size={20} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            {/* ── Primary ── */}
            <h2 style={sectionHeading}>Primary</h2>
            <p style={sectionDesc}>Solid lime background for high-emphasis utility actions.</p>

            <ComponentPreview
                title="Primary — All Sizes"
                code={`<ButtonUtility size="xs" color="primary" tooltip="Add" icon={<Add size={14} />} />
<ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} />} />
<ButtonUtility size="md" color="primary" tooltip="Add" icon={<Add size={18} />} />
<ButtonUtility size="lg" color="primary" tooltip="Add" icon={<Add size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="primary" tooltip="Add" icon={<Add size={14} color="var(--color-lime-text)" />} />
                    <ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} color="var(--color-lime-text)" />} />
                    <ButtonUtility size="md" color="primary" tooltip="Add" icon={<Add size={18} color="var(--color-lime-text)" />} />
                    <ButtonUtility size="lg" color="primary" tooltip="Add" icon={<Add size={20} color="var(--color-lime-text)" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Primary — Actions"
                code={`<ButtonUtility size="sm" color="primary" tooltip="Confirm" icon={<TickCircle size={16} />} />
<ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} />} />
<ButtonUtility size="sm" color="primary" tooltip="Edit" icon={<Edit2 size={16} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="sm" color="primary" tooltip="Confirm" icon={<TickCircle size={16} color="var(--color-lime-text)" variant="Bold" />} />
                    <ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} color="var(--color-lime-text)" />} />
                    <ButtonUtility size="sm" color="primary" tooltip="Edit" icon={<Edit2 size={16} color="var(--color-lime-text)" variant="Bold" />} />
                </div>
            </ComponentPreview>

            {/* ── Tertiary ── */}
            <h2 style={sectionHeading}>Tertiary</h2>
            <p style={sectionDesc}>Ghost-style buttons with no background or border. Minimal and unobtrusive for inline actions.</p>

            <ComponentPreview
                title="Tertiary — All Sizes"
                code={`<ButtonUtility size="xs" color="tertiary" tooltip="Copy" icon={<Copy size={14} />} />
<ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={<Copy size={16} />} />
<ButtonUtility size="md" color="tertiary" tooltip="Copy" icon={<Copy size={18} />} />
<ButtonUtility size="lg" color="tertiary" tooltip="Copy" icon={<Copy size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="tertiary" tooltip="Copy" icon={<Copy size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={<Copy size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="tertiary" tooltip="Copy" icon={<Copy size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="tertiary" tooltip="Copy" icon={<Copy size={20} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Tertiary — Close Button"
                code={`<ButtonUtility size="xs" color="tertiary" tooltip="Close" icon={<CloseCircle size={14} />} />
<ButtonUtility size="sm" color="tertiary" tooltip="Close" icon={<CloseCircle size={16} />} />
<ButtonUtility size="md" color="tertiary" tooltip="Close" icon={<CloseCircle size={18} />} />
<ButtonUtility size="lg" color="tertiary" tooltip="Close" icon={<CloseCircle size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="tertiary" tooltip="Close" icon={<CloseCircle size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Close" icon={<CloseCircle size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="tertiary" tooltip="Close" icon={<CloseCircle size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="tertiary" tooltip="Close" icon={<CloseCircle size={20} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            {/* ── Destructive ── */}
            <h2 style={sectionHeading}>Destructive</h2>
            <p style={sectionDesc}>Red-tinted hover state for dangerous actions like delete or remove.</p>

            <ComponentPreview
                title="Destructive — All Sizes"
                code={`<ButtonUtility size="xs" color="destructive" tooltip="Delete" icon={<Trash size={14} />} />
<ButtonUtility size="sm" color="destructive" tooltip="Delete" icon={<Trash size={16} />} />
<ButtonUtility size="md" color="destructive" tooltip="Delete" icon={<Trash size={18} />} />
<ButtonUtility size="lg" color="destructive" tooltip="Delete" icon={<Trash size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="destructive" tooltip="Delete" icon={<Trash size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="destructive" tooltip="Delete" icon={<Trash size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="destructive" tooltip="Delete" icon={<Trash size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="destructive" tooltip="Delete" icon={<Trash size={20} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Destructive — Close"
                code={`<ButtonUtility size="sm" color="destructive" tooltip="Remove" icon={<CloseCircle size={16} />} />
<ButtonUtility size="md" color="destructive" tooltip="Remove" icon={<CloseCircle size={18} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="sm" color="destructive" tooltip="Remove" icon={<CloseCircle size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="destructive" tooltip="Remove" icon={<CloseCircle size={18} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled State</h2>
            <p style={sectionDesc}>Disabled utility buttons have reduced opacity and no hover effects or tooltips.</p>

            <ComponentPreview
                title="Disabled — All Colors"
                code={`<ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} />} disabled />
<ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} />} disabled />
<ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={<Edit2 size={16} />} disabled />
<ButtonUtility size="sm" color="destructive" tooltip="Delete" icon={<Trash size={16} />} disabled />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="sm" color="primary" tooltip="Add" icon={<Add size={16} color="var(--color-lime-text)" />} disabled />
                    <ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} variant="Bold" color="currentColor" />} disabled />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={<Edit2 size={16} variant="Bold" color="currentColor" />} disabled />
                    <ButtonUtility size="sm" color="destructive" tooltip="Delete" icon={<Trash size={16} variant="Bold" color="currentColor" />} disabled />
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Disabled — All Sizes (Secondary)"
                code={`<ButtonUtility size="xs" color="secondary" tooltip="Copy" icon={<Copy size={14} />} disabled />
<ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} />} disabled />
<ButtonUtility size="md" color="secondary" tooltip="Copy" icon={<Copy size={18} />} disabled />
<ButtonUtility size="lg" color="secondary" tooltip="Copy" icon={<Copy size={20} />} disabled />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="secondary" tooltip="Copy" icon={<Copy size={14} variant="Bold" color="currentColor" />} disabled />
                    <ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={<Copy size={16} variant="Bold" color="currentColor" />} disabled />
                    <ButtonUtility size="md" color="secondary" tooltip="Copy" icon={<Copy size={18} variant="Bold" color="currentColor" />} disabled />
                    <ButtonUtility size="lg" color="secondary" tooltip="Copy" icon={<Copy size={20} variant="Bold" color="currentColor" />} disabled />
                </div>
            </ComponentPreview>

            {/* ── Size Comparison ── */}
            <h2 style={sectionHeading}>Size Comparison</h2>
            <p style={sectionDesc}>All four sizes side by side for each color variant.</p>

            <ComponentPreview
                title="All Sizes — Secondary"
                code={`<ButtonUtility size="xs" color="secondary" icon={<Setting2 size={14} />} />
<ButtonUtility size="sm" color="secondary" icon={<Setting2 size={16} />} />
<ButtonUtility size="md" color="secondary" icon={<Setting2 size={18} />} />
<ButtonUtility size="lg" color="secondary" icon={<Setting2 size={20} />} />`}
            >
                <div style={rowWrap}>
                    <ButtonUtility size="xs" color="secondary" icon={<Setting2 size={14} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="sm" color="secondary" icon={<Setting2 size={16} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="md" color="secondary" icon={<Setting2 size={18} variant="Bold" color="currentColor" />} />
                    <ButtonUtility size="lg" color="secondary" icon={<Setting2 size={20} variant="Bold" color="currentColor" />} />
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the ButtonUtility component and pass an icon element with an optional tooltip.</p>

            <CodeBlock
                code={`import { ButtonUtility } from "omnira-ui/ButtonUtility";
import { Copy, Trash, Edit2, CloseCircle } from "iconsax-react";

export default function Toolbar() {
    return (
        <div style={{ display: "flex", gap: 8 }}>
            <ButtonUtility
                size="sm"
                color="secondary"
                tooltip="Copy"
                icon={<Copy size={16} variant="Bold" color="currentColor" />}
                onClick={() => console.log("copied")}
            />
            <ButtonUtility
                size="sm"
                color="secondary"
                tooltip="Edit"
                icon={<Edit2 size={16} variant="Bold" color="currentColor" />}
            />
            <ButtonUtility
                size="sm"
                color="destructive"
                tooltip="Delete"
                icon={<Trash size={16} variant="Bold" color="currentColor" />}
            />
            <ButtonUtility
                size="sm"
                color="tertiary"
                tooltip="Close"
                icon={<CloseCircle size={16} variant="Bold" color="currentColor" />}
            />
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "icon", type: "ReactNode", description: "Icon element to render inside the button" },
                    { name: "size", type: '"xs" | "sm" | "md" | "lg"', default: '"sm"', description: "Button size — xs (28px), sm (36px), md (44px), lg (52px)" },
                    { name: "color", type: '"primary" | "secondary" | "tertiary" | "destructive"', default: '"secondary"', description: "Color variant" },
                    { name: "tooltip", type: "string", default: "undefined", description: "Tooltip text shown on hover after a short delay" },
                    { name: "disabled", type: "boolean", default: "false", description: "Disabled state — reduced opacity, no hover, no tooltip" },
                ]}
            />
        </div>
    );
}
