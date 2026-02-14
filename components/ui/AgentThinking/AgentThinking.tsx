"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import type { AgentConfig, AgentActivity, AgentState } from "./types";
import s from "./AgentThinking.module.css";

/* ══════════════════════════════════════════════
   Typewriter hook
   ══════════════════════════════════════════════ */

function useTypewriter(text: string, isActive: boolean, speed = 30) {
    const [displayed, setDisplayed] = useState("");
    const indexRef = useRef(0);

    useEffect(() => {
        if (!isActive || !text) {
            setDisplayed("");
            indexRef.current = 0;
            return;
        }
        setDisplayed("");
        indexRef.current = 0;

        const interval = setInterval(() => {
            indexRef.current += 1;
            if (indexRef.current <= text.length) {
                setDisplayed(text.slice(0, indexRef.current));
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, isActive, speed]);

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
    isPopoverOpen: boolean;
    onTogglePopover: () => void;
}

function AgentChip({ agent, activity, isPopoverOpen, onTogglePopover }: AgentChipProps) {
    const isAnimating = activity.state === "thinking" || activity.state === "active";
    const typed = useTypewriter(
        activity.currentAction?.text ?? "",
        isAnimating,
        28
    );

    const chipStyle: React.CSSProperties = {
        "--agent-color": agent.color,
        "--agent-glow": agent.colorMid,
        borderColor: isAnimating ? agent.colorMid : undefined,
        background: isAnimating ? agent.colorLight : undefined,
    } as React.CSSProperties;

    return (
        <div className={s.popoverAnchor}>
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
                        <div className={s.completedCheck}>
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
                            {typed}
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

            {/* Popover */}
            <AnimatePresence>
                {isPopoverOpen && (
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
                )}
            </AnimatePresence>
        </div>
    );
}

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

    /* ── Close popover on outside click ── */
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpenPopover(null);
            }
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
                        agent={agent}
                        activity={activities[agent.id] ?? { state: "idle", activityLog: [] }}
                        isPopoverOpen={openPopover === agent.id}
                        onTogglePopover={() => togglePopover(agent.id)}
                    />
                ))}
            </div>
        </div>
    );
}
