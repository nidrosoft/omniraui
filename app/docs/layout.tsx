import { Sidebar } from "@/components/docs/Sidebar";
import { DocsContentWrapper } from "@/components/docs/DocsContentWrapper";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <DocsContentWrapper>{children}</DocsContentWrapper>
            <style>{`
                .docs-main {
                    width: 100%;
                    max-width: 1420px;
                    padding: 48px 64px;
                }
                @media (max-width: 1023px) {
                    .docs-content-wrapper {
                        margin-left: 0 !important;
                        margin-right: 0 !important;
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
