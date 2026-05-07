import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { StockPosition } from "@/components/ui/StockPosition";
import s from "../../fintech.module.css";

const CODE = `{/* 1. Default — Apple, up */}
<StockPosition />

{/* 2. Negative trend (Tesla) */}
<StockPosition
    logo={<span style={{ fontSize: 18, fontWeight: 700 }}>T</span>}
    name="Tesla"
    ticker="TSLA"
    price="$248.74"
    changePercent={-2.18}
    bars={[40, 50, 55, 60, 50, 65, 60, 50, 45, 35, 30, 38, 45, 30, 25, 35, 28, 18, 24, 30, 26, 18, 14, 20, 28]}
/>

{/* 3. Crypto — Bitcoin, big gain */}
<StockPosition
    logo={<span style={{ fontSize: 18, fontWeight: 700 }}>₿</span>}
    name="Bitcoin"
    ticker="BTC"
    price="$58,421"
    changePercent={28.4}
    bars={[10, 15, 12, 20, 18, 25, 30, 35, 28, 40, 45, 50, 60, 55, 70, 75, 65, 80, 85, 90, 95, 88, 100, 92]}
/>`;

export function StockPositionSection() {
    return (
        <>
            <h3 className={s.sectionHeading}>Stock Position</h3>
            <p className={s.sectionDesc}>
                Asset position card — white logo tile, name, ticker, price, change badge, and a dot bar chart of recent
                movement. Variations cover the default, a downtrend, and a crypto big-gain layout.
            </p>

            <InstallBlock slug="stock-position" components={["StockPosition"]} />

            <ComponentPreview
                title="Three states — up, down, crypto"
                description="Same widget, three asset positions. Pass any logo node — letter, image, or SVG — to brand the tile."
                previewClassName={s.rowPreview}
                code={CODE}
            >
                <div className={s.rowGrid}>
                    <StockPosition />
                    <StockPosition
                        logo={<span style={{ fontSize: 18, fontWeight: 700 }}>T</span>}
                        name="Tesla"
                        ticker="TSLA"
                        price="$248.74"
                        changePercent={-2.18}
                        bars={[40, 50, 55, 60, 50, 65, 60, 50, 45, 35, 30, 38, 45, 30, 25, 35, 28, 18, 24, 30, 26, 18, 14, 20, 28]}
                    />
                    <StockPosition
                        logo={<span style={{ fontSize: 18, fontWeight: 700 }}>₿</span>}
                        name="Bitcoin"
                        ticker="BTC"
                        price="$58,421"
                        changePercent={28.4}
                        bars={[10, 15, 12, 20, 18, 25, 30, 35, 28, 40, 45, 50, 60, 55, 70, 75, 65, 80, 85, 90, 95, 88, 100, 92]}
                    />
                </div>
            </ComponentPreview>

            <PropsTable
                title="StockPosition props"
                props={[
                    { name: "logo", type: "ReactNode", description: "Logo element. Renders inside a white rounded square. Defaults to letter \"A\"." },
                    { name: "name", type: "string", default: "\"Apple\"", description: "Asset name." },
                    { name: "ticker", type: "string", default: "\"AAPL\"", description: "Asset ticker." },
                    { name: "price", type: "string", default: "\"$5,321.35\"", description: "Display price." },
                    { name: "changePercent", type: "number", default: "13.45", description: "Change percent — positive renders in success color, negative in error." },
                    { name: "changeLabel", type: "string", description: "Override the change badge text (e.g. \"Halted\")." },
                    { name: "bars", type: "number[]", description: "Variable-height dot bars (each value 0–100 = bar height percent)." },
                    { name: "maxDotsPerBar", type: "number", default: "14", description: "Number of dots a bar renders when value === 100." },
                    { name: "className", type: "string", description: "Additional class names applied to the root element." },
                ]}
            />
        </>
    );
}
