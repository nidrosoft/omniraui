"use client";

import { useState } from "react";
import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import {
    DatePicker,
    DateRangePicker,
    CalendarCard,
    RangeCalendarCard,
} from "@/components/ui/DatePicker";

/* ── Demo 01: Single Date Picker ── */

function SingleDatePickerDemo() {
    const [date, setDate] = useState<Date | null>(null);
    return (
        <div style={{ maxWidth: 280 }}>
            <DatePicker
                value={date}
                onChange={setDate}
                placeholder="Select a date"
            />
        </div>
    );
}

const singleCode = `import { DatePicker } from "@/components/ui/DatePicker";

const [date, setDate] = useState<Date | null>(null);

<DatePicker
    value={date}
    onChange={setDate}
    placeholder="Select a date"
/>`;

/* ── Demo 02: Date Picker Sizes ── */

function DatePickerSizesDemo() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 280 }}>
            <DatePicker size="sm" placeholder="Small" />
            <DatePicker size="md" placeholder="Medium (default)" />
            <DatePicker size="lg" placeholder="Large" />
        </div>
    );
}

const sizesCode = `import { DatePicker } from "@/components/ui/DatePicker";

<DatePicker size="sm" placeholder="Small" />
<DatePicker size="md" placeholder="Medium (default)" />
<DatePicker size="lg" placeholder="Large" />`;

/* ── Demo 03: Date Range Picker with Presets ── */

function DateRangePickerDemo() {
    const [start, setStart] = useState<Date | null>(null);
    const [end, setEnd] = useState<Date | null>(null);
    return (
        <div style={{ maxWidth: 560 }}>
            <DateRangePicker
                startDate={start}
                endDate={end}
                onChange={(s, e) => { setStart(s); setEnd(e); }}
            />
        </div>
    );
}

const rangeCode = `import { DateRangePicker } from "@/components/ui/DatePicker";

const [start, setStart] = useState<Date | null>(null);
const [end, setEnd] = useState<Date | null>(null);

<DateRangePicker
    startDate={start}
    endDate={end}
    onChange={(s, e) => { setStart(s); setEnd(e); }}
/>`;

/* ── Demo 04: Date Range Picker with Custom Presets ── */

function DateRangeCustomPresetsDemo() {
    const [start, setStart] = useState<Date | null>(null);
    const [end, setEnd] = useState<Date | null>(null);

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysAgo = (n: number) => { const d = new Date(today); d.setDate(d.getDate() - n); return d; };

    const customPresets = [
        { label: "This week", range: [daysAgo(today.getDay()), today] as [Date, Date] },
        { label: "Last 7 days", range: [daysAgo(6), today] as [Date, Date] },
        { label: "This quarter", range: [new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1), today] as [Date, Date] },
        { label: "Year to date", range: [new Date(now.getFullYear(), 0, 1), today] as [Date, Date] },
    ];

    return (
        <div style={{ maxWidth: 560 }}>
            <DateRangePicker
                startDate={start}
                endDate={end}
                onChange={(s, e) => { setStart(s); setEnd(e); }}
                presets={customPresets}
            />
        </div>
    );
}

const customPresetsCode = `import { DateRangePicker } from "@/components/ui/DatePicker";

const customPresets = [
    { label: "This week", range: [startOfWeek, today] },
    { label: "Last 7 days", range: [daysAgo(6), today] },
    { label: "This quarter", range: [startOfQuarter, today] },
    { label: "Year to date", range: [startOfYear, today] },
];

<DateRangePicker
    startDate={start}
    endDate={end}
    onChange={(s, e) => { setStart(s); setEnd(e); }}
    presets={customPresets}
/>`;

/* ── Demo 05: Calendar Card ── */

function CalendarCardDemo() {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
        <CalendarCard value={date} onChange={setDate} />
    );
}

const calCardCode = `import { CalendarCard } from "@/components/ui/DatePicker";

const [date, setDate] = useState<Date | null>(new Date());

<CalendarCard value={date} onChange={setDate} />`;

/* ── Demo 06: Range Calendar Card ── */

function RangeCalendarCardDemo() {
    const [start, setStart] = useState<Date | null>(null);
    const [end, setEnd] = useState<Date | null>(null);
    return (
        <RangeCalendarCard
            startDate={start}
            endDate={end}
            onChange={(s, e) => { setStart(s); setEnd(e); }}
        />
    );
}

const rangeCalCardCode = `import { RangeCalendarCard } from "@/components/ui/DatePicker";

const [start, setStart] = useState<Date | null>(null);
const [end, setEnd] = useState<Date | null>(null);

<RangeCalendarCard
    startDate={start}
    endDate={end}
    onChange={(s, e) => { setStart(s); setEnd(e); }}
/>`;

/* ── Props ── */

const datePickerProps = [
    { name: "value", type: "Date | null", description: "Currently selected date" },
    { name: "onChange", type: "(date: Date | null) => void", description: "Callback when a date is selected" },
    { name: "placeholder", type: "string", default: '"Select date"', description: "Placeholder text for the input" },
    { name: "format", type: "string", default: '"MMM d, yyyy"', description: "Date display format" },
    { name: "minDate", type: "Date", description: "Minimum selectable date" },
    { name: "maxDate", type: "Date", description: "Maximum selectable date" },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size variant" },
    { name: "className", type: "string", description: "Additional CSS class" },
];

const dateRangePickerProps = [
    { name: "startDate", type: "Date | null", description: "Start of the selected range" },
    { name: "endDate", type: "Date | null", description: "End of the selected range" },
    { name: "onChange", type: "(start: Date | null, end: Date | null) => void", description: "Callback when range changes" },
    { name: "presets", type: "DateRangePreset[]", description: "Custom preset options. Defaults to common ranges (Today, Last 7 days, etc.)" },
    { name: "placeholderStart", type: "string", default: '"Start date"', description: "Placeholder for start input" },
    { name: "placeholderEnd", type: "string", default: '"End date"', description: "Placeholder for end input" },
    { name: "format", type: "string", default: '"MMM d, yyyy"', description: "Date display format" },
    { name: "minDate", type: "Date", description: "Minimum selectable date" },
    { name: "maxDate", type: "Date", description: "Maximum selectable date" },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size variant" },
    { name: "className", type: "string", description: "Additional CSS class" },
];

const calendarCardProps = [
    { name: "value", type: "Date | null", description: "Currently selected date" },
    { name: "onChange", type: "(date: Date) => void", description: "Callback when a date is selected" },
    { name: "minDate", type: "Date", description: "Minimum selectable date" },
    { name: "maxDate", type: "Date", description: "Maximum selectable date" },
    { name: "showFooter", type: "boolean", default: "true", description: "Show the Today button footer" },
    { name: "className", type: "string", description: "Additional CSS class" },
];

const rangeCalendarCardProps = [
    { name: "startDate", type: "Date | null", description: "Start of the selected range" },
    { name: "endDate", type: "Date | null", description: "End of the selected range" },
    { name: "onChange", type: "(start: Date | null, end: Date | null) => void", description: "Callback when range changes" },
    { name: "minDate", type: "Date", description: "Minimum selectable date" },
    { name: "maxDate", type: "Date", description: "Maximum selectable date" },
    { name: "className", type: "string", description: "Additional CSS class" },
];

/* ── Page ── */

export default function DatePickerPage() {
    return (
        <div>
            <DocHeader
                title="Date Picker"
                description="Date selection components with dropdown calendars, range selection, preset shortcuts, and standalone calendar cards. Built with zero dependencies."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Date Picker" },
                ]}
            />

            <InstallBlock slug="date-picker" components={["DatePicker", "DateRangePicker", "CalendarCard", "RangeCalendarCard"]} />

            <ComponentPreview
                title="Date Picker"
                description="A single-date input that opens a dropdown mini calendar. Click a day to select it."
                code={singleCode}
            >
                <SingleDatePickerDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Date Picker — Sizes"
                description="Three size variants: small, medium (default), and large."
                code={sizesCode}
            >
                <DatePickerSizesDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Date Range Picker with Presets"
                description="Two inputs for start and end dates. The dropdown includes a sidebar with common preset ranges (Today, Last 7 days, Last 30 days, etc.) and a dual-month calendar for manual selection."
                code={rangeCode}
            >
                <DateRangePickerDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Date Range Picker — Custom Presets"
                description="Pass your own preset options to match your app's needs."
                code={customPresetsCode}
            >
                <DateRangeCustomPresetsDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar Card"
                description="A standalone mini calendar inside a card. Great for embedding in dashboards or settings panels."
                code={calCardCode}
            >
                <CalendarCardDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Range Calendar Card"
                description="A standalone dual-month calendar card for selecting date ranges. Shows the selected range in the footer with a clear button."
                code={rangeCalCardCode}
            >
                <RangeCalendarCardDemo />
            </ComponentPreview>

            <PropsTable title="DatePicker" props={datePickerProps} />
            <PropsTable title="DateRangePicker" props={dateRangePickerProps} />
            <PropsTable title="CalendarCard" props={calendarCardProps} />
            <PropsTable title="RangeCalendarCard" props={rangeCalendarCardProps} />
        </div>
    );
}
