import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SendMoneyCompact } from "@/components/ui/SendMoneyCompact";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — fiat */}
<SendMoneyCompact />

{/* 2. Larger amount, different recipient */}
<SendMoneyCompact
    title="Quick Pay"
    recipientName="Sarah Lin"
    amount="$2,500.00"
    buttonLabel="Pay Now"
/>

{/* 3. Crypto-flavored */}
<SendMoneyCompact
    title="Send Crypto"
    recipientName="0x7A4f...d29B"
    amountLabel="Amount (BTC)"
    amount="0.0428"
    buttonLabel="Confirm Transfer"
/>`;

export function SendMoneyCompactSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Send Money — Compact</h3>
            <p className={s.sectionDesc}>
                Compact quick-send widget — header with recipient and avatar, amount input, and a primary action
                button. Variations cover the default flow, a higher-value pay, and a crypto transfer.
            </p>

            <InstallBlock slug="send-money-compact" components={["SendMoneyCompact"]} />

            <ComponentPreview
                title="Three states — default, larger pay, crypto"
                description="Same widget, three transfer contexts. Pass a custom recipientAvatar to swap the auto-generated initials for a real photo."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SendMoneyCompact />
                    <SendMoneyCompact
                        title="Quick Pay"
                        recipientName="Sarah Lin"
                        amount="$2,500.00"
                        buttonLabel="Pay Now"
                    />
                    <SendMoneyCompact
                        title="Send Crypto"
                        recipientName="0x7A4f…d29B"
                        amountLabel="Amount (BTC)"
                        amount="0.0428"
                        buttonLabel="Confirm Transfer"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SendMoneyCompact props"
                props={[
                    { name: "title", type: "string", default: "\"Send Money\"", description: "Header title rendered top-left." },
                    { name: "recipientName", type: "string", default: "\"Mike Wheeler\"", description: "Recipient display name shown top-right next to the avatar." },
                    { name: "recipientAvatar", type: "ReactNode", description: "Avatar element. Defaults to a gradient circle with the recipient's initials. Pass an <img /> for a real photo." },
                    { name: "amountLabel", type: "string", default: "\"Enter amount\"", description: "Caption above the amount." },
                    { name: "amount", type: "string", default: "\"$100.00\"", description: "Amount in display type." },
                    { name: "buttonLabel", type: "string", default: "\"Send Money\"", description: "Primary action button label." },
                    { name: "onSend", type: "() => void", description: "Click handler for the action button." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
