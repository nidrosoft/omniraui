"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Calendar } from "@/components/ui/Calendar/Calendar";
import { events } from "@/components/ui/Calendar/config";

/* ── Month View Demo ── */

function CalendarMonthViewDemo() {
    return <Calendar events={events} defaultView="month" />;
}

const monthCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

export function CalendarMonthViewDemo() {
    return <Calendar events={events} defaultView="month" />;
}`;

/* ── Week View Demo ── */

function CalendarWeekViewDemo() {
    return <Calendar events={events} defaultView="week" />;
}

const weekCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

export function CalendarWeekViewDemo() {
    return <Calendar events={events} defaultView="week" />;
}`;

/* ── Day View Demo ── */

function CalendarDayViewDemo() {
    return <Calendar events={events} defaultView="day" />;
}

const dayCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

export function CalendarDayViewDemo() {
    return <Calendar events={events} defaultView="day" />;
}`;

/* ── Props ── */

const calendarProps = [
    { name: "events", type: "CalendarEvent[]", default: "[]", description: "Array of calendar events to display" },
    { name: "defaultView", type: '"month" | "week" | "day"', default: '"month"', description: "Initial calendar view mode. Users can switch views via the toolbar tabs." },
    { name: "defaultDate", type: "Date", default: "new Date()", description: "Initial date the calendar focuses on" },
    { name: "onViewChange", type: "(view: CalendarView) => void", description: "Callback when the view mode changes" },
    { name: "onDateChange", type: "(date: Date) => void", description: "Callback when the focused date changes via navigation" },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

const eventProps = [
    { name: "id", type: "string", description: "Unique identifier for the event" },
    { name: "title", type: "string", description: "Event title displayed in the calendar" },
    { name: "start", type: "Date", description: "Event start date and time" },
    { name: "end", type: "Date", description: "Event end date and time" },
    { name: "color", type: '"lime" | "info" | "warning" | "error" | "success" | "accent"', default: '"lime"', description: "Color theme for the event chip" },
    { name: "description", type: "string", description: "Optional description shown in day view for longer events" },
];

/* ── Page ── */

export default function CalendarPage() {
    return (
        <div>
            <DocHeader
                title="Calendar"
                description="Full-featured calendar with month, week, and day views. Displays color-coded events with navigation, current time indicator, and glassmorphism styling."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "Calendar" },
                ]}
            />

            <InstallBlock slug="calendar" components={["Calendar","Button"]} />

            <ComponentPreview
                title="Calendar — Month View"
                description="Classic month grid with day numbers, color-coded event chips, and overflow indicators. Today is highlighted with the accent color."
                code={monthCode}
            >
                <CalendarMonthViewDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar — Week View"
                description="Seven-day time grid with positioned event blocks, hour labels, and a current time indicator line."
                code={weekCode}
            >
                <CalendarWeekViewDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar — Day View"
                description="Single-day time grid with detailed event cards showing title, time, and description. Ideal for focused daily planning."
                code={dayCode}
            >
                <CalendarDayViewDemo />
            </ComponentPreview>

            <PropsTable title="Calendar" props={calendarProps} />
            <PropsTable title="CalendarEvent" props={eventProps} />
        </div>
    );
}
