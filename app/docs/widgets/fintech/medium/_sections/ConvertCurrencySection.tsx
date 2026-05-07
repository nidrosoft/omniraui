import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { ConvertCurrency } from "@/components/ui/ConvertCurrency";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — EUR → GBP */}
<ConvertCurrency />

{/* 2. USD → JPY with larger balance */}
<ConvertCurrency
    title="Currency Exchange"
    balance="$12,400"
    from={{ amount: "$500",   code: "USD" }}
    to={{   amount: "75,200", code: "JPY" }}
/>

{/* 3. Crypto pair */}
<ConvertCurrency
    title="Swap Crypto"
    balance="$48,200"
    from={{ amount: "0.05",  code: "BTC" }}
    to={{   amount: "1.32",  code: "ETH" }}
    convertLabel="Swap"
/>`;

export function ConvertCurrencySection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Convert Currency</h3>
            <p className={s.sectionDesc}>
                Compact currency-exchange widget — header with balance, two currency input pills, and a convert + swap
                button row. Variations cover fiat-to-fiat, large-balance, and crypto swap flows.
            </p>

            <InstallBlock slug="convert-currency" components={["ConvertCurrency"]} />

            <ComponentPreview
                title="Three states — default, USD→JPY, crypto"
                description="Same widget, three exchange flows. The swap button rotates 180° on hover for a tactile feel."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <ConvertCurrency />
                    <ConvertCurrency
                        title="Currency Exchange"
                        balance="$12,400"
                        from={{ amount: "$500", code: "USD" }}
                        to={{ amount: "75,200", code: "JPY" }}
                    />
                    <ConvertCurrency
                        title="Swap Crypto"
                        balance="$48,200"
                        from={{ amount: "0.05", code: "BTC" }}
                        to={{ amount: "1.32", code: "ETH" }}
                        convertLabel="Swap"
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="ConvertCurrency props"
                props={[
                    { name: "title", type: "string", default: "\"Convert Currency\"", description: "Header title rendered top-left." },
                    { name: "balance", type: "string", default: "\"$2,800\"", description: "Right-aligned balance amount in the header." },
                    { name: "balanceLabel", type: "string", default: "\"Balance\"", description: "Caption preceding the balance amount." },
                    { name: "from", type: "ConvertCurrencyField", description: "Source field — { amount, code }." },
                    { name: "to", type: "ConvertCurrencyField", description: "Destination field — { amount, code }." },
                    { name: "convertLabel", type: "string", default: "\"Convert\"", description: "Label of the primary action button." },
                    { name: "onConvert", type: "() => void", description: "Click handler for the primary action button." },
                    { name: "onSwap", type: "() => void", description: "Click handler for the swap button (rotates the icon 180°)." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
