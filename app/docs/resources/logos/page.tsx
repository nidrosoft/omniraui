"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import {
    SiGoogle, SiApple, SiMeta, SiNetflix, SiSpotify,
    SiGithub, SiVercel, SiNextdotjs, SiReact, SiTypescript,
    SiFigma, SiStripe, SiNotion, SiLinear, SiDiscord,
    SiX, SiSupabase, SiTailwindcss, SiFramer, SiPrisma,
    SiDocker, SiAirbnb, SiUber, SiShopify, SiDropbox,
    SiTwitch, SiYoutube, SiReddit, SiTelegram, SiPaypal,
    SiNpm, SiPnpm, SiVite, SiMongodb, SiPostgresql, SiTurborepo,
    SiPinterest, SiPlanetscale,
} from "@icons-pack/react-simple-icons";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logoList: { name: string; icon: any; hex: string }[] = [
    { name: "Google", icon: SiGoogle, hex: "#4285F4" },
    { name: "Apple", icon: SiApple, hex: "#999999" },
    { name: "Meta", icon: SiMeta, hex: "#0082FB" },
    { name: "Netflix", icon: SiNetflix, hex: "#E50914" },
    { name: "Spotify", icon: SiSpotify, hex: "#1DB954" },
    { name: "GitHub", icon: SiGithub, hex: "#888888" },
    { name: "Vercel", icon: SiVercel, hex: "#888888" },
    { name: "Next.js", icon: SiNextdotjs, hex: "#888888" },
    { name: "React", icon: SiReact, hex: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, hex: "#3178C6" },
    { name: "Figma", icon: SiFigma, hex: "#F24E1E" },
    { name: "Stripe", icon: SiStripe, hex: "#635BFF" },
    { name: "Notion", icon: SiNotion, hex: "#888888" },
    { name: "Linear", icon: SiLinear, hex: "#5E6AD2" },
    { name: "Discord", icon: SiDiscord, hex: "#5865F2" },
    { name: "X", icon: SiX, hex: "#888888" },
    { name: "Supabase", icon: SiSupabase, hex: "#3FCF8E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, hex: "#06B6D4" },
    { name: "Framer", icon: SiFramer, hex: "#0055FF" },
    { name: "Prisma", icon: SiPrisma, hex: "#2D3748" },
    { name: "Docker", icon: SiDocker, hex: "#2496ED" },
    { name: "Airbnb", icon: SiAirbnb, hex: "#FF5A5F" },
    { name: "Uber", icon: SiUber, hex: "#888888" },
    { name: "Shopify", icon: SiShopify, hex: "#7AB55C" },
    { name: "Dropbox", icon: SiDropbox, hex: "#0061FF" },
    { name: "Twitch", icon: SiTwitch, hex: "#9146FF" },
    { name: "YouTube", icon: SiYoutube, hex: "#FF0000" },
    { name: "Reddit", icon: SiReddit, hex: "#FF4500" },
    { name: "Telegram", icon: SiTelegram, hex: "#26A5E4" },
    { name: "PayPal", icon: SiPaypal, hex: "#003087" },
    { name: "npm", icon: SiNpm, hex: "#CB3837" },
    { name: "pnpm", icon: SiPnpm, hex: "#F69220" },
    { name: "Vite", icon: SiVite, hex: "#646CFF" },
    { name: "MongoDB", icon: SiMongodb, hex: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, hex: "#4169E1" },
    { name: "Turborepo", icon: SiTurborepo, hex: "#EF4444" },
    { name: "Pinterest", icon: SiPinterest, hex: "#BD081C" },
    { name: "PlanetScale", icon: SiPlanetscale, hex: "#888888" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LogoCard({ name, icon: Icon, hex }: { name: string; icon: any; hex: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const importName = `Si${name.replace(/[^a-zA-Z]/g, "")}`;
        navigator.clipboard.writeText(`import { ${importName} } from "@icons-pack/react-simple-icons";`);
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
            }}
            title={`Click to copy import for ${name}`}
        >
            <Icon size={28} color={hex} />
            <span style={{
                fontSize: 10.5,
                color: copied ? "var(--color-lime)" : "var(--color-text-tertiary)",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: 1.3,
                transition: "color 0.2s",
            }}>
                {copied ? "Copied!" : name}
            </span>
        </button>
    );
}

export default function LogosPage() {
    const [search, setSearch] = useState("");

    const filtered = logoList.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <DocHeader
                title="Logos"
                description="Brand logos as React components using @icons-pack/react-simple-icons. Over 3,000 SVG brand icons ready to use in your projects."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Resources", href: "/docs/resources/icons" },
                    { label: "Logos" },
                ]}
            />

            {/* ── Installation ── */}
            <h2 style={sectionHeading}>Installation</h2>
            <p style={sectionDesc}>
                Install the react-simple-icons package to use brand logos as React components.
            </p>
            <CodeBlock code="pnpm add @icons-pack/react-simple-icons" language="bash" />
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`import { SiGithub, SiVercel, SiReact } from "@icons-pack/react-simple-icons";

// Render with brand colors
<SiGithub size={24} />
<SiVercel size={24} />
<SiReact size={24} color="#61DAFB" />`}
                    language="tsx"
                />
            </div>

            {/* ── Logo Marquee ── */}
            <h2 style={sectionHeading}>Logo Marquee</h2>
            <p style={sectionDesc}>
                A common pattern for showcasing trusted brands or tech stack. Logos scroll horizontally in a continuous loop.
            </p>
            <ComponentPreview>
                <div style={{
                    overflow: "hidden",
                    width: "100%",
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}>
                    <div style={{
                        display: "flex",
                        gap: 40,
                        animation: "marquee 20s linear infinite",
                        width: "max-content",
                    }}>
                        {[...logoList.slice(0, 12), ...logoList.slice(0, 12)].map((logo, idx) => {
                            const Icon = logo.icon;
                            return <Icon key={`${logo.name}-${idx}`} size={28} color="var(--color-text-tertiary)" />;
                        })}
                    </div>
                </div>
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Logo marquee with CSS animation
<div style={{
  overflow: "hidden",
  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
}}>
  <div style={{
    display: "flex",
    gap: 40,
    animation: "marquee 20s linear infinite",
    width: "max-content",
  }}>
    {[...logos, ...logos].map((Logo, idx) => (
      <Logo key={idx} size={28} color="var(--color-text-tertiary)" />
    ))}
  </div>
</div>

// CSS keyframes
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`}
                    language="tsx"
                />
            </div>

            {/* ── Logo Grid ── */}
            <h2 style={sectionHeading}>Logo Grid</h2>
            <p style={sectionDesc}>
                Display brand logos in a clean grid layout — great for partner sections or integrations pages.
            </p>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: 1,
                background: "var(--color-border-standard)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--color-border-standard)",
            }}>
                    {logoList.slice(0, 24).map((logo) => {
                        const Icon = logo.icon;
                        return (
                            <div key={logo.name} style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                                padding: "20px 12px",
                                background: "var(--color-bg-card)",
                            }}>
                                <Icon size={24} color="var(--color-text-secondary)" />
                                <span style={{ fontSize: 9.5, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{logo.name}</span>
                            </div>
                        );
                    })}
                </div>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Logo grid with divider borders
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: 1,
  background: "var(--color-border-standard)",
  borderRadius: "var(--radius-lg)",
  overflow: "hidden",
}}>
  {logos.map((logo) => (
    <div key={logo.name} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 12px",
      background: "var(--color-bg-card)",
    }}>
      <logo.icon size={24} color="var(--color-text-secondary)" />
      <span>{logo.name}</span>
    </div>
  ))}
</div>`}
                    language="tsx"
                />
            </div>

            {/* ── Brand Colors ── */}
            <h2 style={sectionHeading}>Brand Colors</h2>
            <p style={sectionDesc}>
                Each logo comes with its official brand color. Use them for authentic brand representation.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {logoList.slice(0, 10).map((logo) => {
                        const Icon = logo.icon;
                        return (
                            <div key={logo.name} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "10px 16px",
                                borderRadius: "var(--radius-md)",
                                background: "var(--color-bg-card)",
                                border: "1px solid var(--color-border-standard)",
                            }}>
                                <Icon size={20} color={logo.hex} />
                                <span style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 600 }}>{logo.name}</span>
                            </div>
                        );
                    })}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Logos with brand colors
<SiGoogle size={20} color="#4285F4" />
<SiSpotify size={20} color="#1DB954" />
<SiStripe size={20} color="#635BFF" />
<SiReact size={20} color="#61DAFB" />

// Or use monochrome for a unified look
<SiGoogle size={20} color="var(--color-text-secondary)" />`}
                    language="tsx"
                />
            </div>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>
                Logos can be rendered at any pixel size. Common sizes for different contexts:
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
                    {[16, 20, 24, 32, 48, 64].map((size) => (
                        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                            <SiReact size={size} color="#61DAFB" />
                            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{size}px</span>
                        </div>
                    ))}
                </div>
            </ComponentPreview>

            {/* ── Trusted By Section Pattern ── */}
            <h2 style={sectionHeading}>&ldquo;Trusted By&rdquo; Section</h2>
            <p style={sectionDesc}>
                A common marketing pattern — show logos of companies that use your product, with muted colors for a clean look.
            </p>
            <ComponentPreview>
                <div style={{ textAlign: "center" }}>
                    <p style={{
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-tertiary)",
                        marginBottom: 24,
                    }}>
                        Trusted by teams at
                    </p>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 32,
                        flexWrap: "wrap",
                        opacity: 0.6,
                    }}>
                        {[
                            { icon: SiGoogle, name: "Google" },
                            { icon: SiVercel, name: "Vercel" },
                            { icon: SiStripe, name: "Stripe" },
                            { icon: SiNotion, name: "Notion" },
                            { icon: SiLinear, name: "Linear" },
                            { icon: SiSupabase, name: "Supabase" },
                        ].map((brand) => {
                            const Icon = brand.icon;
                            return <Icon key={brand.name} size={28} color="var(--color-text-primary)" />;
                        })}
                    </div>
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// "Trusted by" section pattern
<div style={{ textAlign: "center" }}>
  <p style={{
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--color-text-tertiary)",
    marginBottom: 24,
  }}>
    Trusted by teams at
  </p>
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: 32,
    flexWrap: "wrap",
    opacity: 0.6,
  }}>
    <SiGoogle size={28} color="var(--color-text-primary)" />
    <SiVercel size={28} color="var(--color-text-primary)" />
    <SiStripe size={28} color="var(--color-text-primary)" />
    <SiNotion size={28} color="var(--color-text-primary)" />
    <SiLinear size={28} color="var(--color-text-primary)" />
    <SiSupabase size={28} color="var(--color-text-primary)" />
  </div>
</div>`}
                    language="tsx"
                />
            </div>

            {/* ── Tech Stack Pattern ── */}
            <h2 style={sectionHeading}>Tech Stack</h2>
            <p style={sectionDesc}>
                Showcase your project&apos;s technology stack with logos and labels.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {[
                        { icon: SiNextdotjs, name: "Next.js", hex: "var(--color-text-primary)" },
                        { icon: SiTypescript, name: "TypeScript", hex: "#3178C6" },
                        { icon: SiReact, name: "React", hex: "#61DAFB" },
                        { icon: SiSupabase, name: "Supabase", hex: "#3FCF8E" },
                        { icon: SiPrisma, name: "Prisma", hex: "var(--color-text-primary)" },
                        { icon: SiVercel, name: "Vercel", hex: "var(--color-text-primary)" },
                    ].map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div key={tech.name} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 14px",
                                borderRadius: "var(--radius-full)",
                                background: "var(--color-bg-card)",
                                border: "1px solid var(--color-border-standard)",
                            }}>
                                <Icon size={16} color={tech.hex} />
                                <span style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500 }}>{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Tech stack pills
<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
  {stack.map((tech) => (
    <div key={tech.name} style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-bg-card)",
      border: "1px solid var(--color-border-standard)",
    }}>
      <tech.icon size={16} color={tech.hex} />
      <span>{tech.name}</span>
    </div>
  ))}
</div>`}
                    language="tsx"
                />
            </div>

            {/* ── Logo Gallery ── */}
            <h2 style={sectionHeading}>Logo Gallery</h2>
            <p style={sectionDesc}>
                A curated selection of popular brand logos. Click any logo to copy its import statement. Visit{" "}
                <a
                    href="https://simpleicons.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-lime)", textDecoration: "none", fontWeight: 600 }}
                >
                    simpleicons.org
                </a>{" "}
                for the full library of 3,000+ brand icons.
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
                        placeholder="Search logos..."
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
                    <LogoCard key={item.name} name={item.name} icon={item.icon} hex={item.hex} />
                ))}
            </div>

            {filtered.length === 0 && (
                <div style={{
                    padding: 48,
                    textAlign: "center",
                    color: "var(--color-text-tertiary)",
                    fontSize: 14,
                }}>
                    No logos found matching &ldquo;{search}&rdquo;
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
                    Need more logos?
                </h3>
                <p style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    marginBottom: 16,
                    lineHeight: 1.6,
                }}>
                    Simple Icons offers 3,000+ brand SVG icons as React components. Browse the full collection:
                </p>
                <a
                    href="https://simpleicons.org/"
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
