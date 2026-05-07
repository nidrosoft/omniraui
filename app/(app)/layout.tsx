import { Sidebar } from "@/components/sidebar/Sidebar";
import { TopBar } from "@/components/topbar/TopBar";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--color-bg-primary)" }}>
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <TopBar />
                <main style={{ flex: 1, overflowY: "auto", padding: "24px 20px" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
