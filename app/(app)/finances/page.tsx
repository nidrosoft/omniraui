import React from "react";
import { Wallet2, SearchNormal, DocumentDownload, Receipt2, MoneyRecive, DocumentText, More } from "iconsax-react";
import s from "./finances.module.css";
import { cn } from "@/lib/cn";

export default function FinancesPage() {
    return (
        <div className={s.page}>
            {/* 1. Page Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <Wallet2 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Finances</h1>
                        <p className={s.subtitle}>Manage invoices, budgets, and expenses</p>
                    </div>
                </div>
                <div className={s.headerRight}>
                    <button className={s.secondaryBtn}>
                        <DocumentDownload size={16} variant="Linear" color="currentColor" />
                        Export
                    </button>
                    <button className={s.primaryBtn}>
                        <Receipt2 size={16} variant="Linear" color="currentColor" />
                        New Invoice
                    </button>
                </div>
            </header>

            {/* 2. Financial Summary Bar */}
            <section className={s.summaryBar}>
                <div className={s.summaryItem}>
                    <div className={s.summaryIconBox} style={{ color: "var(--color-primary)", background: "var(--color-bg-primary-subtle)", borderColor: "var(--color-border-primary-subtle)" }}>
                        <MoneyRecive size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.summaryContent}>
                        <span className={s.summaryLabel}>Revenue</span>
                        <span className={s.summaryValue}>$148.2K</span>
                    </div>
                </div>
                <div className={s.summaryDivider} />
                
                <div className={s.summaryItem}>
                    <div className={s.summaryIconBox} style={{ color: "var(--color-warning)", background: "var(--color-warning-bg)", borderColor: "var(--color-warning-border)" }}>
                        <Receipt2 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.summaryContent}>
                        <span className={s.summaryLabel}>Expenses</span>
                        <span className={s.summaryValue}>$94.8K</span>
                    </div>
                </div>
                <div className={s.summaryDivider} />

                <div className={s.summaryItem}>
                    <div className={s.summaryIconBox} style={{ color: "var(--color-success)", background: "var(--color-success-bg)", borderColor: "var(--color-success-border)" }}>
                        <Wallet2 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.summaryContent}>
                        <span className={s.summaryLabel}>Profit</span>
                        <span className={s.summaryValue}>$53.4K</span>
                    </div>
                </div>
                <div className={s.summaryDivider} />

                <div className={s.summaryItem}>
                    <div className={s.summaryIconBox} style={{ color: "var(--color-info)", background: "var(--color-info-bg)", borderColor: "var(--color-info-border)" }}>
                        <DocumentText size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.summaryContent}>
                        <span className={s.summaryLabel}>Outstanding</span>
                        <span className={s.summaryValue}>$28.6K</span>
                    </div>
                </div>
            </section>

            {/* 3. Main Content Grid */}
            <section className={s.mainGrid}>
                {/* Left: Invoices Table */}
                <div className={cn(s.card, s.invoicesCard)}>
                    <div className={s.cardHeader}>
                        <h2 className={s.cardTitle}>Recent Invoices</h2>
                        <div className={s.tabs}>
                            <button className={cn(s.tab, s.tabActive)}>All</button>
                            <button className={s.tab}>Paid</button>
                            <button className={s.tab}>Pending</button>
                            <button className={s.tab}>Overdue</button>
                        </div>
                    </div>
                    
                    <div className={s.tableHeader}>
                        <span>Invoice</span>
                        <span>Client</span>
                        <span>Amount</span>
                        <span>Status</span>
                        <span>Date</span>
                        <span style={{ textAlign: "right" }}>Actions</span>
                    </div>

                    <div className={s.tableRows}>
                        {[
                            { id: "INV-042", client: "Acme Corp", amount: "$8,400", status: "Paid", date: "Mar 2" },
                            { id: "INV-041", client: "Globex Inc", amount: "$12,500", status: "Pending", date: "Mar 1" },
                            { id: "INV-040", client: "Stark Ind", amount: "$4,200", status: "Paid", date: "Feb 28" },
                            { id: "INV-039", client: "Wayne Ent", amount: "$28,000", status: "Overdue", date: "Feb 15" },
                            { id: "INV-038", client: "Umbrella", amount: "$1,850", status: "Draft", date: "Feb 14" },
                            { id: "INV-037", client: "Massive Dynamic", amount: "$9,200", status: "Paid", date: "Feb 10" },
                        ].map((inv, i) => (
                            <div key={i} className={s.tableRow}>
                                <span className={s.cellId}>{inv.id}</span>
                                <span className={s.cellClient}>{inv.client}</span>
                                <span className={s.cellAmount}>{inv.amount}</span>
                                <div>
                                    <span className={cn(s.statusBadge, 
                                        inv.status === "Paid" ? s.statusSuccess :
                                        inv.status === "Pending" ? s.statusWarning :
                                        inv.status === "Overdue" ? s.statusError :
                                        s.statusDraft
                                    )}>
                                        {inv.status}
                                    </span>
                                </div>
                                <span className={s.cellDate}>{inv.date}</span>
                                <div className={s.cellActions}>
                                    <button className={s.iconBtn}><DocumentDownload size={14} variant="Linear" color="currentColor" /></button>
                                    <button className={s.iconBtn}><More size={14} variant="Linear" color="currentColor" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Budgets */}
                <div className={s.budgetsStack}>
                    <div className={s.card}>
                        <div className={s.cardHeader}>
                            <h2 className={s.cardTitle}>Department Budgets</h2>
                            <button className={s.viewAllBtn}>Details</button>
                        </div>
                        
                        <div className={s.budgetList}>
                            {/* Budget 1 */}
                            <div className={s.budgetItem}>
                                <div className={s.budgetTop}>
                                    <span className={s.budgetDept}>Engineering</span>
                                    <span className={s.budgetAmt}>$42K / $50K</span>
                                </div>
                                <div className={s.progressBar}>
                                    <div className={s.progressFill} style={{ width: "84%", background: "var(--color-warning)" }} />
                                </div>
                                <div className={s.budgetBottom}>
                                    <span className={s.budgetDesc}>84% spent</span>
                                    <span className={s.budgetDesc}>$8K remaining</span>
                                </div>
                            </div>

                            {/* Budget 2 */}
                            <div className={s.budgetItem}>
                                <div className={s.budgetTop}>
                                    <span className={s.budgetDept}>Marketing</span>
                                    <span className={s.budgetAmt}>$12K / $30K</span>
                                </div>
                                <div className={s.progressBar}>
                                    <div className={s.progressFill} style={{ width: "40%", background: "var(--color-success)" }} />
                                </div>
                                <div className={s.budgetBottom}>
                                    <span className={s.budgetDesc}>40% spent</span>
                                    <span className={s.budgetDesc}>$18K remaining</span>
                                </div>
                            </div>

                            {/* Budget 3 */}
                            <div className={s.budgetItem}>
                                <div className={s.budgetTop}>
                                    <span className={s.budgetDept}>Design</span>
                                    <span className={s.budgetAmt}>$14.5K / $15K</span>
                                </div>
                                <div className={s.progressBar}>
                                    <div className={s.progressFill} style={{ width: "96%", background: "var(--color-error)" }} />
                                </div>
                                <div className={s.budgetBottom}>
                                    <span className={s.budgetDesc} style={{ color: "var(--color-error)" }}>96% spent!</span>
                                    <span className={s.budgetDesc}>$500 remaining</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
