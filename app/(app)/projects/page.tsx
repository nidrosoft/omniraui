import React from "react";
import { Folder, SearchNormal, Add, MessageText1, Calendar2, More } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./projects.module.css";

const BOARD_DATA = {
    todo: [
        { id: "T1", title: "User Authentication Flow", tags: ["Backend", "High"], progress: 15, priority: "high", avatars: ["JD", "SK"], date: "Mar 10", comments: 3 },
        { id: "T2", title: "Homepage Redesign", tags: ["Design", "Medium"], progress: 0, priority: "medium", avatars: ["LP"], date: "Mar 12", comments: 1 },
        { id: "T3", title: "Payment Gateway Setup", tags: ["Backend", "High"], progress: 0, priority: "high", avatars: ["AJ", "TC"], date: "Mar 15", comments: 0 },
        { id: "T4", title: "Dark Mode Support", tags: ["Frontend", "Low"], progress: 5, priority: "low", avatars: ["JD"], date: "Mar 18", comments: 5 },
        { id: "T5", title: "Update Dependencies", tags: ["DevOps", "Medium"], progress: 0, priority: "medium", avatars: ["TC"], date: "Mar 20", comments: 2 },
        { id: "T6", title: "Terms of Service Update", tags: ["Legal", "Low"], progress: 0, priority: "low", avatars: ["MR"], date: "Mar 22", comments: 0 },
    ],
    inProgress: [
        { id: "P1", title: "Dashboard Dashboard Metric Cards", tags: ["Frontend", "High"], progress: 65, priority: "high", avatars: ["JD", "SK"], date: "Mar 8", comments: 8 },
        { id: "P2", title: "API Rate Limiting", tags: ["Backend", "Medium"], progress: 40, priority: "medium", avatars: ["TC"], date: "Mar 9", comments: 4 },
        { id: "P3", title: "Component Library V2", tags: ["Design", "Low"], progress: 85, priority: "low", avatars: ["LP", "JD"], date: "Mar 14", comments: 12 },
        { id: "P4", title: "Email Templates", tags: ["Design", "Medium"], progress: 20, priority: "medium", avatars: ["LP"], date: "Mar 11", comments: 1 },
    ],
    inReview: [
        { id: "R1", title: "Stripe Webhooks", tags: ["Backend", "High"], progress: 95, priority: "high", avatars: ["AJ", "MR"], date: "Mar 6", comments: 15 },
        { id: "R2", title: "Onboarding Flow", tags: ["Frontend", "Medium"], progress: 90, priority: "medium", avatars: ["SK", "LP"], date: "Mar 7", comments: 6 },
        { id: "R3", title: "Database Migration", tags: ["DevOps", "High"], progress: 98, priority: "high", avatars: ["TC"], date: "Mar 6", comments: 22 },
    ],
    done: [
        { id: "D1", title: "Initial Repo Setup", tags: ["DevOps", "High"], progress: 100, priority: "high", avatars: ["AJ"], date: "Mar 1", comments: 2 },
        { id: "D2", title: "Color Palette Selection", tags: ["Design", "High"], progress: 100, priority: "high", avatars: ["LP"], date: "Mar 2", comments: 5 },
        { id: "D3", title: "Typography System", tags: ["Design", "Medium"], progress: 100, priority: "medium", avatars: ["LP"], date: "Mar 3", comments: 1 },
        { id: "D4", title: "GitHub Actions CI/CD", tags: ["DevOps", "Medium"], progress: 100, priority: "medium", avatars: ["TC"], date: "Mar 4", comments: 0 },
        { id: "D5", title: "Project Management Tool", tags: ["Operations", "Low"], progress: 100, priority: "low", avatars: ["MR"], date: "Mar 4", comments: 0 },
    ],
};

function getPriorityColor(priority: string) {
    if (priority === "high") return "var(--color-error)";
    if (priority === "medium") return "var(--color-warning)";
    return "var(--color-info)";
}

function getTagStyle(tag: string) {
    if (tag === "Frontend") return { bg: "var(--color-info-bg)", color: "var(--color-info)" };
    if (tag === "Backend") return { bg: "var(--color-success-bg)", color: "var(--color-success)" };
    if (tag === "Design") return { bg: "var(--color-primary-subtle)", color: "var(--color-primary)" };
    if (tag === "DevOps") return { bg: "var(--color-warning-bg)", color: "var(--color-warning)" };
    return { bg: "var(--color-bg-elevated)", color: "var(--color-text-secondary)" };
}

function KanbanCard({ item }: { item: any }) {
    return (
        <div className={s.kanbanCard}>
            <div className={s.cardTop}>
                <div className={s.cardPriority} style={{ background: getPriorityColor(item.priority) }} />
                <button className={s.cardMoreBtn}><More size={14} variant="Linear" color="currentColor" /></button>
            </div>
            
            <h3 className={s.cardTitle}>{item.title}</h3>
            
            <div className={s.cardTags}>
                {item.tags.map((tag: string) => {
                    const style = getTagStyle(tag);
                    return (
                        <span key={tag} className={s.cardTag} style={{ background: style.bg, color: style.color }}>
                            {tag}
                        </span>
                    );
                })}
            </div>
            
            <div className={s.cardProgress}>
                <div className={s.progressBar}><div className={s.progressFill} style={{ width: `${item.progress}%` }} /></div>
            </div>
            
            <div className={s.cardBottom}>
                <div className={s.cardAvatars}>
                    {item.avatars.map((initials: string, i: number) => (
                        <div key={i} className={s.cardAvatar}>{initials}</div>
                    ))}
                </div>
                <div className={s.cardMeta}>
                    <div className={s.cardMetaItem}>
                        <Calendar2 size={12} variant="Bulk" color="currentColor" />
                        {item.date}
                    </div>
                    {item.comments > 0 && (
                        <div className={s.cardMetaItem}>
                            <MessageText1 size={12} variant="Bulk" color="currentColor" />
                            {item.comments}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <div className={s.page}>
            {/* 1. Page Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <Folder size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Projects</h1>
                        <p className={s.subtitle}>Manage your team's work</p>
                    </div>
                </div>
                <div className={s.headerRight}>
                    <div className={s.searchBar}>
                        <SearchNormal size={14} variant="Linear" className={s.searchIcon} />
                        <input type="text" placeholder="Search projects..." className={s.searchInput} />
                    </div>
                    <button className={s.newProjectBtn}>
                        <Add size={16} variant="Linear" color="currentColor" />
                        New Project
                    </button>
                </div>
            </header>

            {/* 2. Tabs */}
            <div className={s.tabsWrapper}>
                <div className={s.tabs}>
                    <button className={cn(s.tab, s.tabActive)}>Board</button>
                    <button className={s.tab}>List</button>
                    <button className={s.tab}>Timeline</button>
                    <button className={s.tab}>Archive</button>
                </div>
            </div>

            {/* 3. Board View */}
            <div className={s.board}>
                {/* To Do */}
                <div className={s.column}>
                    <div className={s.columnHeader}>
                        <span className={s.columnTitle}>To Do</span>
                        <span className={s.columnCount}>6</span>
                    </div>
                    <div className={s.columnContent}>
                        {BOARD_DATA.todo.map(item => <KanbanCard key={item.id} item={item} />)}
                    </div>
                </div>

                {/* In Progress */}
                <div className={s.column}>
                    <div className={s.columnHeader}>
                        <span className={s.columnTitle}>In Progress</span>
                        <span className={s.columnCount}>4</span>
                    </div>
                    <div className={s.columnContent}>
                        {BOARD_DATA.inProgress.map(item => <KanbanCard key={item.id} item={item} />)}
                    </div>
                </div>

                {/* In Review */}
                <div className={s.column}>
                    <div className={s.columnHeader}>
                        <span className={s.columnTitle}>In Review</span>
                        <span className={s.columnCount}>3</span>
                    </div>
                    <div className={s.columnContent}>
                        {BOARD_DATA.inReview.map(item => <KanbanCard key={item.id} item={item} />)}
                    </div>
                </div>

                {/* Done */}
                <div className={s.column}>
                    <div className={s.columnHeader}>
                        <span className={s.columnTitle}>Done</span>
                        <span className={s.columnCount}>5</span>
                    </div>
                    <div className={s.columnContent}>
                        {BOARD_DATA.done.map(item => <KanbanCard key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
