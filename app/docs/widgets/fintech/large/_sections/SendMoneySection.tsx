import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { SendMoney } from "@/components/ui/SendMoney";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Domestic transfer */}
<SendMoney />

{/* 2. Crypto transfer with token suffix */}
<SendMoney
    title="Send Crypto"
    recipientName="Sarah Lin"
    amount="0.0428"
    amountSuffix="BTC"
    rows={[
        { icon: <Activity size={14} />, label: "Network", value: "$2.40" },
        { icon: <Coin1 size={14} />,    label: "Total",   value: "$1,920" },
    ]}
    buttonLabel="Confirm Transfer"
/>

{/* 3. International wire with FX context */}
<SendMoney
    title="Wire Transfer"
    recipientLabel="Sending to (Berlin)"
    recipientName="Hugo Müller"
    amount="8,750"
    amountSuffix="EUR"
    rows={[
        { icon: <Wallet3 size={14} />, label: "FX Rate", value: "1.085" },
        { icon: <Coin1 size={14} />,   label: "Fee",     value: "$25" },
    ]}
    buttonLabel="Swipe to Send"
/>`;

export function SendMoneySection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Send Money</h3>
            <p className={s.sectionDesc}>
                Transfer card with avatar, recipient name, primary amount, and a swipe-to-confirm pill. Variations
                cover a fiat send, a crypto transfer, and an international wire — each showing how the rows and amount
                suffix adapt.
            </p>

            <InstallBlock slug="send-money" components={["SendMoney"]} />

            <ComponentPreview
                title="Three states — domestic, crypto, international"
                description="Same widget, three transfer flows. Pass amountSuffix for currency / token codes, and supply your own rows for fees, FX rates, or balances."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <SendMoney />
                    <SendMoney
                        title="Send Crypto"
                        recipientName="Sarah Lin"
                        amount="0.0428"
                        amountSuffix="BTC"
                        rows={[
                            { label: "Network", value: "$2.40" },
                            { label: "Total", value: "$1,920" },
                        ]}
                        buttonLabel="Confirm Transfer"
                    />
                    <SendMoney
                        title="Wire Transfer"
                        recipientLabel="Sending to (Berlin)"
                        recipientName="Hugo Müller"
                        amount="8,750"
                        amountSuffix="EUR"
                        rows={[
                            { label: "FX Rate", value: "1.085" },
                            { label: "Fee", value: "$25" },
                        ]}
                        buttonLabel="Swipe to Send"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="SendMoney props"
                props={[
                    { name: "title", type: "string", default: "\"Send Money\"", description: "Header title rendered top-left." },
                    { name: "recipientLabel", type: "string", default: "\"Sending to\"", description: "Caption above the recipient name." },
                    { name: "recipientName", type: "string", default: "\"Mike Wheeler\"", description: "Display name shown beneath the avatar." },
                    { name: "recipientAvatar", type: "ReactNode", description: "Avatar element. Defaults to a gradient circle with the recipient's initials. Pass an <img /> to use a real photo." },
                    { name: "amount", type: "string", default: "\"154,520\"", description: "Main amount rendered in display type." },
                    { name: "amountSuffix", type: "string", description: "Optional currency or unit suffix shown small after the amount (e.g. \"BTC\", \"EUR\")." },
                    { name: "rows", type: "SendMoneyRow[]", description: "Info rows rendered above the transfer pill. Each: { icon?, label, value }." },
                    { name: "buttonLabel", type: "string", default: "\"Swipe to Transfer\"", description: "Caption rendered next to the swipe button." },
                    { name: "onTransfer", type: "() => void", description: "Click handler for the swipe-to-transfer button." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
