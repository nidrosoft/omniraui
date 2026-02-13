"use client";

import { FolderOpen, SearchNormal1, DocumentText, AddCircle, Cloud } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

/* ── Demo 01: Simple Empty State ── */

function EmptyStateSimpleDemo() {
    return (
        <EmptyState
            icon={<FolderOpen size={24} variant="Bulk" color="currentColor" />}
            title="No projects yet"
            description="Get started by creating your first project. It only takes a few seconds."
            actions={
                <Button variant="primary" size="sm" icon={<AddCircle size={16} variant="Bulk" color="currentColor" />}>
                    New Project
                </Button>
            }
        />
    );
}

const simpleCode = `import { FolderOpen, AddCircle } from "iconsax-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export function EmptyStateSimpleDemo() {
    return (
        <EmptyState
            icon={<FolderOpen size={24} variant="Bulk" color="currentColor" />}
            title="No projects yet"
            description="Get started by creating your first project. It only takes a few seconds."
            actions={
                <Button variant="primary" size="sm" icon={<AddCircle size={16} variant="Bulk" color="currentColor" />}>
                    New Project
                </Button>
            }
        />
    );
}`;

/* ── Demo 02: Search Empty State ── */

function EmptyStateSearchDemo() {
    return (
        <EmptyState
            icon={<SearchNormal1 size={24} variant="Bulk" color="currentColor" />}
            title="No results found"
            description="We couldn't find anything matching your search. Try adjusting your filters or search terms."
            actions={
                <>
                    <Button variant="secondary" size="sm">Clear Filters</Button>
                    <Button variant="ghost" size="sm">Browse All</Button>
                </>
            }
        />
    );
}

const searchCode = `import { SearchNormal1 } from "iconsax-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export function EmptyStateSearchDemo() {
    return (
        <EmptyState
            icon={<SearchNormal1 size={24} variant="Bulk" color="currentColor" />}
            title="No results found"
            description="We couldn't find anything matching your search. Try adjusting your filters or search terms."
            actions={
                <>
                    <Button variant="secondary" size="sm">Clear Filters</Button>
                    <Button variant="ghost" size="sm">Browse All</Button>
                </>
            }
        />
    );
}`;

/* ── Demo 03: Accent Icon ── */

function EmptyStateAccentDemo() {
    return (
        <EmptyState
            icon={<Cloud size={24} variant="Bulk" color="currentColor" />}
            iconAccent
            title="Upload your files"
            description="Drag and drop files here, or click the button below to browse your computer."
            actions={
                <Button variant="primary" size="sm" icon={<DocumentText size={16} variant="Bulk" color="currentColor" />}>
                    Browse Files
                </Button>
            }
        />
    );
}

const accentCode = `import { Cloud, DocumentText } from "iconsax-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export function EmptyStateAccentDemo() {
    return (
        <EmptyState
            icon={<Cloud size={24} variant="Bulk" color="currentColor" />}
            iconAccent
            title="Upload your files"
            description="Drag and drop files here, or click the button below to browse your computer."
            actions={
                <Button variant="primary" size="sm" icon={<DocumentText size={16} variant="Bulk" color="currentColor" />}>
                    Browse Files
                </Button>
            }
        />
    );
}`;

/* ── Props ── */

const emptyStateProps = [
    { name: "icon", type: "React.ReactNode", description: "Icon displayed above the title" },
    { name: "iconAccent", type: "boolean", default: "false", description: "Use accent (lime) styling for the icon wrapper" },
    { name: "title", type: "string", description: "Heading text for the empty state" },
    { name: "description", type: "string", description: "Supporting description text" },
    { name: "actions", type: "React.ReactNode", description: "Action buttons rendered below the description" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function EmptyStatePage() {
    return (
        <div>
            <DocHeader
                title="Empty States"
                description="Placeholder components for when there is no data to display. Includes icon, title, description, and action buttons to guide users."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Empty States" },
                ]}
            />

            <ComponentPreview
                title="Empty State — Simple"
                description="Basic empty state with icon, title, description, and a primary action button."
                code={simpleCode}
            >
                <EmptyStateSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Empty State — Search Results"
                description="Empty state for search or filter results with two action buttons."
                code={searchCode}
            >
                <EmptyStateSearchDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Empty State — Accent Icon"
                description="Empty state with accent-colored icon wrapper for upload or creation prompts."
                code={accentCode}
            >
                <EmptyStateAccentDemo />
            </ComponentPreview>

            <PropsTable title="EmptyState" props={emptyStateProps} />
        </div>
    );
}
