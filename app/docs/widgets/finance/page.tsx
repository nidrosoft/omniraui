import { DocHeader } from "@/components/docs/DocHeader";

export default function FinanceWidgetsPage() {
    return (
        <div>
            <DocHeader
                title="Finance Widgets"
                description="Market tickers, portfolio cards, balance summaries, and transaction feeds for financial applications."
                status="coming-soon"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Widgets", href: "/docs/widgets" },
                    { label: "Finance" },
                ]}
            />
            <div style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                padding: 48,
                textAlign: "center",
            }}>
                <p style={{ fontSize: 16, color: "var(--color-text-tertiary)", marginBottom: 8 }}>
                    Finance widgets are coming soon.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-tertiary)" }}>
                    Crypto price tickers, portfolio cards, transaction feeds, balance summaries, and more.
                </p>
            </div>
        </div>
    );
}
