"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { BadgeGroup } from "@/components/ui/BadgeGroup";

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
    gap: 12,
};

export default function BadgeGroupPage() {
    return (
        <div>
            <DocHeader
                title="Badge Group"
                description="Banner-style notification badges with an inner addon pill and message text. Available in five colors, two themes, leading/trailing alignment, and three sizes."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Badge Group" },
                ]}
            />

            {/* ── Modern Theme — Leading ── */}
            <h2 style={sectionHeading}>Modern — Leading</h2>
            <p style={sectionDesc}>The addon badge appears before the message text. Solid inner badge with a subtle tinted container.</p>

            <ComponentPreview
                title="Leading — Gray"
                code={`<BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="lg">
    We've just released a new feature
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="lg">
                        We've just released a new feature
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Leading — Brand"
                code={`<BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
    We've just released a new feature
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
                        We've just released a new feature
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Leading — Error"
                code={`<BadgeGroup addonText="Alert" color="error" theme="modern" align="leading" size="md">
    Something went wrong, please try again
</BadgeGroup>
<BadgeGroup addonText="Alert" color="error" theme="modern" align="leading" size="lg">
    Something went wrong, please try again
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Alert" color="error" theme="modern" align="leading" size="md">
                        Something went wrong, please try again
                    </BadgeGroup>
                    <BadgeGroup addonText="Alert" color="error" theme="modern" align="leading" size="lg">
                        Something went wrong, please try again
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Leading — Warning"
                code={`<BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="md">
    Just to let you know this might be a problem
</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="lg">
    Just to let you know this might be a problem
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="md">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                    <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="lg">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Leading — Success"
                code={`<BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="md">
    You've updated your profile and details
</BadgeGroup>
<BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="lg">
    You've updated your profile and details
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="md">
                        You've updated your profile and details
                    </BadgeGroup>
                    <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="lg">
                        You've updated your profile and details
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            {/* ── Modern Theme — Trailing ── */}
            <h2 style={sectionHeading}>Modern — Trailing</h2>
            <p style={sectionDesc}>The addon badge appears after the message text.</p>

            <ComponentPreview
                title="Trailing — Gray"
                code={`<BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="lg">
    We've just released a new feature
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="lg">
                        We've just released a new feature
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Trailing — Brand"
                code={`<BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="lg">
    We've just released a new feature
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="lg">
                        We've just released a new feature
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Trailing — Error"
                code={`<BadgeGroup addonText="Alert" color="error" theme="modern" align="trailing" size="md">
    Something went wrong, please try again
</BadgeGroup>
<BadgeGroup addonText="Alert" color="error" theme="modern" align="trailing" size="lg">
    Something went wrong, please try again
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Alert" color="error" theme="modern" align="trailing" size="md">
                        Something went wrong, please try again
                    </BadgeGroup>
                    <BadgeGroup addonText="Alert" color="error" theme="modern" align="trailing" size="lg">
                        Something went wrong, please try again
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Trailing — Warning"
                code={`<BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="md">
    Just to let you know this might be a problem
</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="lg">
    Just to let you know this might be a problem
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="md">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                    <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="lg">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            <ComponentPreview
                title="Trailing — Success"
                code={`<BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="md">
    You've updated your profile and details
</BadgeGroup>
<BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="lg">
    You've updated your profile and details
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="md">
                        You've updated your profile and details
                    </BadgeGroup>
                    <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="lg">
                        You've updated your profile and details
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            {/* ── Light Theme — Leading ── */}
            <h2 style={sectionHeading}>Light — Leading</h2>
            <p style={sectionDesc}>Lighter, more subtle inner badge styling. The addon uses a tinted background instead of a solid fill.</p>

            <ComponentPreview
                title="Light Leading — All Colors"
                code={`<BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="Alert" color="error" theme="light" align="leading" size="md">
    Something went wrong, please try again
</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="md">
    Just to let you know this might be a problem
</BadgeGroup>
<BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="md">
    You've updated your profile and details
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="Alert" color="error" theme="light" align="leading" size="md">
                        Something went wrong, please try again
                    </BadgeGroup>
                    <BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="md">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                    <BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="md">
                        You've updated your profile and details
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            {/* ── Light Theme — Trailing ── */}
            <h2 style={sectionHeading}>Light — Trailing</h2>
            <p style={sectionDesc}>Light theme with the addon badge positioned after the message.</p>

            <ComponentPreview
                title="Light Trailing — All Colors"
                code={`<BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="Alert" color="error" theme="light" align="trailing" size="md">
    Something went wrong, please try again
</BadgeGroup>
<BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="md">
    Just to let you know this might be a problem
</BadgeGroup>
<BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="md">
    You've updated your profile and details
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="Alert" color="error" theme="light" align="trailing" size="md">
                        Something went wrong, please try again
                    </BadgeGroup>
                    <BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="md">
                        Just to let you know this might be a problem
                    </BadgeGroup>
                    <BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="md">
                        You've updated your profile and details
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes available: sm, md, and lg.</p>

            <ComponentPreview
                title="All Sizes — Brand Modern Leading"
                code={`<BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="sm">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
    We've just released a new feature
</BadgeGroup>
<BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
    We've just released a new feature
</BadgeGroup>`}
            >
                <div style={colWrap}>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="sm">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
                        We've just released a new feature
                    </BadgeGroup>
                    <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
                        We've just released a new feature
                    </BadgeGroup>
                </div>
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import the BadgeGroup component and configure color, theme, alignment, and size.</p>

            <CodeBlock
                code={`import { BadgeGroup } from "omnira-ui/BadgeGroup";

export default function Notifications() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <BadgeGroup
                addonText="New feature"
                color="brand"
                theme="modern"
                align="leading"
                size="md"
            >
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup
                addonText="Warning"
                color="warning"
                theme="modern"
                align="trailing"
                size="md"
            >
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup
                addonText="Success"
                color="success"
                theme="light"
                align="trailing"
                size="lg"
                onClick={() => console.log("clicked")}
            >
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
}`}
                language="tsx"
            />

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "children", type: "ReactNode", description: "Message text displayed in the badge group" },
                    { name: "addonText", type: "string", description: "Text inside the inner addon pill badge" },
                    { name: "color", type: '"gray" | "brand" | "error" | "warning" | "success"', default: '"gray"', description: "Color variant for both the container and addon badge" },
                    { name: "theme", type: '"modern" | "light"', default: '"modern"', description: "Modern uses a solid addon badge, light uses a subtle tinted addon" },
                    { name: "align", type: '"leading" | "trailing"', default: '"leading"', description: "Position of the addon badge — before or after the message" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Overall badge group size" },
                    { name: "icon", type: "ReactNode", default: "undefined", description: "Optional icon inside the addon badge" },
                    { name: "onClick", type: "() => void", default: "undefined", description: "Click handler — adds pointer cursor when provided" },
                ]}
            />
        </div>
    );
}
