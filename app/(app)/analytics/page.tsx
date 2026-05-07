import React from "react";
import { Chart21, TrendUp, Activity, PresentionChart, DocumentFilter } from "iconsax-react";
import s from "./analytics.module.css";
import { cn } from "@/lib/cn";

const CHART_DATA = [
    { label: "Jan", value: 38 },
    { label: "Feb", value: 42 },
    { label: "Mar", value: 51 },
    { label: "Apr", value: 45 },
    { label: "May", value: 48 },
    { label: "Jun", value: 52 },
    { label: "Jul", value: 58 },
    { label: "Aug", value: 55 },
    { label: "Sep", value: 62 },
    { label: "Oct", value: 48 },
    { label: "Nov", value: 44 },
    { label: "Dec", value: 39 },
];

export default function AnalyticsPage() {
    // Generate simple SVG line chart data
    const maxVal = 70;
    const width = 400;
    const height = 160;
    const points = CHART_DATA.map((d, i) => {
        const x = (i / (CHART_DATA.length - 1)) * width;
        const y = height - (d.value / maxVal) * height;
        return `${x},${y}`;
    }).join(" ");
    const polygonPoints = `0,${height} ${points} ${width},${height}`;

    return (
        <div className={s.page}>
            {/* 1. Page Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <Chart21 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Analytics & Reporting</h1>
                        <p className={s.subtitle}>Performance metrics and financial overview</p>
                    </div>
                </div>
                <div className={s.headerRight}>
                    <button className={s.secondaryBtn}>
                        <DocumentFilter size={16} variant="Linear" color="currentColor" />
                        Export PDF
                    </button>
                    <button className={s.primaryBtn}>
                        <PresentionChart size={16} variant="Linear" color="currentColor" />
                        Generate Report
                    </button>
                </div>
            </header>

            {/* 2. KPI Row */}
            <section className={s.kpiGrid}>
                {/* Total Revenue */}
                <div className={s.kpiCard}>
                    <div className={s.kpiLabel}>Total Revenue</div>
                    <div className={s.kpiValueRow}>
                        <span className={s.kpiValue}>$482K</span>
                        <span className={cn(s.kpiChange, s.kpiPositive)}>+12.5%</span>
                    </div>
                </div>
                {/* Active Users */}
                <div className={s.kpiCard}>
                    <div className={s.kpiLabel}>Active Users</div>
                    <div className={s.kpiValueRow}>
                        <span className={s.kpiValue}>1,247</span>
                        <span className={cn(s.kpiChange, s.kpiPositive)}>+8.2%</span>
                    </div>
                </div>
                {/* Tasks Completed */}
                <div className={s.kpiCard}>
                    <div className={s.kpiLabel}>Tasks Completed</div>
                    <div className={s.kpiValueRow}>
                        <span className={s.kpiValue}>342</span>
                        <span className={cn(s.kpiChange, s.kpiPositive)}>+15.4%</span>
                    </div>
                </div>
                {/* Avg Response Time */}
                <div className={s.kpiCard}>
                    <div className={s.kpiLabel}>Avg Response Time</div>
                    <div className={s.kpiValueRow}>
                        <span className={s.kpiValue}>2.4h</span>
                        <span className={cn(s.kpiChange, s.kpiNegative)}>-0.5h</span>
                    </div>
                </div>
                {/* Client Satisfaction */}
                <div className={s.kpiCard}>
                    <div className={s.kpiLabel}>Client Satisfaction</div>
                    <div className={s.kpiValueRow}>
                        <span className={s.kpiValue}>94%</span>
                        <span className={cn(s.kpiChange, s.kpiPositive)}>+2.0%</span>
                    </div>
                </div>
            </section>

            {/* 3. Charts */}
            <section className={s.chartGrid}>
                {/* Bar Chart */}
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        <h2 className={s.cardTitle}>Revenue Overview</h2>
                        <div className={s.periodSelector}>
                            <button className={s.periodBtn}>7D</button>
                            <button className={s.periodBtn}>30D</button>
                            <button className={cn(s.periodBtn, s.periodBtnActive)}>1Y</button>
                        </div>
                    </div>
                    <div className={s.cardBody}>
                        <div className={s.barChart}>
                            {CHART_DATA.map((d, i) => {
                                const heightPct = (d.value / 70) * 100;
                                return (
                                    <div key={i} className={s.barWrapper}>
                                        <div className={s.barValue}>${d.value}K</div>
                                        <div className={s.bar} style={{ height: `${heightPct}%` }} />
                                        <div className={s.barLabel}>{d.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Line Chart */}
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        <h2 className={s.cardTitle}>Task Velocity</h2>
                        <div className={s.periodSelector}>
                            <button className={s.periodBtn}>7D</button>
                            <button className={cn(s.periodBtn, s.periodBtnActive)}>30D</button>
                            <button className={s.periodBtn}>1Y</button>
                        </div>
                    </div>
                    <div className={s.cardBody}>
                        <div className={s.lineChartWrapper}>
                            <svg viewBox={`0 0 ${width} ${height}`} className={s.lineChartSvg} preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <polygon points={polygonPoints} fill="url(#gradient)" />
                                <polyline points={points} fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinejoin="round" />
                                {CHART_DATA.map((d, i) => {
                                    const x = (i / (CHART_DATA.length - 1)) * width;
                                    const y = height - (d.value / maxVal) * height;
                                    return (
                                        <circle key={i} cx={x} cy={y} r="5" fill="var(--color-primary)" stroke="var(--color-bg-card)" strokeWidth="2" />
                                    );
                                })}
                            </svg>
                            <div className={s.lineChartLabels}>
                                <span>Jan</span>
                                <span>Apr</span>
                                <span>Jul</span>
                                <span>Oct</span>
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Breakdowns */}
            <section className={s.breakdownGrid}>
                {/* Table */}
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        <h2 className={s.cardTitle}>Team Performance</h2>
                        <button className={s.viewAllBtn}>Export</button>
                    </div>
                    <div className={s.tableHeader}>
                        <span>Team</span>
                        <span>Projects</span>
                        <span>Tasks Done</span>
                        <span>Avg Time</span>
                        <span>Satisfaction</span>
                    </div>
                    <div className={s.tableRows}>
                        {[
                            { team: "Engineering", proj: 12, tasks: 184, time: "2.1h", sat: "96%" },
                            { team: "Design", proj: 8, tasks: 92, time: "1.8h", sat: "98%" },
                            { team: "Marketing", proj: 6, tasks: 45, time: "3.4h", sat: "91%" },
                            { team: "Sales", proj: 0, tasks: 12, time: "1.2h", sat: "94%" },
                            { team: "Operations", proj: 4, tasks: 28, time: "4.5h", sat: "88%" },
                        ].map((row, i) => (
                            <div key={i} className={s.tableRow}>
                                <span className={s.cellTeam}>{row.team}</span>
                                <span>{row.proj}</span>
                                <span>{row.tasks}</span>
                                <span>{row.time}</span>
                                <span className={s.cellSuccess}>{row.sat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Donut Chart */}
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        <h2 className={s.cardTitle}>Resource Allocation</h2>
                    </div>
                    <div className={s.donutWrapper}>
                        <div className={s.donutChart}>
                            <div className={s.donutCenter}>
                                <span className={s.donutCenterValue}>100%</span>
                                <span className={s.donutCenterLabel}>Total Hours</span>
                            </div>
                        </div>
                        <div className={s.donutLegend}>
                            <div className={s.legendItem}>
                                <span className={s.legendDot} style={{ background: "var(--color-primary)" }} />
                                <span className={s.legendLabel}>Development</span>
                                <span className={s.legendPct}>35%</span>
                            </div>
                            <div className={s.legendItem}>
                                <span className={s.legendDot} style={{ background: "var(--color-info)" }} />
                                <span className={s.legendLabel}>Design</span>
                                <span className={s.legendPct}>20%</span>
                            </div>
                            <div className={s.legendItem}>
                                <span className={s.legendDot} style={{ background: "var(--color-warning)" }} />
                                <span className={s.legendLabel}>Marketing</span>
                                <span className={s.legendPct}>20%</span>
                            </div>
                            <div className={s.legendItem}>
                                <span className={s.legendDot} style={{ background: "var(--color-success)" }} />
                                <span className={s.legendLabel}>Operations</span>
                                <span className={s.legendPct}>15%</span>
                            </div>
                            <div className={s.legendItem}>
                                <span className={s.legendDot} style={{ background: "var(--color-text-tertiary)" }} />
                                <span className={s.legendLabel}>Other</span>
                                <span className={s.legendPct}>10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
