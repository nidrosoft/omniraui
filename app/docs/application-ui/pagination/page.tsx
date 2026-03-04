"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/ui/Pagination";

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

export default function PaginationPage() {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(3);
    const [page3, setPage3] = useState(1);
    const [page4, setPage4] = useState(2);
    const [page5, setPage5] = useState(1);

    return (
        <div>
            <DocHeader
                title="Pagination"
                description="Page navigation controls for paginated content. Supports default, minimal, card, dots, and line variants with page numbers and alignment options."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Pagination" },
                ]}
            />

            <InstallBlock slug="pagination" components={["Pagination"]} />

            {/* ── Default ── */}
            <h2 style={sectionHeading}>Default</h2>
            <p style={sectionDesc}>Previous/Next buttons with page count in the center.</p>

            <ComponentPreview
                title="Default Pagination"
                code={`<Pagination page={page} totalPages={10} onPageChange={setPage} />`}
            >
                <div style={{ width: "100%" }}>
                    <Pagination page={page1} totalPages={10} onPageChange={setPage1} />
                </div>
            </ComponentPreview>

            {/* ── With Page Numbers ── */}
            <h2 style={sectionHeading}>With Page Numbers</h2>
            <p style={sectionDesc}>Show clickable page number buttons between the navigation arrows.</p>

            <ComponentPreview
                title="Page Numbers"
                code={`<Pagination page={page} totalPages={10} onPageChange={setPage} showPageNumbers />`}
            >
                <div style={{ width: "100%" }}>
                    <Pagination page={page2} totalPages={10} onPageChange={setPage2} showPageNumbers />
                </div>
            </ComponentPreview>

            {/* ── Card ── */}
            <h2 style={sectionHeading}>Card Variant</h2>
            <p style={sectionDesc}>Contained in a card with background and border.</p>

            <ComponentPreview
                title="Card Pagination"
                code={`<Pagination variant="card" page={page} totalPages={10} onPageChange={setPage} />`}
            >
                <div style={{ width: "100%" }}>
                    <Pagination variant="card" page={page3} totalPages={10} onPageChange={setPage3} />
                </div>
            </ComponentPreview>

            {/* ── Dots ── */}
            <h2 style={sectionHeading}>Dot Indicators</h2>
            <p style={sectionDesc}>Minimal dot indicators for carousels and small lists.</p>

            <ComponentPreview
                title="Dot Pagination"
                code={`<Pagination variant="dots" page={page} totalPages={5} onPageChange={setPage} />`}
            >
                <div style={{ width: "100%" }}>
                    <Pagination variant="dots" page={page4} totalPages={5} onPageChange={setPage4} />
                </div>
            </ComponentPreview>

            {/* ── Line ── */}
            <h2 style={sectionHeading}>Line Progress</h2>
            <p style={sectionDesc}>Progress bar indicator showing current position.</p>

            <ComponentPreview
                title="Line Pagination"
                code={`<Pagination variant="line" page={page} totalPages={8} onPageChange={setPage} />`}
            >
                <div style={{ width: "100%" }}>
                    <Pagination variant="line" page={page5} totalPages={8} onPageChange={setPage5} />
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "page", type: "number", default: "1", description: "Current page (1-indexed)" },
                    { name: "totalPages", type: "number", default: "—", description: "Total number of pages" },
                    { name: "onPageChange", type: "(page: number) => void", default: "—", description: "Called when page changes" },
                    { name: "variant", type: '"default" | "minimal" | "card" | "dots" | "line"', default: '"default"', description: "Visual variant" },
                    { name: "align", type: '"left" | "center" | "right"', default: '"center"', description: "Alignment" },
                    { name: "showPageNumbers", type: "boolean", default: "false", description: "Show page number buttons" },
                ]}
            />
        </div>
    );
}
