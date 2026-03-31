import Link from "next/link";
import { DocHeader } from "@/components/docs/DocHeader";
import styles from "./overview.module.css";
import {
    Star1,
    Mouse,
    LoginCurve,
    Shop,
    Setting4,
    Category,
    Award,
    TagCross,
    Tag,
    ArrowDown2,
    TickSquare,
    Edit2,
    DocumentText,
    PasswordCheck,
    TextalignLeft,
    ToggleOnCircle,
    TickCircle,
    Record,
    RecordCircle,
    Profile2User,
    MessageQuestion,
    Chart,
    Candle,
    VideoPlay,
    Card,
    Scan,
    PictureFrame,
    Ranking,
    Monitor,
    Mobile,
    ArrowSquareDown,
} from "iconsax-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: { name: string; href: string; description: string; icon: any }[] = [
    { name: "Featured Icon", href: "/docs/base/featured-icon", description: "Icon containers with lime-tinted backgrounds", icon: Star1 },
    { name: "Button", href: "/docs/base/button", description: "Primary, secondary, ghost, and accent button variants", icon: Mouse },
    { name: "Social Button", href: "/docs/base/social-button", description: "Social login buttons for Google, Apple, etc.", icon: LoginCurve },
    { name: "App Store Button", href: "/docs/base/app-store-button", description: "App Store and Google Play download buttons", icon: Shop },
    { name: "Utility", href: "/docs/base/utility", description: "Small utility buttons and icon actions", icon: Setting4 },
    { name: "Button Group", href: "/docs/base/button-group", description: "Grouped button sets for related actions", icon: Category },
    { name: "Badge", href: "/docs/base/badge", description: "Status badges and labels in multiple variants", icon: Award },
    { name: "Badge Group", href: "/docs/base/badge-group", description: "Grouped badges for tags and categories", icon: TagCross },
    { name: "Tag", href: "/docs/base/tag", description: "Removable tags for filtering and selection", icon: Tag },
    { name: "Dropdown", href: "/docs/base/dropdown", description: "Dropdown menus with glass morphism styling", icon: ArrowDown2 },
    { name: "Select", href: "/docs/base/select", description: "Custom select inputs with themed options", icon: TickSquare },
    { name: "Input", href: "/docs/base/input", description: "Text inputs with labels, icons, and validation", icon: Edit2 },
    { name: "Textarea", href: "/docs/base/textarea", description: "Multi-line text inputs", icon: DocumentText },
    { name: "Verification Code Input", href: "/docs/base/verification-code-input", description: "OTP/verification code input fields", icon: PasswordCheck },
    { name: "Text Editor", href: "/docs/base/text-editor", description: "Rich text editor component", icon: TextalignLeft },
    { name: "Toggle", href: "/docs/base/toggle", description: "Toggle switches for boolean settings", icon: ToggleOnCircle },
    { name: "Checkbox", href: "/docs/base/checkbox", description: "Checkbox inputs with custom styling", icon: TickCircle },
    { name: "Radio Button", href: "/docs/base/radio-button", description: "Radio button inputs", icon: Record },
    { name: "Radio Group", href: "/docs/base/radio-group", description: "Grouped radio buttons for single selection", icon: RecordCircle },
    { name: "Avatar", href: "/docs/base/avatar", description: "User avatars with status indicators", icon: Profile2User },
    { name: "Tooltip", href: "/docs/base/tooltip", description: "Hover tooltips with glass styling", icon: MessageQuestion },
    { name: "Progress Indicator", href: "/docs/base/progress-indicator", description: "Progress bars with lime gradient fill", icon: Chart },
    { name: "Slider", href: "/docs/base/slider", description: "Range slider inputs", icon: Candle },
    { name: "Video Player", href: "/docs/base/video-player", description: "Custom video player component", icon: VideoPlay },
    { name: "Credit Card", href: "/docs/base/credit-card", description: "Credit card display component", icon: Card },
    { name: "QR Code", href: "/docs/base/qr-code", description: "QR code generator component", icon: Scan },
    { name: "Illustration", href: "/docs/base/illustration", description: "Decorative illustration components", icon: PictureFrame },
    { name: "Rating", href: "/docs/base/rating", description: "Star rating component", icon: Ranking },
    { name: "Browser", href: "/docs/base/browser", description: "Browser window mockup with address bar", icon: Monitor },
    { name: "Phone", href: "/docs/base/phone", description: "iPhone-style phone mockup frame", icon: Mobile },
    { name: "Collapse", href: "/docs/base/collapse", description: "Expandable accordion sections", icon: ArrowSquareDown },
];

export default function BaseOverviewPage() {
    return (
        <div>
            <DocHeader
                title="Base Components"
                description="The foundational building blocks of Omnira UI. These components are the core primitives used across all application interfaces."
                status="stable"
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Base Components" },
                ]}
            />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
            }}>
                {components.map((comp) => {
                    const Icon = comp.icon;
                    return (
                        <Link
                            key={comp.href}
                            href={comp.href}
                            className={styles.card}
                        >
                            <span className={styles.iconBox}>
                                <Icon size={18} variant="Bulk" color="currentColor" />
                            </span>
                            <div style={{ minWidth: 0 }}>
                                <h3 className={styles.cardTitle}>{comp.name}</h3>
                                <p className={styles.cardDesc}>{comp.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
