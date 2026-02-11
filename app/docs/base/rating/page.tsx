"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Rating, RatingBadge } from "@/components/ui/Rating";

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

function DefaultDemo() {
    return <Rating defaultValue={3} />;
}

function SizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <Rating defaultValue={4} size="sm" />
            <Rating defaultValue={4} size="md" />
            <Rating defaultValue={4} size="lg" />
        </div>
    );
}

function ReadOnlyDemo() {
    return <Rating value={4} readOnly />;
}

function ControlledDemo() {
    const [val, setVal] = useState(2);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
            <Rating value={val} onChange={setVal} size="lg" />
            <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>Selected: {val} star{val !== 1 ? "s" : ""}</p>
        </div>
    );
}

function BadgeSizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <RatingBadge value={4.5} count={128} size="sm" />
            <RatingBadge value={4.5} count={128} size="md" />
            <RatingBadge value={4.5} count={128} size="lg" />
        </div>
    );
}

function BadgeVariantsDemo() {
    return (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <RatingBadge value={5.0} count={42} />
            <RatingBadge value={3.8} count={256} />
            <RatingBadge value={4.2} />
        </div>
    );
}

const ratingProps = [
    { name: "value", type: "number", description: "Controlled rating value." },
    { name: "defaultValue", type: "number", default: "0", description: "Initial value (uncontrolled)." },
    { name: "max", type: "number", default: "5", description: "Maximum number of stars." },
    { name: "onChange", type: "(value: number) => void", description: "Called on value change." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Star size." },
    { name: "readOnly", type: "boolean", default: "false", description: "Disable interaction." },
];

const badgeProps = [
    { name: "value", type: "number", description: "Rating value (required)." },
    { name: "max", type: "number", default: "5", description: "Maximum stars." },
    { name: "count", type: "number", description: "Number of reviews." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Badge size." },
];

export default function RatingPage() {
    return (
        <div>
            <DocHeader
                title="Rating"
                description="Interactive star rating and read-only rating badge with review counts."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Rating" },
                ]}
            />

            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Interactive star rating with click and hover.</p>
            <ComponentPreview title="Default" code={`<Rating defaultValue={3} />`}>
                <DefaultDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>Three sizes: sm, md, lg.</p>
            <ComponentPreview title="Sizes" code={`<Rating defaultValue={4} size="sm" />\n<Rating defaultValue={4} size="md" />\n<Rating defaultValue={4} size="lg" />`}>
                <SizesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Read Only</h2>
            <p style={sectionDesc}>Non-interactive display rating.</p>
            <ComponentPreview title="Read Only" code={`<Rating value={4} readOnly />`}>
                <ReadOnlyDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Controlled</h2>
            <p style={sectionDesc}>Controlled rating with external state.</p>
            <ComponentPreview title="Controlled" code={`const [val, setVal] = useState(2);\n<Rating value={val} onChange={setVal} size="lg" />`}>
                <ControlledDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Rating Badge</h2>
            <p style={sectionDesc}>Compact badge showing rating with optional review count.</p>
            <ComponentPreview title="Badge Variants" code={`<RatingBadge value={5.0} count={42} />\n<RatingBadge value={3.8} count={256} />\n<RatingBadge value={4.2} />`}>
                <BadgeVariantsDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Badge Sizes</h2>
            <p style={sectionDesc}>Three badge sizes.</p>
            <ComponentPreview title="Badge Sizes" code={`<RatingBadge value={4.5} count={128} size="sm" />\n<RatingBadge value={4.5} count={128} size="md" />\n<RatingBadge value={4.5} count={128} size="lg" />`}>
                <BadgeSizesDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import Rating and RatingBadge.</p>
            <CodeBlock
                code={`import { Rating, RatingBadge } from "@/components/ui/Rating";

// Interactive
<Rating defaultValue={3} size="md" />

// Controlled
const [val, setVal] = useState(2);
<Rating value={val} onChange={setVal} />

// Read-only
<Rating value={4} readOnly />

// Badge
<RatingBadge value={4.5} count={128} size="md" />`}
                language="tsx"
            />

            <h2 style={sectionHeading}>Rating Props</h2>
            <PropsTable props={ratingProps} />

            <h2 style={{ ...sectionHeading, marginTop: 32 }}>RatingBadge Props</h2>
            <PropsTable props={badgeProps} />
        </div>
    );
}
