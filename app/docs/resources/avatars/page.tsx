import { DocHeader } from "@/components/docs/DocHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

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

const avatarPhotos = [
    { src: "https://i.pravatar.cc/150?img=1", name: "Sarah Chen" },
    { src: "https://i.pravatar.cc/150?img=3", name: "James Wilson" },
    { src: "https://i.pravatar.cc/150?img=5", name: "Maria Garcia" },
    { src: "https://i.pravatar.cc/150?img=7", name: "Alex Turner" },
    { src: "https://i.pravatar.cc/150?img=8", name: "Emily Davis" },
    { src: "https://i.pravatar.cc/150?img=11", name: "David Kim" },
    { src: "https://i.pravatar.cc/150?img=12", name: "Lisa Park" },
    { src: "https://i.pravatar.cc/150?img=13", name: "Ryan Moore" },
    { src: "https://i.pravatar.cc/150?img=16", name: "Olivia Brown" },
    { src: "https://i.pravatar.cc/150?img=20", name: "Noah Taylor" },
    { src: "https://i.pravatar.cc/150?img=25", name: "Sophia Lee" },
    { src: "https://i.pravatar.cc/150?img=32", name: "Ethan Clark" },
    { src: "https://i.pravatar.cc/150?img=36", name: "Ava Martinez" },
    { src: "https://i.pravatar.cc/150?img=38", name: "Lucas White" },
    { src: "https://i.pravatar.cc/150?img=44", name: "Mia Johnson" },
    { src: "https://i.pravatar.cc/150?img=47", name: "Ben Harris" },
    { src: "https://i.pravatar.cc/150?img=49", name: "Chloe Adams" },
    { src: "https://i.pravatar.cc/150?img=52", name: "Daniel Scott" },
    { src: "https://i.pravatar.cc/150?img=56", name: "Emma Wright" },
    { src: "https://i.pravatar.cc/150?img=60", name: "Jack Robinson" },
];

const avatarSizes = [24, 32, 40, 48, 64, 80];

const statusColors: { label: string; color: string }[] = [
    { label: "Online", color: "#22c55e" },
    { label: "Away", color: "#eab308" },
    { label: "Busy", color: "#ef4444" },
    { label: "Offline", color: "var(--color-text-tertiary)" },
];

const avatarSources = [
    {
        name: "Pravatar",
        url: "https://i.pravatar.cc",
        description: "Realistic AI-generated portrait photos. Perfect for user profile mockups.",
        example: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "DiceBear",
        url: "https://www.dicebear.com",
        description: "Open-source avatar library with 20+ art styles. Generates unique avatars from any seed string.",
        example: "https://api.dicebear.com/9.x/notionists/svg?seed=Felix",
    },
    {
        name: "UI Avatars",
        url: "https://ui-avatars.com",
        description: "Generate letter-based avatars from user initials. No signup required, fully customizable.",
        example: "https://ui-avatars.com/api/?name=Omnira+UI&background=D2FE17&color=121212&bold=true&size=150",
    },
];

export default function AvatarsPage() {
    return (
        <div>
            <DocHeader
                title="Avatars"
                description="A curated collection of avatar resources and patterns for building user interfaces. Use realistic photos, illustrated characters, or initial-based avatars."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Resources", href: "/docs/resources/icons" },
                    { label: "Avatars" },
                ]}
            />

            {/* ── Avatar Gallery ── */}
            <h2 style={sectionHeading}>Avatar Gallery</h2>
            <p style={sectionDesc}>
                A collection of realistic avatar photos for use in prototypes and mockups. Powered by{" "}
                <a href="https://i.pravatar.cc" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-lime)", textDecoration: "none", fontWeight: 600 }}>
                    Pravatar
                </a>.
            </p>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: 16,
                marginBottom: 32,
            }}>
                {avatarPhotos.map((avatar) => (
                    <div key={avatar.src} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        padding: 16,
                        borderRadius: "var(--radius-lg)",
                        background: "var(--color-bg-card)",
                        border: "1px solid var(--color-border-standard)",
                    }}>
                        <img
                            src={avatar.src}
                            alt={avatar.name}
                            width={56}
                            height={56}
                            style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                        <span style={{
                            fontSize: 10.5,
                            color: "var(--color-text-tertiary)",
                            fontWeight: 500,
                            textAlign: "center",
                            lineHeight: 1.3,
                        }}>
                            {avatar.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* ── Sizes ── */}
            <h2 style={sectionHeading}>Sizes</h2>
            <p style={sectionDesc}>
                Avatars can be rendered at various sizes depending on context — from compact lists to profile headers.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 20, flexWrap: "wrap" }}>
                    {avatarSizes.map((size) => (
                        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                            <img
                                src={`https://i.pravatar.cc/${size * 2}?img=5`}
                                alt={`${size}px avatar`}
                                width={size}
                                height={size}
                                style={{ borderRadius: "50%", objectFit: "cover" }}
                            />
                            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{size}px</span>
                        </div>
                    ))}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Avatar sizes
<img src="https://i.pravatar.cc/48?img=5" width={24} height={24} style={{ borderRadius: "50%" }} />
<img src="https://i.pravatar.cc/64?img=5" width={32} height={32} style={{ borderRadius: "50%" }} />
<img src="https://i.pravatar.cc/80?img=5" width={40} height={40} style={{ borderRadius: "50%" }} />
<img src="https://i.pravatar.cc/96?img=5" width={48} height={48} style={{ borderRadius: "50%" }} />
<img src="https://i.pravatar.cc/128?img=5" width={64} height={64} style={{ borderRadius: "50%" }} />
<img src="https://i.pravatar.cc/160?img=5" width={80} height={80} style={{ borderRadius: "50%" }} />`}
                    language="tsx"
                />
            </div>

            {/* ── With Status Indicator ── */}
            <h2 style={sectionHeading}>With Status Indicator</h2>
            <p style={sectionDesc}>
                Combine avatars with a status dot to show user availability.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                    {statusColors.map((status, idx) => (
                        <div key={status.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                            <div style={{ position: "relative", width: 48, height: 48 }}>
                                <img
                                    src={`https://i.pravatar.cc/96?img=${idx + 10}`}
                                    alt={status.label}
                                    width={48}
                                    height={48}
                                    style={{ borderRadius: "50%", objectFit: "cover" }}
                                />
                                <span style={{
                                    position: "absolute",
                                    bottom: 1,
                                    right: 1,
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background: status.color,
                                    border: "2px solid var(--color-bg-card)",
                                }} />
                            </div>
                            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{status.label}</span>
                        </div>
                    ))}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Avatar with status indicator
<div style={{ position: "relative", width: 48, height: 48 }}>
  <img
    src="https://i.pravatar.cc/96?img=10"
    width={48}
    height={48}
    style={{ borderRadius: "50%", objectFit: "cover" }}
  />
  <span style={{
    position: "absolute",
    bottom: 1,
    right: 1,
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#22c55e", // Online: green, Away: yellow, Busy: red
    border: "2px solid var(--color-bg-card)",
  }} />
</div>`}
                    language="tsx"
                />
            </div>

            {/* ── Stacked Avatars ── */}
            <h2 style={sectionHeading}>Stacked Avatars</h2>
            <p style={sectionDesc}>
                Overlap avatars to show a group of users in a compact space.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {[1, 3, 5, 7, 8].map((img, idx) => (
                        <img
                            key={img}
                            src={`https://i.pravatar.cc/96?img=${img}`}
                            alt={`User ${img}`}
                            width={40}
                            height={40}
                            style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "2px solid var(--color-bg-card)",
                                marginLeft: idx > 0 ? -12 : 0,
                                position: "relative",
                                zIndex: 5 - idx,
                            }}
                        />
                    ))}
                    <span style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "var(--color-bg-lime-subtle)",
                        border: "2px solid var(--color-bg-card)",
                        marginLeft: -12,
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--color-lime)",
                    }}>
                        +12
                    </span>
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Stacked avatar group
<div style={{ display: "flex", alignItems: "center" }}>
  {users.map((user, idx) => (
    <img
      key={user.id}
      src={user.avatar}
      width={40}
      height={40}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid var(--color-bg-card)",
        marginLeft: idx > 0 ? -12 : 0,
        zIndex: users.length - idx,
      }}
    />
  ))}
  <span style={{
    width: 40, height: 40, borderRadius: "50%",
    background: "var(--color-bg-lime-subtle)",
    border: "2px solid var(--color-bg-card)",
    marginLeft: -12,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 700, color: "var(--color-lime)",
  }}>
    +12
  </span>
</div>`}
                    language="tsx"
                />
            </div>

            {/* ── Initial Avatars ── */}
            <h2 style={sectionHeading}>Initial Avatars</h2>
            <p style={sectionDesc}>
                Generate avatars from user initials using{" "}
                <a href="https://ui-avatars.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-lime)", textDecoration: "none", fontWeight: 600 }}>
                    UI Avatars
                </a>. No images needed — works with any name.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {[
                        { name: "Omnira UI", bg: "D2FE17", color: "121212" },
                        { name: "Sarah Chen", bg: "3b82f6", color: "ffffff" },
                        { name: "Alex Turner", bg: "8b5cf6", color: "ffffff" },
                        { name: "Maria Garcia", bg: "ec4899", color: "ffffff" },
                        { name: "David Kim", bg: "14b8a6", color: "ffffff" },
                    ].map((u) => (
                        <div key={u.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=${u.bg}&color=${u.color}&bold=true&size=96`}
                                alt={u.name}
                                width={48}
                                height={48}
                                style={{ borderRadius: "50%" }}
                            />
                            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{u.name}</span>
                        </div>
                    ))}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// Initial-based avatars via UI Avatars API
<img
  src="https://ui-avatars.com/api/?name=Omnira+UI&background=D2FE17&color=121212&bold=true&size=96"
  width={48}
  height={48}
  style={{ borderRadius: "50%" }}
/>

// Parameters: name, background, color, bold, size, rounded, length
// Full docs: https://ui-avatars.com`}
                    language="tsx"
                />
            </div>

            {/* ── Illustrated Avatars ── */}
            <h2 style={sectionHeading}>Illustrated Avatars</h2>
            <p style={sectionDesc}>
                Use{" "}
                <a href="https://www.dicebear.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-lime)", textDecoration: "none", fontWeight: 600 }}>
                    DiceBear
                </a>{" "}
                to generate unique illustrated avatars from any seed string. Over 20 art styles available.
            </p>
            <ComponentPreview>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {["notionists", "avataaars", "lorelei", "micah", "adventurer"].map((style) => (
                        <div key={style} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                            <img
                                src={`https://api.dicebear.com/9.x/${style}/svg?seed=Omnira&size=96`}
                                alt={style}
                                width={48}
                                height={48}
                                style={{ borderRadius: "50%", background: "var(--color-bg-elevated)" }}
                            />
                            <span style={{ fontSize: 10.5, color: "var(--color-text-tertiary)", fontWeight: 500 }}>{style}</span>
                        </div>
                    ))}
                </div>
            </ComponentPreview>
            <div style={{ marginTop: 16 }}>
                <CodeBlock
                    code={`// DiceBear illustrated avatars
// Styles: notionists, avataaars, lorelei, micah, adventurer, and 15+ more
<img
  src="https://api.dicebear.com/9.x/notionists/svg?seed=Omnira&size=96"
  width={48}
  height={48}
  style={{ borderRadius: "50%" }}
/>

// Change the seed to generate a unique avatar for each user
// Full docs: https://www.dicebear.com`}
                    language="tsx"
                />
            </div>

            {/* ── Avatar Sources ── */}
            <h2 style={sectionHeading}>Recommended Sources</h2>
            <p style={sectionDesc}>
                Three free avatar services we recommend for building with Omnira UI:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {avatarSources.map((source) => (
                    <a
                        key={source.name}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                            padding: 20,
                            borderRadius: "var(--radius-lg)",
                            background: "var(--color-bg-card)",
                            border: "1px solid var(--color-border-standard)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                        }}
                    >
                        <img
                            src={source.example}
                            alt={source.name}
                            width={48}
                            height={48}
                            style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, background: "var(--color-bg-elevated)" }}
                        />
                        <div style={{ minWidth: 0 }}>
                            <h3 style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 15,
                                fontWeight: 700,
                                color: "var(--color-text-primary)",
                                marginBottom: 4,
                            }}>
                                {source.name}
                            </h3>
                            <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>
                                {source.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* ── Props Table ── */}
            <h2 style={sectionHeading}>Avatar Props</h2>
            <p style={sectionDesc}>
                Common props pattern for building an Avatar component:
            </p>
            <PropsTable
                props={[
                    { name: "src", type: "string", description: "Image URL for the avatar" },
                    { name: "alt", type: "string", description: "Alt text for accessibility" },
                    { name: "size", type: "number", default: "40", description: "Avatar size in pixels (24–80)" },
                    { name: "status", type: "'online' | 'away' | 'busy' | 'offline'", description: "Status indicator dot" },
                    { name: "fallback", type: "string", description: "Initials to show if image fails to load" },
                    { name: "shape", type: "'circle' | 'rounded'", default: "'circle'", description: "Avatar shape" },
                    { name: "className", type: "string", description: "Additional CSS class" },
                    { name: "style", type: "React.CSSProperties", description: "Inline styles" },
                ]}
            />
        </div>
    );
}
