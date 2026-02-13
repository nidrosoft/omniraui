"use client";

import { Setting2, ExportSquare, AddCircle } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/* ── Demo 01: Simple Page Header ── */

function PageHeaderSimpleDemo() {
    return (
        <PageHeader
            title="Team Members"
            description="Manage your team members and their account permissions here."
            actions={
                <>
                    <Button variant="secondary" size="sm" icon={<ExportSquare size={16} variant="Bulk" color="currentColor" />}>
                        Export
                    </Button>
                    <Button variant="primary" size="sm" icon={<AddCircle size={16} variant="Bulk" color="currentColor" />}>
                        Add Member
                    </Button>
                </>
            }
        />
    );
}

const simpleCode = `import { ExportSquare, AddCircle } from "iconsax-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export function PageHeaderSimpleDemo() {
    return (
        <PageHeader
            title="Team Members"
            description="Manage your team members and their account permissions here."
            actions={
                <>
                    <Button variant="secondary" size="sm" icon={<ExportSquare size={16} variant="Bulk" color="currentColor" />}>
                        Export
                    </Button>
                    <Button variant="primary" size="sm" icon={<AddCircle size={16} variant="Bulk" color="currentColor" />}>
                        Add Member
                    </Button>
                </>
            }
        />
    );
}`;

/* ── Demo 02: With Breadcrumbs & Badge ── */

function PageHeaderBreadcrumbDemo() {
    return (
        <PageHeader
            breadcrumbs={[
                { label: "Dashboard", href: "#" },
                { label: "Settings", href: "#" },
                { label: "General" },
            ]}
            title="General Settings"
            description="Configure your workspace preferences and account details."
            badge={<Badge variant="accent" size="sm">Pro Plan</Badge>}
            actions={
                <Button variant="secondary" size="sm" icon={<Setting2 size={16} variant="Bulk" color="currentColor" />}>
                    Settings
                </Button>
            }
        />
    );
}

const breadcrumbCode = `import { Setting2 } from "iconsax-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function PageHeaderBreadcrumbDemo() {
    return (
        <PageHeader
            breadcrumbs={[
                { label: "Dashboard", href: "#" },
                { label: "Settings", href: "#" },
                { label: "General" },
            ]}
            title="General Settings"
            description="Configure your workspace preferences and account details."
            badge={<Badge variant="accent" size="sm">Pro Plan</Badge>}
            actions={
                <Button variant="secondary" size="sm" icon={<Setting2 size={16} variant="Bulk" color="currentColor" />}>
                    Settings
                </Button>
            }
        />
    );
}`;

/* ── Demo 03: Minimal ── */

function PageHeaderMinimalDemo() {
    return (
        <PageHeader
            title="Analytics"
            description="Track your website performance and user engagement metrics."
        />
    );
}

const minimalCode = `import { PageHeader } from "@/components/ui/PageHeader";

export function PageHeaderMinimalDemo() {
    return (
        <PageHeader
            title="Analytics"
            description="Track your website performance and user engagement metrics."
        />
    );
}`;

/* ── Props ── */

const pageHeaderProps = [
    { name: "title", type: "string", description: "Main heading text" },
    { name: "description", type: "string", description: "Supporting description text below the title" },
    { name: "breadcrumbs", type: "{ label: string; href?: string }[]", description: "Breadcrumb navigation items" },
    { name: "badge", type: "React.ReactNode", description: "Badge or tag displayed next to the title" },
    { name: "actions", type: "React.ReactNode", description: "Action buttons on the right side" },
    { name: "tabs", type: "React.ReactNode", description: "Tab navigation rendered below the title area" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function PageHeaderPage() {
    return (
        <div>
            <DocHeader
                title="Page Headers"
                description="Top-level page headers with title, description, breadcrumbs, badges, and action buttons. Used at the top of dashboard pages and settings screens."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Page Headers" },
                ]}
            />

            <ComponentPreview
                title="Page Header — With Actions"
                description="Page header with title, description, and trailing action buttons."
                code={simpleCode}
            >
                <PageHeaderSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Page Header — Breadcrumbs & Badge"
                description="Page header with breadcrumb navigation, title badge, and settings action."
                code={breadcrumbCode}
            >
                <PageHeaderBreadcrumbDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Page Header — Minimal"
                description="Simple page header with just title and description."
                code={minimalCode}
            >
                <PageHeaderMinimalDemo />
            </ComponentPreview>

            <PropsTable title="PageHeader" props={pageHeaderProps} />
        </div>
    );
}
