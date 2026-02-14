"use client";

import { useConfigurator } from "@/lib/configurator-context";
import { ConfiguratorPanel } from "@/components/docs/ConfiguratorPanel";

const PANEL_WIDTH = 280;

export function DocsContentWrapper({ children }: { children: React.ReactNode }) {
    const { isOpen } = useConfigurator();

    return (
        <>
            <div
                className="docs-content-wrapper"
                style={{
                    flex: 1,
                    marginLeft: 280,
                    marginRight: isOpen ? PANEL_WIDTH : 0,
                    display: "flex",
                    justifyContent: "center",
                    transition: "margin 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <main className="docs-main">{children}</main>
            </div>
            <ConfiguratorPanel />
        </>
    );
}
