"use client";

import { useMemo, useState } from "react";
import { Edit, Trash, DocumentText, Gallery, VideoPlay, DocumentText1, Chart, TickCircle, ArrowLeft, CloseCircle, DocumentUpload, Eye, Copy, ArchiveBook } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import {
    Table,
    TableCard,
    TableRowActionsDropdown,
    PaginationMinimal,
} from "@/components/ui/Table";
import type { SortDescriptor } from "@/components/ui/Table";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonUtility } from "@/components/ui/ButtonUtility";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import teamMembers from "@/components/ui/Table/team-members.json";
import customers from "@/components/ui/Table/customers.json";
import invoices from "@/components/ui/Table/invoices.json";
import uploadedFiles from "@/components/ui/Table/uploaded-files.json";
import orders from "@/components/ui/Table/orders.json";

/* ── Table01 — Divider Line (sm) ── */

function Table01DividerLineSm() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...teamMembers.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root size="sm">
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div style={{ position: "absolute", top: 16, right: 20 }}>
                        <TableRowActionsDropdown />
                    </div>
                }
            />
            <Table
                aria-label="Team members"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="The member's current role" />
                    <Table.Head id="email" label="Email address" allowsSorting />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username} key={item.username}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <Avatar src={item.avatarUrl} alt={item.name} size="sm" />
                                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                                        {item.name}
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    variant={item.status === "active" ? "success" : "section"}
                                    size="sm"
                                    dot
                                >
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.role}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.email}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", gap: 4 }}>
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge
                                            key={team.name}
                                            variant={team.color as "accent" | "success" | "error" | "warning" | "info" | "section"}
                                            size="sm"
                                        >
                                            {team.name}
                                        </Badge>
                                    ))}
                                    {item.teams.length > 3 && (
                                        <Badge variant="section" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Delete"
                                        icon={<Trash size={14} variant="Linear" color="currentColor" />}
                                    />
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Edit"
                                        icon={<Edit size={14} variant="Linear" color="currentColor" />}
                                    />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="right" />
        </TableCard.Root>
    );
}

/* ── Code string for copy-paste ── */

const table01Code = `"use client";

import { useMemo, useState } from "react";
import { Edit, Trash } from "iconsax-react";
import {
    Table,
    TableCard,
    TableRowActionsDropdown,
    PaginationMinimal,
} from "@/components/ui/Table";
import type { SortDescriptor } from "@/components/ui/Table";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { ButtonUtility } from "@/components/ui/ButtonUtility";
import teamMembers from "@/components/ui/Table/team-members.json";

export function Table01DividerLineSm() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...teamMembers.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root size="sm">
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div style={{ position: "absolute", top: 16, right: 20 }}>
                        <TableRowActionsDropdown />
                    </div>
                }
            />
            <Table
                aria-label="Team members"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="The member's current role" />
                    <Table.Head id="email" label="Email address" allowsSorting />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username} key={item.username}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <Avatar src={item.avatarUrl} alt={item.name} size="sm" />
                                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
                                        {item.name}
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    variant={item.status === "active" ? "success" : "section"}
                                    size="sm"
                                    dot
                                >
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.role}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.email}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", gap: 4 }}>
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge
                                            key={team.name}
                                            variant={team.color as "accent" | "success" | "error" | "warning" | "info" | "section"}
                                            size="sm"
                                        >
                                            {team.name}
                                        </Badge>
                                    ))}
                                    {item.teams.length > 3 && (
                                        <Badge variant="section" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Delete"
                                        icon={<Trash size={14} variant="Linear" color="currentColor" />}
                                    />
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Edit"
                                        icon={<Edit size={14} variant="Linear" color="currentColor" />}
                                    />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="right" />
        </TableCard.Root>
    );
}`;

/* ── Table02 — Customers Divider Line ── */

function Table02DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return [...customers.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Customers"
                description="These companies have purchased in the last 12 months."
                contentTrailing={
                    <div style={{ position: "absolute", top: 20, right: 24 }}>
                        <TableRowActionsDropdown />
                    </div>
                }
            />
            <Table
                aria-label="Customers"
                selectionMode="none"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="name" label="Company" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="aboutTitle" label="About" allowsSorting />
                    <Table.Head id="users" label="Users" />
                    <Table.Head id="licenseUse" label="License use" allowsSorting />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.name} key={item.name}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <Avatar src={item.logoUrl} alt={item.name} size="md" shape="rounded" />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.website}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    variant={item.status === "Customer" ? "success" : "section"}
                                    size="sm"
                                    dot
                                >
                                    {item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ whiteSpace: "nowrap" }}>
                                    <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.aboutTitle}</p>
                                    <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.aboutDescription}</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <AvatarGroup max={4} size="xs">
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=olivia-rhye" alt="Olivia Rhye" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=phoenix-baker" alt="Phoenix Baker" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=lana-steiner" alt="Lana Steiner" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=demi-wilkinson" alt="Demi Wilkinson" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=candice-wu" alt="Candice Wu" />
                                </AvatarGroup>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ minWidth: 180 }}>
                                    <ProgressBar value={item.licenseUse} size="sm" textPosition="right" />
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
}

const table02Code = `"use client";

import { useMemo, useState } from "react";
import {
    Table,
    TableCard,
    TableRowActionsDropdown,
} from "@/components/ui/Table";
import type { SortDescriptor } from "@/components/ui/Table";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import customers from "@/components/ui/Table/customers.json";

export function Table02DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return [...customers.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Customers"
                description="These companies have purchased in the last 12 months."
                contentTrailing={
                    <div style={{ position: "absolute", top: 20, right: 24 }}>
                        <TableRowActionsDropdown />
                    </div>
                }
            />
            <Table
                aria-label="Customers"
                selectionMode="none"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="name" label="Company" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="aboutTitle" label="About" allowsSorting />
                    <Table.Head id="users" label="Users" />
                    <Table.Head id="licenseUse" label="License use" allowsSorting />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.name} key={item.name}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <Avatar src={item.logoUrl} alt={item.name} size="md" shape="rounded" />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.website}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge variant={item.status === "Customer" ? "success" : "section"} size="sm" dot>
                                    {item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ whiteSpace: "nowrap" }}>
                                    <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.aboutTitle}</p>
                                    <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.aboutDescription}</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <AvatarGroup max={4} size="xs">
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=olivia-rhye" alt="Olivia Rhye" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=phoenix-baker" alt="Phoenix Baker" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=lana-steiner" alt="Lana Steiner" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=demi-wilkinson" alt="Demi Wilkinson" />
                                    <Avatar size="xs" src="https://i.pravatar.cc/150?u=candice-wu" alt="Candice Wu" />
                                </AvatarGroup>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ minWidth: 180 }}>
                                    <ProgressBar value={item.licenseUse} size="sm" textPosition="right" />
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
}`;

/* ── Table03 — Invoices Divider Line ── */

function Table03DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...invoices.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    const getInitials = (name: string) =>
        name.split(" ").map((n) => n[0]).join("");

    return (
        <TableCard.Root>
            <Table
                aria-label="Invoices"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="id" label="Invoice" isRowHeader allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="purchase" label="Purchase" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id} key={item.id}>
                            <Table.Cell>
                                <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>#{item.id}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                    {new Date(item.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                {item.status === "paid" ? (
                                    <Badge variant="success" size="sm" dot>Paid</Badge>
                                ) : item.status === "refunded" ? (
                                    <Badge variant="section" size="sm" dot>Refunded</Badge>
                                ) : (
                                    <Badge variant="error" size="sm" dot>Cancelled</Badge>
                                )}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <Avatar
                                        src={item.customer.avatarUrl}
                                        alt={item.customer.name}
                                        fallback={getInitials(item.customer.name)}
                                        size="md"
                                    />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.customer.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.purchase}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                                    <Button variant="ghost" size="sm">Delete</Button>
                                    <Button variant="accent" size="sm">Edit</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="between" />
        </TableCard.Root>
    );
}

const table03Code = `"use client";

import { useMemo, useState } from "react";
import {
    Table,
    TableCard,
    PaginationMinimal,
} from "@/components/ui/Table";
import type { SortDescriptor } from "@/components/ui/Table";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import invoices from "@/components/ui/Table/invoices.json";

export function Table03DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...invoices.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    const getInitials = (name: string) =>
        name.split(" ").map((n) => n[0]).join("");

    return (
        <TableCard.Root>
            <Table
                aria-label="Invoices"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="id" label="Invoice" isRowHeader allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="purchase" label="Purchase" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id} key={item.id}>
                            <Table.Cell>
                                <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>#{item.id}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                    {new Date(item.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                {item.status === "paid" ? (
                                    <Badge variant="success" size="sm" dot>Paid</Badge>
                                ) : item.status === "refunded" ? (
                                    <Badge variant="section" size="sm" dot>Refunded</Badge>
                                ) : (
                                    <Badge variant="error" size="sm" dot>Cancelled</Badge>
                                )}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <Avatar
                                        src={item.customer.avatarUrl}
                                        alt={item.customer.name}
                                        fallback={getInitials(item.customer.name)}
                                        size="md"
                                    />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.customer.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.purchase}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                                    <Button variant="ghost" size="sm">Delete</Button>
                                    <Button variant="accent" size="sm">Edit</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="between" />
        </TableCard.Root>
    );
}`;

/* ── Table04 — Files Uploaded ── */

const FILE_ICONS: Record<string, React.ReactNode> = {
    pdf: <DocumentText size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    jpg: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    jpeg: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    png: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    mp4: <VideoPlay size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    xls: <Chart size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    xlsx: <Chart size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    svg: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    doc: <DocumentText1 size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
};

function getFileIcon(filename: string) {
    const ext = filename.split(".").pop()?.toLowerCase() ?? "";
    return FILE_ICONS[ext] ?? <DocumentText size={24} variant="Bulk" color="var(--color-text-tertiary)" />;
}

function Table04DividerLine() {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                contentTrailing={
                    <div style={{ display: "flex", alignItems: "center", gap: 8, position: "absolute", top: 16, right: 24 }}>
                        <Button variant="secondary" size="sm">Download all</Button>
                        <Button
                            variant="primary"
                            size="sm"
                            icon={<DocumentUpload size={16} variant="Linear" color="currentColor" />}
                        >
                            Upload
                        </Button>
                    </div>
                }
            />
            <Table aria-label="Uploaded files" selectionMode="multiple">
                <Table.Header>
                    <Table.Head id="name" label="File name" isRowHeader />
                    <Table.Head id="size" label="File size" />
                    <Table.Head id="uploadedAt" label="Date uploaded" />
                    <Table.Head id="updatedAt" label="Last updated" />
                    <Table.Head id="uploadedBy" label="Uploaded by" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={uploadedFiles.items}>
                    {(item) => (
                        <Table.Row id={item.name} key={item.name}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--color-bg-hover)",
                                        border: "1px solid var(--color-border-subtle)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        {getFileIcon(item.name)}
                                    </div>
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.size}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.size}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.uploadedAt}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.updatedAt}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.uploadedBy}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
}

const table04Code = `"use client";

import { DocumentText, Gallery, VideoPlay, DocumentText1, Chart, DocumentUpload } from "iconsax-react";
import {
    Table,
    TableCard,
    TableRowActionsDropdown,
} from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import uploadedFiles from "@/components/ui/Table/uploaded-files.json";

const FILE_ICONS = {
    pdf: <DocumentText size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    jpg: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    mp4: <VideoPlay size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    xls: <Chart size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    svg: <Gallery size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
    doc: <DocumentText1 size={24} variant="Bulk" color="var(--color-text-tertiary)" />,
};

function getFileIcon(filename) {
    const ext = filename.split(".").pop()?.toLowerCase() ?? "";
    return FILE_ICONS[ext] ?? <DocumentText size={24} variant="Bulk" color="var(--color-text-tertiary)" />;
}

export function Table04DividerLine() {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                contentTrailing={
                    <div style={{ display: "flex", alignItems: "center", gap: 8, position: "absolute", top: 16, right: 24 }}>
                        <Button variant="secondary" size="sm">Download all</Button>
                        <Button variant="primary" size="sm" icon={<DocumentUpload size={16} variant="Linear" color="currentColor" />}>
                            Upload
                        </Button>
                    </div>
                }
            />
            <Table aria-label="Uploaded files" selectionMode="multiple">
                <Table.Header>
                    <Table.Head id="name" label="File name" isRowHeader />
                    <Table.Head id="size" label="File size" />
                    <Table.Head id="uploadedAt" label="Date uploaded" />
                    <Table.Head id="updatedAt" label="Last updated" />
                    <Table.Head id="uploadedBy" label="Uploaded by" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={uploadedFiles.items}>
                    {(item) => (
                        <Table.Row id={item.name} key={item.name}>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div style={{
                                        width: 40, height: 40,
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--color-bg-hover)",
                                        border: "1px solid var(--color-border-subtle)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        {getFileIcon(item.name)}
                                    </div>
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.size}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell><span style={{ whiteSpace: "nowrap" }}>{item.size}</span></Table.Cell>
                            <Table.Cell><span style={{ whiteSpace: "nowrap" }}>{item.uploadedAt}</span></Table.Cell>
                            <Table.Cell><span style={{ whiteSpace: "nowrap" }}>{item.updatedAt}</span></Table.Cell>
                            <Table.Cell><span style={{ whiteSpace: "nowrap" }}>{item.uploadedBy}</span></Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
}`;

/* ── Table05 — Orders ── */

const ORDER_STATUS_MAP: Record<string, { variant: "success" | "info" | "warning" | "error" | "section"; label: string }> = {
    delivered: { variant: "success", label: "Delivered" },
    shipped: { variant: "info", label: "Shipped" },
    processing: { variant: "warning", label: "Processing" },
    cancelled: { variant: "error", label: "Cancelled" },
};

const PRIORITY_MAP: Record<string, { variant: "error" | "warning" | "section"; label: string }> = {
    high: { variant: "error", label: "High" },
    medium: { variant: "warning", label: "Medium" },
    low: { variant: "section", label: "Low" },
};

function Table05DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "date",
        direction: "descending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...orders.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    const orderActions = [
        { label: "View details", icon: <Eye size={14} variant="Linear" color="currentColor" /> },
        { label: "Edit order", icon: <Edit size={14} variant="Linear" color="currentColor" /> },
        { label: "Duplicate", icon: <Copy size={14} variant="Linear" color="currentColor" /> },
        { label: "Archive", icon: <ArchiveBook size={14} variant="Linear" color="currentColor" /> },
        { label: "Delete", icon: <Trash size={14} variant="Linear" color="currentColor" />, destructive: true },
    ];

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

    const formatDateTime = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
            + " at "
            + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    };

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Orders"
                description="Recent orders across all products and plans."
                badge={`${orders.items.length} orders`}
                contentTrailing={
                    <div style={{ position: "absolute", top: 16, right: 24, display: "flex", gap: 8 }}>
                        <Button variant="secondary" size="sm">Export</Button>
                        <Button variant="primary" size="sm">New order</Button>
                    </div>
                }
            />
            <Table
                aria-label="Orders"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="id" label="Order" isRowHeader allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="product" label="Product" allowsSorting />
                    <Table.Head id="amount" label="Amount" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="priority" label="Priority" allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id} key={item.id}>
                            <Table.Cell>
                                <span style={{ fontWeight: 600, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>{item.id}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <Avatar src={item.customer.avatarUrl} alt={item.customer.name} size="sm" />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.customer.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.product}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", color: "var(--color-text-primary)" }}>
                                    {formatCurrency(item.amount)}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    variant={ORDER_STATUS_MAP[item.status]?.variant ?? "section"}
                                    size="sm"
                                    dot
                                >
                                    {ORDER_STATUS_MAP[item.status]?.label ?? item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    variant={PRIORITY_MAP[item.priority]?.variant ?? "section"}
                                    size="sm"
                                >
                                    {PRIORITY_MAP[item.priority]?.label ?? item.priority}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap", fontSize: 13, color: "var(--color-text-secondary)" }}>
                                    {formatDateTime(item.date)}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown items={orderActions} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="between" />
        </TableCard.Root>
    );
}

const table05Code = `"use client";

import { useMemo, useState } from "react";
import { Eye, Edit, Copy, ArchiveBook, Trash } from "iconsax-react";
import {
    Table,
    TableCard,
    TableRowActionsDropdown,
    PaginationMinimal,
} from "@/components/ui/Table";
import type { SortDescriptor } from "@/components/ui/Table";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import orders from "@/components/ui/Table/orders.json";

const ORDER_STATUS_MAP = {
    delivered: { variant: "success", label: "Delivered" },
    shipped: { variant: "info", label: "Shipped" },
    processing: { variant: "warning", label: "Processing" },
    cancelled: { variant: "error", label: "Cancelled" },
};

const PRIORITY_MAP = {
    high: { variant: "error", label: "High" },
    medium: { variant: "warning", label: "Medium" },
    low: { variant: "section", label: "Low" },
};

export function Table05DividerLine() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "date",
        direction: "descending",
    });
    const [page, setPage] = useState(1);

    const sortedItems = useMemo(() => {
        return [...orders.items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") cmp *= -1;
                return cmp;
            }
            return 0;
        });
    }, [sortDescriptor]);

    const orderActions = [
        { label: "View details", icon: <Eye size={14} variant="Linear" color="currentColor" /> },
        { label: "Edit order", icon: <Edit size={14} variant="Linear" color="currentColor" /> },
        { label: "Duplicate", icon: <Copy size={14} variant="Linear" color="currentColor" /> },
        { label: "Archive", icon: <ArchiveBook size={14} variant="Linear" color="currentColor" /> },
        { label: "Delete", icon: <Trash size={14} variant="Linear" color="currentColor" />, destructive: true },
    ];

    const formatCurrency = (amount) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

    const formatDateTime = (iso) => {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
            + " at "
            + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    };

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Orders"
                description="Recent orders across all products and plans."
                badge={\`\${orders.items.length} orders\`}
                contentTrailing={
                    <div style={{ position: "absolute", top: 16, right: 24, display: "flex", gap: 8 }}>
                        <Button variant="secondary" size="sm">Export</Button>
                        <Button variant="primary" size="sm">New order</Button>
                    </div>
                }
            />
            <Table
                aria-label="Orders"
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
            >
                <Table.Header>
                    <Table.Head id="id" label="Order" isRowHeader allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="product" label="Product" allowsSorting />
                    <Table.Head id="amount" label="Amount" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="priority" label="Priority" allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id} key={item.id}>
                            <Table.Cell>
                                <span style={{ fontWeight: 600, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>{item.id}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <Avatar src={item.customer.avatarUrl} alt={item.customer.name} size="sm" />
                                    <div style={{ whiteSpace: "nowrap" }}>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{item.customer.name}</p>
                                        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap" }}>{item.product}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", color: "var(--color-text-primary)" }}>
                                    {formatCurrency(item.amount)}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge variant={ORDER_STATUS_MAP[item.status]?.variant ?? "section"} size="sm" dot>
                                    {ORDER_STATUS_MAP[item.status]?.label ?? item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge variant={PRIORITY_MAP[item.priority]?.variant ?? "section"} size="sm">
                                    {PRIORITY_MAP[item.priority]?.label ?? item.priority}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <span style={{ whiteSpace: "nowrap", fontSize: 13, color: "var(--color-text-secondary)" }}>
                                    {formatDateTime(item.date)}
                                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <TableRowActionsDropdown items={orderActions} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationMinimal page={page} total={10} onPageChange={setPage} align="between" />
        </TableCard.Root>
    );
}`;

/* ── Props data ── */

const tableProps = [
    { name: "aria-label", type: "string", description: "Accessible label for the table" },
    { name: "selectionMode", type: '"none" | "single" | "multiple"', default: '"none"', description: "Row selection behavior" },
    { name: "sortDescriptor", type: "SortDescriptor", description: "Current sort column and direction" },
    { name: "onSortChange", type: "(descriptor: SortDescriptor) => void", description: "Callback when sort changes" },
    { name: "selectedKeys", type: "Set<string>", description: "Controlled selected row keys" },
    { name: "onSelectionChange", type: "(keys: Set<string>) => void", description: "Callback when selection changes" },
];

const tableCardProps = [
    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Card border radius size" },
    { name: "title", type: "string", description: "Header title text" },
    { name: "badge", type: "string", description: "Optional badge next to the title" },
    { name: "contentTrailing", type: "ReactNode", description: "Content rendered at the end of the header" },
];

const tableHeadProps = [
    { name: "id", type: "string", description: "Column identifier used for sorting" },
    { name: "label", type: "string", description: "Column header label" },
    { name: "allowsSorting", type: "boolean", default: "false", description: "Whether the column is sortable" },
    { name: "tooltip", type: "string", description: "Tooltip shown on hover next to the label" },
];

/* ── Page ── */

export default function TablePage() {
    return (
        <div>
            <DocHeader
                title="Table"
                description="Data tables with sorting, row selection, pagination, and glassmorphism styling. Built for team dashboards, admin panels, and data-heavy interfaces."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Table" },
                ]}
            />

            <ComponentPreview
                title="Table — Divider Line (sm)"
                description="Compact team members table with row selection, column sorting, status badges, team tags, and inline actions."
                code={table01Code}
            >
                <Table01DividerLineSm />
            </ComponentPreview>

            <ComponentPreview
                title="Table — Customers"
                description="Customer list with company logos, status badges, about descriptions, avatar groups, and license usage progress bars."
                code={table02Code}
            >
                <Table02DividerLine />
            </ComponentPreview>

            <ComponentPreview
                title="Table — Invoices"
                description="Invoice table with multi-select, payment status badges, customer avatars, and pagination with page info."
                code={table03Code}
            >
                <Table03DividerLine />
            </ComponentPreview>

            <ComponentPreview
                title="Table — Files Uploaded"
                description="File management table with file type icons, upload/download actions, and row-level action menus."
                code={table04Code}
            >
                <Table04DividerLine />
            </ComponentPreview>

            <ComponentPreview
                title="Table — Orders"
                description="Orders table with currency amounts, priority levels, date+time, and a 5-action three-dot menu per row (View, Edit, Duplicate, Archive, Delete)."
                code={table05Code}
            >
                <Table05DividerLine />
            </ComponentPreview>

            <PropsTable title="Table" props={tableProps} />
            <PropsTable title="TableCard" props={tableCardProps} />
            <PropsTable title="Table.Head" props={tableHeadProps} />
        </div>
    );
}
