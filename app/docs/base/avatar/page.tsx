"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar";

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

/* ── Sizes ── */
function SizesDemo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Avatar src="https://i.pravatar.cc/80?u=a1" alt="User" size="xs" />
            <Avatar src="https://i.pravatar.cc/80?u=a2" alt="User" size="sm" />
            <Avatar src="https://i.pravatar.cc/80?u=a3" alt="User" size="md" />
            <Avatar src="https://i.pravatar.cc/80?u=a4" alt="User" size="lg" />
            <Avatar src="https://i.pravatar.cc/80?u=a5" alt="User" size="xl" />
            <Avatar src="https://i.pravatar.cc/80?u=a6" alt="User" size="2xl" />
        </div>
    );
}

/* ── Fallback ── */
function FallbackDemo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Avatar alt="Olivia Rhye" size="md" />
            <Avatar fallback="JD" size="md" />
            <Avatar size="md" />
        </div>
    );
}

/* ── Shapes ── */
function ShapesDemo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Avatar src="https://i.pravatar.cc/80?u=s1" alt="Circle" size="lg" shape="circle" />
            <Avatar src="https://i.pravatar.cc/80?u=s2" alt="Rounded" size="lg" shape="rounded" />
        </div>
    );
}

/* ── Status ── */
function StatusDemo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Avatar src="https://i.pravatar.cc/80?u=st1" alt="Online" size="lg" status="online" />
            <Avatar src="https://i.pravatar.cc/80?u=st2" alt="Away" size="lg" status="away" />
            <Avatar src="https://i.pravatar.cc/80?u=st3" alt="Busy" size="lg" status="busy" />
            <Avatar src="https://i.pravatar.cc/80?u=st4" alt="Offline" size="lg" status="offline" />
        </div>
    );
}

/* ── Group ── */
function GroupDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <AvatarGroup size="md">
                <Avatar src="https://i.pravatar.cc/80?u=g1" alt="User 1" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g2" alt="User 2" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g3" alt="User 3" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g4" alt="User 4" size="md" />
            </AvatarGroup>
            <AvatarGroup size="md" max={3}>
                <Avatar src="https://i.pravatar.cc/80?u=g5" alt="User 1" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g6" alt="User 2" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g7" alt="User 3" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g8" alt="User 4" size="md" />
                <Avatar src="https://i.pravatar.cc/80?u=g9" alt="User 5" size="md" />
            </AvatarGroup>
        </div>
    );
}

const avatarProps = [
    { name: "src", type: "string", description: "Image URL." },
    { name: "alt", type: "string", description: "Alt text (also used for initials fallback)." },
    { name: "fallback", type: "string", description: "Custom fallback text (overrides initials)." },
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Avatar size." },
    { name: "shape", type: '"circle" | "rounded"', default: '"circle"', description: "Avatar shape." },
    { name: "status", type: '"online" | "offline" | "away" | "busy"', description: "Status indicator dot." },
];

const groupPropsData = [
    { name: "max", type: "number", description: "Max visible avatars. Overflow shows +N." },
    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Size for overflow indicator." },
];

export default function AvatarPage() {
    return (
        <div>
            <DocHeader
                title="Avatar"
                description="Display user profile images with fallback initials, status indicators, and grouping support."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Avatar" },
                ]}
            />

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Six sizes from xs (24px) to 2xl (72px).</p>
            <ComponentPreview title="Sizes" code={`<Avatar src="..." alt="User" size="xs" />\n<Avatar src="..." alt="User" size="sm" />\n<Avatar src="..." alt="User" size="md" />\n<Avatar src="..." alt="User" size="lg" />\n<Avatar src="..." alt="User" size="xl" />\n<Avatar src="..." alt="User" size="2xl" />`}>
                <SizesDemo />
            </ComponentPreview>

            {/* ── Fallback ── */}
            <h2 style={sectionHeading}>Fallback</h2>
            <p style={sectionDesc}>When no image is provided, initials from alt text or a custom fallback are shown.</p>
            <ComponentPreview title="Fallback" code={`<Avatar alt="Olivia Rhye" size="md" />\n<Avatar fallback="JD" size="md" />\n<Avatar size="md" />`}>
                <FallbackDemo />
            </ComponentPreview>

            {/* ── Shapes ── */}
            <h2 style={sectionHeading}>Shapes</h2>
            <p style={sectionDesc}>Circle (default) and rounded square shapes.</p>
            <ComponentPreview title="Shapes" code={`<Avatar src="..." size="lg" shape="circle" />\n<Avatar src="..." size="lg" shape="rounded" />`}>
                <ShapesDemo />
            </ComponentPreview>

            {/* ── Status ── */}
            <h2 style={sectionHeading}>Status Indicator</h2>
            <p style={sectionDesc}>Show online, away, busy, or offline status with a colored dot.</p>
            <ComponentPreview title="Status" code={`<Avatar src="..." size="lg" status="online" />\n<Avatar src="..." size="lg" status="away" />\n<Avatar src="..." size="lg" status="busy" />\n<Avatar src="..." size="lg" status="offline" />`}>
                <StatusDemo />
            </ComponentPreview>

            {/* ── Group ── */}
            <h2 style={sectionHeading}>Avatar Group</h2>
            <p style={sectionDesc}>Stack avatars with overlap. Use max to limit visible count with a +N overflow.</p>
            <ComponentPreview title="Group" code={`<AvatarGroup size="md">\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n</AvatarGroup>\n\n<AvatarGroup size="md" max={3}>\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n    <Avatar src="..." size="md" />\n</AvatarGroup>`}>
                <GroupDemo />
            </ComponentPreview>

            {/* ── Usage ── */}
            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import Avatar and AvatarGroup.</p>
            <CodeBlock
                code={`import { Avatar, AvatarGroup } from "@/components/ui/Avatar";

// Basic
<Avatar src="/avatar.jpg" alt="Olivia Rhye" size="md" />

// Fallback
<Avatar alt="Olivia Rhye" size="md" />

// Status
<Avatar src="/avatar.jpg" size="lg" status="online" />

// Group with overflow
<AvatarGroup size="md" max={3}>
    <Avatar src="/a1.jpg" size="md" />
    <Avatar src="/a2.jpg" size="md" />
    <Avatar src="/a3.jpg" size="md" />
    <Avatar src="/a4.jpg" size="md" />
</AvatarGroup>`}
                language="tsx"
            />

            {/* ── Props ── */}
            <h2 style={sectionHeading}>Avatar Props</h2>
            <PropsTable props={avatarProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>AvatarGroup Props</h2>
            <PropsTable props={groupPropsData} />
        </div>
    );
}
