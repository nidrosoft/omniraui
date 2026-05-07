import React from "react";
import { Folder, DollarCircle, Clock, TrendUp, Flash, FolderAdd, UserAdd, DocumentText, Chart21, Calendar2, InfoCircle, TickCircle, Home2, FolderOpen, Chart, People, MessageText, Setting2, SearchNormal1 } from "iconsax-react";
import { DocHeader } from "@/components/docs/DocHeader";
import { Browser } from "@/components/ui/Browser/Browser";
import { cn } from "@/lib/cn";
import s from "./dashboard.module.css";

export default function ApplicationUIExamplesPage() {
    return (
        <div>
            <DocHeader
                title="Application UI Examples"
                description="Full-page application UI examples built with Omnira UI components. This dashboard showcases a Project Management & Team Workspace layout."
                status="new"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI Examples" },
                ]}
            />

            <div className={s.browserWrapper}>
                <Browser address="app.pulseworkspace.io/dashboard">
                    <div className={s.appShell}>
                        <aside className={s.miniSidebar}>
                            <div className={s.miniSidebarBrand}>
                                <div className={s.miniLogo}>P</div>
                                <span className={s.miniBrandName}>Pulse</span>
                            </div>
                            <div className={s.miniSearch}>
                                <SearchNormal1 size={12} variant="Linear" color="currentColor" />
                                <span>Search...</span>
                            </div>
                            <nav className={s.miniNav}>
                                <div className={cn(s.miniNavItem, s.miniNavItemActive)}>
                                    <Home2 size={15} variant="Bulk" color="currentColor" />
                                    <span>Dashboard</span>
                                </div>
                                <div className={s.miniNavItem}>
                                    <FolderOpen size={15} variant="Linear" color="currentColor" />
                                    <span>Projects</span>
                                </div>
                                <div className={s.miniNavItem}>
                                    <Chart size={15} variant="Linear" color="currentColor" />
                                    <span>Analytics</span>
                                </div>
                                <div className={s.miniNavItem}>
                                    <People size={15} variant="Linear" color="currentColor" />
                                    <span>Team</span>
                                </div>
                                <div className={s.miniNavItem}>
                                    <MessageText size={15} variant="Linear" color="currentColor" />
                                    <span>Messages</span>
                                </div>
                                <div className={s.miniNavItem}>
                                    <Setting2 size={15} variant="Linear" color="currentColor" />
                                    <span>Settings</span>
                                </div>
                            </nav>
                            <div className={s.miniSidebarFooter}>
                                <div className={s.miniUserAvatar}>AK</div>
                                <div className={s.miniUserInfo}>
                                    <span className={s.miniUserName}>Alex Kim</span>
                                    <span className={s.miniUserRole}>Admin</span>
                                </div>
                            </div>
                        </aside>
                        <div className={s.mainContent}>
                            <div className={s.topBar}>
                                <span className={s.topBarTitle}>Dashboard</span>
                                <div className={s.topBarRight}>
                                    <span className={s.topBarStatus}>All systems operational</span>
                                </div>
                            </div>
                            <div className={s.scrollArea}>
                                <div className={s.page}>
                {/* 1. Briefing Card (Hero) */}
                <section className={s.briefingCard}>
                    <div className={s.briefingLeft}>
                        <h1 className={s.greeting}>Good morning, Alex</h1>
                        <p className={s.subtext}>Here&apos;s your workspace overview for Monday, March 5</p>
                        <p className={s.summary}>
                            You have <strong className={s.summaryBold}>4 tasks due today</strong>,{" "}
                            <strong className={s.summaryBold}>2 meetings</strong>, and{" "}
                            <strong className={s.summaryBold}>$12.4K in pending invoices</strong>.
                        </p>
                    </div>
                    <div className={s.briefingRight}>
                        <div className={s.dateLarge}>Mar 5</div>
                        <div className={s.dateSmall}>Monday</div>
                    </div>
                </section>

                {/* 2. Metric Cards Row */}
                <section className={s.metricsGrid}>
                    <div className={s.metricCard}>
                        <div className={s.metricTop}>
                            <div className={cn(s.metricIconBox, s.metricIconInfo)}>
                                <Folder size={20} variant="Bulk" color="currentColor" />
                            </div>
                            <TrendUp size={16} variant="Linear" className={s.trendUp} />
                        </div>
                        <div className={s.metricValue}>24</div>
                        <div className={s.metricLabel}>Active Projects</div>
                        <div className={s.metricChangeUp}>+3 this month</div>
                    </div>
                    <div className={s.metricCard}>
                        <div className={s.metricTop}>
                            <div className={cn(s.metricIconBox, s.metricIconSuccess)}>
                                <DollarCircle size={20} variant="Bulk" color="currentColor" />
                            </div>
                            <TrendUp size={16} variant="Linear" className={s.trendUp} />
                        </div>
                        <div className={s.metricValue}>$148.2K</div>
                        <div className={s.metricLabel}>Revenue (MTD)</div>
                        <div className={s.metricChangeUp}>+18% vs last month</div>
                    </div>
                    <div className={s.metricCard}>
                        <div className={s.metricTop}>
                            <div className={cn(s.metricIconBox, s.metricIconWarning)}>
                                <Clock size={20} variant="Bulk" color="currentColor" />
                            </div>
                            <TrendUp size={16} variant="Linear" className={s.trendDown} style={{ transform: "scaleY(-1)" }} />
                        </div>
                        <div className={s.metricValue}>12</div>
                        <div className={s.metricLabel}>Tasks Due Today</div>
                        <div className={s.metricChangeDown}>3 overdue</div>
                    </div>
                    <div className={s.metricCard}>
                        <div className={s.metricTop}>
                            <div className={cn(s.metricIconBox, s.metricIconPrimary)}>
                                <TrendUp size={20} variant="Bulk" color="currentColor" />
                            </div>
                            <TrendUp size={16} variant="Linear" className={s.trendUp} />
                        </div>
                        <div className={s.metricValue}>87%</div>
                        <div className={s.metricLabel}>Team Utilization</div>
                        <div className={s.metricChangeUp}>+4% this week</div>
                    </div>
                </section>

                {/* 3. Quick Actions + Recent Activity */}
                <section className={s.twoColGrid}>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.cardHeaderLeft}>
                                <div className={cn(s.headerIcon, s.headerIconPrimary)}>
                                    <Flash size={16} variant="Bulk" color="currentColor" />
                                </div>
                                <h2 className={s.cardTitle}>Quick Actions</h2>
                            </div>
                        </div>
                        <div className={s.quickActionsGrid}>
                            <button className={s.actionBtn}>
                                <div className={cn(s.actionIcon, s.actionIconPrimary)}>
                                    <FolderAdd size={18} variant="Bulk" color="currentColor" />
                                </div>
                                <span className={s.actionLabel}>New Project</span>
                                <span className={s.actionDesc}>Create a project with tasks, milestones, and team assignments</span>
                            </button>
                            <button className={s.actionBtn}>
                                <div className={cn(s.actionIcon, s.actionIconInfo)}>
                                    <UserAdd size={18} variant="Bulk" color="currentColor" />
                                </div>
                                <span className={s.actionLabel}>Invite Member</span>
                                <span className={s.actionDesc}>Add a team member and assign them to projects</span>
                            </button>
                            <button className={s.actionBtn}>
                                <div className={cn(s.actionIcon, s.actionIconWarning)}>
                                    <DocumentText size={18} variant="Bulk" color="currentColor" />
                                </div>
                                <span className={s.actionLabel}>Create Invoice</span>
                                <span className={s.actionDesc}>Generate and send invoices to clients for completed work</span>
                            </button>
                            <button className={s.actionBtn}>
                                <div className={cn(s.actionIcon, s.actionIconSuccess)}>
                                    <Chart21 size={18} variant="Bulk" color="currentColor" />
                                </div>
                                <span className={s.actionLabel}>Run Report</span>
                                <span className={s.actionDesc}>Generate production, financial, or team performance reports</span>
                            </button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <h2 className={s.cardTitle}>Recent Activity</h2>
                            <button className={s.viewAllBtn}>View all</button>
                        </div>
                        <div className={s.activityList}>
                            <div className={s.activityItem}>
                                <div className={s.activityAvatar}>SK</div>
                                <div className={s.activityContent}>
                                    <span className={s.activityName}>Sarah Kim</span>
                                    <span className={s.activityText}>Completed &quot;API Integration&quot; — 15m ago</span>
                                </div>
                                <div className={s.chevronRight}>›</div>
                            </div>
                            <div className={s.activityItem}>
                                <div className={s.activityAvatar}>JD</div>
                                <div className={s.activityContent}>
                                    <span className={s.activityName}>Jake Davis</span>
                                    <span className={s.activityText}>Moved &quot;Dashboard UI&quot; to In Review — 1h ago</span>
                                </div>
                                <div className={s.chevronRight}>›</div>
                            </div>
                            <div className={s.activityItem}>
                                <div className={s.activityAvatar}>MR</div>
                                <div className={s.activityContent}>
                                    <span className={s.activityName}>Maria Rivera</span>
                                    <span className={s.activityText}>Created invoice #INV-042 — $8,400 — 2h ago</span>
                                </div>
                                <div className={s.chevronRight}>›</div>
                            </div>
                            <div className={s.activityItem}>
                                <div className={s.activityAvatar}>TC</div>
                                <div className={s.activityContent}>
                                    <span className={s.activityName}>Tom Chen</span>
                                    <span className={s.activityText}>Added 3 comments on &quot;Auth Flow&quot; — 3h ago</span>
                                </div>
                                <div className={s.chevronRight}>›</div>
                            </div>
                            <div className={s.activityItem}>
                                <div className={s.activityAvatar}>LP</div>
                                <div className={s.activityContent}>
                                    <span className={s.activityName}>Lisa Park</span>
                                    <span className={s.activityText}>Joined the Design team — yesterday</span>
                                </div>
                                <div className={s.chevronRight}>›</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Table + Pending Tasks */}
                <section className={s.twoColGrid}>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <div className={s.cardHeaderLeft}>
                                <div className={cn(s.headerIcon, s.headerIconPrimary)}>
                                    <Calendar2 size={16} variant="Bulk" color="currentColor" />
                                </div>
                                <h2 className={s.cardTitle}>Active Projects</h2>
                                <span className={cn(s.badge, s.badgePrimary)}>8 active</span>
                            </div>
                            <button className={s.viewAllBtn}>View all</button>
                        </div>
                        <div className={s.tableHeader}>
                            <span>Project</span>
                            <span>Progress</span>
                            <span>Budget</span>
                            <span>Status</span>
                        </div>
                        <div className={s.tableRows}>
                            <div className={s.tableRow}>
                                <div className={s.cellProject}>
                                    <span className={s.projectName}>Website Redesign</span>
                                    <span className={s.projectLead}>Sarah Kim</span>
                                </div>
                                <div className={s.cellProgress}>
                                    <div className={s.progressBar}><div className={s.progressFill} style={{ width: '78%', background: 'var(--color-primary)' }} /></div>
                                    <span className={s.progressText}>78%</span>
                                </div>
                                <div className={s.cellBudget}>$24.5K / $30K</div>
                                <div className={s.cellStatus}>
                                    <span className={cn(s.statusPill, s.statusSuccess)}>On Track</span>
                                </div>
                            </div>
                            <div className={s.tableRow}>
                                <div className={s.cellProject}>
                                    <span className={s.projectName}>Mobile App v2</span>
                                    <span className={s.projectLead}>Jake Davis</span>
                                </div>
                                <div className={s.cellProgress}>
                                    <div className={s.progressBar}><div className={s.progressFill} style={{ width: '45%', background: 'var(--color-warning)' }} /></div>
                                    <span className={s.progressText}>45%</span>
                                </div>
                                <div className={s.cellBudget}>$52K / $80K</div>
                                <div className={s.cellStatus}>
                                    <span className={cn(s.statusPill, s.statusWarning)}>At Risk</span>
                                </div>
                            </div>
                            <div className={s.tableRow}>
                                <div className={s.cellProject}>
                                    <span className={s.projectName}>API Migration</span>
                                    <span className={s.projectLead}>Tom Chen</span>
                                </div>
                                <div className={s.cellProgress}>
                                    <div className={s.progressBar}><div className={s.progressFill} style={{ width: '92%', background: 'var(--color-info)' }} /></div>
                                    <span className={s.progressText}>92%</span>
                                </div>
                                <div className={s.cellBudget}>$18K / $20K</div>
                                <div className={s.cellStatus}>
                                    <span className={cn(s.statusPill, s.statusInfo)}>Ahead</span>
                                </div>
                            </div>
                            <div className={s.tableRow}>
                                <div className={s.cellProject}>
                                    <span className={s.projectName}>CRM Integration</span>
                                    <span className={s.projectLead}>Jake Davis</span>
                                </div>
                                <div className={s.cellProgress}>
                                    <div className={s.progressBar}><div className={s.progressFill} style={{ width: '58%', background: 'var(--color-error)' }} /></div>
                                    <span className={s.progressText}>58%</span>
                                </div>
                                <div className={s.cellBudget}>$28K / $45K</div>
                                <div className={s.cellStatus}>
                                    <span className={cn(s.statusPill, s.statusError)}>Behind</span>
                                </div>
                            </div>
                            <div className={s.tableRow}>
                                <div className={s.cellProject}>
                                    <span className={s.projectName}>Design System</span>
                                    <span className={s.projectLead}>Sarah Kim</span>
                                </div>
                                <div className={s.cellProgress}>
                                    <div className={s.progressBar}><div className={s.progressFill} style={{ width: '88%', background: 'var(--color-success)' }} /></div>
                                    <span className={s.progressText}>88%</span>
                                </div>
                                <div className={s.cellBudget}>$11K / $12K</div>
                                <div className={s.cellStatus}>
                                    <span className={cn(s.statusPill, s.statusSuccess)}>Nearly Done</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.stackedCards}>
                        <div className={s.card}>
                            <div className={s.cardHeader}>
                                <div className={s.cardHeaderLeft}>
                                    <div className={cn(s.headerIcon, s.headerIconWarning)}>
                                        <InfoCircle size={16} variant="Bulk" color="currentColor" />
                                    </div>
                                    <h2 className={s.cardTitle}>Pending Approvals</h2>
                                    <span className={cn(s.badge, s.badgeWarning)}>4 pending</span>
                                </div>
                            </div>
                            <div className={s.taskRows}>
                                <div className={s.taskRow}>
                                    <div className={cn(s.taskIcon, s.taskIconPrimary)}><Flash size={14} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.taskContent}>
                                        <div className={s.taskMeta}>
                                            <span className={s.taskSource}>Finance</span>
                                            <span className={s.taskTime}>2m ago</span>
                                        </div>
                                        <p className={s.taskText}>Approve invoice #INV-039 for $12,800 — Client: Acme Corp</p>
                                    </div>
                                    <div className={s.chevronRight}>›</div>
                                </div>
                                <div className={s.taskRow}>
                                    <div className={cn(s.taskIcon, s.taskIconPrimary)}><Flash size={14} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.taskContent}>
                                        <div className={s.taskMeta}>
                                            <span className={s.taskSource}>HR</span>
                                            <span className={s.taskTime}>15m ago</span>
                                        </div>
                                        <p className={s.taskText}>Review PTO request from Jake Davis (Mar 10-14)</p>
                                    </div>
                                    <div className={s.chevronRight}>›</div>
                                </div>
                                <div className={s.taskRow}>
                                    <div className={cn(s.taskIcon, s.taskIconError)}><InfoCircle size={14} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.taskContent}>
                                        <div className={s.taskMeta}>
                                            <span className={s.taskSource}>Engineering</span>
                                            <span className={s.taskTime}>30m ago</span>
                                        </div>
                                        <p className={s.taskText}>Deploy v2.4.1 to production — 3 critical fixes</p>
                                    </div>
                                    <div className={s.chevronRight}>›</div>
                                </div>
                            </div>
                        </div>

                        <div className={s.card}>
                            <div className={s.cardHeader}>
                                <div className={s.cardHeaderLeft}>
                                    <div className={cn(s.headerIcon, s.headerIconSuccess)}>
                                        <TickCircle size={16} variant="Bulk" color="currentColor" />
                                    </div>
                                    <h2 className={s.cardTitle}>Team Activity</h2>
                                    <div className={cn(s.badge, s.badgeSuccess)}>
                                        <span className={s.liveDot} /> Live
                                    </div>
                                </div>
                            </div>
                            <div className={s.taskRows}>
                                <div className={s.taskRow}>
                                    <div className={cn(s.taskIcon, s.taskIconSuccess)}><TickCircle size={14} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.taskContent}>
                                        <div className={s.taskMeta}>
                                            <span className={s.taskSource}>Engineering</span>
                                            <span className={s.taskTime}>5 min ago</span>
                                        </div>
                                        <p className={s.taskText}>Deployed hotfix for payment gateway timeout</p>
                                    </div>
                                </div>
                                <div className={s.taskRow}>
                                    <div className={cn(s.taskIcon, s.taskIconSuccess)}><TickCircle size={14} variant="Bulk" color="currentColor" /></div>
                                    <div className={s.taskContent}>
                                        <div className={s.taskMeta}>
                                            <span className={s.taskSource}>Design</span>
                                            <span className={s.taskTime}>12 min ago</span>
                                        </div>
                                        <p className={s.taskText}>Published 12 new component variants to Figma</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                                </div>{/* .page */}
                            </div>{/* .scrollArea */}
                        </div>{/* .mainContent */}
                    </div>{/* .appShell */}
                </Browser>
            </div>{/* .browserWrapper */}
        </div>
    );
}
