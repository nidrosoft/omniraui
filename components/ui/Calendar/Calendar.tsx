"use client";

import { useState, useMemo, useCallback } from "react";
import { ArrowLeft2, ArrowRight2, Calendar as CalendarIcon, Clock, Location, Link21, Notification, CloseCircle, People } from "iconsax-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import type { CalendarEvent, CalendarGuest } from "./config";
import styles from "./Calendar.module.css";

/* ── Types ── */

export type CalendarView = "month" | "week" | "day";

export interface CalendarProps {
    events?: CalendarEvent[];
    defaultView?: CalendarView;
    defaultDate?: Date;
    onViewChange?: (view: CalendarView) => void;
    onDateChange?: (date: Date) => void;
    onEventClick?: (event: CalendarEvent) => void;
    showDetailPanel?: boolean;
    className?: string;
}

/* ── Helpers ── */

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(d: Date) {
    return isSameDay(d, new Date());
}

function formatTime(d: Date) {
    return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function formatHour(hour: number) {
    if (hour === 0) return "12 AM";
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return "12 PM";
    return `${hour - 12} PM`;
}

function getMonthName(d: Date) {
    return d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function getWeekLabel(d: Date) {
    const start = getWeekStart(d);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    if (start.getFullYear() !== end.getFullYear()) {
        return `${start.toLocaleDateString(undefined, { ...opts, year: "numeric" })} – ${end.toLocaleDateString(undefined, { ...opts, year: "numeric" })}`;
    }
    return `${start.toLocaleDateString(undefined, opts)} – ${end.toLocaleDateString(undefined, { ...opts, year: "numeric" })}`;
}

function getDayLabel(d: Date) {
    return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function getWeekStart(d: Date) {
    const result = new Date(d);
    result.setDate(result.getDate() - result.getDay());
    result.setHours(0, 0, 0, 0);
    return result;
}

function getMonthDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    const startDow = firstDay.getDay();
    for (let i = startDow - 1; i >= 0; i--) {
        const d = new Date(year, month, -i);
        days.push({ date: d, isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
        for (let i = 1; i <= remaining; i++) {
            days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
        }
    }

    return days;
}

function getEventColorClass(color?: string) {
    switch (color) {
        case "lime": return styles.eventLime;
        case "info": return styles.eventInfo;
        case "warning": return styles.eventWarning;
        case "error": return styles.eventError;
        case "success": return styles.eventSuccess;
        case "accent": return styles.eventAccent;
        default: return styles.eventLime;
    }
}

function getEventsForDay(events: CalendarEvent[], date: Date) {
    return events.filter((e) => isSameDay(e.start, date));
}

function getNowOffset(): number {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

function getEventColorValue(color?: string): string {
    switch (color) {
        case "lime": return "var(--color-lime)";
        case "info": return "var(--color-info)";
        case "warning": return "var(--color-warning)";
        case "error": return "var(--color-error)";
        case "success": return "var(--color-success)";
        case "accent": return "var(--color-border-lime-strong)";
        default: return "var(--color-lime)";
    }
}

function formatEventDate(d: Date) {
    return d.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric", year: "numeric" });
}

function formatEventTime(d: Date) {
    return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function getInitials(name: string) {
    return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

/* ── Event Detail Panel ── */

interface EventDetailPanelProps {
    event: CalendarEvent;
    onClose: () => void;
}

function EventDetailPanel({ event, onClose }: EventDetailPanelProps) {
    const accepted = event.guests?.filter((g) => g.status === "accepted").length ?? 0;
    const pending = event.guests?.filter((g) => g.status === "pending").length ?? 0;
    const declined = event.guests?.filter((g) => g.status === "declined").length ?? 0;

    return (
        <div className={styles.detailPanel}>
            <div className={styles.detailHeader}>
                <div className={styles.detailTitleRow}>
                    <div
                        className={styles.detailColorBar}
                        style={{ background: getEventColorValue(event.color) }}
                    />
                    <span className={styles.detailTitle}>{event.title}</span>
                </div>
                <button type="button" className={styles.detailCloseBtn} onClick={onClose} aria-label="Close">
                    <CloseCircle size={18} variant="Linear" color="currentColor" />
                </button>
            </div>
            <div className={styles.detailBody}>
                {/* Date & Time */}
                <div className={styles.detailRow}>
                    <span className={styles.detailRowIcon}>
                        <CalendarIcon size={16} variant="Bulk" color="currentColor" />
                    </span>
                    <div className={styles.detailRowContent}>
                        <div className={styles.detailRowValue}>{formatEventDate(event.start)}</div>
                        <div className={styles.detailRowValue}>
                            {formatEventTime(event.start)} – {formatEventTime(event.end)}
                        </div>
                    </div>
                </div>

                {/* Reminder */}
                {event.reminder && (
                    <div className={styles.detailRow}>
                        <span className={styles.detailRowIcon}>
                            <Notification size={16} variant="Bulk" color="currentColor" />
                        </span>
                        <div className={styles.detailRowContent}>
                            <div className={styles.detailRowValue}>{event.reminder}</div>
                        </div>
                    </div>
                )}

                {/* Location */}
                {event.location && (
                    <div className={styles.detailRow}>
                        <span className={styles.detailRowIcon}>
                            <Location size={16} variant="Bulk" color="currentColor" />
                        </span>
                        <div className={styles.detailRowContent}>
                            <div className={styles.detailRowValue}>{event.location}</div>
                        </div>
                    </div>
                )}

                {/* Link */}
                {event.link && (
                    <div className={styles.detailRow}>
                        <span className={styles.detailRowIcon}>
                            <Link21 size={16} variant="Bulk" color="currentColor" />
                        </span>
                        <div className={styles.detailRowContent}>
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.detailRowLink}>
                                {event.link}
                            </a>
                        </div>
                    </div>
                )}

                {/* Guests */}
                {event.guests && event.guests.length > 0 && (
                    <>
                        <div className={styles.detailDivider} />
                        <div className={styles.detailRow}>
                            <span className={styles.detailRowIcon}>
                                <People size={16} variant="Bulk" color="currentColor" />
                            </span>
                            <div className={styles.detailRowContent}>
                                <div className={styles.detailRowLabel}>
                                    {event.guests.length} guest{event.guests.length !== 1 ? "s" : ""}
                                </div>
                                <div className={styles.detailGuestsSummary}>
                                    {accepted > 0 && `${accepted} yes`}
                                    {pending > 0 && `${accepted > 0 ? " · " : ""}${pending} awaiting`}
                                    {declined > 0 && `${accepted > 0 || pending > 0 ? " · " : ""}${declined} declined`}
                                </div>
                                <div className={styles.detailGuests}>
                                    {event.guests.map((g, i) => (
                                        <div key={i} className={styles.detailGuest}>
                                            <div className={styles.detailGuestAvatar}>{getInitials(g.name)}</div>
                                            <span className={styles.detailGuestName}>{g.name}</span>
                                            <span className={cn(
                                                styles.detailGuestStatus,
                                                g.status === "accepted" && styles.detailGuestAccepted,
                                                g.status === "declined" && styles.detailGuestDeclined,
                                                g.status === "pending" && styles.detailGuestPending,
                                            )}>
                                                {g.status === "accepted" ? "Yes" : g.status === "declined" ? "No" : "Pending"}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* About */}
                {event.description && (
                    <>
                        <div className={styles.detailDivider} />
                        <div>
                            <div className={styles.detailRowLabel}>About this event</div>
                            <p className={styles.detailAbout}>{event.description}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

/* ── Toolbar ── */

interface ToolbarProps {
    title: string;
    view: CalendarView;
    onViewChange: (v: CalendarView) => void;
    onPrev: () => void;
    onNext: () => void;
    onToday: () => void;
}

function Toolbar({ title, view, onViewChange, onPrev, onNext, onToday }: ToolbarProps) {
    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
                <div className={styles.toolbarNav}>
                    <Button
                        variant="secondary"
                        size="sm"
                        iconOnly
                        icon={<ArrowLeft2 size={16} variant="Linear" color="currentColor" />}
                        onClick={onPrev}
                        aria-label="Previous"
                    />
                    <Button
                        variant="secondary"
                        size="sm"
                        iconOnly
                        icon={<ArrowRight2 size={16} variant="Linear" color="currentColor" />}
                        onClick={onNext}
                        aria-label="Next"
                    />
                </div>
                <span className={styles.toolbarTitle}>{title}</span>
                <Button variant="secondary" size="sm" onClick={onToday}>
                    Today
                </Button>
            </div>
            <div className={styles.viewTabs}>
                {(["month", "week", "day"] as CalendarView[]).map((v) => (
                    <button
                        key={v}
                        type="button"
                        className={cn(styles.viewTab, view === v && styles.viewTabActive)}
                        onClick={() => onViewChange(v)}
                    >
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ── Month View ── */

interface MonthViewProps {
    currentDate: Date;
    events: CalendarEvent[];
    onEventClick?: (event: CalendarEvent) => void;
}

function MonthView({ currentDate, events, onEventClick }: MonthViewProps) {
    const days = useMemo(
        () => getMonthDays(currentDate.getFullYear(), currentDate.getMonth()),
        [currentDate],
    );

    return (
        <div className={styles.monthGrid}>
            {DAYS_SHORT.map((d) => (
                <div key={d} className={styles.monthDayHeader}>{d}</div>
            ))}
            {days.map(({ date, isCurrentMonth }, i) => {
                const dayEvents = getEventsForDay(events, date);
                const today = isToday(date);
                return (
                    <div
                        key={i}
                        className={cn(
                            styles.monthCell,
                            !isCurrentMonth && styles.monthCellOutside,
                            today && styles.monthCellToday,
                        )}
                    >
                        <span className={cn(styles.monthDayNumber, today && styles.monthDayNumberToday)}>
                            {date.getDate()}
                        </span>
                        {dayEvents.slice(0, 3).map((ev) => (
                            <div
                                key={ev.id}
                                className={cn(styles.monthEvent, getEventColorClass(ev.color))}
                                onClick={(e) => { e.stopPropagation(); onEventClick?.(ev); }}
                            >
                                {ev.title}
                            </div>
                        ))}
                        {dayEvents.length > 3 && (
                            <span className={styles.monthEventMore}>+{dayEvents.length - 3} more</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

/* ── Week View ── */

interface WeekViewProps {
    currentDate: Date;
    events: CalendarEvent[];
    onEventClick?: (event: CalendarEvent) => void;
}

function WeekView({ currentDate, events, onEventClick }: WeekViewProps) {
    const weekStart = useMemo(() => getWeekStart(currentDate), [currentDate]);

    const weekDays = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(weekStart);
            d.setDate(d.getDate() + i);
            return d;
        });
    }, [weekStart]);

    const nowMinutes = getNowOffset();
    const showNow = weekDays.some((d) => isToday(d));

    return (
        <div className={styles.weekWrapper}>
            <div className={styles.weekHeaderRow}>
                <div className={styles.weekHeaderGutter} />
                {weekDays.map((d, i) => {
                    const today = isToday(d);
                    return (
                        <div key={i} className={styles.weekHeaderCell}>
                            <div className={styles.weekHeaderDow}>{DAYS_SHORT[d.getDay()]}</div>
                            <div className={cn(styles.weekHeaderDate, today && styles.weekHeaderDateToday)}>
                                {d.getDate()}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.weekBody}>
                <div className={styles.weekTimeGutter}>
                    {HOURS.map((h) => (
                        <div key={h} className={styles.weekTimeLabel}>{formatHour(h)}</div>
                    ))}
                </div>
                {weekDays.map((day, di) => {
                    const dayEvents = getEventsForDay(events, day);
                    const today = isToday(day);
                    return (
                        <div key={di} className={styles.weekDayColumn}>
                            {HOURS.map((h) => (
                                <div key={h} className={styles.weekHourSlot} />
                            ))}
                            {today && (
                                <div
                                    className={styles.nowIndicator}
                                    style={{ top: `${(nowMinutes / (24 * 60)) * 100}%` }}
                                />
                            )}
                            {dayEvents.map((ev) => {
                                const startMin = ev.start.getHours() * 60 + ev.start.getMinutes();
                                const endMin = ev.end.getHours() * 60 + ev.end.getMinutes();
                                const top = (startMin / (24 * 60)) * (24 * 60);
                                const height = ((endMin - startMin) / (24 * 60)) * (24 * 60);
                                return (
                                    <div
                                        key={ev.id}
                                        className={cn(styles.weekEvent, getEventColorClass(ev.color))}
                                        style={{
                                            top: `${startMin}px`,
                                            height: `${Math.max(endMin - startMin, 20)}px`,
                                        }}
                                        onClick={(e) => { e.stopPropagation(); onEventClick?.(ev); }}
                                    >
                                        <div className={styles.weekEventTitle}>{ev.title}</div>
                                        <div className={styles.weekEventTime}>
                                            {formatTime(ev.start)} – {formatTime(ev.end)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Day View ── */

interface DayViewProps {
    currentDate: Date;
    events: CalendarEvent[];
    onEventClick?: (event: CalendarEvent) => void;
}

function DayView({ currentDate, events, onEventClick }: DayViewProps) {
    const dayEvents = useMemo(() => getEventsForDay(events, currentDate), [events, currentDate]);
    const today = isToday(currentDate);
    const nowMinutes = getNowOffset();

    return (
        <div className={styles.dayWrapper}>
            <div className={styles.dayHeaderRow}>
                <div className={styles.dayHeaderGutter} />
                <div className={styles.dayHeaderCell}>
                    <div>
                        <div className={styles.dayHeaderDow}>{DAYS_SHORT[currentDate.getDay()]}</div>
                        <div className={cn(styles.dayHeaderDate, today && styles.dayHeaderDateToday)}>
                            {currentDate.getDate()}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dayBody}>
                <div className={styles.dayTimeGutter}>
                    {HOURS.map((h) => (
                        <div key={h} className={styles.dayTimeLabel}>{formatHour(h)}</div>
                    ))}
                </div>
                <div className={styles.dayColumn}>
                    {HOURS.map((h) => (
                        <div key={h} className={styles.dayHourSlot} />
                    ))}
                    {today && (
                        <div
                            className={styles.nowIndicator}
                            style={{ top: `${(nowMinutes / (24 * 60)) * 100}%` }}
                        />
                    )}
                    {dayEvents.map((ev) => {
                        const startMin = ev.start.getHours() * 60 + ev.start.getMinutes();
                        const endMin = ev.end.getHours() * 60 + ev.end.getMinutes();
                        return (
                            <div
                                key={ev.id}
                                className={cn(styles.dayEvent, getEventColorClass(ev.color))}
                                style={{
                                    top: `${startMin}px`,
                                    height: `${Math.max(endMin - startMin, 30)}px`,
                                }}
                                onClick={(e) => { e.stopPropagation(); onEventClick?.(ev); }}
                            >
                                <div className={styles.dayEventTitle}>{ev.title}</div>
                                <div className={styles.dayEventTime}>
                                    {formatTime(ev.start)} – {formatTime(ev.end)}
                                </div>
                                {ev.description && (endMin - startMin) >= 60 && (
                                    <div className={styles.dayEventDescription}>{ev.description}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* ── Calendar (main) ── */

export function Calendar({
    events = [],
    defaultView = "month",
    defaultDate,
    onViewChange,
    onDateChange,
    onEventClick,
    showDetailPanel = false,
    className,
}: CalendarProps) {
    const [view, setView] = useState<CalendarView>(defaultView);
    const [currentDate, setCurrentDate] = useState<Date>(defaultDate ?? new Date());
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    const handleViewChange = useCallback(
        (v: CalendarView) => {
            setView(v);
            onViewChange?.(v);
        },
        [onViewChange],
    );

    const handleDateChange = useCallback(
        (d: Date) => {
            setCurrentDate(d);
            onDateChange?.(d);
        },
        [onDateChange],
    );

    const handleEventClick = useCallback(
        (event: CalendarEvent) => {
            if (showDetailPanel) {
                setSelectedEvent((prev) => prev?.id === event.id ? null : event);
            }
            onEventClick?.(event);
        },
        [showDetailPanel, onEventClick],
    );

    const navigate = useCallback(
        (direction: -1 | 1) => {
            const d = new Date(currentDate);
            if (view === "month") {
                d.setMonth(d.getMonth() + direction);
            } else if (view === "week") {
                d.setDate(d.getDate() + direction * 7);
            } else {
                d.setDate(d.getDate() + direction);
            }
            handleDateChange(d);
        },
        [currentDate, view, handleDateChange],
    );

    const goToToday = useCallback(() => {
        handleDateChange(new Date());
    }, [handleDateChange]);

    const title = useMemo(() => {
        if (view === "month") return getMonthName(currentDate);
        if (view === "week") return getWeekLabel(currentDate);
        return getDayLabel(currentDate);
    }, [view, currentDate]);

    const calendarContent = (
        <>
            <Toolbar
                title={title}
                view={view}
                onViewChange={handleViewChange}
                onPrev={() => navigate(-1)}
                onNext={() => navigate(1)}
                onToday={goToToday}
            />
            {view === "month" && <MonthView currentDate={currentDate} events={events} onEventClick={handleEventClick} />}
            {view === "week" && <WeekView currentDate={currentDate} events={events} onEventClick={handleEventClick} />}
            {view === "day" && <DayView currentDate={currentDate} events={events} onEventClick={handleEventClick} />}
        </>
    );

    if (showDetailPanel) {
        return (
            <div className={cn(styles.calendarRoot, styles.calendarWithPanel, className)}>
                <div className={styles.calendarMain}>
                    {calendarContent}
                </div>
                {selectedEvent && (
                    <EventDetailPanel
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={cn(styles.calendarRoot, className)}>
            {calendarContent}
        </div>
    );
}
