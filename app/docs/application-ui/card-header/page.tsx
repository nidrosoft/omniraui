"use client";

import { Setting2, More, People, Chart, Edit2, Copy, Trash, Link1, ExportSquare } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import previewStyles from "@/components/docs/ComponentPreview.module.css";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/Dropdown";

/* ── Demo 01: Badge + Actions + Dropdown ── */

function CardHeaderBadgeActionsDemo() {
    return (
        <CardHeader
            title="Team members"
            description="Manage your team members and their account permissions here."
            badge={<Badge variant="accent" size="sm">10/20 seats</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Tertiary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="primary" size="sm">Primary</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Copy size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}

const badgeActionsCode = `import { More, Edit2, Copy, Trash } from "iconsax-react";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/Dropdown";

export function CardHeaderBadgeActionsDemo() {
    return (
        <CardHeader
            title="Team members"
            description="Manage your team members and their account permissions here."
            badge={<Badge variant="accent" size="sm">10/20 seats</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Tertiary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="primary" size="sm">Primary</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Copy size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}`;

/* ── Demo 02: Badge + Export Actions + Dropdown ── */

function CardHeaderExportActionsDemo() {
    return (
        <CardHeader
            title="Projects"
            description="Browse and manage all active projects in your workspace."
            badge={<Badge variant="info" size="sm">12 active</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Filters</Button>
                    <Button variant="secondary" size="sm" icon={<ExportSquare size={16} variant="Bulk" color="currentColor" />}>Export</Button>
                    <Button variant="primary" size="sm">New Project</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Link1 size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}

const exportActionsCode = `import { More, Edit2, Link1, Trash, ExportSquare } from "iconsax-react";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/Dropdown";

export function CardHeaderExportActionsDemo() {
    return (
        <CardHeader
            title="Projects"
            description="Browse and manage all active projects in your workspace."
            badge={<Badge variant="info" size="sm">12 active</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Filters</Button>
                    <Button variant="secondary" size="sm" icon={<ExportSquare size={16} variant="Bulk" color="currentColor" />}>Export</Button>
                    <Button variant="primary" size="sm">New Project</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Link1 size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}`;

/* ── Demo 03: Avatar + Badge + Actions + Dropdown ── */

function CardHeaderAvatarDemo() {
    return (
        <CardHeader
            avatar={<Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Olivia Rhye" size="xl" />}
            title="Olivia Rhye"
            description="olivia@omnira.space"
            badge={<Badge variant="accent" size="sm">New user</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Tertiary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="primary" size="sm">Primary</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Copy size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}

const avatarCode = `import { More, Edit2, Copy, Trash } from "iconsax-react";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/Dropdown";

export function CardHeaderAvatarDemo() {
    return (
        <CardHeader
            avatar={<Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Olivia Rhye" size="xl" />}
            title="Olivia Rhye"
            description="olivia@omnira.space"
            badge={<Badge variant="accent" size="sm">New user</Badge>}
            divider
            actions={
                <>
                    <Button variant="ghost" size="sm">Tertiary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="primary" size="sm">Primary</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bold" color="currentColor" />} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem icon={<Edit2 size={16} color="currentColor" />}>Edit</DropdownMenuItem>
                            <DropdownMenuItem icon={<Copy size={16} color="currentColor" />}>Copy link</DropdownMenuItem>
                            <DropdownMenuItem icon={<Trash size={16} color="currentColor" />} destructive>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            }
        />
    );
}`;

/* ── Demo 04: Simple Card Header ── */

function CardHeaderSimpleDemo() {
    return (
        <CardHeader
            title="Team Members"
            description="Manage and invite team members to your workspace."
            actions={
                <Button variant="secondary" size="sm">
                    Invite
                </Button>
            }
        />
    );
}

const simpleCode = `import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";

export function CardHeaderSimpleDemo() {
    return (
        <CardHeader
            title="Team Members"
            description="Manage and invite team members to your workspace."
            actions={
                <Button variant="secondary" size="sm">
                    Invite
                </Button>
            }
        />
    );
}`;

/* ── Demo 05: With Icon & Badge ── */

function CardHeaderIconDemo() {
    return (
        <CardHeader
            icon={<Chart size={20} variant="Bulk" color="currentColor" />}
            title="Revenue Overview"
            description="Monthly revenue breakdown and trends."
            badge={<Badge variant="success" size="sm" dot>Live</Badge>}
            actions={
                <>
                    <Button variant="ghost" size="sm">View All</Button>
                    <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bulk" color="currentColor" />} />
                </>
            }
        />
    );
}

const iconCode = `import { Chart, More } from "iconsax-react";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CardHeaderIconDemo() {
    return (
        <CardHeader
            icon={<Chart size={20} variant="Bulk" color="currentColor" />}
            title="Revenue Overview"
            description="Monthly revenue breakdown and trends."
            badge={<Badge variant="success" size="sm" dot>Live</Badge>}
            actions={
                <>
                    <Button variant="ghost" size="sm">View All</Button>
                    <Button variant="secondary" size="sm" iconOnly icon={<More size={16} variant="Bulk" color="currentColor" />} />
                </>
            }
        />
    );
}`;

/* ── Demo 06: With Divider ── */

function CardHeaderDividerDemo() {
    return (
        <div>
            <CardHeader
                icon={<People size={20} variant="Bulk" color="currentColor" />}
                title="User Activity"
                description="Recent user sessions and engagement data."
                divider
                actions={
                    <Button variant="secondary" size="sm" icon={<Setting2 size={16} variant="Bulk" color="currentColor" />}>
                        Configure
                    </Button>
                }
            />
            <div style={{
                padding: "32px 24px",
                borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                borderTop: "none",
                textAlign: "center",
                color: "var(--color-text-tertiary)",
                fontSize: 14,
            }}>
                Card content goes here
            </div>
        </div>
    );
}

const dividerCode = `import { People, Setting2 } from "iconsax-react";
import { CardHeader } from "@/components/ui/CardHeader";
import { Button } from "@/components/ui/Button";

export function CardHeaderDividerDemo() {
    return (
        <div>
            <CardHeader
                icon={<People size={20} variant="Bulk" color="currentColor" />}
                title="User Activity"
                description="Recent user sessions and engagement data."
                divider
                actions={
                    <Button variant="secondary" size="sm" icon={<Setting2 size={16} variant="Bulk" color="currentColor" />}>
                        Configure
                    </Button>
                }
            />
            {/* Card body content below */}
        </div>
    );
}`;

/* ── Props ── */

const cardHeaderProps = [
    { name: "title", type: "string", description: "Card heading text" },
    { name: "description", type: "string", description: "Supporting description below the title" },
    { name: "icon", type: "React.ReactNode", description: "Icon displayed in a container to the left of the title" },
    { name: "avatar", type: "React.ReactNode", description: "Avatar element displayed to the left of the title (e.g. user profile)" },
    { name: "badge", type: "React.ReactNode", description: "Badge or tag displayed next to the title" },
    { name: "actions", type: "React.ReactNode", description: "Action buttons and dropdown menus on the right side" },
    { name: "divider", type: "boolean", default: "false", description: "Show a bottom border for use above card body content" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

/* ── Page ── */

export default function CardHeaderPage() {
    return (
        <div>
            <DocHeader
                title="Card Headers"
                description="Reusable card header components with title, description, icon, avatar, badge, action buttons, and dropdown menus. Used at the top of card-based UI sections."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Card Headers" },
                ]}
            />

            <ComponentPreview
                title="Card Header — Badge + Actions + Dropdown"
                description="Full-width card header with badge, multiple action buttons, and a three-dot dropdown menu."
                code={badgeActionsCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderBadgeActionsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Card Header — Export Actions + Dropdown"
                description="Card header with badge, export button with icon, and a dropdown menu for additional actions."
                code={exportActionsCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderExportActionsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Card Header — Avatar + Badge + Dropdown"
                description="Card header with user avatar, name, email, badge, action buttons, and a dropdown menu."
                code={avatarCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderAvatarDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Card Header — Simple"
                description="Basic card header with title, description, and an action button."
                code={simpleCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderSimpleDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Card Header — With Icon & Badge"
                description="Card header with a leading icon, status badge, and multiple actions."
                code={iconCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderIconDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Card Header — With Divider"
                description="Card header with a bottom divider, designed to sit above card body content."
                code={dividerCode}
                previewClassName={previewStyles.previewFlush}
            >
                <CardHeaderDividerDemo />
            </ComponentPreview>

            <PropsTable title="CardHeader" props={cardHeaderProps} />
        </div>
    );
}
