"use client";

import { useState } from "react";
import { User, StatusUp } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Select, SelectComboBox, SelectTags } from "@/components/ui/Select";
import type { SelectItem } from "@/components/ui/Select";

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

const demoWrap: React.CSSProperties = {
    maxWidth: 360,
    width: "100%",
};

const teamItems: SelectItem[] = [
    { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix" },
    { id: "@olivia", label: "Olivia Rhye", supportingText: "@olivia" },
    { id: "@lana", label: "Lana Steiner", supportingText: "@lana", disabled: true },
    { id: "@demi", label: "Demi Wilkinson", supportingText: "@demi" },
    { id: "@candice", label: "Candice Wu", supportingText: "@candice" },
    { id: "@natali", label: "Natali Craig", supportingText: "@natali" },
];

const iconItems: SelectItem[] = teamItems.map((i) => ({
    ...i,
    icon: <User size={16} variant="Bold" color="currentColor" />,
}));

const avatarItems: SelectItem[] = [
    { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix", avatarSrc: "https://i.pravatar.cc/40?img=1" },
    { id: "@olivia", label: "Olivia Rhye", supportingText: "@olivia", avatarSrc: "https://i.pravatar.cc/40?img=2" },
    { id: "@lana", label: "Lana Steiner", supportingText: "@lana", avatarSrc: "https://i.pravatar.cc/40?img=3" },
    { id: "@demi", label: "Demi Wilkinson", supportingText: "@demi", avatarSrc: "https://i.pravatar.cc/40?img=4" },
    { id: "@candice", label: "Candice Wu", supportingText: "@candice", avatarSrc: "https://i.pravatar.cc/40?img=5" },
    { id: "@natali", label: "Natali Craig", supportingText: "@natali", avatarSrc: "https://i.pravatar.cc/40?img=6" },
];

const dotItems: SelectItem[] = teamItems.map((i) => ({ ...i, dot: true }));

/* ── Default Demo ── */
function DefaultDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={teamItems}
                label="Team member"
                hint="Select a team member to assign."
                placeholder="Select team member"
                required
            />
        </div>
    );
}

/* ── Disabled Demo ── */
function DisabledDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={teamItems}
                label="Team member"
                placeholder="Select team member"
                disabled
            />
        </div>
    );
}

/* ── Error Demo ── */
function ErrorDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={teamItems}
                label="Team member"
                placeholder="Select team member"
                error="This field is required."
                required
            />
        </div>
    );
}

/* ── Sizes Demo ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 360, width: "100%" }}>
            <Select items={teamItems} placeholder="Small" size="sm" label="Small" />
            <Select items={teamItems} placeholder="Medium" size="md" label="Medium" />
            <Select items={teamItems} placeholder="Large" size="lg" label="Large" />
        </div>
    );
}

/* ── Icon Leading Demo ── */
function IconLeadingDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={iconItems}
                label="Team member"
                hint="Items have leading icons."
                placeholder="Select team member"
                placeholderIcon={<User size={16} variant="Bold" color="currentColor" />}
            />
        </div>
    );
}

/* ── Avatar Leading Demo ── */
function AvatarLeadingDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={avatarItems}
                label="Team member"
                hint="Items have avatar images."
                placeholder="Select team member"
            />
        </div>
    );
}

/* ── Dot Leading Demo ── */
function DotLeadingDemo() {
    return (
        <div style={demoWrap}>
            <Select
                items={dotItems}
                label="Team member"
                hint="Items have status dots."
                placeholder="Select team member"
            />
        </div>
    );
}

/* ── Search Demo ── */
function SearchDemo() {
    return (
        <div style={demoWrap}>
            <SelectComboBox
                items={teamItems}
                label="Search"
                hint="Type to filter the list."
                placeholder="Select team member"
                searchPlaceholder="Search members..."
                required
            />
        </div>
    );
}

/* ── Tags Demo ── */
function TagsDemo() {
    return (
        <div style={demoWrap}>
            <SelectTags
                items={avatarItems}
                label="Assign members"
                hint="Select multiple team members."
                placeholder="Select members"
                defaultValue={["@phoenix", "@olivia"]}
            />
        </div>
    );
}

const selectProps = [
    { name: "items", type: "SelectItem[]", required: true, description: "Array of selectable items." },
    { name: "value", type: "string", description: "Controlled selected value (item id)." },
    { name: "defaultValue", type: "string", description: "Default selected value (uncontrolled)." },
    { name: "onValueChange", type: "(value: string) => void", description: "Callback when selection changes." },
    { name: "placeholder", type: "string", default: '"Select an option"', description: "Placeholder text." },
    { name: "label", type: "string", description: "Label text above the select." },
    { name: "hint", type: "string", description: "Helper text below the select." },
    { name: "error", type: "string", description: "Error message. Replaces hint when present." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Select size." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the select." },
    { name: "required", type: "boolean", default: "false", description: "Show required asterisk." },
    { name: "placeholderIcon", type: "ReactNode", description: "Icon shown in the placeholder." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

export default function SelectPage() {
    return (
        <div>
            <DocHeader
                title="Select"
                description="A dropdown select component for choosing from a list of options. Supports icons, avatars, dots, search filtering, multi-select with tags, sizes, and validation states."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Select" },
                ]}
            />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>A basic select with label, hint, and required indicator.</p>

            <ComponentPreview
                title="Default Select"
                code={`<Select
    items={[
        { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix" },
        { id: "@olivia", label: "Olivia Rhye", supportingText: "@olivia" },
        { id: "@lana", label: "Lana Steiner", supportingText: "@lana", disabled: true },
    ]}
    label="Team member"
    hint="Select a team member to assign."
    placeholder="Select team member"
    required
/>`}
            >
                <DefaultDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>A disabled select that cannot be interacted with.</p>

            <ComponentPreview
                title="Disabled"
                code={`<Select
    items={items}
    label="Team member"
    placeholder="Select team member"
    disabled
/>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Error ── */}
            <h2 style={sectionHeading}>Error</h2>
            <p style={sectionDesc}>Pass an error prop to show validation state.</p>

            <ComponentPreview
                title="Error State"
                code={`<Select
    items={items}
    label="Team member"
    placeholder="Select team member"
    error="This field is required."
    required
/>`}
            >
                <ErrorDemo />
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm, md, and lg.</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<Select items={items} placeholder="Small" size="sm" label="Small" />
<Select items={items} placeholder="Medium" size="md" label="Medium" />
<Select items={items} placeholder="Large" size="lg" label="Large" />`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Icon Leading ── */}
            <h2 style={sectionHeading}>Icon Leading</h2>
            <p style={sectionDesc}>Items with leading icons. The placeholder can also have an icon.</p>

            <ComponentPreview
                title="Icon Leading"
                code={`const items = [
    { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix",
      icon: <User size={16} variant="Bold" color="currentColor" /> },
    // ...
];

<Select
    items={items}
    label="Team member"
    placeholder="Select team member"
    placeholderIcon={<User size={16} variant="Bold" color="currentColor" />}
/>`}
            >
                <IconLeadingDemo />
            </ComponentPreview>

            {/* ── Avatar Leading ── */}
            <h2 style={sectionHeading}>Avatar Leading</h2>
            <p style={sectionDesc}>Items with avatar images for user selection.</p>

            <ComponentPreview
                title="Avatar Leading"
                code={`const items = [
    { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix",
      avatarSrc: "/avatars/phoenix.jpg" },
    // ...
];

<Select
    items={items}
    label="Team member"
    placeholder="Select team member"
/>`}
            >
                <AvatarLeadingDemo />
            </ComponentPreview>

            {/* ── Dot Leading ── */}
            <h2 style={sectionHeading}>Dot Leading</h2>
            <p style={sectionDesc}>Items with status dots indicating online/active state.</p>

            <ComponentPreview
                title="Dot Leading"
                code={`const items = [
    { id: "@phoenix", label: "Phoenix Baker", supportingText: "@phoenix", dot: true },
    // ...
];

<Select
    items={items}
    label="Team member"
    placeholder="Select team member"
/>`}
            >
                <DotLeadingDemo />
            </ComponentPreview>

            {/* ── Search ── */}
            <h2 style={sectionHeading}>Search / ComboBox</h2>
            <p style={sectionDesc}>A searchable select that filters items as you type.</p>

            <ComponentPreview
                title="Search Select"
                code={`<SelectComboBox
    items={items}
    label="Search"
    hint="Type to filter the list."
    placeholder="Select team member"
    searchPlaceholder="Search members..."
    required
/>`}
            >
                <SearchDemo />
            </ComponentPreview>

            {/* ── Tags ── */}
            <h2 style={sectionHeading}>Tags / Multi-Select</h2>
            <p style={sectionDesc}>Multi-select with tag chips. Click items to toggle, click X to remove.</p>

            <ComponentPreview
                title="Tags Multi-Select"
                code={`<SelectTags
    items={avatarItems}
    label="Assign members"
    hint="Select multiple team members."
    placeholder="Select members"
    defaultValue={["@phoenix", "@olivia"]}
/>`}
            >
                <TagsDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Select components and configure with items.</p>

            <CodeBlock
                code={`import { Select, SelectComboBox, SelectTags } from "@/components/ui/Select";
import type { SelectItem } from "@/components/ui/Select";

const items: SelectItem[] = [
    { id: "1", label: "Option A", supportingText: "Description" },
    { id: "2", label: "Option B", icon: <Icon />, disabled: true },
    { id: "3", label: "Option C", avatarSrc: "/avatar.jpg" },
    { id: "4", label: "Option D", dot: true },
];

// Single select
<Select items={items} label="Choose" onValueChange={setValue} />

// Searchable
<SelectComboBox items={items} label="Search" />

// Multi-select with tags
<SelectTags items={items} label="Select many" onValueChange={setValues} />`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={selectProps} />
        </div>
    );
}
