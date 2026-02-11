"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Tag, TagGroup, TagList } from "@/components/ui/Tag";

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

const colWrap: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
};

/* ── Sizes Demo ── */
function SizesDemo() {
    return (
        <div style={colWrap}>
            <TagGroup label="Small" size="sm">
                <TagList>
                    <Tag size="sm">Label</Tag>
                    <Tag size="sm" avatarSrc="https://i.pravatar.cc/40?img=1">Label</Tag>
                    <Tag size="sm" dot>Label</Tag>
                </TagList>
            </TagGroup>
            <TagGroup label="Medium" size="md">
                <TagList>
                    <Tag size="md">Label</Tag>
                    <Tag size="md" avatarSrc="https://i.pravatar.cc/40?img=2">Label</Tag>
                    <Tag size="md" dot>Label</Tag>
                </TagList>
            </TagGroup>
            <TagGroup label="Large" size="lg">
                <TagList>
                    <Tag size="lg">Label</Tag>
                    <Tag size="lg" avatarSrc="https://i.pravatar.cc/40?img=3">Label</Tag>
                    <Tag size="lg" dot>Label</Tag>
                </TagList>
            </TagGroup>
        </div>
    );
}

/* ── Close / X Demo ── */
function CloseDemo() {
    const [tags, setTags] = useState([
        { id: "1", label: "React" },
        { id: "2", label: "TypeScript" },
        { id: "3", label: "CSS Modules", dot: true },
        { id: "4", label: "Olivia", avatar: "https://i.pravatar.cc/40?img=5" },
    ]);

    return (
        <TagGroup label="Removable Tags">
            <TagList>
                {tags.map((t) => (
                    <Tag
                        key={t.id}
                        dot={t.dot}
                        avatarSrc={t.avatar}
                        onRemove={() => setTags((prev) => prev.filter((x) => x.id !== t.id))}
                    >
                        {t.label}
                    </Tag>
                ))}
                {tags.length === 0 && (
                    <span style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>
                        All tags removed. Refresh to reset.
                    </span>
                )}
            </TagList>
        </TagGroup>
    );
}

/* ── Count Demo ── */
function CountDemo() {
    return (
        <TagGroup label="Tags with Count">
            <TagList>
                <Tag count={5}>Design</Tag>
                <Tag count={12} avatarSrc="https://i.pravatar.cc/40?img=8">Olivia</Tag>
                <Tag count={3} dot>Active</Tag>
                <Tag count={99}>Notifications</Tag>
            </TagList>
        </TagGroup>
    );
}

/* ── Checkbox Demo ── */
function CheckboxDemo() {
    const [checked, setChecked] = useState<Record<string, boolean>>({
        react: true,
        vue: false,
        svelte: true,
        angular: false,
    });

    const toggle = (key: string) =>
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <TagGroup label="Select Frameworks">
            <TagList>
                <Tag checkbox checked={checked.react} onCheckedChange={() => toggle("react")}>React</Tag>
                <Tag checkbox checked={checked.vue} onCheckedChange={() => toggle("vue")}>Vue</Tag>
                <Tag checkbox checked={checked.svelte} onCheckedChange={() => toggle("svelte")}>Svelte</Tag>
                <Tag checkbox checked={checked.angular} onCheckedChange={() => toggle("angular")}>Angular</Tag>
            </TagList>
        </TagGroup>
    );
}

/* ── Checkbox + Close Demo ── */
function CheckboxCloseDemo() {
    const [tags, setTags] = useState([
        { id: "1", label: "Frontend", checked: true },
        { id: "2", label: "Backend", checked: false },
        { id: "3", label: "DevOps", checked: true },
    ]);

    const toggle = (id: string) =>
        setTags((prev) =>
            prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
        );

    return (
        <TagGroup label="Checkbox + Close">
            <TagList>
                {tags.map((t) => (
                    <Tag
                        key={t.id}
                        checkbox
                        checked={t.checked}
                        onCheckedChange={() => toggle(t.id)}
                        onRemove={() => setTags((prev) => prev.filter((x) => x.id !== t.id))}
                    >
                        {t.label}
                    </Tag>
                ))}
                {tags.length === 0 && (
                    <span style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>
                        All tags removed.
                    </span>
                )}
            </TagList>
        </TagGroup>
    );
}

/* ── Checkbox + Count Demo ── */
function CheckboxCountDemo() {
    const [checked, setChecked] = useState<Record<string, boolean>>({
        bugs: true,
        features: false,
        docs: true,
    });

    const toggle = (key: string) =>
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <TagGroup label="Checkbox + Count">
            <TagList>
                <Tag checkbox checked={checked.bugs} onCheckedChange={() => toggle("bugs")} count={14}>Bugs</Tag>
                <Tag checkbox checked={checked.features} onCheckedChange={() => toggle("features")} count={8}>Features</Tag>
                <Tag checkbox checked={checked.docs} onCheckedChange={() => toggle("docs")} count={3}>Docs</Tag>
            </TagList>
        </TagGroup>
    );
}

/* ── Avatar Tags Demo ── */
function AvatarDemo() {
    return (
        <TagGroup label="Team Members">
            <TagList>
                <Tag avatarSrc="https://i.pravatar.cc/40?img=10">Olivia Rhye</Tag>
                <Tag avatarSrc="https://i.pravatar.cc/40?img=12">Phoenix Baker</Tag>
                <Tag avatarSrc="https://i.pravatar.cc/40?img=15" onRemove={() => {}}>Lana Steiner</Tag>
                <Tag avatarSrc="https://i.pravatar.cc/40?img=20" count={3}>Demi Wilkinson</Tag>
            </TagList>
        </TagGroup>
    );
}

/* ── Disabled Demo ── */
function DisabledDemo() {
    return (
        <TagGroup label="Disabled">
            <TagList>
                <Tag disabled>Label</Tag>
                <Tag disabled dot>With Dot</Tag>
                <Tag disabled onRemove={() => {}}>Removable</Tag>
                <Tag disabled checkbox checked>Checked</Tag>
                <Tag disabled count={5}>Count</Tag>
            </TagList>
        </TagGroup>
    );
}

const tagProps = [
    { name: "children", type: "ReactNode", required: true, description: "Tag label content." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tag size." },
    { name: "dot", type: "boolean", default: "false", description: "Show a colored dot before the label." },
    { name: "avatarSrc", type: "string", description: "URL for an avatar image before the label." },
    { name: "count", type: "number", description: "Numeric count badge after the label." },
    { name: "onRemove", type: "() => void", description: "Callback when the X button is clicked. Shows the remove button." },
    { name: "checkbox", type: "boolean", default: "false", description: "Render as a checkbox tag." },
    { name: "checked", type: "boolean", description: "Controlled checked state (checkbox mode)." },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when checkbox state changes." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the tag." },
    { name: "className", type: "string", description: "Additional CSS class." },
];

export default function TagPage() {
    return (
        <div>
            <DocHeader
                title="Tag"
                description="Tags help users categorize, filter, and organize content. Supports close, count, checkbox, avatar, and dot variants."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Tag" },
                ]}
            />

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Tags come in three sizes: sm, md, and lg. Each supports dot, avatar, and text.</p>

            <ComponentPreview
                title="Small / Medium / Large"
                code={`<TagGroup label="Small" size="sm">
    <TagList>
        <Tag size="sm">Label</Tag>
        <Tag size="sm" avatarSrc="/avatar.jpg">Label</Tag>
        <Tag size="sm" dot>Label</Tag>
    </TagList>
</TagGroup>

<TagGroup label="Medium" size="md">
    <TagList>
        <Tag size="md">Label</Tag>
        <Tag size="md" avatarSrc="/avatar.jpg">Label</Tag>
        <Tag size="md" dot>Label</Tag>
    </TagList>
</TagGroup>

<TagGroup label="Large" size="lg">
    <TagList>
        <Tag size="lg">Label</Tag>
        <Tag size="lg" avatarSrc="/avatar.jpg">Label</Tag>
        <Tag size="lg" dot>Label</Tag>
    </TagList>
</TagGroup>`}
            >
                <SizesDemo />
            </ComponentPreview>

            {/* ── Close / Removable ── */}
            <h2 style={sectionHeading}>Close / Removable</h2>
            <p style={sectionDesc}>Pass an onRemove callback to show the X button. Click to remove tags.</p>

            <ComponentPreview
                title="Removable Tags"
                code={`const [tags, setTags] = useState([
    { id: "1", label: "React" },
    { id: "2", label: "TypeScript" },
    { id: "3", label: "CSS Modules", dot: true },
]);

<TagGroup label="Removable Tags">
    <TagList>
        {tags.map((t) => (
            <Tag
                key={t.id}
                dot={t.dot}
                onRemove={() => setTags(prev => prev.filter(x => x.id !== t.id))}
            >
                {t.label}
            </Tag>
        ))}
    </TagList>
</TagGroup>`}
            >
                <CloseDemo />
            </ComponentPreview>

            {/* ── Count ── */}
            <h2 style={sectionHeading}>Count</h2>
            <p style={sectionDesc}>Add a numeric count badge to any tag with the count prop.</p>

            <ComponentPreview
                title="Tags with Count"
                code={`<TagGroup label="Tags with Count">
    <TagList>
        <Tag count={5}>Design</Tag>
        <Tag count={12} avatarSrc="/avatar.jpg">Olivia</Tag>
        <Tag count={3} dot>Active</Tag>
        <Tag count={99}>Notifications</Tag>
    </TagList>
</TagGroup>`}
            >
                <CountDemo />
            </ComponentPreview>

            {/* ── Checkbox ── */}
            <h2 style={sectionHeading}>Checkbox</h2>
            <p style={sectionDesc}>Enable checkbox mode for selectable tags with checked/unchecked states.</p>

            <ComponentPreview
                title="Checkbox Tags"
                code={`const [checked, setChecked] = useState({ react: true, vue: false });

<TagGroup label="Select Frameworks">
    <TagList>
        <Tag checkbox checked={checked.react} onCheckedChange={() => toggle("react")}>
            React
        </Tag>
        <Tag checkbox checked={checked.vue} onCheckedChange={() => toggle("vue")}>
            Vue
        </Tag>
    </TagList>
</TagGroup>`}
            >
                <CheckboxDemo />
            </ComponentPreview>

            {/* ── Checkbox + Close ── */}
            <ComponentPreview
                title="Checkbox + Close"
                code={`<Tag
    checkbox
    checked={tag.checked}
    onCheckedChange={() => toggle(tag.id)}
    onRemove={() => remove(tag.id)}
>
    {tag.label}
</Tag>`}
            >
                <CheckboxCloseDemo />
            </ComponentPreview>

            {/* ── Checkbox + Count ── */}
            <ComponentPreview
                title="Checkbox + Count"
                code={`<Tag checkbox checked={checked.bugs} onCheckedChange={() => toggle("bugs")} count={14}>
    Bugs
</Tag>
<Tag checkbox checked={checked.features} onCheckedChange={() => toggle("features")} count={8}>
    Features
</Tag>`}
            >
                <CheckboxCountDemo />
            </ComponentPreview>

            {/* ── Avatar ── */}
            <h2 style={sectionHeading}>Avatar Tags</h2>
            <p style={sectionDesc}>Display user avatars inside tags. Combine with count or onRemove.</p>

            <ComponentPreview
                title="Team Members"
                code={`<TagGroup label="Team Members">
    <TagList>
        <Tag avatarSrc="/olivia.jpg">Olivia Rhye</Tag>
        <Tag avatarSrc="/phoenix.jpg">Phoenix Baker</Tag>
        <Tag avatarSrc="/lana.jpg" onRemove={() => {}}>Lana Steiner</Tag>
        <Tag avatarSrc="/demi.jpg" count={3}>Demi Wilkinson</Tag>
    </TagList>
</TagGroup>`}
            >
                <AvatarDemo />
            </ComponentPreview>

            {/* ── Disabled ── */}
            <h2 style={sectionHeading}>Disabled</h2>
            <p style={sectionDesc}>Disabled tags are visually dimmed and non-interactive.</p>

            <ComponentPreview
                title="Disabled Tags"
                code={`<Tag disabled>Label</Tag>
<Tag disabled dot>With Dot</Tag>
<Tag disabled onRemove={() => {}}>Removable</Tag>
<Tag disabled checkbox checked>Checked</Tag>
<Tag disabled count={5}>Count</Tag>`}
            >
                <DisabledDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the Tag components and compose them together.</p>

            <CodeBlock
                code={`import { Tag, TagGroup, TagList } from "@/components/ui/Tag";

export default function Example() {
    return (
        <TagGroup label="Technologies">
            <TagList>
                <Tag>React</Tag>
                <Tag dot>Active</Tag>
                <Tag avatarSrc="/avatar.jpg">Olivia</Tag>
                <Tag count={5}>Notifications</Tag>
                <Tag onRemove={() => handleRemove("id")}>Removable</Tag>
                <Tag checkbox checked={true} onCheckedChange={setChecked}>
                    Selectable
                </Tag>
            </TagList>
        </TagGroup>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable props={tagProps} />
        </div>
    );
}
