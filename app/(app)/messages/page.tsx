import React from "react";
import { MessageText1, SearchNormal, Add, Send2, Paperclip2, More, Clock, DocumentText } from "iconsax-react";
import s from "./messages.module.css";
import { cn } from "@/lib/cn";

const THREADS = [
    { id: 1, name: "Engineering Team", desc: "Jake: The API migration is complete", time: "2m", unread: 3, group: true, initials: "ET" },
    { id: 2, name: "Sarah Kim", desc: "Can you review the latest PR?", time: "15m", unread: 1, group: false, initials: "SK" },
    { id: 3, name: "Design System", desc: "Lisa: Updated the button variants", time: "1h", unread: 0, group: true, initials: "DS" },
    { id: 4, name: "Maria Rivera", desc: "Thanks for the feedback!", time: "2h", unread: 0, group: false, initials: "MR" },
    { id: 5, name: "Product Sync", desc: "Alex: We'll push the release to Thursday", time: "Yesterday", unread: 0, group: true, initials: "PS" },
    { id: 6, name: "Tom Chen", desc: "I'll take a look at the DB issue", time: "Yesterday", unread: 0, group: false, initials: "TC" },
];

export default function MessagesPage() {
    return (
        <div className={s.page}>
            {/* Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <MessageText1 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Messages</h1>
                        <p className={s.subtitle}>Communicate with your team</p>
                    </div>
                </div>
            </header>

            {/* Main Content: Split Layout */}
            <div className={s.splitLayout}>
                {/* Left Sidebar: Threads */}
                <div className={s.threadList}>
                    <div className={s.threadHeader}>
                        <div className={s.searchBar}>
                            <SearchNormal size={14} variant="Linear" className={s.searchIcon} />
                            <input type="text" placeholder="Search messages..." className={s.searchInput} />
                        </div>
                        <button className={s.iconBtn}>
                            <Add size={16} variant="Linear" color="currentColor" />
                        </button>
                    </div>
                    
                    <div className={s.threads}>
                        {THREADS.map((thread, i) => (
                            <div key={thread.id} className={cn(s.threadItem, i === 0 && s.threadItemActive)}>
                                <div className={cn(s.threadAvatar, thread.group && s.threadAvatarGroup)}>
                                    {thread.initials}
                                    {thread.unread > 0 && <div className={s.unreadDot} />}
                                </div>
                                <div className={s.threadContent}>
                                    <div className={s.threadTop}>
                                        <span className={cn(s.threadName, thread.unread > 0 && s.threadNameUnread)}>{thread.name}</span>
                                        <span className={cn(s.threadTime, thread.unread > 0 && s.threadTimeUnread)}>{thread.time}</span>
                                    </div>
                                    <div className={s.threadBottom}>
                                        <span className={cn(s.threadDesc, thread.unread > 0 && s.threadDescUnread)}>{thread.desc}</span>
                                        {thread.unread > 0 && (
                                            <span className={s.unreadBadge}>{thread.unread}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Area: Conversation */}
                <div className={s.conversation}>
                    <div className={s.convHeader}>
                        <div className={s.convHeaderInfo}>
                            <div className={cn(s.threadAvatar, s.threadAvatarGroup)}>ET</div>
                            <div>
                                <div className={s.convName}>Engineering Team</div>
                                <div className={s.convMeta}>8 members • 3 online</div>
                            </div>
                        </div>
                        <div className={s.convActions}>
                            <button className={s.iconBtn}><SearchNormal size={16} variant="Linear" color="currentColor" /></button>
                            <button className={s.iconBtn}><More size={16} variant="Linear" color="currentColor" /></button>
                        </div>
                    </div>

                    <div className={s.messageArea}>
                        <div className={s.dateDivider}>
                            <span>Today, March 5</span>
                        </div>

                        {/* Inbound Message */}
                        <div className={s.messageRow}>
                            <div className={s.threadAvatar}>TC</div>
                            <div className={s.messageContent}>
                                <div className={s.messageMeta}>
                                    <span className={s.messageSender}>Tom Chen</span>
                                    <span className={s.messageTime}>10:42 AM</span>
                                </div>
                                <div className={s.bubbleIn}>
                                    The new database migration script is ready. Should we run it on staging first?
                                </div>
                            </div>
                        </div>

                        {/* Outbound Message */}
                        <div className={s.messageRowOut}>
                            <div className={s.messageContentOut}>
                                <div className={s.messageMetaOut}>
                                    <span className={s.messageTime}>10:45 AM</span>
                                </div>
                                <div className={s.bubbleOut}>
                                    Yes, definitely. Let's do staging at 2 PM and review the logs.
                                </div>
                            </div>
                        </div>

                        {/* Inbound Message 2 */}
                        <div className={s.messageRow}>
                            <div className={s.threadAvatar}>JD</div>
                            <div className={s.messageContent}>
                                <div className={s.messageMeta}>
                                    <span className={s.messageSender}>Jake Davis</span>
                                    <span className={s.messageTime}>10:48 AM</span>
                                </div>
                                <div className={s.bubbleIn}>
                                    I just finished the API migration! 🎉 The staging environment is free to use now.
                                </div>
                                <div className={s.bubbleIn}>
                                    Also attaching the test results here.
                                </div>
                                <div className={s.messageAttachment}>
                                    <div className={s.attachmentIcon}><DocumentText size={16} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.attachmentInfo}>
                                        <span className={s.attachmentName}>api_test_results.pdf</span>
                                        <span className={s.attachmentSize}>245 KB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className={s.inputArea}>
                        <div className={s.inputWrapper}>
                            <button className={s.attachBtn}>
                                <Paperclip2 size={18} variant="Linear" color="currentColor" />
                            </button>
                            <input type="text" placeholder="Type a message..." className={s.messageInput} />
                            <button className={s.sendBtn}>
                                <Send2 size={16} variant="Bulk" color="currentColor" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
