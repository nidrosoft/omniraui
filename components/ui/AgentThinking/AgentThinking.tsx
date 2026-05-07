"use client";

import { useState, useEffect, useRef, useCallback, forwardRef } from "react";
import { createPortal } from "react-dom";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import type { AgentConfig, AgentActivity, AgentState } from "./types";
import s from "./AgentThinking.module.css";

/* ══════════════════════════════════════════════
   Text cycling hook — fixed-size status rotation
   ══════════════════════════════════════════════ */

const STATUS_PHRASES = [
    "Analyzing...",
    "Taking action...",
    "Sending emails...",
    "On a phone call...",
    "Reflecting...",
    "Processing data...",
    "Searching...",
    "Composing response...",
];

function useTextCycler(text: string, isActive: boolean, intervalMs = 2400) {
    const [displayed, setDisplayed] = useState(text || STATUS_PHRASES[0]);
    const idxRef = useRef(0);

    useEffect(() => {
        if (!isActive) {
            setDisplayed("");
            return;
        }
        setDisplayed(text || STATUS_PHRASES[0]);
        idxRef.current = 0;

        const timer = setInterval(() => {
            idxRef.current = (idxRef.current + 1) % STATUS_PHRASES.length;
            setDisplayed(STATUS_PHRASES[idxRef.current]);
        }, intervalMs);

        return () => clearInterval(timer);
    }, [text, isActive, intervalMs]);

    return displayed;
}

/* ══════════════════════════════════════════════
   Agent Ring SVG
   ══════════════════════════════════════════════ */

function AgentRing({ state, color }: { state: AgentState; color: string }) {
    return (
        <svg viewBox="0 0 36 36" className={s.avatarRingSvg}>
            {state === "idle" && (
                <circle
                    cx="18" cy="18" r="16"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                />
            )}
            {state === "thinking" && (
                <circle
                    cx="18" cy="18" r="16"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeDasharray="18 82"
                    strokeLinecap="round"
                    className={s.ringSweep}
                />
            )}
            {state === "active" && (
                <circle
                    cx="18" cy="18" r="16"
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeDasharray="7 5"
                    strokeLinecap="round"
                    className={s.ringSpin}
                />
            )}
            {state === "completed" && (
                <circle
                    cx="18" cy="18" r="16"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    className={s.ringFlash}
                />
            )}
        </svg>
    );
}

/* ══════════════════════════════════════════════
   Agent Chip
   ══════════════════════════════════════════════ */

interface AgentChipProps {
    agent: AgentConfig;
    activity: AgentActivity;
    onTogglePopover: () => void;
}

const AgentChip = forwardRef<HTMLDivElement, AgentChipProps>(function AgentChip(
    { agent, activity, onTogglePopover },
    ref,
) {
    const isAnimating = activity.state === "thinking" || activity.state === "active";
    const statusText = useTextCycler(
        activity.currentAction?.text ?? "",
        isAnimating,
        2400
    );

    const chipStyle: React.CSSProperties = {
        "--agent-color": agent.color,
        "--agent-glow": agent.colorMid,
        borderColor: isAnimating ? agent.colorMid : undefined,
        background: isAnimating ? agent.colorLight : undefined,
    } as React.CSSProperties;

    return (
        <div ref={ref} className={s.popoverAnchor}>
            <motion.div
                className={cn(s.chip, isAnimating && s.chipActive)}
                style={chipStyle}
                onClick={onTogglePopover}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Ambient glow */}
                {isAnimating && (
                    <div
                        className={s.chipGlow}
                        style={{
                            background: `radial-gradient(ellipse at 20% 50%, ${agent.colorMid}, transparent 70%)`,
                        }}
                    />
                )}

                {/* Avatar + Ring */}
                <div className={s.avatarWrap}>
                    <AgentRing state={activity.state} color={agent.color} />
                    <div
                        className={s.avatarCircle}
                        style={{ background: agent.color }}
                    >
                        {agent.name.charAt(0)}
                    </div>
                    {activity.state === "completed" && (
                        <div className={s.completedCheck} style={{ background: agent.color }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 7l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Text content */}
                <div className={s.chipText}>
                    <span className={s.chipName}>
                        {agent.name}
                    </span>
                    {isAnimating ? (
                        <span className={s.activityText}>
                            {statusText}
                            <span className={s.cursor} style={{ background: agent.color }} />
                        </span>
                    ) : activity.state === "completed" ? (
                        <span className={cn(s.stateBadge, s.stateBadgeDone)} style={{ color: agent.color, borderColor: agent.colorMid }}>
                            done
                        </span>
                    ) : (
                        <span className={cn(s.stateBadge, s.stateBadgeIdle)}>standby</span>
                    )}
                </div>
            </motion.div>
        </div>
    );
});

const POPOVER_WIDTH = 280;

interface AgentPopoverContentProps {
    agent: AgentConfig;
    activity: AgentActivity;
    anchorEl: HTMLElement | null;
}

const AgentPopoverContent = forwardRef<HTMLDivElement, AgentPopoverContentProps>(
    function AgentPopoverContent({ agent, activity, anchorEl }, ref) {
        const { refs, floatingStyles } = useFloating({
            open: Boolean(anchorEl),
            placement: "bottom-start",
            strategy: "fixed",
            /* top/left positioning — avoids fighting Framer Motion transforms on the inner surface */
            transform: false,
            middleware: [
                offset(8),
                flip({ fallbackPlacements: ["top-start"] }),
                shift({ padding: 8 }),
            ],
            whileElementsMounted: autoUpdate,
            elements: {
                reference: anchorEl,
            },
        });

        const setFloatingRef = useCallback(
            (node: HTMLDivElement | null) => {
                refs.setFloating(node);
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
            },
            [refs.setFloating, ref],
        );

        if (!anchorEl) return null;

        return (
            <div
                ref={setFloatingRef}
                style={{
                    ...floatingStyles,
                    width: POPOVER_WIDTH,
                    /* Root stacking: floatingStyles has no z-index; without this, chips (transform/z-index)
                       in the row can paint above the portaled popover. */
                    zIndex: 11_000,
                }}
            >
                <motion.div
                    className={s.popover}
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                <div className={s.popoverHeader}>
                    <span className={s.popoverName} style={{ color: agent.color }}>{agent.name}</span>
                    <span className={s.popoverRole}>{agent.role}</span>
                </div>
                <div className={s.popoverBody}>
                    {activity.activityLog.map((entry, i) => (
                        <motion.div
                            key={i}
                            className={s.logEntry}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={s.logIcon}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="6" cy="6" r="2" fill="currentColor" />
                                </svg>
                            </div>
                            <div className={s.logContent}>
                                <span className={s.logText}>{entry.text}</span>
                                <div className={s.logMeta}>
                                    <span className={s.logTime}>{entry.time}</span>
                                    <span className={s.logStatus}>
                                        <span
                                            className={s.logStatusDot}
                                            style={{ background: entry.status === "active" ? agent.color : "var(--color-success)" }}
                                        />
                                        {entry.status === "active" ? "active" : "done"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                </motion.div>
            </div>
        );
    },
);

/* ══════════════════════════════════════════════
   Main AgentThinking component
   ══════════════════════════════════════════════ */

export interface AgentThinkingDemoProps {
    agents: AgentConfig[];
    title?: string;
    className?: string;
}

export function AgentThinking({ agents, title = "Agent Activity", className }: AgentThinkingDemoProps) {
    const [activities, setActivities] = useState<Record<string, AgentActivity>>({});
    const [openPopover, setOpenPopover] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const popoverPortalRef = useRef<HTMLDivElement>(null);
    const chipAnchorRefs = useRef<Record<string, HTMLDivElement | null>>({});

    /* ── Initialize activities with rotating demo states ── */
    useEffect(() => {
        const initial: Record<string, AgentActivity> = {};
        agents.forEach((agent, idx) => {
            const states: AgentState[] = ["idle", "thinking", "active", "completed"];
            const state = states[idx % states.length];
            const action = agent.actions[0];
            initial[agent.id] = {
                state,
                currentAction: (state === "thinking" || state === "active") ? action : undefined,
                activityLog: agent.actions.slice(0, 5).map((a, i) => ({
                    time: i === 0 ? "just now" : i === 1 ? "1m ago" : `${i * 2}m ago`,
                    iconName: a.iconName,
                    text: a.text.replace("...", ""),
                    status: i === 0 ? "active" as const : "done" as const,
                })),
            };
        });
        setActivities(initial);
    }, [agents]);

    /* ── Auto-rotate states every ~4s ── */
    useEffect(() => {
        const interval = setInterval(() => {
            setActivities(prev => {
                const next = { ...prev };
                const agentIds = Object.keys(next);
                const randomId = agentIds[Math.floor(Math.random() * agentIds.length)];
                const agent = agents.find(a => a.id === randomId);
                if (!agent || !next[randomId]) return prev;

                const states: AgentState[] = ["idle", "thinking", "active", "completed"];
                const currentIdx = states.indexOf(next[randomId].state);
                const newState = states[(currentIdx + 1) % states.length];
                const actionIdx = Math.floor(Math.random() * agent.actions.length);
                const action = agent.actions[actionIdx];

                next[randomId] = {
                    ...next[randomId],
                    state: newState,
                    currentAction: (newState === "thinking" || newState === "active") ? action : undefined,
                    activityLog: [
                        {
                            time: "just now",
                            iconName: action.iconName,
                            text: action.text.replace("...", ""),
                            status: "active" as const,
                        },
                        ...next[randomId].activityLog.slice(0, 4).map(e => ({
                            ...e,
                            status: "done" as const,
                            time: e.time === "just now" ? "1m ago" : e.time,
                        })),
                    ],
                };
                return next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [agents]);

    /* ── Close popover on outside click (chip container + portaled popover) ── */
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const t = e.target as Node;
            if (containerRef.current?.contains(t)) return;
            if (popoverPortalRef.current?.contains(t)) return;
            setOpenPopover(null);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const togglePopover = useCallback((id: string) => {
        setOpenPopover(prev => prev === id ? null : id);
    }, []);

    const activeCount = Object.values(activities).filter(
        a => a.state === "active" || a.state === "thinking"
    ).length;

    const openAgent = openPopover ? agents.find(a => a.id === openPopover) : undefined;
    const openActivity = openPopover ? activities[openPopover] : undefined;
    const anchorEl = openPopover ? chipAnchorRefs.current[openPopover] ?? null : null;

    return (
        <div className={cn(s.container, className)} ref={containerRef}>
            <div className={s.headerBar}>
                <span className={s.headerLogo}>
                    <span className={s.headerLogoIcon}>✦</span>
                    {title}
                </span>
                <div className={s.headerDivider} />
                <span className={s.headerCounter}>
                    <span className={s.headerCounterNumber}>{activeCount}</span>/{agents.length} active
                </span>
            </div>
            <div className={s.chipsRow}>
                {agents.map(agent => (
                    <AgentChip
                        key={agent.id}
                        ref={(el) => {
                            chipAnchorRefs.current[agent.id] = el;
                        }}
                        agent={agent}
                        activity={activities[agent.id] ?? { state: "idle", activityLog: [] }}
                        onTogglePopover={() => togglePopover(agent.id)}
                    />
                ))}
            </div>
            {typeof document !== "undefined" && createPortal(
                <AnimatePresence>
                    {openPopover && openAgent && openActivity && (
                        <AgentPopoverContent
                            key={openPopover}
                            ref={popoverPortalRef}
                            agent={openAgent}
                            activity={openActivity}
                            anchorEl={anchorEl}
                        />
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </div>
    );
}
