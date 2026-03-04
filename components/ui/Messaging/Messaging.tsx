"use client";

import { forwardRef, useState, useRef } from "react";
import { cn } from "@/lib/cn";
import { Send2 } from "iconsax-react";
import styles from "./Messaging.module.css";

/* ── Types ── */

export interface Message {
    id: string;
    content: string;
    sender: string;
    avatar?: string;
    timestamp: string;
    /** If true, rendered as outgoing (right-aligned) */
    isOwn?: boolean;
}

export interface MessagingProps extends React.HTMLAttributes<HTMLDivElement> {
    messages: Message[];
    /** Called when user sends a message */
    onSend?: (text: string) => void;
    /** Input placeholder */
    placeholder?: string;
    /** Show the composer input */
    showInput?: boolean;
    /** Visual variant */
    variant?: "default" | "card";
    /** Max height for the thread area */
    maxHeight?: number | string;
}

/* ── Helpers ── */

function getInitials(name: string) {
    return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

/* ── Component ── */

export const Messaging = forwardRef<HTMLDivElement, MessagingProps>(
    (
        {
            messages,
            onSend,
            placeholder = "Type a message...",
            showInput = true,
            variant = "default",
            maxHeight = 480,
            className,
            ...props
        },
        ref
    ) => {
        const [draft, setDraft] = useState("");
        const inputRef = useRef<HTMLInputElement>(null);

        const handleSend = () => {
            const text = draft.trim();
            if (!text) return;
            onSend?.(text);
            setDraft("");
            inputRef.current?.focus();
        };

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        };

        return (
            <div
                ref={ref}
                className={cn(styles.root, styles[variant], className)}
                {...props}
            >
                {/* Thread */}
                <div className={styles.thread} style={{ maxHeight }}>
                    {messages.map((msg, i) => {
                        const showAvatar =
                            !msg.isOwn &&
                            (i === 0 || messages[i - 1]?.sender !== msg.sender || messages[i - 1]?.isOwn);

                        return (
                            <div
                                key={msg.id}
                                className={cn(
                                    styles.messageRow,
                                    msg.isOwn ? styles.own : styles.other
                                )}
                            >
                                {!msg.isOwn && (
                                    <div className={styles.avatarCol}>
                                        {showAvatar ? (
                                            msg.avatar ? (
                                                <img
                                                    src={msg.avatar}
                                                    alt={msg.sender}
                                                    className={styles.avatar}
                                                />
                                            ) : (
                                                <div className={styles.avatarFallback}>
                                                    {getInitials(msg.sender)}
                                                </div>
                                            )
                                        ) : (
                                            <div className={styles.avatarSpacer} />
                                        )}
                                    </div>
                                )}

                                <div className={styles.bubbleCol}>
                                    {showAvatar && !msg.isOwn && (
                                        <span className={styles.senderName}>{msg.sender}</span>
                                    )}
                                    <div
                                        className={cn(
                                            styles.bubble,
                                            msg.isOwn ? styles.bubbleOwn : styles.bubbleOther
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                    <span className={cn(styles.timestamp, msg.isOwn && styles.timestampOwn)}>
                                        {msg.timestamp}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Composer */}
                {showInput && (
                    <div className={styles.composer}>
                        <input
                            ref={inputRef}
                            type="text"
                            className={styles.input}
                            placeholder={placeholder}
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className={styles.sendBtn}
                            onClick={handleSend}
                            disabled={!draft.trim()}
                            aria-label="Send message"
                        >
                            <Send2 size={18} variant="Bold" />
                        </button>
                    </div>
                )}
            </div>
        );
    }
);

Messaging.displayName = "Messaging";
