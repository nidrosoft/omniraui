import React from "react";
import { People, SearchNormal, Add, MessageText1, InfoCircle } from "iconsax-react";
import s from "./team.module.css";
import { cn } from "@/lib/cn";

const TEAM_DATA = [
    { id: 1, name: "Alex Johnson", role: "Product Manager", dept: "Product", initials: "AJ", status: "online", projects: 8, tasks: 24, hours: 164 },
    { id: 2, name: "Sarah Kim", role: "Senior Developer", dept: "Engineering", initials: "SK", status: "online", projects: 4, tasks: 32, hours: 156 },
    { id: 3, name: "Jake Davis", role: "UI Designer", dept: "Design", initials: "JD", status: "away", projects: 5, tasks: 18, hours: 142 },
    { id: 4, name: "Maria Rivera", role: "Frontend Dev", dept: "Engineering", initials: "MR", status: "offline", projects: 3, tasks: 28, hours: 130 },
    { id: 5, name: "Tom Chen", role: "DevOps Engineer", dept: "Engineering", initials: "TC", status: "online", projects: 6, tasks: 15, hours: 160 },
    { id: 6, name: "Lisa Park", role: "UX Researcher", dept: "Design", initials: "LP", status: "online", projects: 4, tasks: 12, hours: 120 },
    { id: 7, name: "Marcus Webb", role: "Marketing Lead", dept: "Marketing", initials: "MW", status: "away", projects: 7, tasks: 40, hours: 155 },
    { id: 8, name: "Elena Rostova", role: "Data Scientist", dept: "Engineering", initials: "ER", status: "offline", projects: 2, tasks: 8, hours: 90 },
    { id: 9, name: "David Kim", role: "Sales Director", dept: "Sales", initials: "DK", status: "online", projects: 12, tasks: 45, hours: 170 },
];

function getStatusClass(status: string) {
    if (status === "online") return s.statusOnline;
    if (status === "away") return s.statusAway;
    return s.statusOffline;
}

export default function TeamPage() {
    return (
        <div className={s.page}>
            {/* 1. Page Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <People size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Team Directory</h1>
                        <p className={s.subtitle}>Manage team members and roles</p>
                    </div>
                </div>
                <div className={s.headerRight}>
                    <div className={s.searchBar}>
                        <SearchNormal size={14} variant="Linear" className={s.searchIcon} />
                        <input type="text" placeholder="Search team..." className={s.searchInput} />
                    </div>
                    <button className={s.primaryBtn}>
                        <Add size={16} variant="Linear" color="currentColor" />
                        Invite Member
                    </button>
                </div>
            </header>

            {/* 2. Team Grid */}
            <section className={s.teamGrid}>
                {TEAM_DATA.map(member => (
                    <div key={member.id} className={s.teamCard}>
                        <div className={s.cardTop}>
                            <div className={s.avatarContainer}>
                                <div className={s.avatar}>{member.initials}</div>
                                <span className={cn(s.statusDot, getStatusClass(member.status))} />
                            </div>
                            <h3 className={s.memberName}>{member.name}</h3>
                            <p className={s.memberRole}>{member.role}</p>
                            <span className={s.deptBadge}>{member.dept}</span>
                        </div>
                        
                        <div className={s.cardStats}>
                            <div className={s.statItem}>
                                <span className={s.statValue}>{member.projects}</span>
                                <span className={s.statLabel}>Projects</span>
                            </div>
                            <div className={s.statDivider} />
                            <div className={s.statItem}>
                                <span className={s.statValue}>{member.tasks}</span>
                                <span className={s.statLabel}>Tasks</span>
                            </div>
                            <div className={s.statDivider} />
                            <div className={s.statItem}>
                                <span className={s.statValue}>{member.hours}</span>
                                <span className={s.statLabel}>Hours</span>
                            </div>
                        </div>

                        <div className={s.cardActions}>
                            <button className={s.actionBtnSecondary}>
                                <MessageText1 size={14} variant="Linear" color="currentColor" />
                                Message
                            </button>
                            <button className={s.actionBtnGhost}>
                                <InfoCircle size={14} variant="Linear" color="currentColor" />
                                Profile
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
