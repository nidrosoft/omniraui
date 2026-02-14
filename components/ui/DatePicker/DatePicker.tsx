"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Calendar as CalendarIcon, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import s from "./DatePicker.module.css";

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function isSameDay(a: Date, b: Date) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function isToday(d: Date) {
    return isSameDay(d, new Date());
}

function formatDate(d: Date | null, fmt = "MMM d, yyyy"): string {
    if (!d) return "";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthsFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return fmt
        .replace("MMMM", monthsFull[d.getMonth()])
        .replace("MMM", months[d.getMonth()])
        .replace("MM", String(d.getMonth() + 1).padStart(2, "0"))
        .replace("dd", String(d.getDate()).padStart(2, "0"))
        .replace("d", String(d.getDate()))
        .replace("yyyy", String(d.getFullYear()));
}

function getMonthDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    const startDow = firstDay.getDay();
    for (let i = startDow - 1; i >= 0; i--) {
        days.push({ date: new Date(year, month, -i), isCurrentMonth: false });
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

function getMonthLabel(d: Date) {
    return d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function isInRange(date: Date, start: Date | null, end: Date | null) {
    if (!start || !end) return false;
    const t = date.getTime();
    return t > start.getTime() && t < end.getTime();
}

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
    useEffect(() => {
        function listener(e: MouseEvent) {
            if (!ref.current || ref.current.contains(e.target as Node)) return;
            handler();
        }
        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
}

/* ══════════════════════════════════════════════
   MiniCalendar (shared internal component)
   ══════════════════════════════════════════════ */

interface MiniCalendarProps {
    viewDate: Date;
    onViewDateChange: (d: Date) => void;
    selected?: Date | null;
    rangeStart?: Date | null;
    rangeEnd?: Date | null;
    onSelect: (d: Date) => void;
    onHover?: (d: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
}

function MiniCalendar({
    viewDate,
    onViewDateChange,
    selected,
    rangeStart,
    rangeEnd,
    onSelect,
    onHover,
    minDate,
    maxDate,
    className,
}: MiniCalendarProps) {
    const days = useMemo(
        () => getMonthDays(viewDate.getFullYear(), viewDate.getMonth()),
        [viewDate],
    );

    const prevMonth = () => {
        const d = new Date(viewDate);
        d.setMonth(d.getMonth() - 1);
        onViewDateChange(d);
    };

    const nextMonth = () => {
        const d = new Date(viewDate);
        d.setMonth(d.getMonth() + 1);
        onViewDateChange(d);
    };

    return (
        <div className={cn(s.miniCal, className)}>
            <div className={s.miniCalHeader}>
                <span className={s.miniCalTitle}>{getMonthLabel(viewDate)}</span>
                <div className={s.miniCalNav}>
                    <button type="button" className={s.miniCalNavBtn} onClick={prevMonth} aria-label="Previous month">
                        <ArrowLeft2 size={14} variant="Linear" color="currentColor" />
                    </button>
                    <button type="button" className={s.miniCalNavBtn} onClick={nextMonth} aria-label="Next month">
                        <ArrowRight2 size={14} variant="Linear" color="currentColor" />
                    </button>
                </div>
            </div>
            <div className={s.miniCalGrid}>
                {DAYS_SHORT.map((d) => (
                    <div key={d} className={s.miniCalDow}>{d}</div>
                ))}
                {days.map(({ date, isCurrentMonth }, i) => {
                    const today = isToday(date);
                    const isSelected = selected && isSameDay(date, selected);
                    const isStart = rangeStart && isSameDay(date, rangeStart);
                    const isEnd = rangeEnd && isSameDay(date, rangeEnd);
                    const inRange = isInRange(date, rangeStart ?? null, rangeEnd ?? null);
                    const disabled =
                        (minDate && date < minDate) || (maxDate && date > maxDate);

                    return (
                        <button
                            key={i}
                            type="button"
                            className={cn(
                                s.miniCalDay,
                                !isCurrentMonth && s.miniCalDayOutside,
                                today && s.miniCalDayToday,
                                isSelected && s.miniCalDaySelected,
                                isStart && s.miniCalDayRangeStart,
                                isEnd && s.miniCalDayRangeEnd,
                                isStart && isEnd && s.miniCalDayRangeStartEnd,
                                inRange && s.miniCalDayInRange,
                                disabled && s.miniCalDayDisabled,
                            )}
                            onClick={() => onSelect(date)}
                            onMouseEnter={() => onHover?.(date)}
                            onMouseLeave={() => onHover?.(null)}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   1. DatePicker (single date)
   ══════════════════════════════════════════════ */

export interface DatePickerProps {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
    placeholder?: string;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function DatePicker({
    value = null,
    onChange,
    placeholder = "Select date",
    format = "MMM d, yyyy",
    minDate,
    maxDate,
    size = "md",
    className,
}: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Date | null>(value);
    const [viewDate, setViewDate] = useState<Date>(value ?? new Date());
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => setOpen(false));

    useEffect(() => {
        setSelected(value);
        if (value) setViewDate(value);
    }, [value]);

    const handleSelect = (d: Date) => {
        setSelected(d);
        onChange?.(d);
        setOpen(false);
    };

    const sizeClass = size === "sm" ? s.inputSm : size === "lg" ? s.inputLg : "";

    return (
        <div className={cn(s.popoverWrap, className)} ref={ref}>
            <div className={s.inputWrap}>
                <span className={s.inputIcon}>
                    <CalendarIcon size={16} variant="Bulk" color="currentColor" />
                </span>
                <input
                    type="text"
                    readOnly
                    className={cn(s.input, sizeClass, open && s.inputActive)}
                    value={selected ? formatDate(selected, format) : ""}
                    placeholder={placeholder}
                    onClick={() => setOpen((p) => !p)}
                />
            </div>
            {open && (
                <div className={s.dropdown}>
                    <MiniCalendar
                        viewDate={viewDate}
                        onViewDateChange={setViewDate}
                        selected={selected}
                        onSelect={handleSelect}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   2. DateRangePicker
   ══════════════════════════════════════════════ */

export interface DateRangePreset {
    label: string;
    range: [Date, Date];
}

export interface DateRangePickerProps {
    startDate?: Date | null;
    endDate?: Date | null;
    onChange?: (start: Date | null, end: Date | null) => void;
    presets?: DateRangePreset[];
    placeholderStart?: string;
    placeholderEnd?: string;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
    size?: "sm" | "md" | "lg";
    className?: string;
}

function getDefaultPresets(): DateRangePreset[] {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysAgo = (n: number) => {
        const d = new Date(today);
        d.setDate(d.getDate() - n);
        return d;
    };
    return [
        { label: "Today", range: [today, today] },
        { label: "Yesterday", range: [daysAgo(1), daysAgo(1)] },
        { label: "Last 7 days", range: [daysAgo(6), today] },
        { label: "Last 14 days", range: [daysAgo(13), today] },
        { label: "Last 30 days", range: [daysAgo(29), today] },
        { label: "Last 90 days", range: [daysAgo(89), today] },
        { label: "This month", range: [new Date(now.getFullYear(), now.getMonth(), 1), today] },
        { label: "Last month", range: [new Date(now.getFullYear(), now.getMonth() - 1, 1), new Date(now.getFullYear(), now.getMonth(), 0)] },
    ];
}

export function DateRangePicker({
    startDate = null,
    endDate = null,
    onChange,
    presets,
    placeholderStart = "Start date",
    placeholderEnd = "End date",
    format = "MMM d, yyyy",
    minDate,
    maxDate,
    size = "md",
    className,
}: DateRangePickerProps) {
    const [open, setOpen] = useState(false);
    const [start, setStart] = useState<Date | null>(startDate);
    const [end, setEnd] = useState<Date | null>(endDate);
    const [hovered, setHovered] = useState<Date | null>(null);
    const [picking, setPicking] = useState<"start" | "end">("start");
    const [viewDateLeft, setViewDateLeft] = useState<Date>(startDate ?? new Date());
    const [activePreset, setActivePreset] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const resolvedPresets = presets ?? getDefaultPresets();

    useClickOutside(ref, () => setOpen(false));

    useEffect(() => {
        setStart(startDate);
        setEnd(endDate);
        if (startDate) setViewDateLeft(startDate);
    }, [startDate, endDate]);

    const viewDateRight = useMemo(() => {
        const d = new Date(viewDateLeft);
        d.setMonth(d.getMonth() + 1);
        return d;
    }, [viewDateLeft]);

    const effectiveEnd = end ?? (picking === "end" && hovered ? hovered : null);
    const rangeStart = start && effectiveEnd && start.getTime() <= (effectiveEnd?.getTime() ?? 0) ? start : effectiveEnd;
    const rangeEnd = start && effectiveEnd && start.getTime() <= (effectiveEnd?.getTime() ?? 0) ? effectiveEnd : start;

    const handleSelect = (d: Date) => {
        setActivePreset(null);
        if (picking === "start") {
            setStart(d);
            setEnd(null);
            setPicking("end");
        } else {
            let s = start!;
            let e = d;
            if (e < s) [s, e] = [e, s];
            setStart(s);
            setEnd(e);
            setPicking("start");
            onChange?.(s, e);
        }
    };

    const handlePreset = (preset: DateRangePreset) => {
        const [ps, pe] = preset.range;
        setStart(ps);
        setEnd(pe);
        setActivePreset(preset.label);
        setViewDateLeft(ps);
        setPicking("start");
        onChange?.(ps, pe);
    };

    const sizeClass = size === "sm" ? s.inputSm : size === "lg" ? s.inputLg : "";

    return (
        <div className={cn(s.popoverWrap, className)} ref={ref}>
            <div className={s.rangeInputRow}>
                <div className={s.inputWrap}>
                    <span className={s.inputIcon}>
                        <CalendarIcon size={16} variant="Bulk" color="currentColor" />
                    </span>
                    <input
                        type="text"
                        readOnly
                        className={cn(s.input, sizeClass, open && s.inputActive)}
                        value={start ? formatDate(start, format) : ""}
                        placeholder={placeholderStart}
                        onClick={() => { setOpen(true); setPicking("start"); }}
                    />
                </div>
                <span className={s.rangeSeparator}>–</span>
                <div className={s.inputWrap}>
                    <span className={s.inputIcon}>
                        <CalendarIcon size={16} variant="Bulk" color="currentColor" />
                    </span>
                    <input
                        type="text"
                        readOnly
                        className={cn(s.input, sizeClass, open && s.inputActive)}
                        value={end ? formatDate(end, format) : ""}
                        placeholder={placeholderEnd}
                        onClick={() => { setOpen(true); setPicking("end"); }}
                    />
                </div>
            </div>
            {open && (
                <div className={cn(s.dropdown, s.dropdownWithPresets)}>
                    <div className={s.presetsSidebar}>
                        {resolvedPresets.map((p) => (
                            <button
                                key={p.label}
                                type="button"
                                className={cn(s.presetBtn, activePreset === p.label && s.presetBtnActive)}
                                onClick={() => handlePreset(p)}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                    <div className={s.dualCalRow}>
                        <MiniCalendar
                            viewDate={viewDateLeft}
                            onViewDateChange={setViewDateLeft}
                            rangeStart={rangeStart}
                            rangeEnd={rangeEnd}
                            onSelect={handleSelect}
                            onHover={setHovered}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                        <div className={s.dualCalDivider} />
                        <MiniCalendar
                            viewDate={viewDateRight}
                            onViewDateChange={(d) => {
                                const prev = new Date(d);
                                prev.setMonth(prev.getMonth() - 1);
                                setViewDateLeft(prev);
                            }}
                            rangeStart={rangeStart}
                            rangeEnd={rangeEnd}
                            onSelect={handleSelect}
                            onHover={setHovered}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   3. CalendarCard (standalone mini calendar)
   ══════════════════════════════════════════════ */

export interface CalendarCardProps {
    value?: Date | null;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    showFooter?: boolean;
    className?: string;
}

export function CalendarCard({
    value = null,
    onChange,
    minDate,
    maxDate,
    showFooter = true,
    className,
}: CalendarCardProps) {
    const [selected, setSelected] = useState<Date | null>(value);
    const [viewDate, setViewDate] = useState<Date>(value ?? new Date());

    useEffect(() => {
        setSelected(value);
        if (value) setViewDate(value);
    }, [value]);

    const handleSelect = (d: Date) => {
        setSelected(d);
        onChange?.(d);
    };

    const handleToday = () => {
        const now = new Date();
        setSelected(now);
        setViewDate(now);
        onChange?.(now);
    };

    return (
        <div className={cn(s.calCard, className)}>
            <MiniCalendar
                viewDate={viewDate}
                onViewDateChange={setViewDate}
                selected={selected}
                onSelect={handleSelect}
                minDate={minDate}
                maxDate={maxDate}
            />
            {showFooter && (
                <div className={s.calCardFooter}>
                    <Button variant="ghost" size="sm" onClick={handleToday}>
                        Today
                    </Button>
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════
   4. RangeCalendarCard (standalone range calendar)
   ══════════════════════════════════════════════ */

export interface RangeCalendarCardProps {
    startDate?: Date | null;
    endDate?: Date | null;
    onChange?: (start: Date | null, end: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
}

export function RangeCalendarCard({
    startDate = null,
    endDate = null,
    onChange,
    minDate,
    maxDate,
    className,
}: RangeCalendarCardProps) {
    const [start, setStart] = useState<Date | null>(startDate);
    const [end, setEnd] = useState<Date | null>(endDate);
    const [hovered, setHovered] = useState<Date | null>(null);
    const [picking, setPicking] = useState<"start" | "end">("start");
    const [viewDateLeft, setViewDateLeft] = useState<Date>(startDate ?? new Date());

    useEffect(() => {
        setStart(startDate);
        setEnd(endDate);
        if (startDate) setViewDateLeft(startDate);
    }, [startDate, endDate]);

    const viewDateRight = useMemo(() => {
        const d = new Date(viewDateLeft);
        d.setMonth(d.getMonth() + 1);
        return d;
    }, [viewDateLeft]);

    const effectiveEnd = end ?? (picking === "end" && hovered ? hovered : null);
    const rangeStart = start && effectiveEnd && start.getTime() <= (effectiveEnd?.getTime() ?? 0) ? start : effectiveEnd;
    const rangeEnd = start && effectiveEnd && start.getTime() <= (effectiveEnd?.getTime() ?? 0) ? effectiveEnd : start;

    const handleSelect = useCallback((d: Date) => {
        if (picking === "start") {
            setStart(d);
            setEnd(null);
            setPicking("end");
        } else {
            let s = start!;
            let e = d;
            if (e < s) [s, e] = [e, s];
            setStart(s);
            setEnd(e);
            setPicking("start");
            onChange?.(s, e);
        }
    }, [picking, start, onChange]);

    return (
        <div className={cn(s.calCard, className)}>
            <div className={s.dualCalRow}>
                <MiniCalendar
                    viewDate={viewDateLeft}
                    onViewDateChange={setViewDateLeft}
                    rangeStart={rangeStart}
                    rangeEnd={rangeEnd}
                    onSelect={handleSelect}
                    onHover={setHovered}
                    minDate={minDate}
                    maxDate={maxDate}
                />
                <div className={s.dualCalDivider} />
                <MiniCalendar
                    viewDate={viewDateRight}
                    onViewDateChange={(d) => {
                        const prev = new Date(d);
                        prev.setMonth(prev.getMonth() - 1);
                        setViewDateLeft(prev);
                    }}
                    rangeStart={rangeStart}
                    rangeEnd={rangeEnd}
                    onSelect={handleSelect}
                    onHover={setHovered}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </div>
            <div className={s.calCardFooter}>
                <span style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginRight: "auto" }}>
                    {start ? formatDate(start) : "Start"} – {end ? formatDate(end) : "End"}
                </span>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setStart(null); setEnd(null); setPicking("start"); onChange?.(null, null); }}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
}
