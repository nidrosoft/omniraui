"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Calendar } from "@/components/ui/Calendar/Calendar";
import { events } from "@/components/ui/Calendar/config";

/* ── Demo 01: Month View ── */

function CalendarMonthViewDemo() {
    return <Calendar events={events} defaultView="month" />;
}

const monthCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="month" />`;

/* ── Demo 02: Week View ── */

function CalendarWeekViewDemo() {
    return <Calendar events={events} defaultView="week" />;
}

const weekCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="week" />`;

/* ── Demo 03: Day View ── */

function CalendarDayViewDemo() {
    return <Calendar events={events} defaultView="day" />;
}

const dayCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="day" />`;

/* ── Demo 04: Month View with Event Detail Panel ── */

function CalendarMonthDetailDemo() {
    return <Calendar events={events} defaultView="month" showDetailPanel />;
}

const monthDetailCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="month" showDetailPanel />`;

/* ── Demo 05: Week View with Event Detail Panel ── */

function CalendarWeekDetailDemo() {
    return <Calendar events={events} defaultView="week" showDetailPanel />;
}

const weekDetailCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="week" showDetailPanel />`;

/* ── Demo 06: Day View with Event Detail Panel ── */

function CalendarDayDetailDemo() {
    return <Calendar events={events} defaultView="day" showDetailPanel />;
}

const dayDetailCode = `import { Calendar } from "@/components/ui/Calendar";
import { events } from "@/components/ui/Calendar/config";

<Calendar events={events} defaultView="day" showDetailPanel />`;

/* ── Props ── */

const calendarProps = [
    { name: "events", type: "CalendarEvent[]", default: "[]", description: "Array of calendar events to display" },
    { name: "defaultView", type: '"month" | "week" | "day"', default: '"month"', description: "Initial calendar view mode. Users can switch views via the toolbar tabs." },
    { name: "defaultDate", type: "Date", default: "new Date()", description: "Initial date the calendar focuses on" },
    { name: "onViewChange", type: "(view: CalendarView) => void", description: "Callback when the view mode changes" },
    { name: "onDateChange", type: "(date: Date) => void", description: "Callback when the focused date changes via navigation" },
    { name: "onEventClick", type: "(event: CalendarEvent) => void", description: "Callback when an event is clicked. Fires in addition to the detail panel if enabled." },
    { name: "showDetailPanel", type: "boolean", default: "false", description: "When true, clicking an event opens a side panel with event details (date, time, guests, location, link, description)." },
    { name: "className", type: "string", description: "Additional CSS class for the root element" },
];

const eventProps = [
    { name: "id", type: "string", description: "Unique identifier for the event" },
    { name: "title", type: "string", description: "Event title displayed in the calendar" },
    { name: "start", type: "Date", description: "Event start date and time" },
    { name: "end", type: "Date", description: "Event end date and time" },
    { name: "color", type: '"lime" | "info" | "warning" | "error" | "success" | "accent"', default: '"lime"', description: "Color theme for the event chip" },
    { name: "description", type: "string", description: "Optional description shown in the detail panel and day view" },
    { name: "location", type: "string", description: "Event location displayed in the detail panel" },
    { name: "link", type: "string", description: "Meeting link (Zoom, Google Meet, etc.) displayed in the detail panel" },
    { name: "reminder", type: "string", description: "Reminder text (e.g. '10 min before') displayed in the detail panel" },
    { name: "guests", type: "CalendarGuest[]", description: "Array of guest objects with name, avatar, and status (accepted/declined/pending)" },
];

/* ── Page ── */

export default function CalendarPage() {
    return (
        <div>
            <DocHeader
                title="Calendar"
                description="Full-featured calendar with month, week, and day views. Displays color-coded events with navigation, current time indicator, event detail panel, and glassmorphism styling."
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

            <ComponentPreview
                title="Calendar — Month View with Event Detail Panel"
                description="Click any event to open a side panel showing full event details including date, time, reminder, location, meeting link, guest list with RSVP status, and event description."
                code={monthDetailCode}
            >
                <CalendarMonthDetailDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar — Week View with Event Detail Panel"
                description="Week time grid with clickable events that open the detail panel. Great for scheduling workflows."
                code={weekDetailCode}
            >
                <CalendarWeekDetailDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Calendar — Day View with Event Detail Panel"
                description="Day view with the event detail panel. Click any event block to see its full details."
                code={dayDetailCode}
            >
                <CalendarDayDetailDemo />
            </ComponentPreview>

            <PropsTable title="Calendar" props={calendarProps} />
            <PropsTable title="CalendarEvent" props={eventProps} />
        </div>
    );
}
