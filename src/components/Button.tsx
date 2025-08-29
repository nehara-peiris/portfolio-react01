import type {PropsWithChildren} from "react";


type ButtonProps = PropsWithChildren<{
    as?: "a" | "button";
    href?: string;
    variant?: "primary" | "ghost";
    onClick?: () => void;
}>;


export default function Button({ as = "button", href, variant = "primary", children, onClick }: ButtonProps) {
    const base = "inline-flex items-center gap-2 rounded-full border transition px-4 py-2 text-sm";
    const v = variant === "primary"
        ? "bg-blue-600/90 hover:bg-blue-600 text-white border-blue-700/60"
        : "bg-transparent hover:bg-white/5 border-border text-fg";


    if (as === "a" && href) {
        const external = /^https?:/i.test(href);
        return (
            <a className={`${base} ${v}`} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {children}
            </a>
        );
    }
    return (
        <button className={`${base} ${v}`} onClick={onClick}>{children}</button>
    );
}