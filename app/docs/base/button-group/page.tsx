"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import { Archive, Edit, Trash, Add, Calendar, Chart, Setting2 } from "iconsax-react";

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

export default function ButtonGroupPage() {
    const [singleSelected, setSingleSelected] = useState<string[]>(["today"]);
    const [multiSelected, setMultiSelected] = useState<string[]>(["mon", "wed", "fri"]);

    return (
        <div>
            <DocHeader
                title="Button Group"
                description="Button groups cluster related buttons into a single connected control with shared borders. Supports default, icon-leading, dot indicators, selection modes, and disabled states."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Button Group" },
                ]}
            />

            <InstallBlock slug="button-group" components={["ButtonGroup"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Standard grouped buttons sharing connected borders.</p>

            <ComponentPreview
                title="Default"
                code={`<ButtonGroup>
    <ButtonGroupItem>Archive</ButtonGroupItem>
    <ButtonGroupItem>Edit</ButtonGroupItem>
    <ButtonGroupItem>Delete</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup>
                    <ButtonGroupItem>Archive</ButtonGroupItem>
                    <ButtonGroupItem>Edit</ButtonGroupItem>
                    <ButtonGroupItem>Delete</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── Leading Icon ── */}
            <h2 style={sectionHeading}>Leading Icon</h2>
            <p style={sectionDesc}>Buttons with icons preceding the label text for added visual context.</p>

            <ComponentPreview
                title="Leading Icon"
                code={`<ButtonGroup>
    <ButtonGroupItem icon={<Archive size={16} />}>Archive</ButtonGroupItem>
    <ButtonGroupItem icon={<Edit size={16} />}>Edit</ButtonGroupItem>
    <ButtonGroupItem icon={<Trash size={16} />}>Delete</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup>
                    <ButtonGroupItem icon={<Archive size={16} variant="Bulk" />}>Archive</ButtonGroupItem>
                    <ButtonGroupItem icon={<Edit size={16} variant="Bulk" />}>Edit</ButtonGroupItem>
                    <ButtonGroupItem icon={<Trash size={16} variant="Bulk" />}>Delete</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── With Dot ── */}
            <h2 style={sectionHeading}>With Dot Indicator</h2>
            <p style={sectionDesc}>Buttons featuring a colored dot indicator alongside text.</p>

            <ComponentPreview
                title="With Dot"
                code={`<ButtonGroup>
    <ButtonGroupItem dot>Active</ButtonGroupItem>
    <ButtonGroupItem dot dotColor="#f59e0b">Pending</ButtonGroupItem>
    <ButtonGroupItem dot dotColor="#ef4444">Inactive</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup>
                    <ButtonGroupItem dot>Active</ButtonGroupItem>
                    <ButtonGroupItem dot dotColor="#f59e0b">Pending</ButtonGroupItem>
                    <ButtonGroupItem dot dotColor="#ef4444">Inactive</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled State</h2>
            <p style={sectionDesc}>Entire group or individual items can be disabled.</p>

            <ComponentPreview
                title="All Disabled"
                code={`<ButtonGroup>
    <ButtonGroupItem disabled>Archive</ButtonGroupItem>
    <ButtonGroupItem disabled>Edit</ButtonGroupItem>
    <ButtonGroupItem disabled>Delete</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup>
                    <ButtonGroupItem disabled>Archive</ButtonGroupItem>
                    <ButtonGroupItem disabled>Edit</ButtonGroupItem>
                    <ButtonGroupItem disabled>Delete</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            <ComponentPreview
                title="Individual Disabled"
                code={`<ButtonGroup>
    <ButtonGroupItem>Archive</ButtonGroupItem>
    <ButtonGroupItem disabled>Edit</ButtonGroupItem>
    <ButtonGroupItem>Delete</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup>
                    <ButtonGroupItem>Archive</ButtonGroupItem>
                    <ButtonGroupItem disabled>Edit</ButtonGroupItem>
                    <ButtonGroupItem>Delete</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── Single Selection ── */}
            <h2 style={sectionHeading}>Single Selection</h2>
            <p style={sectionDesc}>Toggle-style selection where one item can be active at a time.</p>

            <ComponentPreview
                title="Single Selection"
                code={`const [selected, setSelected] = useState(["today"]);

<ButtonGroup
    selectionMode="single"
    selected={selected}
    onSelectionChange={setSelected}
>
    <ButtonGroupItem value="today">Today</ButtonGroupItem>
    <ButtonGroupItem value="tomorrow">Tomorrow</ButtonGroupItem>
    <ButtonGroupItem value="this-week">This week</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup
                    selectionMode="single"
                    selected={singleSelected}
                    onSelectionChange={setSingleSelected}
                >
                    <ButtonGroupItem value="today">Today</ButtonGroupItem>
                    <ButtonGroupItem value="tomorrow">Tomorrow</ButtonGroupItem>
                    <ButtonGroupItem value="this-week">This week</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── Multiple Selection ── */}
            <h2 style={sectionHeading}>Multiple Selection</h2>
            <p style={sectionDesc}>Multiple items can be simultaneously active.</p>

            <ComponentPreview
                title="Multiple Selection"
                code={`const [selected, setSelected] = useState(["mon", "wed", "fri"]);

<ButtonGroup
    selectionMode="multiple"
    selected={selected}
    onSelectionChange={setSelected}
>
    <ButtonGroupItem value="mon">Mon</ButtonGroupItem>
    <ButtonGroupItem value="tue">Tue</ButtonGroupItem>
    <ButtonGroupItem value="wed">Wed</ButtonGroupItem>
    <ButtonGroupItem value="thu">Thu</ButtonGroupItem>
    <ButtonGroupItem value="fri">Fri</ButtonGroupItem>
</ButtonGroup>`}
            >
                <ButtonGroup
                    selectionMode="multiple"
                    selected={multiSelected}
                    onSelectionChange={setMultiSelected}
                >
                    <ButtonGroupItem value="mon">Mon</ButtonGroupItem>
                    <ButtonGroupItem value="tue">Tue</ButtonGroupItem>
                    <ButtonGroupItem value="wed">Wed</ButtonGroupItem>
                    <ButtonGroupItem value="thu">Thu</ButtonGroupItem>
                    <ButtonGroupItem value="fri">Fri</ButtonGroupItem>
                </ButtonGroup>
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three size options for different contexts.</p>

            <ComponentPreview
                title="Sizes"
                code={`<ButtonGroup size="sm">
    <ButtonGroupItem icon={<Calendar size={14} />}>Day</ButtonGroupItem>
    <ButtonGroupItem icon={<Chart size={14} />}>Week</ButtonGroupItem>
    <ButtonGroupItem icon={<Setting2 size={14} />}>Month</ButtonGroupItem>
</ButtonGroup>

<ButtonGroup size="md">...</ButtonGroup>
<ButtonGroup size="lg">...</ButtonGroup>`}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                    <ButtonGroup size="sm">
                        <ButtonGroupItem icon={<Calendar size={14} variant="Bulk" />}>Day</ButtonGroupItem>
                        <ButtonGroupItem icon={<Chart size={14} variant="Bulk" />}>Week</ButtonGroupItem>
                        <ButtonGroupItem icon={<Setting2 size={14} variant="Bulk" />}>Month</ButtonGroupItem>
                    </ButtonGroup>
                    <ButtonGroup size="md">
                        <ButtonGroupItem icon={<Calendar size={16} variant="Bulk" />}>Day</ButtonGroupItem>
                        <ButtonGroupItem icon={<Chart size={16} variant="Bulk" />}>Week</ButtonGroupItem>
                        <ButtonGroupItem icon={<Setting2 size={16} variant="Bulk" />}>Month</ButtonGroupItem>
                    </ButtonGroup>
                    <ButtonGroup size="lg">
                        <ButtonGroupItem icon={<Calendar size={18} variant="Bulk" />}>Day</ButtonGroupItem>
                        <ButtonGroupItem icon={<Chart size={18} variant="Bulk" />}>Week</ButtonGroupItem>
                        <ButtonGroupItem icon={<Setting2 size={18} variant="Bulk" />}>Month</ButtonGroupItem>
                    </ButtonGroup>
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import ButtonGroup and ButtonGroupItem to create segmented controls.</p>

            <CodeBlock
                code={`import { ButtonGroup, ButtonGroupItem } from "omnira-ui/ButtonGroup";
import { Archive, Edit, Trash } from "iconsax-react";

export default function MyToolbar() {
    const [selected, setSelected] = useState(["view"]);

    return (
        <ButtonGroup
            selectionMode="single"
            selected={selected}
            onSelectionChange={setSelected}
        >
            <ButtonGroupItem value="view" icon={<Archive size={16} />}>
                View
            </ButtonGroupItem>
            <ButtonGroupItem value="edit" icon={<Edit size={16} />}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem value="delete" icon={<Trash size={16} />}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "selectionMode", type: '"none" | "single" | "multiple"', default: '"none"', description: "Selection behavior" },
                    { name: "selected", type: "string[]", default: "[]", description: "Currently selected values (controlled)" },
                    { name: "onSelectionChange", type: "(selected: string[]) => void", default: "—", description: "Called when selection changes" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of all items in the group" },
                    { name: "value (item)", type: "string", default: '""', description: "Value for selection tracking" },
                    { name: "icon (item)", type: "ReactNode", default: "undefined", description: "Leading icon element" },
                    { name: "dot (item)", type: "boolean", default: "false", description: "Show dot indicator" },
                    { name: "dotColor (item)", type: "string", default: "var(--color-lime)", description: "Dot indicator color" },
                    { name: "disabled (item)", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </div>
    );
}
