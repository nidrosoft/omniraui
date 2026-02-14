export interface CalendarGuest {
    name: string;
    avatar?: string;
    status?: "accepted" | "declined" | "pending";
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    color?: "lime" | "info" | "warning" | "error" | "success" | "accent";
    description?: string;
    location?: string;
    link?: string;
    reminder?: string;
    guests?: CalendarGuest[];
}

function getRelativeDate(dayOffset: number, hour: number, minute = 0): Date {
    const d = new Date();
    d.setDate(d.getDate() + dayOffset);
    d.setHours(hour, minute, 0, 0);
    return d;
}

export const events: CalendarEvent[] = [
    {
        id: "1",
        title: "Design Review",
        start: getRelativeDate(0, 9, 0),
        end: getRelativeDate(0, 10, 0),
        color: "lime",
        description: "Review new dashboard designs with the team. Discuss component library updates and new patterns.",
        reminder: "10 min before",
        guests: [
            { name: "Sienna M.", status: "accepted" },
            { name: "Alex K.", status: "accepted" },
            { name: "Jordan P.", status: "pending" },
        ],
    },
    {
        id: "2",
        title: "Sprint Planning",
        start: getRelativeDate(0, 13, 0),
        end: getRelativeDate(0, 14, 30),
        color: "info",
        description: "Plan next sprint tasks and priorities. Review backlog and assign story points.",
        location: "Conference Room B",
        reminder: "15 min before",
        guests: [
            { name: "Taylor R.", status: "accepted" },
            { name: "Morgan L.", status: "accepted" },
            { name: "Casey W.", status: "accepted" },
            { name: "Riley D.", status: "declined" },
        ],
    },
    {
        id: "3",
        title: "Team Standup",
        start: getRelativeDate(1, 9, 30),
        end: getRelativeDate(1, 10, 0),
        color: "success",
        description: "Daily standup meeting",
        link: "https://meet.google.com/abc-defg-hij",
        reminder: "5 min before",
        guests: [
            { name: "Sienna M.", status: "accepted" },
            { name: "Alex K.", status: "accepted" },
        ],
    },
    {
        id: "4",
        title: "Client Call",
        start: getRelativeDate(1, 14, 0),
        end: getRelativeDate(1, 15, 0),
        color: "warning",
        description: "Quarterly review with client stakeholders. Prepare slides and metrics report.",
        link: "https://us02web.zoom.us/j/86341969512",
        reminder: "30 min before",
        guests: [
            { name: "Jordan P.", status: "accepted" },
            { name: "Sam T.", status: "accepted" },
            { name: "Chris B.", status: "pending" },
            { name: "Dana F.", status: "accepted" },
            { name: "Pat H.", status: "pending" },
        ],
    },
    {
        id: "5",
        title: "Code Review",
        start: getRelativeDate(2, 11, 0),
        end: getRelativeDate(2, 12, 0),
        color: "accent",
        description: "Review pull requests for the new feature branch",
        reminder: "10 min before",
    },
    {
        id: "6",
        title: "Product Demo",
        start: getRelativeDate(2, 15, 0),
        end: getRelativeDate(2, 16, 30),
        color: "error",
        description: "Demo the latest release to stakeholders. Showcase new calendar component and date picker improvements.",
        location: "Main Auditorium",
        reminder: "15 min before",
        guests: [
            { name: "Morgan L.", status: "accepted" },
            { name: "Taylor R.", status: "accepted" },
            { name: "Casey W.", status: "accepted" },
            { name: "Riley D.", status: "accepted" },
            { name: "Alex K.", status: "pending" },
            { name: "Sienna M.", status: "accepted" },
        ],
    },
    {
        id: "7",
        title: "1:1 with Manager",
        start: getRelativeDate(3, 10, 0),
        end: getRelativeDate(3, 10, 30),
        color: "info",
        description: "Weekly one-on-one meeting",
    },
    {
        id: "8",
        title: "Workshop: API Design",
        start: getRelativeDate(3, 14, 0),
        end: getRelativeDate(3, 16, 0),
        color: "lime",
        description: "Internal workshop on REST API best practices",
    },
    {
        id: "9",
        title: "Lunch & Learn",
        start: getRelativeDate(4, 12, 0),
        end: getRelativeDate(4, 13, 0),
        color: "success",
        description: "Presentation on new testing strategies",
    },
    {
        id: "10",
        title: "Release Planning",
        start: getRelativeDate(5, 10, 0),
        end: getRelativeDate(5, 11, 30),
        color: "warning",
        description: "Plan the next product release cycle",
    },
    {
        id: "11",
        title: "Design System Sync",
        start: getRelativeDate(-1, 9, 0),
        end: getRelativeDate(-1, 10, 0),
        color: "accent",
        description: "Sync on component library updates",
    },
    {
        id: "12",
        title: "Retrospective",
        start: getRelativeDate(-2, 15, 0),
        end: getRelativeDate(-2, 16, 0),
        color: "info",
        description: "Sprint retrospective and action items",
    },
    {
        id: "13",
        title: "Marketing Sync",
        start: getRelativeDate(6, 11, 0),
        end: getRelativeDate(6, 12, 0),
        color: "error",
        description: "Align on upcoming campaign launch",
    },
    {
        id: "14",
        title: "Infrastructure Review",
        start: getRelativeDate(0, 16, 0),
        end: getRelativeDate(0, 17, 0),
        color: "warning",
        description: "Review cloud infrastructure and costs",
    },
];
