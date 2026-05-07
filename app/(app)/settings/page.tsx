import React from "react";
import { Setting2, Notification, SecuritySafe, Card, Code1, Brush2 } from "iconsax-react";
import s from "./settings.module.css";
import { cn } from "@/lib/cn";

export default function SettingsPage() {
    return (
        <div className={s.page}>
            {/* Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.headerIconBox}>
                        <Setting2 size={18} variant="Bulk" color="currentColor" />
                    </div>
                    <div className={s.headerTitles}>
                        <h1 className={s.title}>Settings</h1>
                        <p className={s.subtitle}>Manage your account and preferences</p>
                    </div>
                </div>
            </header>

            <div className={s.layout}>
                {/* Sidebar Navigation */}
                <aside className={s.sidebar}>
                    <nav className={s.nav}>
                        <button className={cn(s.navItem, s.navItemActive)}>Profile</button>
                        <button className={s.navItem}>
                            <Notification size={16} variant="Linear" color="currentColor" />
                            Notifications
                        </button>
                        <button className={s.navItem}>
                            <Brush2 size={16} variant="Linear" color="currentColor" />
                            Appearance
                        </button>
                        <button className={s.navItem}>
                            <SecuritySafe size={16} variant="Linear" color="currentColor" />
                            Security
                        </button>
                        <button className={s.navItem}>
                            <Card size={16} variant="Linear" color="currentColor" />
                            Billing
                        </button>
                        <button className={s.navItem}>
                            <Code1 size={16} variant="Linear" color="currentColor" />
                            API Keys
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className={s.content}>
                    {/* Section 1: Profile */}
                    <section className={s.section}>
                        <div className={s.sectionHeader}>
                            <h2 className={s.sectionTitle}>Profile Information</h2>
                            <p className={s.sectionDesc}>Update your photo and personal details.</p>
                        </div>

                        <div className={s.formGroup}>
                            {/* Avatar Upload */}
                            <div className={s.avatarUpload}>
                                <div className={s.avatarLarge}>AJ</div>
                                <div className={s.avatarActions}>
                                    <button className={s.primaryBtn}>Upload new photo</button>
                                    <button className={s.secondaryBtn}>Remove</button>
                                </div>
                            </div>

                            {/* Two Column Inputs */}
                            <div className={s.inputGrid}>
                                <div className={s.inputWrapper}>
                                    <label className={s.label}>First name</label>
                                    <input type="text" className={s.input} defaultValue="Alex" />
                                </div>
                                <div className={s.inputWrapper}>
                                    <label className={s.label}>Last name</label>
                                    <input type="text" className={s.input} defaultValue="Johnson" />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className={s.inputWrapper}>
                                <label className={s.label}>Email address</label>
                                <input type="email" className={s.input} defaultValue="alex@pulse.io" />
                            </div>

                            {/* Bio Textarea */}
                            <div className={s.inputWrapper}>
                                <label className={s.label}>Bio</label>
                                <textarea className={s.textarea} rows={4} defaultValue="Product Manager based in San Francisco. Passionate about building tools that empower teams." />
                                <span className={s.helpText}>Brief description for your profile. URLs are hyperlinked.</span>
                            </div>
                        </div>

                        <div className={s.sectionFooter}>
                            <button className={s.primaryBtn}>Save Changes</button>
                        </div>
                    </section>

                    {/* Section 2: Preferences */}
                    <section className={s.section}>
                        <div className={s.sectionHeader}>
                            <h2 className={s.sectionTitle}>Preferences</h2>
                            <p className={s.sectionDesc}>Customize your app experience.</p>
                        </div>

                        <div className={s.formGroup}>
                            {/* Select */}
                            <div className={s.inputWrapper}>
                                <label className={s.label}>Timezone</label>
                                <select className={s.select} defaultValue="pst">
                                    <option value="est">Eastern Time (ET)</option>
                                    <option value="pst">Pacific Time (PT)</option>
                                    <option value="gmt">Greenwich Mean Time (GMT)</option>
                                    <option value="cet">Central European Time (CET)</option>
                                </select>
                            </div>

                            {/* Toggles */}
                            <div className={s.toggleRow}>
                                <div className={s.toggleInfo}>
                                    <span className={s.toggleLabel}>Weekly Digest</span>
                                    <span className={s.toggleDesc}>Receive a weekly email summarizing project activity.</span>
                                </div>
                                <button className={cn(s.toggleTrack, s.toggleTrackOn)}>
                                    <span className={s.toggleThumb} />
                                </button>
                            </div>

                            <div className={s.toggleRow}>
                                <div className={s.toggleInfo}>
                                    <span className={s.toggleLabel}>Desktop Notifications</span>
                                    <span className={s.toggleDesc}>Show native push notifications for important alerts.</span>
                                </div>
                                <button className={cn(s.toggleTrack, s.toggleTrackOff)}>
                                    <span className={s.toggleThumb} />
                                </button>
                            </div>

                            {/* Checkboxes */}
                            <div className={s.checkboxGroup}>
                                <label className={s.label}>Email Notifications</label>
                                <label className={s.checkboxRow}>
                                    <input type="checkbox" className={s.checkbox} defaultChecked />
                                    <span className={s.checkboxLabel}>Mentions and replies</span>
                                </label>
                                <label className={s.checkboxRow}>
                                    <input type="checkbox" className={s.checkbox} defaultChecked />
                                    <span className={s.checkboxLabel}>Task assignments</span>
                                </label>
                                <label className={s.checkboxRow}>
                                    <input type="checkbox" className={s.checkbox} />
                                    <span className={s.checkboxLabel}>Project status changes</span>
                                </label>
                            </div>
                        </div>

                        <div className={s.sectionFooter}>
                            <button className={s.primaryBtn}>Save Preferences</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
