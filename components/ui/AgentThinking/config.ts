import type { AgentConfig } from "./types";

/* ── Section 1: Data Analysis Agents ── */

export const DATA_ANALYSIS_AGENTS: AgentConfig[] = [
    {
        id: "scout",
        name: "Scout",
        role: "Data Collection",
        color: "#3B82F6",
        colorLight: "rgba(59,130,246,0.12)",
        colorMid: "rgba(59,130,246,0.25)",
        iconName: "SearchNormal1",
        actions: [
            { iconName: "DocumentFilter", text: "scanning 2,400 records from Q4 dataset..." },
            { iconName: "Graph", text: "indexing revenue metrics across regions..." },
            { iconName: "FolderOpen", text: "pulling customer feedback from Zendesk..." },
            { iconName: "CloudConnection", text: "syncing latest API data from Stripe..." },
            { iconName: "DocumentDownload", text: "downloading export from analytics pipeline..." },
        ],
    },
    {
        id: "prism",
        name: "Prism",
        role: "Pattern Recognition",
        color: "#8B5CF6",
        colorLight: "rgba(139,92,246,0.12)",
        colorMid: "rgba(139,92,246,0.25)",
        iconName: "Chart21",
        actions: [
            { iconName: "TrendUp", text: "detecting anomaly in signup conversion rate..." },
            { iconName: "Chart", text: "clustering user segments by behavior..." },
            { iconName: "Diagram", text: "mapping correlation between churn and NPS..." },
            { iconName: "StatusUp", text: "identifying seasonal trend in page views..." },
            { iconName: "Ranking1", text: "ranking features by adoption velocity..." },
        ],
    },
    {
        id: "atlas",
        name: "Atlas",
        role: "Summarization",
        color: "#10B981",
        colorLight: "rgba(16,185,129,0.12)",
        colorMid: "rgba(16,185,129,0.25)",
        iconName: "DocumentText1",
        actions: [
            { iconName: "Edit2", text: "drafting executive summary for board deck..." },
            { iconName: "Notepad2", text: "compiling key takeaways from 18 reports..." },
            { iconName: "ClipboardText", text: "structuring findings into action items..." },
            { iconName: "MessageText1", text: "generating plain-language insights..." },
            { iconName: "Book1", text: "writing methodology section for audit..." },
        ],
    },
];

/* ── Section 2: DevOps Pipeline Agents ── */

export const DEVOPS_AGENTS: AgentConfig[] = [
    {
        id: "forge",
        name: "Forge",
        role: "Build & Compile",
        color: "#F59E0B",
        colorLight: "rgba(245,158,11,0.12)",
        colorMid: "rgba(245,158,11,0.25)",
        iconName: "Code1",
        actions: [
            { iconName: "CommandSquare", text: "compiling TypeScript across 340 modules..." },
            { iconName: "Cpu", text: "bundling production assets with esbuild..." },
            { iconName: "Box1", text: "building Docker image for staging..." },
            { iconName: "HierarchySquare2", text: "resolving dependency tree conflicts..." },
            { iconName: "Refresh2", text: "rebuilding after config change in env..." },
        ],
    },
    {
        id: "sentinel",
        name: "Sentinel",
        role: "Testing & QA",
        color: "#EF4444",
        colorLight: "rgba(239,68,68,0.12)",
        colorMid: "rgba(239,68,68,0.25)",
        iconName: "ShieldTick",
        actions: [
            { iconName: "TickCircle", text: "running 1,247 unit tests in parallel..." },
            { iconName: "Scan", text: "executing E2E suite on Chrome + Firefox..." },
            { iconName: "SecuritySafe", text: "scanning dependencies for CVEs..." },
            { iconName: "Verify", text: "validating API contract against OpenAPI spec..." },
            { iconName: "Bug", text: "fuzzing auth endpoints for edge cases..." },
        ],
    },
    {
        id: "relay",
        name: "Relay",
        role: "Deployment",
        color: "#06B6D4",
        colorLight: "rgba(6,182,212,0.12)",
        colorMid: "rgba(6,182,212,0.25)",
        iconName: "Cloud",
        actions: [
            { iconName: "ExportSquare", text: "pushing image to container registry..." },
            { iconName: "Routing2", text: "rolling out canary to 5% of traffic..." },
            { iconName: "GlobalSearch", text: "invalidating CDN cache across 12 regions..." },
            { iconName: "Airdrop", text: "deploying edge functions to Cloudflare..." },
            { iconName: "TickSquare", text: "verifying health checks on new pods..." },
        ],
    },
    {
        id: "watch",
        name: "Watch",
        role: "Monitoring",
        color: "#10B981",
        colorLight: "rgba(16,185,129,0.12)",
        colorMid: "rgba(16,185,129,0.25)",
        iconName: "Activity",
        actions: [
            { iconName: "Eye", text: "tracking p99 latency after deploy..." },
            { iconName: "Notification1", text: "alerting on memory spike in worker-3..." },
            { iconName: "Chart1", text: "graphing error rate trend over 15 min..." },
            { iconName: "Timer1", text: "measuring cold start times on Lambda..." },
            { iconName: "StatusUp", text: "confirming zero-downtime rollout..." },
        ],
    },
];

/* ── Section 3: Content Creation Agents ── */

export const CONTENT_AGENTS: AgentConfig[] = [
    {
        id: "muse",
        name: "Muse",
        role: "Ideation",
        color: "#EC4899",
        colorLight: "rgba(236,72,153,0.12)",
        colorMid: "rgba(236,72,153,0.25)",
        iconName: "Magicpen",
        actions: [
            { iconName: "Lamp", text: "brainstorming 12 angles for product launch..." },
            { iconName: "MessageQuestion", text: "generating hook variations for ad copy..." },
            { iconName: "Notepad2", text: "outlining blog post on AI workflows..." },
            { iconName: "Brush2", text: "exploring visual concepts for hero section..." },
            { iconName: "Star1", text: "ranking topic ideas by search volume..." },
        ],
    },
    {
        id: "quill",
        name: "Quill",
        role: "Writing",
        color: "#8B5CF6",
        colorLight: "rgba(139,92,246,0.12)",
        colorMid: "rgba(139,92,246,0.25)",
        iconName: "Edit2",
        actions: [
            { iconName: "DocumentText1", text: "drafting introduction for case study..." },
            { iconName: "Text", text: "rewriting CTA for higher conversion..." },
            { iconName: "Translate", text: "localizing landing page to Spanish..." },
            { iconName: "MessageText1", text: "composing email sequence for onboarding..." },
            { iconName: "Book1", text: "writing documentation for new API..." },
        ],
    },
    {
        id: "lens",
        name: "Lens",
        role: "Review & Edit",
        color: "#F59E0B",
        colorLight: "rgba(245,158,11,0.12)",
        colorMid: "rgba(245,158,11,0.25)",
        iconName: "SearchNormal1",
        actions: [
            { iconName: "TickCircle", text: "checking grammar and tone consistency..." },
            { iconName: "Verify", text: "fact-checking statistics in whitepaper..." },
            { iconName: "Ranking1", text: "scoring readability at grade 8 level..." },
            { iconName: "Scissor", text: "trimming word count from 2,400 to 1,800..." },
            { iconName: "Refresh2", text: "suggesting stronger verbs in paragraph 3..." },
        ],
    },
    {
        id: "pixel",
        name: "Pixel",
        role: "Visual Assets",
        color: "#06B6D4",
        colorLight: "rgba(6,182,212,0.12)",
        colorMid: "rgba(6,182,212,0.25)",
        iconName: "Paintbucket",
        actions: [
            { iconName: "Image", text: "generating OG image for blog post..." },
            { iconName: "VideoSquare", text: "creating thumbnail for YouTube video..." },
            { iconName: "Colorfilter", text: "applying brand palette to infographic..." },
            { iconName: "Grid5", text: "resizing assets for social media formats..." },
            { iconName: "ExportSquare", text: "exporting final assets to Figma..." },
        ],
    },
];

/* ── Section 4: Customer Support Agents ── */

export const SUPPORT_AGENTS: AgentConfig[] = [
    {
        id: "echo",
        name: "Echo",
        role: "Triage",
        color: "#3B82F6",
        colorLight: "rgba(59,130,246,0.12)",
        colorMid: "rgba(59,130,246,0.25)",
        iconName: "MessageQuestion",
        actions: [
            { iconName: "Sort", text: "classifying 47 new tickets by priority..." },
            { iconName: "Tag2", text: "auto-tagging billing issues from queue..." },
            { iconName: "Routing2", text: "routing enterprise tickets to tier-2..." },
            { iconName: "Timer1", text: "flagging SLA breach on ticket #8291..." },
            { iconName: "Notification1", text: "escalating critical bug report to eng..." },
        ],
    },
    {
        id: "sage",
        name: "Sage",
        role: "Resolution",
        color: "#10B981",
        colorLight: "rgba(16,185,129,0.12)",
        colorMid: "rgba(16,185,129,0.25)",
        iconName: "MessageText1",
        actions: [
            { iconName: "Book1", text: "searching knowledge base for solution..." },
            { iconName: "Edit2", text: "drafting response for password reset..." },
            { iconName: "Link21", text: "attaching relevant help article link..." },
            { iconName: "TickCircle", text: "resolving billing dispute for acct #4102..." },
            { iconName: "Refresh2", text: "following up on pending refund request..." },
        ],
    },
    {
        id: "pulse",
        name: "Pulse",
        role: "Sentiment",
        color: "#F59E0B",
        colorLight: "rgba(245,158,11,0.12)",
        colorMid: "rgba(245,158,11,0.25)",
        iconName: "EmojiHappy",
        actions: [
            { iconName: "Chart", text: "analyzing CSAT scores from last 24 hours..." },
            { iconName: "TrendDown", text: "detecting frustration in ticket #7834..." },
            { iconName: "StatusUp", text: "tracking satisfaction trend post-update..." },
            { iconName: "Ranking1", text: "scoring agent response quality at 94%..." },
            { iconName: "Diagram", text: "mapping sentiment across product areas..." },
        ],
    },
];

/* ── Section 5: Security & Compliance Agents ── */

export const SECURITY_AGENTS: AgentConfig[] = [
    {
        id: "vault",
        name: "Vault",
        role: "Access Control",
        color: "#8B5CF6",
        colorLight: "rgba(139,92,246,0.12)",
        colorMid: "rgba(139,92,246,0.25)",
        iconName: "Lock1",
        actions: [
            { iconName: "Key", text: "rotating API keys for production env..." },
            { iconName: "SecurityUser", text: "auditing admin permissions for 23 users..." },
            { iconName: "ShieldTick", text: "enforcing MFA policy on new accounts..." },
            { iconName: "Unlock", text: "revoking expired service tokens..." },
            { iconName: "Verify", text: "validating SSO configuration for Okta..." },
        ],
    },
    {
        id: "hawk",
        name: "Hawk",
        role: "Threat Detection",
        color: "#EF4444",
        colorLight: "rgba(239,68,68,0.12)",
        colorMid: "rgba(239,68,68,0.25)",
        iconName: "Radar2",
        actions: [
            { iconName: "Danger", text: "investigating suspicious login from 185.x.x.x..." },
            { iconName: "Scan", text: "scanning endpoints for SQL injection..." },
            { iconName: "ShieldCross", text: "blocking brute-force attempt on /api/auth..." },
            { iconName: "Eye", text: "monitoring rate limits on public API..." },
            { iconName: "Notification1", text: "alerting on unusual data export pattern..." },
        ],
    },
    {
        id: "ledger",
        name: "Ledger",
        role: "Compliance",
        color: "#F59E0B",
        colorLight: "rgba(245,158,11,0.12)",
        colorMid: "rgba(245,158,11,0.25)",
        iconName: "ClipboardText",
        actions: [
            { iconName: "DocumentText1", text: "generating SOC 2 evidence for Q4..." },
            { iconName: "TickCircle", text: "verifying GDPR data retention policies..." },
            { iconName: "Notepad2", text: "compiling audit trail for user deletions..." },
            { iconName: "Ranking1", text: "scoring compliance readiness at 97%..." },
            { iconName: "Calendar", text: "scheduling annual penetration test..." },
        ],
    },
    {
        id: "cipher",
        name: "Cipher",
        role: "Encryption",
        color: "#06B6D4",
        colorLight: "rgba(6,182,212,0.12)",
        colorMid: "rgba(6,182,212,0.25)",
        iconName: "PasswordCheck",
        actions: [
            { iconName: "Key", text: "rotating encryption keys for database..." },
            { iconName: "ShieldTick", text: "verifying TLS 1.3 on all endpoints..." },
            { iconName: "Lock1", text: "encrypting PII fields in user table..." },
            { iconName: "Verify", text: "validating certificate chain expiry dates..." },
            { iconName: "SecuritySafe", text: "hashing sensitive config values at rest..." },
        ],
    },
];

/* ── All sections for the docs page ── */

export const ALL_SECTIONS = [
    { title: "Data Analysis Pipeline", description: "Agents collecting, analyzing, and summarizing data in real-time.", agents: DATA_ANALYSIS_AGENTS },
    { title: "DevOps Pipeline", description: "Agents building, testing, deploying, and monitoring infrastructure.", agents: DEVOPS_AGENTS },
    { title: "Content Creation Studio", description: "Agents ideating, writing, reviewing, and producing visual assets.", agents: CONTENT_AGENTS },
    { title: "Customer Support Center", description: "Agents triaging tickets, resolving issues, and tracking sentiment.", agents: SUPPORT_AGENTS },
    { title: "Security & Compliance", description: "Agents managing access, detecting threats, and ensuring compliance.", agents: SECURITY_AGENTS },
];
