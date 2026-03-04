"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { SectionFooter } from "@/components/ui/SectionFooter";
import { Button } from "@/components/ui/Button";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import { Add } from "iconsax-react";

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

export default function SectionFooterPage() {
    const [bgSelected, setBgSelected] = useState<string[]>(["12m"]);

    return (
        <div>
            <DocHeader
                title="Section Footer"
                description="Section footers close content blocks with action buttons and optional links. Available as standalone dividers or contained card variants, with support for button groups."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Section Footer" },
                ]}
            />

            <InstallBlock slug="section-footer" components={["SectionFooter", "Button"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Simple footer with a link and action buttons separated by a top divider.</p>

            <ComponentPreview
                title="Section Footer — Default"
                code={`<SectionFooter.Root>
    <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
    <SectionFooter.Actions>
        <Button variant="tertiary" size="sm">Cancel</Button>
        <Button variant="secondary" size="sm">Reset</Button>
        <Button variant="primary" size="sm">Save changes</Button>
    </SectionFooter.Actions>
</SectionFooter.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionFooter.Root>
                        <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
                        <SectionFooter.Actions>
                            <Button variant="tertiary" size="sm">Cancel</Button>
                            <Button variant="secondary" size="sm">Reset</Button>
                            <Button variant="primary" size="sm">Save changes</Button>
                        </SectionFooter.Actions>
                    </SectionFooter.Root>
                </div>
            </ComponentPreview>

            {/* ── With Button Group ── */}
            <h2 style={sectionHeading}>With Button Group</h2>
            <p style={sectionDesc}>Add a segmented control alongside action buttons for time range or filter selection.</p>

            <ComponentPreview
                title="Section Footer — Button Group"
                code={`<SectionFooter.Root>
    <ButtonGroup size="sm" selectionMode="single" selected={["12m"]} onSelectionChange={setSelected}>
        <ButtonGroupItem value="12m">12 months</ButtonGroupItem>
        <ButtonGroupItem value="30d">30 days</ButtonGroupItem>
        <ButtonGroupItem value="7d">7 days</ButtonGroupItem>
        <ButtonGroupItem value="custom" icon={<Add size={14} />}>Custom</ButtonGroupItem>
    </ButtonGroup>
    <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
    <SectionFooter.Actions>
        <Button variant="tertiary" size="sm">Cancel</Button>
        <Button variant="secondary" size="sm">Reset</Button>
        <Button variant="primary" size="sm">Apply</Button>
    </SectionFooter.Actions>
</SectionFooter.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionFooter.Root>
                        <ButtonGroup size="sm" selectionMode="single" selected={bgSelected} onSelectionChange={setBgSelected}>
                            <ButtonGroupItem value="12m">12 months</ButtonGroupItem>
                            <ButtonGroupItem value="30d">30 days</ButtonGroupItem>
                            <ButtonGroupItem value="7d">7 days</ButtonGroupItem>
                            <ButtonGroupItem value="custom" icon={<Add size={14} />}>Custom</ButtonGroupItem>
                        </ButtonGroup>
                        <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
                        <SectionFooter.Actions>
                            <Button variant="tertiary" size="sm">Cancel</Button>
                            <Button variant="secondary" size="sm">Reset</Button>
                            <Button variant="primary" size="sm">Apply</Button>
                        </SectionFooter.Actions>
                    </SectionFooter.Root>
                </div>
            </ComponentPreview>

            {/* ── Card Variant ── */}
            <h2 style={sectionHeading}>Card Variant</h2>
            <p style={sectionDesc}>Contained footer with a card background, border, and rounded corners.</p>

            <ComponentPreview
                title="Section Footer — Card"
                code={`<SectionFooter.Root isCard>
    <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
    <SectionFooter.Actions>
        <Button variant="tertiary" size="sm">Cancel</Button>
        <Button variant="secondary" size="sm">Reset</Button>
        <Button variant="primary" size="sm">Save changes</Button>
    </SectionFooter.Actions>
</SectionFooter.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionFooter.Root isCard>
                        <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
                        <SectionFooter.Actions>
                            <Button variant="tertiary" size="sm">Cancel</Button>
                            <Button variant="secondary" size="sm">Reset</Button>
                            <Button variant="primary" size="sm">Save changes</Button>
                        </SectionFooter.Actions>
                    </SectionFooter.Root>
                </div>
            </ComponentPreview>

            {/* ── Card with Button Group ── */}
            <ComponentPreview
                title="Section Footer — Card with Button Group"
                code={`<SectionFooter.Root isCard>
    <ButtonGroup size="sm">
        <ButtonGroupItem>12 months</ButtonGroupItem>
        <ButtonGroupItem>30 days</ButtonGroupItem>
        <ButtonGroupItem>7 days</ButtonGroupItem>
    </ButtonGroup>
    <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
    <SectionFooter.Actions>
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Apply</Button>
    </SectionFooter.Actions>
</SectionFooter.Root>`}
            >
                <div style={{ width: "100%" }}>
                    <SectionFooter.Root isCard>
                        <ButtonGroup size="sm">
                            <ButtonGroupItem>12 months</ButtonGroupItem>
                            <ButtonGroupItem>30 days</ButtonGroupItem>
                            <ButtonGroupItem>7 days</ButtonGroupItem>
                        </ButtonGroup>
                        <SectionFooter.Link href="#">Learn more</SectionFooter.Link>
                        <SectionFooter.Actions>
                            <Button variant="secondary" size="sm">Cancel</Button>
                            <Button variant="primary" size="sm">Apply</Button>
                        </SectionFooter.Actions>
                    </SectionFooter.Root>
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "isCard (Root)", type: "boolean", default: "false", description: "Render as card variant with background, border, and padding" },
                ]}
            />
        </div>
    );
}
