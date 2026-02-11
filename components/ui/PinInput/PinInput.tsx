"use client";

import {
    createContext,
    useContext,
    useRef,
    useState,
    useCallback,
    forwardRef,
} from "react";
import { cn } from "@/lib/cn";
import styles from "./PinInput.module.css";

/* ── Context ── */
interface PinCtx {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    values: string[];
    setValue: (index: number, value: string) => void;
    focusSlot: (index: number) => void;
    registerSlot: (index: number, el: HTMLInputElement | null) => void;
    maxLength: number;
}

const Ctx = createContext<PinCtx>({
    size: "md",
    disabled: false,
    values: [],
    setValue: () => {},
    focusSlot: () => {},
    registerSlot: () => {},
    maxLength: 6,
});

/* ── Root ── */
interface PinInputRootProps {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    onComplete?: (code: string) => void;
}

function PinInputRoot({
    size = "md",
    disabled = false,
    children,
    className,
    onComplete,
}: PinInputRootProps) {
    const [values, setValues] = useState<string[]>([]);
    const slotsRef = useRef<Map<number, HTMLInputElement>>(new Map());
    const maxLengthRef = useRef(6);

    const registerSlot = useCallback((index: number, el: HTMLInputElement | null) => {
        if (el) slotsRef.current.set(index, el);
        else slotsRef.current.delete(index);
    }, []);

    const focusSlot = useCallback((index: number) => {
        const el = slotsRef.current.get(index);
        if (el) {
            el.focus();
            el.select();
        }
    }, []);

    const setValue = useCallback(
        (index: number, value: string) => {
            setValues((prev) => {
                const next = [...prev];
                next[index] = value;
                const code = next.join("");
                if (code.length === maxLengthRef.current && onComplete) {
                    setTimeout(() => onComplete(code), 0);
                }
                return next;
            });
        },
        [onComplete],
    );

    return (
        <Ctx.Provider
            value={{
                size,
                disabled,
                values,
                setValue,
                focusSlot,
                registerSlot,
                maxLength: maxLengthRef.current,
            }}
        >
            <div className={cn(styles.root, className)}>{children}</div>
        </Ctx.Provider>
    );
}

/* ── Label ── */
function Label({ children, className }: { children: React.ReactNode; className?: string }) {
    return <label className={cn(styles.label, className)}>{children}</label>;
}

/* ── Description ── */
function Description({ children, className }: { children: React.ReactNode; className?: string }) {
    return <span className={cn(styles.description, className)}>{children}</span>;
}

/* ── Group ── */
interface GroupProps {
    children: React.ReactNode;
    maxLength?: number;
    className?: string;
}

function Group({ children, maxLength = 6, className }: GroupProps) {
    const ctx = useContext(Ctx);
    (ctx as { maxLength: number }).maxLength = maxLength;
    return <div className={cn(styles.group, className)}>{children}</div>;
}

/* ── Separator ── */
function Separator({ className }: { className?: string }) {
    const { size } = useContext(Ctx);
    return (
        <span
            className={cn(styles.separator, styles[`separator_${size}`], className)}
            aria-hidden
        >
            –
        </span>
    );
}

/* ── Slot ── */
interface SlotProps {
    index: number;
    className?: string;
}

const Slot = forwardRef<HTMLInputElement, SlotProps>(({ index, className }, _ref) => {
    const { size, disabled, values, setValue, focusSlot, registerSlot } = useContext(Ctx);

    const handleRef = useCallback(
        (el: HTMLInputElement | null) => {
            registerSlot(index, el);
        },
        [index, registerSlot],
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, "");
        const char = raw.slice(-1);
        setValue(index, char);
        if (char) focusSlot(index + 1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            if (!values[index]) {
                focusSlot(index - 1);
            } else {
                setValue(index, "");
            }
        } else if (e.key === "ArrowLeft") {
            focusSlot(index - 1);
        } else if (e.key === "ArrowRight") {
            focusSlot(index + 1);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
        for (let i = 0; i < pasted.length; i++) {
            setValue(index + i, pasted[i]);
        }
        focusSlot(index + pasted.length - 1);
    };

    return (
        <input
            ref={handleRef}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={values[index] || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            disabled={disabled}
            className={cn(styles.slot, styles[`slot_${size}`], disabled && styles.slotDisabled, className)}
            aria-label={`Digit ${index + 1}`}
        />
    );
});

Slot.displayName = "PinInput.Slot";

/* ── Compound export ── */
export const PinInput = Object.assign(PinInputRoot, {
    Label,
    Description,
    Group,
    Separator,
    Slot,
});
