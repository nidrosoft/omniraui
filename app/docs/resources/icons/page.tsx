"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import {
    Home2, Setting2, SearchNormal1, Notification, Profile2User, Heart,
    Star1, MessageText1, Calendar, Camera, Call, Location, Send2,
    Edit2, Trash, Eye, EyeSlash, Lock1, Unlock, Shield,
    ArrowRight2, ArrowLeft2, ArrowUp2, ArrowDown2, Add, Minus,
    CloseCircle, TickCircle, InfoCircle, Danger,
    Document, FolderOpen, Gallery, VideoPlay, Microphone2,
    Wifi, Bluetooth, BatteryFull, Sun1, Moon,
    ShoppingCart, Bag2, Card, Wallet2, Receipt1,
    Chart, Graph, Activity, StatusUp, TrendUp,
    Monitor, Mobile, Printer, Cpu, Mouse,
    LoginCurve, LogoutCurve, Share, Link1, Paperclip2,
    Filter, Sort, Category, Grid5, Element3,
    Timer1, Clock, Alarm, StopCircle, Play,
    Brush2, ColorSwatch, Magicpen, Paintbucket, Scissor,
} from "iconsax-react";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconList: { name: string; icon: any }[] = [
    { name: "Home2", icon: Home2 },
    { name: "Setting2", icon: Setting2 },
    { name: "SearchNormal1", icon: SearchNormal1 },
    { name: "Notification", icon: Notification },
    { name: "Profile2User", icon: Profile2User },
    { name: "Heart", icon: Heart },
    { name: "Star1", icon: Star1 },
    { name: "MessageText1", icon: MessageText1 },
    { name: "Calendar", icon: Calendar },
    { name: "Camera", icon: Camera },
    { name: "Call", icon: Call },
    { name: "Location", icon: Location },
    { name: "Send2", icon: Send2 },
    { name: "Edit2", icon: Edit2 },
    { name: "Trash", icon: Trash },
    { name: "Eye", icon: Eye },
    { name: "EyeSlash", icon: EyeSlash },
    { name: "Lock1", icon: Lock1 },
    { name: "Unlock", icon: Unlock },
    { name: "Shield", icon: Shield },
    { name: "ArrowRight2", icon: ArrowRight2 },
    { name: "ArrowLeft2", icon: ArrowLeft2 },
    { name: "ArrowUp2", icon: ArrowUp2 },
    { name: "ArrowDown2", icon: ArrowDown2 },
    { name: "Add", icon: Add },
    { name: "Minus", icon: Minus },
    { name: "CloseCircle", icon: CloseCircle },
    { name: "TickCircle", icon: TickCircle },
    { name: "InfoCircle", icon: InfoCircle },
    { name: "Danger", icon: Danger },
    { name: "Document", icon: Document },
    { name: "FolderOpen", icon: FolderOpen },
    { name: "Gallery", icon: Gallery },
    { name: "VideoPlay", icon: VideoPlay },
    { name: "Microphone2", icon: Microphone2 },
    { name: "Wifi", icon: Wifi },
    { name: "Bluetooth", icon: Bluetooth },
    { name: "BatteryFull", icon: BatteryFull },
    { name: "Sun1", icon: Sun1 },
    { name: "Moon", icon: Moon },
    { name: "ShoppingCart", icon: ShoppingCart },
    { name: "Bag2", icon: Bag2 },
    { name: "Card", icon: Card },
    { name: "Wallet2", icon: Wallet2 },
    { name: "Receipt1", icon: Receipt1 },
    { name: "Chart", icon: Chart },
    { name: "Graph", icon: Graph },
    { name: "Activity", icon: Activity },
    { name: "StatusUp", icon: StatusUp },
    { name: "TrendUp", icon: TrendUp },
    { name: "Monitor", icon: Monitor },
    { name: "Mobile", icon: Mobile },
    { name: "Printer", icon: Printer },
    { name: "Cpu", icon: Cpu },
    { name: "Mouse", icon: Mouse },
    { name: "LoginCurve", icon: LoginCurve },
    { name: "LogoutCurve", icon: LogoutCurve },
    { name: "Share", icon: Share },
    { name: "Link1", icon: Link1 },
    { name: "Paperclip2", icon: Paperclip2 },
    { name: "Filter", icon: Filter },
    { name: "Sort", icon: Sort },
    { name: "Category", icon: Category },
    { name: "Grid5", icon: Grid5 },
    { name: "Element3", icon: Element3 },
    { name: "Timer1", icon: Timer1 },
    { name: "Clock", icon: Clock },
    { name: "Alarm", icon: Alarm },
    { name: "StopCircle", icon: StopCircle },
    { name: "Play", icon: Play },
    { name: "Brush2", icon: Brush2 },
    { name: "ColorSwatch", icon: ColorSwatch },
    { name: "Magicpen", icon: Magicpen },
    { name: "Paintbucket", icon: Paintbucket },
    { name: "Scissor", icon: Scissor },
];

const variantIcons: { label: string; variant: "Linear" | "Bold" | "Outline" | "Bulk" | "TwoTone" }[] = [
    { label: "Linear", variant: "Linear" },
    { label: "Bold", variant: "Bold" },
    { label: "Outline", variant: "Outline" },
    { label: "Bulk", variant: "Bulk" },
    { label: "TwoTone", variant: "TwoTone" },
];

const sizes = [16, 20, 24, 32, 48];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function IconCard({ name, icon: Icon }: { name: string; icon: any }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`import { ${name} } from "iconsax-react";`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <button
            onClick={handleCopy}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                padding: 16,
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                position: "relative",
            }}
            title={`Click to copy import for ${name}`}
        >
            <Icon size={24} variant="Bulk" color="var(--color-lime)" />
            <span style={{
                fontSize: 10.5,
                color: copied ? "var(--color-lime)" : "var(--color-text-tertiary)",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: 1.3,
                wordBreak: "break-all",
                transition: "color 0.2s",
            }}>
                {copied ? "Copied!" : name}
            </span>
        </button>
    );
}

export default function IconsPage() {
    const [search, setSearch] = useState("");

    const filtered = iconList.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <DocHeader
                title="Icons"
                description="Omnira UI uses iconsax-react as its recommended icon library. Over 1,000 icons in 5 variants — we primarily use the Bulk variant across the design system."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Resources", href: "/docs/resources/icons" },
                    { label: "Icons" },
                ]}
            />

            {/* ── Installation ── */}
            <h2 style={sectionHeading}>Installation</h2>
            <p style={sectionDesc}>
                Install the iconsax-react package to use icons in your project.
            </p>
            <CodeBlock code="pnpm add iconsax-react" language="bash" />

            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`import { Home2, Setting2, Notification } from "iconsax-react";

// Use the Bulk variant (recommended for Omnira UI)
<Home2 size={24} variant="Bulk" color="var(--color-lime)" />
<Setting2 size={24} variant="Bulk" color="var(--color-text-primary)" />
<Notification size={24} variant="Bulk" color="var(--color-text-secondary)" />`}
                    language="tsx"
                />
            </div>

            {/* ── Variants ── */}
            <h2 style={sectionHeading}>Variants</h2>
            <p style={sectionDesc}>
                Iconsax provides 5 icon variants. Omnira UI uses <strong>Bulk</strong> as the default across all components.
            </p>
            <div style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 24,
            }}>
                {variantIcons.map((v) => (
                    <div
                        key={v.label}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 10,
                            padding: "20px 24px",
                            borderRadius: "var(--radius-lg)",
                            background: "var(--color-bg-card)",
                            border: v.variant === "Bulk"
                                ? "1px solid var(--color-border-lime-subtle)"
                                : "1px solid var(--color-border-standard)",
                            flex: "1 1 120px",
                            minWidth: 100,
                        }}
                    >
                        <Home2 size={32} variant={v.variant} color="var(--color-lime)" />
                        <span style={{
                            fontSize: 12,
                            fontWeight: v.variant === "Bulk" ? 700 : 500,
                            color: v.variant === "Bulk" ? "var(--color-lime)" : "var(--color-text-tertiary)",
                        }}>
                            {v.label}
                            {v.variant === "Bulk" && " ✦"}
                        </span>
                    </div>
                ))}
            </div>
            <CodeBlock
                code={`// Available variants
<Home2 size={24} variant="Linear" />
<Home2 size={24} variant="Bold" />
<Home2 size={24} variant="Outline" />
<Home2 size={24} variant="Bulk" />    // ← Recommended
<Home2 size={24} variant="TwoTone" />`}
                language="tsx"
            />

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>
                Icons can be rendered at any pixel size. Common sizes used in Omnira UI:
            </p>
            <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 24,
                padding: 32,
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                flexWrap: "wrap",
                marginBottom: 24,
            }}>
                {sizes.map((s) => (
                    <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                        <Home2 size={s} variant="Bulk" color="var(--color-lime)" />
                        <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{s}px</span>
                    </div>
                ))}
            </div>

            {/* ── Color Theming ── */}
            <h2 style={sectionHeading}>Color Theming</h2>
            <p style={sectionDesc}>
                Use CSS custom properties from the Omnira design system to theme icons consistently.
            </p>
            <div style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 24,
            }}>
                {[
                    { label: "Lime (accent)", color: "var(--color-lime)" },
                    { label: "Primary", color: "var(--color-text-primary)" },
                    { label: "Secondary", color: "var(--color-text-secondary)" },
                    { label: "Tertiary", color: "var(--color-text-tertiary)" },
                ].map((c) => (
                    <div
                        key={c.label}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "12px 20px",
                            borderRadius: "var(--radius-lg)",
                            background: "var(--color-bg-card)",
                            border: "1px solid var(--color-border-standard)",
                        }}
                    >
                        <Star1 size={24} variant="Bulk" color={c.color} />
                        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", fontWeight: 500 }}>{c.label}</span>
                    </div>
                ))}
            </div>
            <CodeBlock
                code={`// Using design system color tokens
<Star1 size={24} variant="Bulk" color="var(--color-lime)" />
<Star1 size={24} variant="Bulk" color="var(--color-text-primary)" />
<Star1 size={24} variant="Bulk" color="var(--color-text-secondary)" />
<Star1 size={24} variant="Bulk" color="var(--color-text-tertiary)" />`}
                language="tsx"
            />

            {/* ── Icon Gallery ── */}
            <h2 style={sectionHeading}>Icon Gallery</h2>
            <p style={sectionDesc}>
                A curated selection of commonly used icons. Click any icon to copy its import statement. Visit{" "}
                <a
                    href="https://iconsax-react.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-lime)", textDecoration: "none", fontWeight: 600 }}
                >
                    iconsax-react.pages.dev
                </a>{" "}
                for the full library of 1,000+ icons.
            </p>

            {/* Search */}
            <div style={{ marginBottom: 20 }}>
                <div style={{ position: "relative", maxWidth: 360 }}>
                    <span style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        pointerEvents: "none",
                    }}>
                        <SearchNormal1 size={14} variant="Bulk" color="var(--color-text-tertiary)" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: "100%",
                            height: 40,
                            padding: "0 12px 0 36px",
                            borderRadius: "var(--radius-sm)",
                            background: "var(--color-bg-input)",
                            border: "1px solid var(--color-border-standard)",
                            fontSize: 13,
                            color: "var(--color-text-primary)",
                            outline: "none",
                        }}
                    />
                </div>
            </div>

            {/* Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: 10,
            }}>
                {filtered.map((item) => (
                    <IconCard key={item.name} name={item.name} icon={item.icon} />
                ))}
            </div>

            {filtered.length === 0 && (
                <div style={{
                    padding: 48,
                    textAlign: "center",
                    color: "var(--color-text-tertiary)",
                    fontSize: 14,
                }}>
                    No icons found matching &ldquo;{search}&rdquo;
                </div>
            )}

            {/* ── Full Library Link ── */}
            <div style={{
                marginTop: 48,
                padding: 32,
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-standard)",
                textAlign: "center",
            }}>
                <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: 8,
                }}>
                    Need more icons?
                </h3>
                <p style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    marginBottom: 16,
                    lineHeight: 1.6,
                }}>
                    Iconsax offers 1,000+ icons across 5 variants. Browse the full collection:
                </p>
                <a
                    href="https://iconsax-react.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 24px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--color-lime)",
                        color: "#121212",
                        fontSize: 14,
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                    }}
                >
                    Browse Full Library →
                </a>
            </div>
        </div>
    );
}
