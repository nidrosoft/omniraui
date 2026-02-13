"use client";

import {
    createContext,
    useContext,
    useRef,
    useState,
    useCallback,
    useEffect,
} from "react";
import { cn } from "../../../lib/cn";
import styles from "./TextEditor.module.css";

/* ── Context ── */
interface EditorCtx {
    contentRef: React.RefObject<HTMLDivElement | null>;
    content: string;
    setContent: (html: string) => void;
    limit?: number;
    charCount: number;
    size: "sm" | "md";
    inputClassName?: string;
}

const Ctx = createContext<EditorCtx>({
    contentRef: { current: null },
    content: "",
    setContent: () => {},
    charCount: 0,
    size: "md",
});

/* ── Root ── */
interface RootProps {
    content?: string;
    onUpdate?: (payload: { editor: { getHTML: () => string } }) => void;
    limit?: number;
    size?: "sm" | "md";
    className?: string;
    inputClassName?: string;
    children: React.ReactNode;
}

function Root({
    content: initialContent = "",
    onUpdate,
    limit,
    size = "md",
    className,
    inputClassName,
    children,
}: RootProps) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [content, setContentState] = useState(initialContent);
    const [charCount, setCharCount] = useState(0);

    const setContent = useCallback(
        (html: string) => {
            setContentState(html);
            if (onUpdate) {
                onUpdate({ editor: { getHTML: () => html } });
            }
        },
        [onUpdate],
    );

    useEffect(() => {
        const text = contentRef.current?.textContent || "";
        setCharCount(text.length);
    }, [content]);

    return (
        <Ctx.Provider value={{ contentRef, content, setContent, limit, charCount, size, inputClassName }}>
            <div className={cn(styles.root, styles[`root_${size}`], className)}>{children}</div>
        </Ctx.Provider>
    );
}

/* ── Toolbar Button ── */
function ToolbarBtn({
    cmd,
    arg,
    icon,
    title,
}: {
    cmd: string;
    arg?: string;
    icon: React.ReactNode;
    title: string;
}) {
    const { contentRef } = useContext(Ctx);

    const handleClick = () => {
        contentRef.current?.focus();
        document.execCommand(cmd, false, arg);
    };

    return (
        <button
            type="button"
            className={styles.toolbarBtn}
            onClick={handleClick}
            title={title}
            aria-label={title}
        >
            {icon}
        </button>
    );
}

/* ── SVG Icons (inline, no deps) ── */
const icons = {
    bold: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2.5h5a3 3 0 0 1 0 6H4V2.5Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 8.5h6a3 3 0 0 1 0 6H4V8.5Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    italic: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2H6.5M9.5 14H6M8.5 2L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    underline: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2v5a4 4 0 0 0 8 0V2M3 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    strikethrough: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8h12M10.5 5C10.5 3.5 9.5 2.5 8 2.5S5.5 3.5 5.5 5M5.5 11c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    ul: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="3" cy="4" r="1" fill="currentColor" />
            <circle cx="3" cy="8" r="1" fill="currentColor" />
            <circle cx="3" cy="12" r="1" fill="currentColor" />
            <path d="M6 4h8M6 8h8M6 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    ol: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <text x="1.5" y="5.5" fontSize="5" fill="currentColor" fontWeight="700">1</text>
            <text x="1.5" y="9.5" fontSize="5" fill="currentColor" fontWeight="700">2</text>
            <text x="1.5" y="13.5" fontSize="5" fill="currentColor" fontWeight="700">3</text>
            <path d="M6 4h8M6 8h8M6 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    link: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.5 9.5l3-3M7 11l-1.5 1.5a2.12 2.12 0 0 1-3-3L4 8M9 5l1.5-1.5a2.12 2.12 0 0 1 3 3L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    quote: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 14V8h3V3H3M10 14V8h3V3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    code: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    undo: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6h7a3 3 0 0 1 0 6H8M3 6l3-3M3 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    redo: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 6H6a3 3 0 0 0 0 6h2M13 6l-3-3M13 6l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

/* ── Link Button (prompts on click, not render) ── */
function LinkBtn() {
    const { contentRef } = useContext(Ctx);

    const handleClick = () => {
        const url = window.prompt("URL:");
        if (url) {
            contentRef.current?.focus();
            document.execCommand("createLink", false, url);
        }
    };

    return (
        <button
            type="button"
            className={styles.toolbarBtn}
            onClick={handleClick}
            title="Link"
            aria-label="Link"
        >
            {icons.link}
        </button>
    );
}

/* ── Toolbar ── */
interface ToolbarProps {
    type?: "basic" | "advanced";
    floating?: boolean;
    className?: string;
}

function Toolbar({ type = "basic", floating = false, className }: ToolbarProps) {
    const { size } = useContext(Ctx);

    const basicBtns = (
        <>
            <ToolbarBtn cmd="bold" icon={icons.bold} title="Bold" />
            <ToolbarBtn cmd="italic" icon={icons.italic} title="Italic" />
            <ToolbarBtn cmd="underline" icon={icons.underline} title="Underline" />
            <ToolbarBtn cmd="strikeThrough" icon={icons.strikethrough} title="Strikethrough" />
        </>
    );

    const advancedBtns = (
        <>
            {basicBtns}
            <span className={styles.toolbarDivider} />
            <ToolbarBtn cmd="insertUnorderedList" icon={icons.ul} title="Bullet list" />
            <ToolbarBtn cmd="insertOrderedList" icon={icons.ol} title="Numbered list" />
            <span className={styles.toolbarDivider} />
            <ToolbarBtn cmd="formatBlock" arg="blockquote" icon={icons.quote} title="Quote" />
            <LinkBtn />
            <span className={styles.toolbarDivider} />
            <ToolbarBtn cmd="undo" icon={icons.undo} title="Undo" />
            <ToolbarBtn cmd="redo" icon={icons.redo} title="Redo" />
        </>
    );

    return (
        <div
            className={cn(
                styles.toolbar,
                styles[`toolbar_${size}`],
                floating && styles.toolbarFloating,
                className,
            )}
        >
            {type === "advanced" ? advancedBtns : basicBtns}
        </div>
    );
}

/* ── Content ── */
interface ContentProps {
    className?: string;
}

function Content({ className }: ContentProps) {
    const { contentRef, content, setContent, size, inputClassName } = useContext(Ctx);
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current && contentRef.current && content) {
            contentRef.current.innerHTML = content;
            initialized.current = true;
        }
    }, [content, contentRef]);

    const handleInput = () => {
        if (contentRef.current) {
            setContent(contentRef.current.innerHTML);
        }
    };

    return (
        <div
            ref={contentRef}
            className={cn(styles.content, styles[`content_${size}`], inputClassName, className)}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            role="textbox"
            aria-multiline="true"
        />
    );
}

/* ── HintText ── */
interface HintTextProps {
    className?: string;
    children?: React.ReactNode;
}

function HintText({ className, children }: HintTextProps) {
    const { charCount, limit } = useContext(Ctx);

    return (
        <div className={cn(styles.hintRow, className)}>
            {children && <span className={styles.hintText}>{children}</span>}
            {limit !== undefined && (
                <span
                    className={cn(
                        styles.charCount,
                        charCount > limit && styles.charCountOver,
                    )}
                >
                    {charCount}/{limit}
                </span>
            )}
            {limit === undefined && (
                <span className={styles.charCount}>{charCount} characters</span>
            )}
        </div>
    );
}

/* ── Compound export ── */
export const TextEditor = Object.assign(
    {},
    {
        Root,
        Toolbar,
        Content,
        HintText,
    },
);
