import { Sidebar } from "@/components/docs/Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div className="docs-content-wrapper">
                <main className="docs-main">
                    {children}
                </main>
            </div>
            <style>{`
                .docs-content-wrapper {
                    flex: 1;
                    margin-left: 280px;
                    display: flex;
                    justify-content: center;
                    transition: margin 0.3s ease;
                }
                .docs-main {
                    width: 100%;
                    max-width: 1420px;
                    padding: 48px 64px;
                }
                @media (max-width: 1023px) {
                    .docs-content-wrapper {
                        margin-left: 0 !important;
                    }
                    .docs-main {
                        max-width: 100vw !important;
                        padding: 32px 24px !important;
                    }
                }
            `}</style>
        </div>
    );
}
