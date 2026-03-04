"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import { Input } from "@/components/ui/Input";
import { SearchNormal1 } from "iconsax-react";

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

export default function SectionHeaderPage() {
    return (
        <div>
            <DocHeader
                title="Section Header"
                description="Section headers introduce grouped content with a title, optional description, and action area. Supports buttons, search inputs, button groups, and tabs."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Section Header" },
                ]}
            />

            <InstallBlock slug="section-header" components={["SectionHeader", "Button"]} />

            {/* ── With Buttons ── */}
            <h2 style={sectionHeading}>With Buttons</h2>
            <p style={sectionDesc}>Title, subtitle, and action buttons on the right side.</p>

            <ComponentPreview
                title="Section Header — Buttons"
                code={`<SectionHeader.Root>
    <SectionHeader.Group>
        <SectionHeader.TextGroup>
            <SectionHeader.Heading>Team members</SectionHeader.Heading>
            <SectionHeader.Subheading>
                Manage your team members and their account permissions here.
            </SectionHeader.Subheading>
        </SectionHeader.TextGroup>
        <SectionHeader.Actions>
            <Button variant="tertiary" size="sm">Tertiary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="primary" size="sm">Primary</Button>
        </SectionHeader.Actions>
    </SectionHeader.Group>
</SectionHeader.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionHeader.Root>
                        <SectionHeader.Group>
                            <SectionHeader.TextGroup>
                                <SectionHeader.Heading>Team members</SectionHeader.Heading>
                                <SectionHeader.Subheading>
                                    Manage your team members and their account permissions here.
                                </SectionHeader.Subheading>
                            </SectionHeader.TextGroup>
                            <SectionHeader.Actions>
                                <Button variant="tertiary" size="sm">Tertiary</Button>
                                <Button variant="secondary" size="sm">Secondary</Button>
                                <Button variant="primary" size="sm">Primary</Button>
                            </SectionHeader.Actions>
                        </SectionHeader.Group>
                    </SectionHeader.Root>
                </div>
            </ComponentPreview>

            {/* ── With Search Input ── */}
            <h2 style={sectionHeading}>With Search Input</h2>
            <p style={sectionDesc}>Replace action buttons with a search input for filterable sections.</p>

            <ComponentPreview
                title="Section Header — Search Input"
                code={`<SectionHeader.Root>
    <SectionHeader.Group>
        <SectionHeader.TextGroup>
            <SectionHeader.Heading>Team members</SectionHeader.Heading>
            <SectionHeader.Subheading>
                Manage your team members and their account permissions here.
            </SectionHeader.Subheading>
        </SectionHeader.TextGroup>
        <SectionHeader.Actions>
            <Input
                placeholder="Search"
                icon={<SearchNormal1 size={16} />}
                size="sm"
                style={{ width: 280 }}
            />
        </SectionHeader.Actions>
    </SectionHeader.Group>
</SectionHeader.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionHeader.Root>
                        <SectionHeader.Group>
                            <SectionHeader.TextGroup>
                                <SectionHeader.Heading>Team members</SectionHeader.Heading>
                                <SectionHeader.Subheading>
                                    Manage your team members and their account permissions here.
                                </SectionHeader.Subheading>
                            </SectionHeader.TextGroup>
                            <SectionHeader.Actions>
                                <Input
                                    placeholder="Search"
                                    leadingIcon={<SearchNormal1 size={16} />}
                                    inputSize="sm"
                                    style={{ width: 280 }}
                                />
                            </SectionHeader.Actions>
                        </SectionHeader.Group>
                    </SectionHeader.Root>
                </div>
            </ComponentPreview>

            {/* ── With Button Group ── */}
            <h2 style={sectionHeading}>With Button Group</h2>
            <p style={sectionDesc}>Use a segmented button group for view or filter controls.</p>

            <ComponentPreview
                title="Section Header — Button Group"
                code={`<SectionHeader.Root>
    <SectionHeader.Group>
        <SectionHeader.TextGroup>
            <SectionHeader.Heading>Team members</SectionHeader.Heading>
            <SectionHeader.Subheading>
                Manage your team members and their account permissions here.
            </SectionHeader.Subheading>
        </SectionHeader.TextGroup>
        <SectionHeader.Actions>
            <ButtonGroup size="sm">
                <ButtonGroupItem>All</ButtonGroupItem>
                <ButtonGroupItem>Active</ButtonGroupItem>
                <ButtonGroupItem>Pending</ButtonGroupItem>
            </ButtonGroup>
        </SectionHeader.Actions>
    </SectionHeader.Group>
</SectionHeader.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionHeader.Root>
                        <SectionHeader.Group>
                            <SectionHeader.TextGroup>
                                <SectionHeader.Heading>Team members</SectionHeader.Heading>
                                <SectionHeader.Subheading>
                                    Manage your team members and their account permissions here.
                                </SectionHeader.Subheading>
                            </SectionHeader.TextGroup>
                            <SectionHeader.Actions>
                                <ButtonGroup size="sm">
                                    <ButtonGroupItem>All</ButtonGroupItem>
                                    <ButtonGroupItem>Active</ButtonGroupItem>
                                    <ButtonGroupItem>Pending</ButtonGroupItem>
                                </ButtonGroup>
                            </SectionHeader.Actions>
                        </SectionHeader.Group>
                    </SectionHeader.Root>
                </div>
            </ComponentPreview>

            {/* ── No Divider ── */}
            <h2 style={sectionHeading}>Without Divider</h2>
            <p style={sectionDesc}>Remove the bottom divider for seamless integration into card layouts.</p>

            <ComponentPreview
                title="Section Header — No Divider"
                code={`<SectionHeader.Root divider={false}>
    <SectionHeader.Group>
        <SectionHeader.TextGroup>
            <SectionHeader.Heading>Settings</SectionHeader.Heading>
            <SectionHeader.Subheading>
                Update your account settings and preferences.
            </SectionHeader.Subheading>
        </SectionHeader.TextGroup>
        <SectionHeader.Actions>
            <Button variant="primary" size="sm">Save changes</Button>
        </SectionHeader.Actions>
    </SectionHeader.Group>
</SectionHeader.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionHeader.Root divider={false}>
                        <SectionHeader.Group>
                            <SectionHeader.TextGroup>
                                <SectionHeader.Heading>Settings</SectionHeader.Heading>
                                <SectionHeader.Subheading>
                                    Update your account settings and preferences.
                                </SectionHeader.Subheading>
                            </SectionHeader.TextGroup>
                            <SectionHeader.Actions>
                                <Button variant="primary" size="sm">Save changes</Button>
                            </SectionHeader.Actions>
                        </SectionHeader.Group>
                    </SectionHeader.Root>
                </div>
            </ComponentPreview>

            {/* ── Title Only ── */}
            <h2 style={sectionHeading}>Title Only</h2>
            <p style={sectionDesc}>Minimal section header with just a heading.</p>

            <ComponentPreview
                title="Section Header — Title Only"
                code={`<SectionHeader.Root>
    <SectionHeader.Group>
        <SectionHeader.TextGroup>
            <SectionHeader.Heading>Recent activity</SectionHeader.Heading>
        </SectionHeader.TextGroup>
    </SectionHeader.Group>
</SectionHeader.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionHeader.Root>
                        <SectionHeader.Group>
                            <SectionHeader.TextGroup>
                                <SectionHeader.Heading>Recent activity</SectionHeader.Heading>
                            </SectionHeader.TextGroup>
                        </SectionHeader.Group>
                    </SectionHeader.Root>
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "divider (Root)", type: "boolean", default: "true", description: "Show bottom divider line" },
                    { name: "as (Heading)", type: '"h1" | "h2" | "h3" | "h4"', default: '"h2"', description: "Heading element tag" },
                ]}
            />
        </div>
    );
}
