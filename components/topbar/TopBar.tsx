"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { Activity, Moon, Notification, Setting2, InfoCircle, Task, MessageText1 } from "iconsax-react";
import s from "./TopBar.module.css";

/* ══════════════════════════════════════════════
   Mock Data
   ══════════════════════════════════════════════ */

const NOTIFICATIONS = [
    {
        id: 1,
        title: "Sprint 4 completed",
        desc: "All 12 tasks delivered on time. Sprint velocity: 34 points.",
        time: "2 min ago",
        icon: Task,
        unread: true,
    },
    {
        id: 2,
        title: "Budget alert — Design team",
        desc: "Monthly spend at 85% ($42,500 of $50,000). Review recommended.",
        time: "15 min ago",
        icon: InfoCircle,
        unread: true,
    },
    {
        id: 3,
        title: "New team member joined",
        desc: "Sarah Kim joined the Engineering team as Senior Developer.",
        time: "1 hr ago",
        icon: MessageText1,
        unread: false,
    }
];

export function TopBar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;

    return (
        <header className={s.header}>
            <div className={s.inner}>
                {/* Left */}
                <div className={s.left}></div>

                {/* Center: Status indicators */}
                <div className={s.center}>
                    <div className={s.brandingChip}>
                        <span className={s.brandStar}>✦</span>
                        <span className={s.brandText}>pulse</span>
                        <span className={s.brandStatusText}>3/5 active</span>
                    </div>

                    <div className={s.divider} />

                    <div className={s.statusChips}>
                        <div className={s.chip}>
                            <span className={cn(s.dot, s.dotSuccess)} />
                            API
                        </div>
                        <div className={s.chip}>
                            <span className={cn(s.dot, s.dotSuccess)} />
                            DB
                        </div>
                        <div className={s.chip}>
                            <span className={cn(s.dot, s.dotWarning)} />
                            Queue
                        </div>
                    </div>
                </div>

                {/* Right: Controls */}
                <div className={s.right}>
                    <div className={s.controlPill}>
                        <button className={s.controlBtn} aria-label="Activity toggle">
                            <Activity size={15} variant="Linear" color="currentColor" />
                        </button>
                        <button className={s.controlBtn} aria-label="Theme toggle">
                            <Moon size={15} variant="Linear" color="currentColor" />
                        </button>
                        
                        <div className={s.notificationWrapper}>
                            <button 
                                className={s.controlBtn} 
                                onClick={() => setShowNotifications(!showNotifications)}
                                aria-label="Notifications"
                            >
                                <Notification size={15} variant="Linear" color="currentColor" />
                                {unreadCount > 0 && (
                                    <span className={s.notificationBadge}>{unreadCount}</span>
                                )}
                            </button>

                            {/* Notification Dropdown */}
                            {showNotifications && (
                                <>
                                    <div className={s.overlay} onClick={() => setShowNotifications(false)} />
                                    <div className={s.dropdown}>
                                        <div className={s.dropdownHeader}>
                                            <div className={s.dropdownTitle}>
                                                Notifications
                                                <span className={s.dropdownCount}>{unreadCount} new</span>
                                            </div>
                                            <button className={s.markReadBtn}>Mark all read</button>
                                        </div>
                                        
                                        <div className={s.notificationList}>
                                            {NOTIFICATIONS.map(notif => {
                                                const Icon = notif.icon;
                                                return (
                                                    <div key={notif.id} className={cn(s.notifItem, notif.unread && s.notifItemUnread)}>
                                                        <div className={s.notifIcon}>
                                                            <Icon size={14} variant="Bulk" color="currentColor" />
                                                        </div>
                                                        <div className={s.notifContent}>
                                                            <div className={s.notifTitleRow}>
                                                                <span className={s.notifTitle}>{notif.title}</span>
                                                                {notif.unread && <span className={s.notifUnreadDot} />}
                                                            </div>
                                                            <p className={s.notifDesc}>{notif.desc}</p>
                                                            <span className={s.notifTime}>{notif.time}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <button className={s.dropdownFooter}>
                                            View All Notifications
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <button className={s.userAvatar} aria-label="User menu">
                            AJ
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
