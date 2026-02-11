"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { Badge } from "@/components/ui/Badge";

export default function BadgePage() {
    return (
        <div>
            <DocHeader
                title="Badge"
                description="Badges are used to highlight status, categories, or labels. Available in multiple semantic variants."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Badge" },
                ]}
            />

            <ComponentPreview
                title="Variants"
                description="Semantic badge variants for different contexts."
                code={`<Badge variant="section">Section</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>`}
            >
                <Badge variant="section">Section</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
            </ComponentPreview>

            <ComponentPreview
                title="With Dot"
                description="Badges can include a status dot indicator."
                code={`<Badge variant="accent" dot>Active</Badge>
<Badge variant="success" dot>Online</Badge>
<Badge variant="error" dot>Offline</Badge>`}
            >
                <Badge variant="accent" dot>Active</Badge>
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="error" dot>Offline</Badge>
            </ComponentPreview>

            <ComponentPreview
                title="Sizes"
                description="Three size options for different contexts."
                code={`<Badge variant="accent" size="sm">Small</Badge>
<Badge variant="accent" size="md">Medium</Badge>
<Badge variant="accent" size="lg">Large</Badge>`}
            >
                <Badge variant="accent" size="sm">Small</Badge>
                <Badge variant="accent" size="md">Medium</Badge>
                <Badge variant="accent" size="lg">Large</Badge>
            </ComponentPreview>

            <CodeBlock
                code={`import { Badge } from "@/components/ui/Badge";

<Badge variant="accent" dot>
    Active
</Badge>`}
                language="tsx"
            />

            <PropsTable
                props={[
                    { name: "variant", type: '"section" | "accent" | "success" | "error" | "warning" | "info"', default: '"section"', description: "Visual style variant" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Badge size" },
                    { name: "dot", type: "boolean", default: "false", description: "Show status dot indicator" },
                    { name: "children", type: "ReactNode", default: "—", description: "Badge content" },
                ]}
            />
        </div>
    );
}
