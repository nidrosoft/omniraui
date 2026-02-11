"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

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

const DEMO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const DEMO_THUMB = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/800px-Big_buck_bunny_poster_big.jpg";

function SmallDemo() {
    return <VideoPlayer size="sm" src={DEMO_VIDEO} thumbnailUrl={DEMO_THUMB} />;
}

function MediumDemo() {
    return <VideoPlayer size="md" src={DEMO_VIDEO} thumbnailUrl={DEMO_THUMB} />;
}

function LargeDemo() {
    return <VideoPlayer size="lg" src={DEMO_VIDEO} thumbnailUrl={DEMO_THUMB} />;
}

function NoThumbDemo() {
    return <VideoPlayer size="md" src={DEMO_VIDEO} />;
}

const videoProps = [
    { name: "src", type: "string", description: "Video source URL (required)." },
    { name: "thumbnailUrl", type: "string", description: "Poster/thumbnail image URL." },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Max width constraint." },
    { name: "autoPlay", type: "boolean", default: "false", description: "Auto-play on mount." },
    { name: "muted", type: "boolean", default: "false", description: "Start muted." },
    { name: "loop", type: "boolean", default: "false", description: "Loop playback." },
];

export default function VideoPlayerPage() {
    return (
        <div>
            <DocHeader
                title="Video Player"
                description="A custom video player with thumbnail overlay, play/pause, seek bar, volume, and fullscreen controls."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components", href: "/docs/base/overview" },
                    { label: "Video Player" },
                ]}
            />

            <h2 style={sectionHeading}>Small</h2>
            <p style={sectionDesc}>Compact player with 400px max width.</p>
            <ComponentPreview title="Small" code={`<VideoPlayer size="sm" src="..." thumbnailUrl="..." />`}>
                <SmallDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Medium</h2>
            <p style={sectionDesc}>Default size with 640px max width.</p>
            <ComponentPreview title="Medium" code={`<VideoPlayer size="md" src="..." thumbnailUrl="..." />`}>
                <MediumDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Large</h2>
            <p style={sectionDesc}>Full-width player with 960px max width.</p>
            <ComponentPreview title="Large" code={`<VideoPlayer size="lg" src="..." thumbnailUrl="..." />`}>
                <LargeDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Without Thumbnail</h2>
            <p style={sectionDesc}>Player without a poster image — shows the first frame.</p>
            <ComponentPreview title="No Thumbnail" code={`<VideoPlayer size="md" src="..." />`}>
                <NoThumbDemo />
            </ComponentPreview>

            <h2 style={sectionHeading}>Usage</h2>
            <p style={sectionDesc}>Import and configure the VideoPlayer.</p>
            <CodeBlock
                code={`import { VideoPlayer } from "@/components/ui/VideoPlayer";

<VideoPlayer
    size="md"
    src="https://example.com/video.mp4"
    thumbnailUrl="https://example.com/thumb.jpg"
/>

// Auto-play muted
<VideoPlayer size="lg" src="..." autoPlay muted loop />`}
                language="tsx"
            />

            <PropsTable props={videoProps} />
        </div>
    );
}
