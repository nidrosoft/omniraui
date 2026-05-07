import { Add, ArrowSwapHorizontal, Refresh, Eye, MoneySend } from "iconsax-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { MyCard } from "@/components/ui/MyCard";
import s from "../../fintech.module.css";

const CODE = `import { Add, ArrowSwapHorizontal, Refresh, Eye, MoneySend } from "iconsax-react";

{/* 1. Default — Add / Transfer / Convert */}
<MyCard />

{/* 2. Crypto wallet */}
<MyCard
    title="Crypto Wallet"
    amount="0.0428"
    currency="BTC"
    actions={[
        { icon: <Add size={14} />,                label: "Buy" },
        { icon: <ArrowSwapHorizontal size={14} />,label: "Swap" },
        { icon: <MoneySend size={14} />,          label: "Send" },
    ]}
/>

{/* 3. Savings card with Top Up + View */}
<MyCard
    title="Savings"
    amount="$14,830"
    currency="USD"
    actions={[
        { icon: <Add size={14} />,    label: "Top Up" },
        { icon: <Eye size={14} />,    label: "View" },
        { icon: <Refresh size={14} />,label: "Sync" },
    ]}
/>`;

export function MyCardSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>My Card</h3>
            <p className={s.sectionDesc}>
                Card overview with header badge, balance, and a row of white action buttons. Variations cover the
                default fiat flow, a crypto wallet, and a savings card with different action verbs.
            </p>

            <InstallBlock slug="my-card" components={["MyCard"]} />

            <ComponentPreview
                title="Three states — default, crypto, savings"
                description="Same widget, three account types. Pass any 3 actions — each takes its own icon and onClick handler."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <MyCard />
                    <MyCard
                        title="Crypto Wallet"
                        amount="0.0428"
                        currency="BTC"
                        actions={[
                            { icon: <Add size={14} variant="Linear" color="currentColor" />, label: "Buy" },
                            { icon: <ArrowSwapHorizontal size={14} variant="Linear" color="currentColor" />, label: "Swap" },
                            { icon: <MoneySend size={14} variant="Linear" color="currentColor" />, label: "Send" },
                        ]}
                    />
                    <MyCard
                        title="Savings"
                        amount="$14,830"
                        currency="USD"
                        actions={[
                            { icon: <Add size={14} variant="Linear" color="currentColor" />, label: "Top Up" },
                            { icon: <Eye size={14} variant="Linear" color="currentColor" />, label: "View" },
                            { icon: <Refresh size={14} variant="Linear" color="currentColor" />, label: "Sync" },
                        ]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="MyCard props"
                props={[
                    { name: "title", type: "string", default: "\"My Card\"", description: "Header title rendered top-left." },
                    { name: "badge", type: "ReactNode", description: "Right-aligned header badge. Defaults to a stylised tricolor flag — pass any node (image, country code, SVG)." },
                    { name: "amount", type: "string", default: "\"$2,762\"", description: "Main balance in display type." },
                    { name: "currency", type: "string", default: "\"USD\"", description: "Currency / unit caption beneath the amount." },
                    { name: "actions", type: "MyCardAction[]", description: "Action buttons in the footer. Each: { icon, label, onClick? }. 3 recommended." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
