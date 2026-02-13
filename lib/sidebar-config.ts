export interface SidebarItem {
    name: string;
    href: string;
    icon?: string;
    status?: "coming-soon" | "new" | "updated";
}

export interface SidebarSection {
    title: string;
    icon: string;
    items: SidebarItem[];
}

export const sidebarConfig: SidebarSection[] = [
    {
        title: "Getting Started",
        icon: "Book1",
        items: [
            { name: "Installation", href: "/docs/getting-started", icon: "DocumentDownload" },
            { name: "Theming", href: "/docs/getting-started/theming", icon: "Paintbucket" },
            { name: "Typography", href: "/docs/getting-started/typography", icon: "Text" },
            { name: "Colors", href: "/docs/getting-started/colors", icon: "ColorSwatch" },
            { name: "Icons", href: "/docs/getting-started/icons", icon: "Brush2" },
            { name: "CLI", href: "/docs/getting-started/cli", icon: "CommandSquare", status: "coming-soon" },
        ],
    },
    {
        title: "Resources",
        icon: "FolderOpen",
        items: [
            { name: "Icons", href: "/docs/resources/icons" },
            { name: "Avatars", href: "/docs/resources/avatars" },
            { name: "Logos", href: "/docs/resources/logos" },
        ],
    },
    {
        title: "Base Components",
        icon: "Component",
        items: [
            { name: "Overview", href: "/docs/base/overview" },
            { name: "Featured Icon", href: "/docs/base/featured-icon" },
            { name: "Button", href: "/docs/base/button" },
            { name: "Social Button", href: "/docs/base/social-button" },
            { name: "App Store Button", href: "/docs/base/app-store-button" },
            { name: "Utility", href: "/docs/base/utility" },
            { name: "Button Group", href: "/docs/base/button-group" },
            { name: "Badge", href: "/docs/base/badge" },
            { name: "Badge Group", href: "/docs/base/badge-group" },
            { name: "Tag", href: "/docs/base/tag" },
            { name: "Dropdown", href: "/docs/base/dropdown" },
            { name: "Select", href: "/docs/base/select" },
            { name: "Input", href: "/docs/base/input" },
            { name: "Textarea", href: "/docs/base/textarea" },
            { name: "Verification Code Input", href: "/docs/base/verification-code-input" },
            { name: "Text Editor", href: "/docs/base/text-editor" },
            { name: "Toggle", href: "/docs/base/toggle" },
            { name: "Checkbox", href: "/docs/base/checkbox" },
            { name: "Radio Button", href: "/docs/base/radio-button" },
            { name: "Radio Group", href: "/docs/base/radio-group" },
            { name: "Avatar", href: "/docs/base/avatar", status: "new" },
            { name: "Tooltip", href: "/docs/base/tooltip", status: "new" },
            { name: "Progress Indicator", href: "/docs/base/progress-indicator", status: "new" },
            { name: "Slider", href: "/docs/base/slider", status: "new" },
            { name: "Video Player", href: "/docs/base/video-player", status: "new" },
            { name: "Credit Card", href: "/docs/base/credit-card", status: "new" },
            { name: "QR Code", href: "/docs/base/qr-code", status: "new" },
            { name: "Illustration", href: "/docs/base/illustration", status: "new" },
            { name: "Rating", href: "/docs/base/rating", status: "new" },
            { name: "Browser", href: "/docs/base/browser", status: "new" },
            { name: "Phone", href: "/docs/base/phone", status: "new" },
            { name: "Collapse", href: "/docs/base/collapse", status: "new" },
        ],
    },
    {
        title: "Application UI",
        icon: "Monitor",
        items: [
            { name: "Card", href: "/docs/application-ui/card" },
            { name: "Card Headers", href: "/docs/application-ui/card-header", status: "new" },
            { name: "Page Headers", href: "/docs/application-ui/page-header", status: "new" },
            { name: "Section Header", href: "/docs/application-ui/section-header" },
            { name: "Section Footer", href: "/docs/application-ui/section-footer" },
            { name: "Sidebar Navigation", href: "/docs/application-ui/sidebar-navigation" },
            { name: "Header Navigation", href: "/docs/application-ui/header-navigation" },
            { name: "Modal", href: "/docs/application-ui/modal" },
            { name: "Command Menu", href: "/docs/application-ui/command-menu" },
            { name: "Line & Bar Chart", href: "/docs/application-ui/line-bar-chart" },
            { name: "Pie Chart", href: "/docs/application-ui/pie-chart" },
            { name: "Radar Chart", href: "/docs/application-ui/radar-chart" },
            { name: "Activity Gauges", href: "/docs/application-ui/activity-gauge", status: "new" },
            { name: "Metrics", href: "/docs/application-ui/metrics", status: "new" },
            { name: "Matrix", href: "/docs/application-ui/matrix" },
            { name: "Slide Out", href: "/docs/application-ui/slide-out" },
            { name: "Inline CTA", href: "/docs/application-ui/inline-cta" },
            { name: "Pagination", href: "/docs/application-ui/pagination" },
            { name: "Carousel", href: "/docs/application-ui/carousel" },
            { name: "Progress Steps", href: "/docs/application-ui/progress-steps" },
            { name: "Activity Feed", href: "/docs/application-ui/activity-feed" },
            { name: "Messaging", href: "/docs/application-ui/messaging" },
            { name: "Tabs", href: "/docs/application-ui/tabs" },
            { name: "Table", href: "/docs/application-ui/table" },
            { name: "Breadcrumbs", href: "/docs/application-ui/breadcrumbs" },
            { name: "Alert", href: "/docs/application-ui/alert" },
            { name: "Notification", href: "/docs/application-ui/notification" },
            { name: "Date Picker", href: "/docs/application-ui/date-picker" },
            { name: "Calendar", href: "/docs/application-ui/calendar" },
            { name: "File Upload", href: "/docs/application-ui/file-upload" },
            { name: "Content Divider", href: "/docs/application-ui/content-divider" },
            { name: "Loading Indicator", href: "/docs/application-ui/loading-indicator" },
            { name: "Code Snippet", href: "/docs/application-ui/code-snippet" },
            { name: "Empty States", href: "/docs/application-ui/empty-state", status: "new" },
        ],
    },
    {
        title: "Application UI Examples",
        icon: "Grid5",
        items: [
            { name: "Dashboard", href: "/docs/application-ui-examples", status: "coming-soon" },
        ],
    },
    {
        title: "Shared Pages",
        icon: "DocumentCopy",
        items: [
            { name: "Overview", href: "/docs/shared-pages", status: "coming-soon" },
        ],
    },
    {
        title: "Marketing Components",
        icon: "Magicpen",
        items: [
            { name: "Overview", href: "/docs/marketing", status: "coming-soon" },
        ],
    },
    {
        title: "Marketing Examples",
        icon: "Star1",
        items: [
            { name: "Overview", href: "/docs/marketing-examples", status: "coming-soon" },
        ],
    },
];
