export type AgentState = "idle" | "thinking" | "active" | "completed";

export interface AgentAction {
    iconName: string;
    text: string;
}

export interface AgentLogEntry {
    time: string;
    iconName: string;
    text: string;
    status: "active" | "done";
}

export interface AgentActivity {
    state: AgentState;
    currentAction?: AgentAction;
    activityLog: AgentLogEntry[];
}

export interface AgentConfig {
    id: string;
    name: string;
    role: string;
    color: string;
    colorLight: string;
    colorMid: string;
    iconName: string;
    actions: AgentAction[];
}

export interface AgentThinkingProps {
    agents: AgentConfig[];
    activities: Record<string, AgentActivity>;
    title?: string;
    subtitle?: string;
    className?: string;
}
