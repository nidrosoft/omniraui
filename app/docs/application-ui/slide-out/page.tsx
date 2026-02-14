"use client";

import { cn } from "@/lib/cn";
import {
    Setting2, Sms, Location, Link21, Send2, Card as CardIcon,
    Notification, Calendar, Tag2, DocumentUpload, Filter,
    People, Crown1, ShoppingCart, MessageText, Cpu,
} from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import s from "@/components/ui/SlideOut/SlideOut.module.css";

/* ══════════════════════════════════════════════
   Shared helpers
   ══════════════════════════════════════════════ */

const noop = () => {};

function ScreenWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className={s.laptopScreen}>
            {children}
        </div>
    );
}

function CloseBtn() {
    return (
        <button className={s.closeBtn} aria-label="Close" tabIndex={-1}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
    );
}

function CheckSvg() {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function VerifiedIcon() {
    return (
        <span className={s.verifiedBadge}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M16.5 9l-1.72-1.97.24-2.6-2.54-.57L11.1 1.5 9 2.46 6.9 1.5 5.52 3.86l-2.54.56.24 2.6L1.5 9l1.72 1.97-.24 2.6 2.54.57L6.9 16.5 9 15.54l2.1.96 1.38-2.36 2.54-.57-.24-2.6L16.5 9z" fill="currentColor"/><path d="M6.75 9l1.5 1.5 3-3" stroke="var(--color-bg-card)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
    );
}

/* ══════════════════════════════════════════════
   01 — User Settings Slideout
   ══════════════════════════════════════════════ */

function UserSettingsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            {/* Cover */}
            <div className={s.coverGradient} style={{ background: "linear-gradient(135deg, #e9dcbb 0%, #d4b8e0 50%, #c4a8d8 100%)" }} />

            {/* Profile */}
            <div className={s.profileSection}>
                <div className={s.profileAvatar}>SH</div>
                <div>
                    <div className={s.profileName}>
                        <span className={s.profileNameText}>Sienna Hewitt</span>
                        <VerifiedIcon />
                    </div>
                    <span className={s.profileHandle}>@siennahewitt</span>
                </div>

                <div className={s.statsRow}>
                    <div className={s.statItem}><span className={s.statLabel}>Followers</span><span className={s.statValue}>32,086</span></div>
                    <hr className={s.statDivider} />
                    <div className={s.statItem}><span className={s.statLabel}>Following</span><span className={s.statValue}>4,698</span></div>
                    <hr className={s.statDivider} />
                    <div className={s.statItem}><span className={s.statLabel}>Posts</span><span className={s.statValue}>128</span></div>
                    <hr className={s.statDivider} />
                    <div className={s.statItem}><span className={s.statLabel}>Collections</span><span className={s.statValue}>24</span></div>
                </div>
            </div>

            {/* Form */}
            <div className={s.content}>
                <hr className={s.dottedDivider} />
                <div className={s.formRow}>
                    <Input label="Name" defaultValue="Sienna" inputSize="sm" />
                    <Input label="Last name" defaultValue="Hewitt" inputSize="sm" />
                </div>
                <hr className={s.dottedDivider} />
                <Input label="Email" type="email" defaultValue="hi@siennahewitt.com" inputSize="sm" leadingIcon={<Sms size={16} variant="Bulk" color="currentColor" />} />
                <hr className={s.dottedDivider} />
                <Input label="Username" defaultValue="siennahewitt" inputSize="sm" leadingText="omnira.space/@" />
            </div>

            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Save</Button>
            </div>

            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const userSettingsCode = `import { SlideOut } from "@/components/ui/SlideOut";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

<SlideOut open={open} onClose={onClose} size="md">
    {/* Cover image */}
    {/* Profile section with avatar, name, stats */}
    <Input label="Name" defaultValue="Sienna" />
    <Input label="Email" defaultValue="hi@siennahewitt.com" />
    <Input label="Username" defaultValue="siennahewitt" leadingText="omnira.space/@" />
    <footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary">Save</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   02 — Project Settings Slideout
   ══════════════════════════════════════════════ */

function ProjectSettingsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Setting2 size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Project settings</h2>
                    <p className={s.headerDescription}>Configure your project preferences.</p>
                </div>
            </div>

            <div className={s.content}>
                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Project name</span>
                    <span className={s.sectionText}>Update your project name and description. This will be visible to all team members and appears in your dashboard and shared links.</span>
                </div>
                <div className={s.placeholderBlock} />

                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Team permissions</span>
                    <span className={s.sectionText}>Manage who can view, edit, and share your project. You can invite new team members or update existing permissions.</span>
                </div>
                <div className={s.placeholderBlock} />

                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Integration settings</span>
                    <span className={s.sectionText}>Connect your project with external services like Slack, GitHub, or Figma. Enable notifications and sync data automatically.</span>
                </div>
                <div className={s.placeholderBlock} />
            </div>

            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Save</Button>
            </div>

            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const projectSettingsCode = `import { SlideOut } from "@/components/ui/SlideOut";
import { Button } from "@/components/ui/Button";
import { Setting2 } from "iconsax-react";

<SlideOut open={open} onClose={onClose} size="md">
    <header>
        <Setting2 size={20} variant="Bulk" color="currentColor" />
        <h2>Project settings</h2>
        <p>Configure your project preferences.</p>
    </header>
    <section>
        <h3>Project name</h3>
        <p>Update your project name and description.</p>
    </section>
    <section>
        <h3>Team permissions</h3>
        <p>Manage who can view, edit, and share.</p>
    </section>
    <footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary">Save</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   03 — Freelancer Profile Slideout
   ══════════════════════════════════════════════ */

function FreelancerProfileDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div style={{ padding: "12px 16px 0" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>Freelancer</span>
            </div>

            {/* Cover */}
            <div style={{ padding: "6px 6px 0" }}>
                <div className={s.coverGradient} style={{ background: "linear-gradient(135deg, #a8e6cf 0%, #c4b5fd 50%, #f0abfc 100%)", borderRadius: "var(--radius-md)", height: 60 }} />
            </div>

            {/* Profile */}
            <div className={s.profileSection} style={{ marginTop: -20 }}>
                <div style={{ position: "relative", width: "fit-content" }}>
                    <div className={s.profileAvatar}>OR</div>
                    <VerifiedIcon />
                </div>
                <div>
                    <div className={s.profileName}>
                        <span className={s.profileNameText}>Olivia Rhye</span>
                        <span className={s.onlineDot} />
                    </div>
                    <span className={s.profileHandle}>olivia@untitledui.com</span>
                </div>

                <div className={s.tagsRow}>
                    <Badge variant="section" size="sm">Design</Badge>
                    <Badge variant="section" size="sm">Product</Badge>
                    <Badge variant="section" size="sm">UI Design</Badge>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                    <Button variant="secondary" size="sm" onClick={noop}>Add to project</Button>
                    <Button variant="primary" size="sm" onClick={noop}>New project</Button>
                </div>
            </div>

            <div className={s.content}>
                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>About</span>
                    <span className={s.sectionText}>I&apos;m a Designer based in Melbourne. I co-founded Layers Studio where we help early stage founders and startups take their product from 0→1.</span>
                </div>

                <div className={s.infoRow}><Location size={16} variant="Bulk" className={s.infoIcon} /> Melbourne, Australia</div>
                <div className={s.infoRow}><Link21 size={16} variant="Bulk" className={s.infoIcon} /> layers.studio</div>

                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Work experience</span>
                </div>

                <div className={s.expItem}>
                    <div className={s.expLogo}>🟣</div>
                    <div className={s.expInfo}>
                        <span className={s.expTitle}>Founder</span>
                        <span className={s.expCompany}>Layers Studio™</span>
                        <span className={s.expDate}>May 2020 – Present</span>
                    </div>
                </div>
                <div className={s.expItem}>
                    <div className={s.expLogo}>🟢</div>
                    <div className={s.expInfo}>
                        <span className={s.expTitle}>UX Designer</span>
                        <span className={s.expCompany}>Sisyphus</span>
                        <span className={s.expDate}>Jan 2018 – May 2020</span>
                    </div>
                </div>
                <div className={s.expItem}>
                    <div className={s.expLogo}>🔵</div>
                    <div className={s.expInfo}>
                        <span className={s.expTitle}>Visual Designer</span>
                        <span className={s.expCompany}>Catalog</span>
                        <span className={s.expDate}>Mar 2017 – Jan 2018</span>
                    </div>
                </div>
            </div>

            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const freelancerCode = `import { SlideOut } from "@/components/ui/SlideOut";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

<SlideOut open={open} onClose={onClose} size="md">
    {/* Cover gradient + avatar */}
    <h2>Olivia Rhye</h2>
    <p>olivia@untitledui.com</p>
    <Badge>Design</Badge>
    <Badge>Product</Badge>
    <Button variant="secondary">Add to project</Button>
    <Button variant="primary">New project</Button>
    {/* About, location, work experience */}
</SlideOut>`;

/* ══════════════════════════════════════════════
   04 — Messages Slideout
   ══════════════════════════════════════════════ */

const messages = [
    { name: "Phoenix Baker", handle: "@phoenix", time: "Just now", text: "Looks good!", initials: "PB" },
    { name: "Lana Steiner", handle: "@lana", time: "2 mins ago", text: "Thanks so much, happy with that.", initials: "LS" },
    { name: "Demi Wilkinson", handle: "@demi", time: "2 mins ago", text: "Got you a coffee", initials: "DW" },
    { name: "Candice Wu", handle: "@candice", time: "3 hours ago", text: "Great to see you again!", initials: "CW" },
    { name: "Natali Craig", handle: "@natali", time: "6 hours ago", text: "We should ask Oli about this...", initials: "NC" },
    { name: "Drew Cano", handle: "@drew", time: "12 hours ago", text: "Okay, see you then.", initials: "DC" },
];

function MessagesDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div style={{ padding: "12px 16px 0" }}>
                <h2 className={s.headerTitle}>Messages</h2>
                <p className={s.headerDescription}>Lorem ipsum dolor sit amet.</p>
            </div>

            <div style={{ padding: "8px 16px 0" }}>
                <div className={s.tabsBar}>
                    <button className={cn(s.tab, s.tabActive)}>Recent</button>
                    <button className={s.tab}>Groups</button>
                    <button className={s.tab}>Archive</button>
                </div>
            </div>

            <div className={s.content}>
                {messages.map((m, i) => (
                    <div key={i} className={s.messageItem}>
                        <div className={s.messageAvatar}>
                            {m.initials}
                            <span className={s.messageOnline} />
                        </div>
                        <div className={s.messageBody}>
                            <div className={s.messageMeta}>
                                <span className={s.messageName}>{m.name}</span>
                                <span className={s.messageTime}>{m.time}</span>
                            </div>
                            <span className={s.messageHandle}>{m.handle}</span>
                            <div className={s.messageBubble}>{m.text}</div>
                        </div>
                    </div>
                ))}
            </div>

            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const messagesCode = `import { SlideOut } from "@/components/ui/SlideOut";

<SlideOut open={open} onClose={onClose} size="md">
    <h2>Messages</h2>
    <Tabs>Recent | Groups | Archive</Tabs>
    {messages.map(msg => (
        <MessageItem
            avatar={msg.initials}
            name={msg.name}
            handle={msg.handle}
            time={msg.time}
            text={msg.text}
        />
    ))}
</SlideOut>`;

/* ══════════════════════════════════════════════
   05 — Group Chat Slideout
   ══════════════════════════════════════════════ */

const chatMessages = [
    { name: "Lana Steiner", time: "Thursday 11:40am", text: "Hey team, I've finished with the requirements doc!", initials: "LS", own: false },
    { name: "Lana Steiner", time: "Thursday 11:40am", file: { name: "Tech requirements.pdf", size: "1.2 MB" }, initials: "LS", own: false },
    { name: "You", time: "Thursday 11:41am", text: "Awesome. Thanks.", initials: "", own: true },
    { name: "Demi Wilkinson", time: "Thursday 11:44am", text: "Good timing—was just looking at this.", initials: "DW", own: false },
];

function GroupChatDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div style={{ padding: "12px 16px 0" }}>
                <h2 className={s.headerTitle}>Group chat</h2>
            </div>

            <div style={{ padding: "8px 16px 0" }}>
                <div className={s.tabsBar}>
                    <button className={cn(s.tab, s.tabActive)}>Recent</button>
                    <button className={s.tab}>Groups</button>
                    <button className={s.tab}>Archive</button>
                </div>
            </div>

            <div className={s.content}>
                {chatMessages.map((m, i) => (
                    <div key={i}>
                        {m.own ? (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                                <div className={s.messageMeta} style={{ justifyContent: "flex-end" }}>
                                    <span className={s.messageName}>{m.name}</span>
                                    <span className={s.messageTime}>{m.time}</span>
                                </div>
                                <div className={cn(s.messageBubble, s.messageBubbleOwn)}>{m.text}</div>
                            </div>
                        ) : (
                            <div className={s.messageItem}>
                                <div className={s.messageAvatar}>
                                    {m.initials}
                                    <span className={s.messageOnline} />
                                </div>
                                <div className={s.messageBody}>
                                    <div className={s.messageMeta}>
                                        <span className={s.messageName}>{m.name}</span>
                                        <span className={s.messageTime}>{m.time}</span>
                                    </div>
                                    {m.text && <div className={s.messageBubble}>{m.text}</div>}
                                    {m.file && (
                                        <div className={s.fileAttachment}>
                                            <div className={s.fileIcon}>PDF</div>
                                            <div className={s.fileInfo}>
                                                <span className={s.fileName}>{m.file.name}</span>
                                                <span className={s.fileSize}>{m.file.size}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className={s.dateSeparator}>
                    <span className={s.dateSeparatorText}>Today</span>
                </div>

                <div className={s.messageItem}>
                    <div className={s.messageAvatar}>PB<span className={s.messageOnline} /></div>
                    <div className={s.messageBody}>
                        <div className={s.messageMeta}>
                            <span className={s.messageName}>Phoenix Baker</span>
                            <span className={s.messageTime}>Friday 2:20pm</span>
                        </div>
                        <div className={s.messageBubble}>Hey Olivia, can you please review the latest design when you can?</div>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <div className={s.messageMeta} style={{ justifyContent: "flex-end" }}>
                        <span className={s.messageName}>You</span>
                        <span className={s.messageTime}>Friday 2:20pm</span>
                    </div>
                    <div className={cn(s.messageBubble, s.messageBubbleOwn)}>Sure thing, I&apos;ll have a look today.</div>
                </div>
            </div>

            <div className={s.chatInputBar}>
                <input className={s.chatInput} placeholder="Message" />
                <button className={s.chatSendBtn} aria-label="Send">
                    <Send2 size={16} variant="Bulk" color="currentColor" />
                </button>
            </div>

            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const groupChatCode = `import { SlideOut } from "@/components/ui/SlideOut";

<SlideOut open={open} onClose={onClose} size="md">
    <h2>Group chat</h2>
    <Tabs>Recent | Groups | Archive</Tabs>
    {/* Chat messages with bubbles, file attachments */}
    {/* Date separator */}
    <ChatInput placeholder="Message" />
</SlideOut>`;

/* ══════════════════════════════════════════════
   06 — Payment Method Slideout
   ══════════════════════════════════════════════ */

const paymentCards = [
    { label: "Visa ending in 1234", desc: "Expires 06/2024", brand: "VISA", selected: true },
    { label: "Mastercard ending in 5678", desc: "Expires 11/2025", brand: "MC", selected: false },
    { label: "Apple Pay", desc: "Connected", brand: "AP", selected: false },
    { label: "Stripe (Visa ending 9012)", desc: "Expires 03/2026", brand: "STR", selected: false },
];

function PaymentMethodDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><CardIcon size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Payment method</h2>
                    <p className={s.headerDescription}>Update your plan payment details.</p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.radioGroup}>
                    {paymentCards.map((c, i) => (
                        <div key={i} className={cn(s.radioCard, c.selected && s.radioCardSelected)}>
                            <div className={cn(s.radioCircle, c.selected && s.radioCircleSelected)}>
                                {c.selected && <div className={s.radioCircleInner} />}
                            </div>
                            <div className={s.radioCardIcon}>{c.brand}</div>
                            <div className={s.radioCardBody}>
                                <span className={s.radioCardTitle}>{c.label}</span>
                                <span className={s.radioCardDesc}>{c.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <Button variant="secondary" size="sm" onClick={noop} style={{ alignSelf: "flex-end" }}>+ Add payment method</Button>
                <hr className={s.solidDivider} />
                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Billing contact</span>
                    <span className={s.sectionText}>Add a second billing contact email.</span>
                </div>
                <Input label="Email address" type="email" defaultValue="accounts@omnira.space" inputSize="sm" leadingIcon={<Sms size={16} variant="Bulk" color="currentColor" />} />
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Confirm</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const paymentMethodCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<CardIcon />} title="Payment method" />
    <RadioGroup items={paymentCards} />
    <Input label="Email address" type="email" />
    <footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   07 — Payment Details Slideout
   ══════════════════════════════════════════════ */

function PaymentDetailsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><CardIcon size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Payment details</h2>
                    <p className={s.headerDescription}>Enter your card information below.</p>
                </div>
            </div>
            <div className={s.content}>
                <Input label="Name on card" defaultValue="Sienna Hewitt" inputSize="sm" />
                <Input label="Card number" defaultValue="4242 4242 4242 4242" inputSize="sm" />
                <div className={s.formRow}>
                    <Input label="Expiry" defaultValue="12/26" inputSize="sm" />
                    <Input label="CVC" defaultValue="123" inputSize="sm" />
                </div>
                <hr className={s.solidDivider} />
                <Input label="Billing address" defaultValue="123 Main Street" inputSize="sm" />
                <div className={s.formRow}>
                    <Input label="City" defaultValue="Melbourne" inputSize="sm" />
                    <Input label="Postcode" defaultValue="3000" inputSize="sm" />
                </div>
                <Input label="Country" defaultValue="Australia" inputSize="sm" />
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Save card</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const paymentDetailsCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<CardIcon />} title="Payment details" />
    <Input label="Name on card" />
    <Input label="Card number" />
    <Input label="Expiry" /> <Input label="CVC" />
    <Input label="Billing address" />
    <footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save card</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   08 — Plan Slideout
   ══════════════════════════════════════════════ */

const plans = [
    { name: "Free", price: "$0", period: "/mo", features: ["1 user", "1 GB storage", "Email support"], selected: false },
    { name: "Pro", price: "$20", period: "/mo", features: ["5 users", "50 GB storage", "Priority support", "API access"], selected: true },
    { name: "Enterprise", price: "$99", period: "/mo", features: ["Unlimited users", "500 GB storage", "24/7 support", "Custom integrations", "SSO"], selected: false },
];

function PlanDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Crown1 size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Change plan</h2>
                    <p className={s.headerDescription}>Choose the plan that works best for you.</p>
                </div>
            </div>
            <div className={s.content}>
                {plans.map((p, i) => (
                    <div key={i} className={cn(s.planCard, p.selected && s.planCardSelected)}>
                        <div className={s.planCardHeader}>
                            <span className={s.planCardName}>{p.name}</span>
                            <span className={s.planCardPrice}>{p.price}<span className={s.planCardPricePeriod}>{p.period}</span></span>
                        </div>
                        <div className={s.planCardFeatures}>
                            {p.features.map((f, j) => (
                                <div key={j} className={s.planCardFeature}>
                                    <span className={s.planCardCheck}><CheckSvg /></span>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Upgrade</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const planCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Crown1 />} title="Change plan" />
    {plans.map(plan => <PlanCard key={plan.name} {...plan} />)}
    <footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Upgrade</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   09 — Team Members Slideout
   ══════════════════════════════════════════════ */

const members = [
    { name: "Olivia Rhye", email: "olivia@omnira.space", role: "Owner", initials: "OR" },
    { name: "Phoenix Baker", email: "phoenix@omnira.space", role: "Admin", initials: "PB" },
    { name: "Lana Steiner", email: "lana@omnira.space", role: "Editor", initials: "LS" },
    { name: "Demi Wilkinson", email: "demi@omnira.space", role: "Viewer", initials: "DW" },
    { name: "Candice Wu", email: "candice@omnira.space", role: "Editor", initials: "CW" },
];

function TeamMembersDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><People size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Team members</h2>
                    <p className={s.headerDescription}>Manage your team and their roles.</p>
                </div>
            </div>
            <div className={s.content}>
                <Input label="Invite by email" placeholder="colleague@company.com" inputSize="sm" />
                <hr className={s.solidDivider} />
                {members.map((m, i) => (
                    <div key={i} className={s.memberRow}>
                        <div className={s.messageAvatar}>{m.initials}</div>
                        <div className={s.memberInfo}>
                            <span className={s.memberName}>{m.name}</span>
                            <span className={s.memberEmail}>{m.email}</span>
                        </div>
                        <span className={s.memberRole}>{m.role}</span>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Send invite</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const teamMembersCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<People />} title="Team members" />
    <Input label="Invite by email" />
    {members.map(m => <MemberRow key={m.email} {...m} />)}
    <footer>
        <Button variant="primary">Send invite</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   10 — Filters Slideout
   ══════════════════════════════════════════════ */

function FiltersDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Filter size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Filters</h2>
                    <p className={s.headerDescription}>Narrow down your results.</p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.filterGroup}>
                    <span className={s.filterLabel}>Category</span>
                    <div className={s.filterChips}>
                        {["All", "Design", "Development", "Marketing", "Sales"].map((c, i) => (
                            <button key={i} className={cn(s.filterChip, i === 0 && s.filterChipActive)}>{c}</button>
                        ))}
                    </div>
                </div>
                <hr className={s.solidDivider} />
                <div className={s.filterGroup}>
                    <span className={s.filterLabel}>Status</span>
                    <div className={s.filterChips}>
                        {["Active", "Pending", "Completed", "Archived"].map((c, i) => (
                            <button key={i} className={cn(s.filterChip, i === 0 && s.filterChipActive)}>{c}</button>
                        ))}
                    </div>
                </div>
                <hr className={s.solidDivider} />
                <div className={s.filterGroup}>
                    <span className={s.filterLabel}>Price range</span>
                    <div className={s.filterRange}>
                        <input className={s.filterRangeInput} defaultValue="$0" />
                        <span className={s.filterRangeSep}>–</span>
                        <input className={s.filterRangeInput} defaultValue="$500" />
                    </div>
                </div>
                <hr className={s.solidDivider} />
                <div className={s.filterGroup}>
                    <span className={s.filterLabel}>Rating</span>
                    <div className={s.filterChips}>
                        {["★★★★★", "★★★★+", "★★★+"].map((c, i) => (
                            <button key={i} className={cn(s.filterChip, i === 0 && s.filterChipActive)}>{c}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Reset</Button>
                <Button variant="primary" size="sm" onClick={noop}>Apply filters</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const filtersCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Filter />} title="Filters" />
    <FilterChips label="Category" items={categories} />
    <FilterChips label="Status" items={statuses} />
    <PriceRange min={0} max={500} />
    <footer>
        <Button variant="secondary">Reset</Button>
        <Button variant="primary">Apply filters</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   11 — File Upload Slideout
   ══════════════════════════════════════════════ */

const uploadedFiles = [
    { name: "design-system-v2.fig", size: "4.2 MB", progress: 100 },
    { name: "brand-guidelines.pdf", size: "2.8 MB", progress: 100 },
    { name: "wireframes-final.sketch", size: "12.1 MB", progress: 67 },
];

function FileUploadDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><DocumentUpload size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Upload files</h2>
                    <p className={s.headerDescription}>Upload and attach files to this project.</p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.uploadZone}>
                    <div className={s.uploadIcon}><DocumentUpload size={18} variant="Bulk" color="currentColor" /></div>
                    <span className={s.uploadText}><span className={s.uploadTextAccent}>Click to upload</span> or drag and drop</span>
                    <span className={s.uploadHint}>SVG, PNG, JPG, GIF (max. 10MB)</span>
                </div>
                {uploadedFiles.map((f, i) => (
                    <div key={i} className={s.uploadFileItem}>
                        <div className={s.fileIcon}>{f.name.split(".").pop()?.toUpperCase().slice(0, 3)}</div>
                        <div className={s.uploadFileInfo}>
                            <span className={s.uploadFileName}>{f.name}</span>
                            <span className={s.uploadFileSize}>{f.size} – {f.progress}%</span>
                            <div className={s.uploadFileProgress}>
                                <div className={s.uploadFileProgressBar} style={{ width: `${f.progress}%` }} />
                            </div>
                        </div>
                        <button className={s.uploadFileRemove} aria-label="Remove">×</button>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Upload</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const fileUploadCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<DocumentUpload />} title="Upload files" />
    <UploadZone accept="image/*" maxSize="10MB" />
    {files.map(f => <FileItem key={f.name} {...f} />)}
    <footer>
        <Button variant="primary">Upload</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   12 — Labels Slideout
   ══════════════════════════════════════════════ */

const labels = [
    { name: "Bug", color: "#ef4444", count: 12 },
    { name: "Feature", color: "#3b82f6", count: 8 },
    { name: "Enhancement", color: "#8b5cf6", count: 5 },
    { name: "Documentation", color: "#06b6d4", count: 3 },
    { name: "Design", color: "#f59e0b", count: 7 },
    { name: "Urgent", color: "#ec4899", count: 2 },
    { name: "Good first issue", color: "#22c55e", count: 4 },
];

function LabelsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Tag2 size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Labels</h2>
                    <p className={s.headerDescription}>Manage project labels and categories.</p>
                </div>
            </div>
            <div className={s.content}>
                <Input placeholder="Search labels..." inputSize="sm" />
                <hr className={s.solidDivider} />
                {labels.map((l, i) => (
                    <div key={i} className={s.labelItem}>
                        <div className={s.labelDot} style={{ background: l.color }} />
                        <span className={s.labelName}>{l.name}</span>
                        <span className={s.labelCount}>{l.count}</span>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Create label</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const labelsCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Tag2 />} title="Labels" />
    <Input placeholder="Search labels..." />
    {labels.map(l => <LabelItem key={l.name} {...l} />)}
    <footer>
        <Button variant="primary">Create label</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   13 — Project Details Slideout
   ══════════════════════════════════════════════ */

function ProjectDetailsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Setting2 size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Project details</h2>
                    <p className={s.headerDescription}>Overview of the current project.</p>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.detailRow}><span className={s.detailLabel}>Name</span><span className={s.detailValue}>Omnira Design System</span></div>
                <div className={s.detailRow}><span className={s.detailLabel}>Status</span><span className={s.detailValue}><Badge variant="success" size="sm">Active</Badge></span></div>
                <div className={s.detailRow}><span className={s.detailLabel}>Created</span><span className={s.detailValue}>Jan 15, 2025</span></div>
                <div className={s.detailRow}><span className={s.detailLabel}>Owner</span><span className={s.detailValue}>Olivia Rhye</span></div>
                <div className={s.detailRow}><span className={s.detailLabel}>Team</span><span className={s.detailValue}>5 members</span></div>
                <hr className={s.solidDivider} />
                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Description</span>
                    <span className={s.sectionText}>A comprehensive glassmorphism design system with 80+ components, built for modern web applications. Includes dark and light themes, custom CLI tooling, and full documentation.</span>
                </div>
                <hr className={s.solidDivider} />
                <div className={s.sectionBlock}>
                    <span className={s.sectionTitle}>Progress</span>
                </div>
                <div className={s.progressBar}><div className={s.progressBarFill} style={{ width: "72%" }} /></div>
                <div className={s.summaryLine}>
                    <span className={s.summaryLabel}>72% complete</span>
                    <span className={s.summaryValue}>58 / 80 tasks</span>
                </div>
                <hr className={s.solidDivider} />
                <div className={s.tagsRow}>
                    <Badge variant="section" size="sm">React</Badge>
                    <Badge variant="section" size="sm">TypeScript</Badge>
                    <Badge variant="section" size="sm">CSS Modules</Badge>
                    <Badge variant="section" size="sm">Next.js</Badge>
                </div>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const projectDetailsCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Setting2 />} title="Project details" />
    <DetailRow label="Name" value="Omnira Design System" />
    <DetailRow label="Status" value={<Badge>Active</Badge>} />
    <ProgressBar value={72} />
    <Tags items={["React", "TypeScript"]} />
</SlideOut>`;

/* ══════════════════════════════════════════════
   14 — Notification Settings Slideout
   ══════════════════════════════════════════════ */

const notifSettings = [
    { title: "Push notifications", desc: "Receive push notifications on your device.", on: true },
    { title: "Email notifications", desc: "Get email updates for important activity.", on: true },
    { title: "SMS notifications", desc: "Receive text messages for urgent alerts.", on: false },
    { title: "Weekly digest", desc: "Get a summary of activity every Monday.", on: true },
    { title: "Marketing emails", desc: "Receive product updates and announcements.", on: false },
];

function NotificationSettingsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Notification size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Notification settings</h2>
                    <p className={s.headerDescription}>Choose how you want to be notified.</p>
                </div>
            </div>
            <div className={s.content}>
                {notifSettings.map((n, i) => (
                    <div key={i} className={s.settingsRow}>
                        <div className={s.settingsRowInfo}>
                            <span className={s.settingsRowTitle}>{n.title}</span>
                            <span className={s.settingsRowDesc}>{n.desc}</span>
                        </div>
                        <div className={cn(s.toggleSwitch, n.on && s.toggleSwitchOn)}>
                            <div className={s.toggleKnob} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={noop}>Save</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const notifSettingsCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Notification />} title="Notification settings" />
    {settings.map(s => (
        <SettingsRow title={s.title} desc={s.desc}>
            <Toggle checked={s.on} />
        </SettingsRow>
    ))}
    <footer>
        <Button variant="primary">Save</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   15 — Notifications Slideout
   ══════════════════════════════════════════════ */

const notifications = [
    { text: ["Phoenix Baker", " commented on your post"], time: "2 min ago", read: false },
    { text: ["Lana Steiner", " shared a file with you"], time: "1 hour ago", read: false },
    { text: ["Demi Wilkinson", " invited you to ", "Project Alpha"], time: "3 hours ago", read: false },
    { text: ["Candice Wu", " mentioned you in a comment"], time: "Yesterday", read: true },
    { text: ["Natali Craig", " approved your request"], time: "2 days ago", read: true },
];

function NotificationsDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div style={{ padding: "20px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <h2 className={s.headerTitle}>Notifications</h2>
                    <p className={s.headerDescription}>You have 3 unread notifications.</p>
                </div>
            </div>
            <div className={s.content}>
                {notifications.map((n, i) => (
                    <div key={i} className={s.notifItem}>
                        <div className={cn(s.notifDot, n.read && s.notifDotRead)} />
                        <div className={s.notifBody}>
                            <span className={s.notifText}>
                                {n.text.map((t, j) => j % 2 === 0 ? <span key={j} className={s.notifTextBold}>{t}</span> : t)}
                            </span>
                            <span className={s.notifTime}>{n.time}</span>
                        </div>
                        <div className={s.notifIcon}><Notification size={16} variant="Bulk" color="currentColor" /></div>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Mark all read</Button>
                <Button variant="primary" size="sm" onClick={noop}>View all</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const notificationsCode = `<SlideOut open={open} onClose={onClose}>
    <h2>Notifications</h2>
    {notifications.map(n => (
        <NotifItem text={n.text} time={n.time} read={n.read} />
    ))}
    <footer>
        <Button variant="secondary">Mark all read</Button>
        <Button variant="primary">View all</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   16 — Order Summary Slideout
   ══════════════════════════════════════════════ */

const orderItems = [
    { name: "Omnira Pro License", qty: 1, price: "$99.00", emoji: "🎨" },
    { name: "Icon Pack Add-on", qty: 2, price: "$24.00", emoji: "✨" },
    { name: "Priority Support", qty: 1, price: "$49.00", emoji: "🛡️" },
];

function OrderSummaryDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><ShoppingCart size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Order summary</h2>
                    <p className={s.headerDescription}>Review your order before checkout.</p>
                </div>
            </div>
            <div className={s.content}>
                {orderItems.map((item, i) => (
                    <div key={i} className={s.orderRow}>
                        <div className={s.orderThumb}>{item.emoji}</div>
                        <div className={s.orderInfo}>
                            <span className={s.orderName}>{item.name}</span>
                            <span className={s.orderQty}>Qty: {item.qty}</span>
                        </div>
                        <span className={s.orderPrice}>{item.price}</span>
                    </div>
                ))}
                <hr className={s.solidDivider} />
                <div className={s.summaryLine}><span className={s.summaryLabel}>Subtotal</span><span className={s.summaryValue}>$172.00</span></div>
                <div className={s.summaryLine}><span className={s.summaryLabel}>Tax</span><span className={s.summaryValue}>$17.20</span></div>
                <div className={s.summaryLine}><span className={s.summaryLabel}>Discount</span><span className={s.summaryValue} style={{ color: "var(--color-success)" }}>-$20.00</span></div>
                <hr className={s.solidDivider} />
                <div className={s.summaryLine}><span className={s.summaryTotal}>Total</span><span className={s.summaryTotal}>$169.20</span></div>
                <Input label="Promo code" placeholder="Enter code" inputSize="sm" />
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>Continue shopping</Button>
                <Button variant="primary" size="sm" onClick={noop}>Checkout</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const orderSummaryCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<ShoppingCart />} title="Order summary" />
    {items.map(i => <OrderRow key={i.name} {...i} />)}
    <SummaryLine label="Subtotal" value="$172.00" />
    <SummaryLine label="Total" value="$169.20" bold />
    <footer>
        <Button variant="primary">Checkout</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   17 — Calendar Event Slideout
   ══════════════════════════════════════════════ */

const calEvents = [
    { title: "Design review", time: "9:00 AM – 10:00 AM", color: "#8b5cf6", attendees: ["OR", "PB", "LS"] },
    { title: "Sprint planning", time: "11:00 AM – 12:00 PM", color: "#3b82f6", attendees: ["OR", "DW"] },
    { title: "Lunch with client", time: "12:30 PM – 1:30 PM", color: "#22c55e", attendees: ["OR"] },
    { title: "Team standup", time: "3:00 PM – 3:15 PM", color: "#f59e0b", attendees: ["OR", "PB", "LS", "DW"] },
];

function CalendarEventDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Calendar size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>Today&apos;s schedule</h2>
                    <p className={s.headerDescription}>Wednesday, February 12, 2025</p>
                </div>
            </div>
            <div className={s.content}>
                {calEvents.map((ev, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0" }}>
                        <div className={s.calendarEventColor} style={{ background: ev.color }} />
                        <div className={s.calendarEventBody}>
                            <span className={s.calendarEventTitle}>{ev.title}</span>
                            <span className={s.calendarEventTime}>{ev.time}</span>
                            <div className={s.calendarEventMeta}>
                                <div className={s.calendarAvatarStack}>
                                    {ev.attendees.map((a, j) => (
                                        <div key={j} className={s.calendarAvatarStackItem}>{a}</div>
                                    ))}
                                </div>
                                <span>{ev.attendees.length} attendee{ev.attendees.length > 1 ? "s" : ""}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.footer}>
                <Button variant="secondary" size="sm" onClick={noop}>View calendar</Button>
                <Button variant="primary" size="sm" onClick={noop}>New event</Button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const calendarEventCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Calendar />} title="Today's schedule" />
    {events.map(ev => (
        <CalendarEvent color={ev.color} title={ev.title}
            time={ev.time} attendees={ev.attendees} />
    ))}
    <footer>
        <Button variant="primary">New event</Button>
    </footer>
</SlideOut>`;

/* ══════════════════════════════════════════════
   18 — AI Assistant Slideout
   ══════════════════════════════════════════════ */

const aiMessages = [
    { role: "assistant", text: "Hi! I'm your AI assistant. How can I help you today?" },
    { role: "user", text: "Can you help me write a product description for our new design system?" },
    { role: "assistant", text: "Of course! Here's a draft:\n\nOmnira UI is a premium glassmorphism component library featuring 80+ production-ready components. Built with React, TypeScript, and CSS Modules — no Tailwind required." },
    { role: "user", text: "That's great, can you make it shorter?" },
    { role: "assistant", text: "Omnira UI — 80+ glassmorphism components for React. Dark-first, fully typed, zero Tailwind. Ship beautiful interfaces faster." },
];

function AIAssistantDemo() {
    return (
        <ScreenWrapper><div className={s.staticPanel}>
            <div className={s.header}>
                <div className={s.headerIcon}><Cpu size={20} variant="Bulk" color="currentColor" /></div>
                <div className={s.headerText}>
                    <h2 className={s.headerTitle}>AI Assistant</h2>
                    <p className={s.headerDescription}>Ask me anything about your project.</p>
                </div>
            </div>
            <div className={s.content} style={{ gap: 10 }}>
                {aiMessages.map((m, i) => (
                    <div key={i} className={cn(s.aiBubble, m.role === "assistant" ? s.aiBubbleAssistant : s.aiBubbleUser)}>
                        {m.text}
                    </div>
                ))}
            </div>
            <div className={s.aiInputBar}>
                <input className={s.chatInput} placeholder="Ask a question..." />
                <button className={s.chatSendBtn} aria-label="Send">
                    <Send2 size={16} variant="Bulk" color="currentColor" />
                </button>
            </div>
            <CloseBtn />
        </div></ScreenWrapper>
    );
}

const aiAssistantCode = `<SlideOut open={open} onClose={onClose}>
    <header icon={<Cpu />} title="AI Assistant" />
    {messages.map(m => (
        <ChatBubble role={m.role} text={m.text} />
    ))}
    <ChatInput placeholder="Ask a question..." />
</SlideOut>`;

/* ── Props ── */

const slideOutProps = [
    { name: "open", type: "boolean", description: "Whether the slide-out is open" },
    { name: "onClose", type: "() => void", description: "Callback when the slide-out should close" },
    { name: "size", type: "'sm' | 'md' | 'lg' | 'xl'", description: "Panel width preset (default: 'md')" },
    { name: "closeOnOverlay", type: "boolean", description: "Whether clicking the overlay closes the panel (default: true)" },
    { name: "closeOnEscape", type: "boolean", description: "Whether pressing Escape closes the panel (default: true)" },
    { name: "hideClose", type: "boolean", description: "Hide the close (X) button (default: false)" },
    { name: "children", type: "React.ReactNode", description: "Panel content" },
    { name: "className", type: "string", description: "Additional CSS class for the panel" },
];

/* ── Page ── */

export default function SlideOutPage() {
    return (
        <div>
            <DocHeader
                title="Slide Out"
                description="Slide-out panels that appear from the right edge of the screen. Perfect for user settings, profiles, messaging, project configuration, and more."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Slide Out" },
                ]}
            />

            <InstallBlock slug="slide-out" components={["SlideOut", "Button", "Input", "Badge"]} />

            <ComponentPreview
                title="User Settings"
                description="Profile slideout with cover image, avatar, stats, and editable form fields for name, email, and username."
                code={userSettingsCode}
                previewClassName={s.previewScreen}
            >
                <UserSettingsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Project Settings"
                description="Settings slideout with icon header, section blocks for project name, team permissions, and integration settings."
                code={projectSettingsCode}
                previewClassName={s.previewScreen}
            >
                <ProjectSettingsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Freelancer Profile"
                description="Profile slideout with cover gradient, avatar, tags, action buttons, about section, location, and work experience timeline."
                code={freelancerCode}
                previewClassName={s.previewScreen}
            >
                <FreelancerProfileDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Messages"
                description="Message list slideout with tabs (Recent, Groups, Archive), user avatars with online indicators, and message previews."
                code={messagesCode}
                previewClassName={s.previewScreen}
            >
                <MessagesDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Group Chat"
                description="Chat slideout with message bubbles, file attachments, date separators, own vs. other message alignment, and message input bar."
                code={groupChatCode}
                previewClassName={s.previewScreen}
            >
                <GroupChatDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Payment Method"
                description="Payment method selection with radio cards for saved cards, add new method button, and billing contact email."
                code={paymentMethodCode}
                previewClassName={s.previewScreen}
            >
                <PaymentMethodDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Payment Details"
                description="Card information form with name, card number, expiry, CVC, and billing address fields."
                code={paymentDetailsCode}
                previewClassName={s.previewScreen}
            >
                <PaymentDetailsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Plan Selection"
                description="Pricing plan cards with feature lists, check marks, and upgrade action. Highlights the currently selected plan."
                code={planCode}
                previewClassName={s.previewScreen}
            >
                <PlanDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Team Members"
                description="Team management slideout with invite input, member list with avatars, names, emails, and role badges."
                code={teamMembersCode}
                previewClassName={s.previewScreen}
            >
                <TeamMembersDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Filters"
                description="Filter panel with chip-based category and status selectors, price range inputs, and rating filters."
                code={filtersCode}
                previewClassName={s.previewScreen}
            >
                <FiltersDemo />
            </ComponentPreview>

            <ComponentPreview
                title="File Upload"
                description="File upload slideout with drag-and-drop zone, uploaded file list with progress bars, and remove buttons."
                code={fileUploadCode}
                previewClassName={s.previewScreen}
            >
                <FileUploadDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Labels"
                description="Label management slideout with search, color-coded label list with counts, and create label action."
                code={labelsCode}
                previewClassName={s.previewScreen}
            >
                <LabelsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Project Details"
                description="Read-only project overview with detail rows, description, progress bar, and technology tags."
                code={projectDetailsCode}
                previewClassName={s.previewScreen}
            >
                <ProjectDetailsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Notification Settings"
                description="Toggle-based notification preferences for push, email, SMS, digest, and marketing communications."
                code={notifSettingsCode}
                previewClassName={s.previewScreen}
            >
                <NotificationSettingsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Notifications"
                description="Notification feed with unread indicators, rich text with bold names, timestamps, and action icons."
                code={notificationsCode}
                previewClassName={s.previewScreen}
            >
                <NotificationsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Order Summary"
                description="Shopping cart summary with item thumbnails, quantities, prices, subtotal/tax/discount breakdown, and promo code input."
                code={orderSummaryCode}
                previewClassName={s.previewScreen}
            >
                <OrderSummaryDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar Event"
                description="Daily schedule slideout with color-coded events, time ranges, attendee avatar stacks, and new event action."
                code={calendarEventCode}
                previewClassName={s.previewScreen}
            >
                <CalendarEventDemo />
            </ComponentPreview>

            <ComponentPreview
                title="AI Assistant"
                description="Chat-style AI assistant with alternating user/assistant bubbles, accent-colored user messages, and input bar."
                code={aiAssistantCode}
                previewClassName={s.previewScreen}
            >
                <AIAssistantDemo />
            </ComponentPreview>

            <PropsTable title="SlideOut" props={slideOutProps} />
        </div>
    );
}
