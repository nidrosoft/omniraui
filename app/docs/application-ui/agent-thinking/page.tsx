"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import {
    AgentThinking,
    DATA_ANALYSIS_AGENTS,
    DEVOPS_AGENTS,
    CONTENT_AGENTS,
    SUPPORT_AGENTS,
    SECURITY_AGENTS,
} from "@/components/ui/AgentThinking";
import s from "@/components/ui/AgentThinking/AgentThinking.module.css";

/* ══════════════════════════════════════════════
   01 — Data Analysis Pipeline
   ══════════════════════════════════════════════ */

function DataAnalysisDemo() {
    return <AgentThinking agents={DATA_ANALYSIS_AGENTS} title="Data Analysis" />;
}

const dataAnalysisCode = `import { AgentThinking } from "@/components/ui/AgentThinking";
import { DATA_ANALYSIS_AGENTS } from "@/components/ui/AgentThinking/config";

export function DataAnalysisDemo() {
    return (
        <AgentThinking
            agents={DATA_ANALYSIS_AGENTS}
            title="Data Analysis"
        />
    );
}`;

/* ══════════════════════════════════════════════
   02 — DevOps Pipeline
   ══════════════════════════════════════════════ */

function DevOpsDemo() {
    return <AgentThinking agents={DEVOPS_AGENTS} title="DevOps Pipeline" />;
}

const devOpsCode = `import { AgentThinking } from "@/components/ui/AgentThinking";
import { DEVOPS_AGENTS } from "@/components/ui/AgentThinking/config";

export function DevOpsDemo() {
    return (
        <AgentThinking
            agents={DEVOPS_AGENTS}
            title="DevOps Pipeline"
        />
    );
}`;

/* ══════════════════════════════════════════════
   03 — Content Creation Studio
   ══════════════════════════════════════════════ */

function ContentCreationDemo() {
    return <AgentThinking agents={CONTENT_AGENTS} title="Content Studio" />;
}

const contentCode = `import { AgentThinking } from "@/components/ui/AgentThinking";
import { CONTENT_AGENTS } from "@/components/ui/AgentThinking/config";

export function ContentCreationDemo() {
    return (
        <AgentThinking
            agents={CONTENT_AGENTS}
            title="Content Studio"
        />
    );
}`;

/* ══════════════════════════════════════════════
   04 — Customer Support Center
   ══════════════════════════════════════════════ */

function SupportDemo() {
    return <AgentThinking agents={SUPPORT_AGENTS} title="Support Center" />;
}

const supportCode = `import { AgentThinking } from "@/components/ui/AgentThinking";
import { SUPPORT_AGENTS } from "@/components/ui/AgentThinking/config";

export function SupportDemo() {
    return (
        <AgentThinking
            agents={SUPPORT_AGENTS}
            title="Support Center"
        />
    );
}`;

/* ══════════════════════════════════════════════
   05 — Security & Compliance
   ══════════════════════════════════════════════ */

function SecurityDemo() {
    return <AgentThinking agents={SECURITY_AGENTS} title="Security Ops" />;
}

const securityCode = `import { AgentThinking } from "@/components/ui/AgentThinking";
import { SECURITY_AGENTS } from "@/components/ui/AgentThinking/config";

export function SecurityDemo() {
    return (
        <AgentThinking
            agents={SECURITY_AGENTS}
            title="Security Ops"
        />
    );
}`;

/* ══════════════════════════════════════════════
   Props table data
   ══════════════════════════════════════════════ */

const agentThinkingProps = [
    { name: "agents", type: "AgentConfig[]", default: "—", description: "Array of agent configurations with id, name, role, color, and actions." },
    { name: "title", type: "string", default: '"Agent Activity"', description: "Title displayed in the header bar." },
    { name: "className", type: "string", default: "—", description: "Additional CSS class for the container." },
];

const agentConfigProps = [
    { name: "id", type: "string", default: "—", description: "Unique identifier for the agent." },
    { name: "name", type: "string", default: "—", description: "Display name shown on the chip." },
    { name: "role", type: "string", default: "—", description: "Role label (e.g. 'Scheduling', 'Billing')." },
    { name: "color", type: "string", default: "—", description: "Primary hex color for the agent's ring, glow, and accents." },
    { name: "colorLight", type: "string", default: "—", description: "Light opacity version of color for chip background." },
    { name: "colorMid", type: "string", default: "—", description: "Medium opacity version for borders and glow." },
    { name: "iconName", type: "string", default: "—", description: "Icon identifier for the agent." },
    { name: "actions", type: "AgentAction[]", default: "—", description: "Array of possible actions with iconName and text." },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function AgentThinkingPage() {
    return (
        <>
            <DocHeader
                title="Agent Thinking"
                description="Real-time agent activity indicators with animated rings, streaming typewriter text, ambient glow effects, and expandable activity logs. Perfect for agentic AI systems."
                breadcrumbs={[
                    { label: "Docs", href: "/docs" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Agent Thinking" },
                ]}
            />

            <InstallBlock slug="agent-thinking" components={["AgentThinking"]} />

            <ComponentPreview
                title="Data Analysis Pipeline"
                description="Three agents collecting, analyzing patterns, and summarizing data. Watch the typewriter text stream real-time activity."
                code={dataAnalysisCode}
                previewClassName={s.previewWrap}
            >
                <DataAnalysisDemo />
            </ComponentPreview>

            <ComponentPreview
                title="DevOps Pipeline"
                description="Four agents managing the full CI/CD lifecycle — building, testing, deploying, and monitoring infrastructure."
                code={devOpsCode}
                previewClassName={s.previewWrap}
            >
                <DevOpsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Content Creation Studio"
                description="Four agents collaborating on content — ideating topics, writing copy, reviewing quality, and producing visual assets."
                code={contentCode}
                previewClassName={s.previewWrap}
            >
                <ContentCreationDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Customer Support Center"
                description="Three agents handling support operations — triaging tickets, resolving issues, and analyzing customer sentiment."
                code={supportCode}
                previewClassName={s.previewWrap}
            >
                <SupportDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Security & Compliance"
                description="Four agents securing the system — managing access control, detecting threats, ensuring compliance, and handling encryption."
                code={securityCode}
                previewClassName={s.previewWrap}
            >
                <SecurityDemo />
            </ComponentPreview>

            <PropsTable title="AgentThinking Props" props={agentThinkingProps} />
            <PropsTable title="AgentConfig Interface" props={agentConfigProps} />
        </>
    );
}
