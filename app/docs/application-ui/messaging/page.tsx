"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Messaging } from "@/components/ui/Messaging";
import type { Message } from "@/components/ui/Messaging";

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

const baseMessages: Message[] = [
    {
        id: "1",
        sender: "Olivia Rhye",
        content: "Hey! Have you seen the latest design mockups?",
        timestamp: "10:30 AM",
        isOwn: false,
    },
    {
        id: "2",
        sender: "You",
        content: "Yes, they look great! I especially like the new dashboard layout.",
        timestamp: "10:32 AM",
        isOwn: true,
    },
    {
        id: "3",
        sender: "Olivia Rhye",
        content: "Awesome! I'll share the Figma link with the team. Can you review the component specs by end of day?",
        timestamp: "10:33 AM",
        isOwn: false,
    },
    {
        id: "4",
        sender: "You",
        content: "Sure thing, I'll have feedback ready by 5 PM.",
        timestamp: "10:35 AM",
        isOwn: true,
    },
    {
        id: "5",
        sender: "Olivia Rhye",
        content: "Perfect, thanks! 🎉",
        timestamp: "10:36 AM",
        isOwn: false,
    },
];

const groupMessages: Message[] = [
    {
        id: "1",
        sender: "Phoenix Baker",
        content: "Team standup in 5 minutes!",
        timestamp: "9:55 AM",
        isOwn: false,
    },
    {
        id: "2",
        sender: "Lana Steiner",
        content: "On my way, just finishing up a PR review.",
        timestamp: "9:56 AM",
        isOwn: false,
    },
    {
        id: "3",
        sender: "You",
        content: "I'll be there. Quick update — the API integration is done.",
        timestamp: "9:57 AM",
        isOwn: true,
    },
    {
        id: "4",
        sender: "Phoenix Baker",
        content: "Great news! Let's demo it during standup.",
        timestamp: "9:58 AM",
        isOwn: false,
    },
    {
        id: "5",
        sender: "Demi Wilkinson",
        content: "Joining now 👋",
        timestamp: "9:59 AM",
        isOwn: false,
    },
];

export default function MessagingPage() {
    const [messages, setMessages] = useState<Message[]>(baseMessages);

    const handleSend = (text: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: String(Date.now()),
                sender: "You",
                content: text,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                isOwn: true,
            },
        ]);
    };

    return (
        <div>
            <DocHeader
                title="Messaging"
                description="Chat-style messaging UI with message bubbles, avatars, timestamps, and a composer input. Supports 1-on-1 and group conversations."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Messaging" },
                ]}
            />

            <InstallBlock slug="messaging" components={["Messaging"]} />

            {/* ── Interactive Demo ── */}
            <h2 style={sectionHeading}>Interactive Demo</h2>
            <p style={sectionDesc}>Type a message and press Enter or click Send to add it to the conversation.</p>

            <ComponentPreview
                title="Messaging — Interactive"
                code={`const [messages, setMessages] = useState(initialMessages);

<Messaging
    messages={messages}
    onSend={(text) => setMessages(prev => [...prev, {
        id: String(Date.now()),
        sender: "You",
        content: text,
        timestamp: "Now",
        isOwn: true,
    }])}
/>`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <Messaging
                        messages={messages}
                        onSend={handleSend}
                        variant="card"
                    />
                </div>
            </ComponentPreview>

            {/* ── Group Chat ── */}
            <h2 style={sectionHeading}>Group Conversation</h2>
            <p style={sectionDesc}>Multiple senders with avatars and name labels for group chats.</p>

            <ComponentPreview
                title="Group Chat"
                code={`<Messaging
    messages={groupMessages}
    showInput={false}
    variant="card"
/>`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <Messaging
                        messages={groupMessages}
                        showInput={false}
                        variant="card"
                    />
                </div>
            </ComponentPreview>

            {/* ── Default (No Card) ── */}
            <h2 style={sectionHeading}>Default Variant</h2>
            <p style={sectionDesc}>Borderless thread for embedding inside existing layouts.</p>

            <ComponentPreview
                title="Default Messaging"
                code={`<Messaging messages={messages} showInput={false} />`}
            >
                <div style={{ width: "100%", maxWidth: 560 }}>
                    <Messaging messages={baseMessages} showInput={false} />
                </div>
            </ComponentPreview>

            {/* ── Props ── */}
            <PropsTable
                props={[
                    { name: "messages", type: "Message[]", default: "[]", description: "Array of message objects" },
                    { name: "onSend", type: "(text: string) => void", default: "undefined", description: "Called when user sends a message" },
                    { name: "placeholder", type: "string", default: '"Type a message..."', description: "Input placeholder text" },
                    { name: "showInput", type: "boolean", default: "true", description: "Show the composer input" },
                    { name: "variant", type: '"default" | "card"', default: '"default"', description: "Visual variant" },
                    { name: "maxHeight", type: "number | string", default: "480", description: "Max thread scroll height" },
                ]}
            />

            <h2 style={{ ...sectionHeading, fontSize: 18 }}>Message</h2>
            <PropsTable
                props={[
                    { name: "id", type: "string", default: "—", description: "Unique message identifier" },
                    { name: "content", type: "string", default: "—", description: "Message text content" },
                    { name: "sender", type: "string", default: "—", description: "Sender display name" },
                    { name: "avatar", type: "string", default: "undefined", description: "Sender avatar URL" },
                    { name: "timestamp", type: "string", default: "—", description: "Timestamp label" },
                    { name: "isOwn", type: "boolean", default: "false", description: "If true, renders as outgoing (right-aligned)" },
                ]}
            />
        </div>
    );
}
