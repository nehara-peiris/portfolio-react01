import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

// add these in order you want to show them
const LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Articles" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string>("");

    // Watch scroll position for shadow + denser glass
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scrollspy: highlight link of the section in view
    const sectionIds = useMemo(
        () => LINKS.map((l) => l.href).filter((h) => h.startsWith("#")).map((h) => h.slice(1)),
        []
    );

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (sections.length === 0) return;

        const io = new IntersectionObserver(
            (entries) => {
                // pick the most visible entry
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            {
                rootMargin: "-40% 0px -55% 0px", // center-ish activation
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [sectionIds]);

    // Esc closes mobile; lock scroll when menu open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);
    useEffect(() => {
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = open ? "hidden" : prev || "";
        return () => {
            document.documentElement.style.overflow = prev;
        };
    }, [open]);

    return (
        <>
            {/* Skip to content (a11y) */}
            <a
                href="#about"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
            >
                Skip to content
            </a>

            <nav className={["fixed inset-x-0 top-0 z-50 transition-shadow", scrolled ? "shadow-sm" : "shadow-none"].join(" ")}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div
                        className={[
                            "mt-3 flex items-center justify-between rounded-2xl border px-3 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-white/60",
                            scrolled
                                ? "border-gray-200/80 bg-white/80 dark:border-gray-800/80 dark:bg-gray-900/70"
                                : "border-gray-200/70 bg-white/60 dark:border-gray-800/70 dark:bg-gray-900/50",
                        ].join(" ")}
                    >
                        {/* Brand */}
                        <a
                            href="#top"
                            className="rounded-lg px-2 text-base font-semibold tracking-wide hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 sm:text-lg text-blue-300"
                            aria-label="Home"
                        >
                            Nehara.dev
                        </a>

                        {/* Desktop pill nav */}
                        <ul className="hidden md:flex items-center gap-1 rounded-full border border-gray-200/60 bg-white/70 px-1.5 py-1.5 dark:border-gray-800/60 dark:bg-gray-900/60">
                            {LINKS.map((l) => {
                                const isActive = activeId === l.href.slice(1);
                                return (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={[
                                                "group relative block rounded-full px-3.5 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                                                isActive
                                                    ? "text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-white/10 ring-1 ring-blue-500/30"
                                                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
                                            ].join(" ")}
                                        >
                                            <span>{l.label}</span>
                                            {!isActive && (
                                                <span className="absolute inset-x-2 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded bg-current transition-transform duration-200 group-hover:scale-x-100" />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Right: Theme + CTA + Mobile toggle */}
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <a
                                href="#contact"
                                className="hidden sm:inline-flex items-center rounded-full bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                            >
                                Let’s Talk
                            </a>

                            {/* Mobile toggle */}
                            <button
                                type="button"
                                onClick={() => setOpen((v) => !v)}
                                className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:hover:bg-white/5 md:hidden"
                                aria-expanded={open}
                                aria-controls="mobile-nav"
                                aria-label="Toggle menu"
                            >
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                                    {open ? (
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile sheet */}
                <div
                    id="mobile-nav"
                    className={[
                        "md:hidden overflow-hidden transition-[max-height,opacity] duration-200",
                        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="mt-2 rounded-2xl border border-gray-200/70 bg-white/80 p-2 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/70">
                            <ul className="space-y-1">
                                {LINKS.map((l) => {
                                    const isActive = activeId === l.href.slice(1);
                                    return (
                                        <li key={l.href}>
                                            <a
                                                href={l.href}
                                                onClick={() => setOpen(false)}
                                                aria-current={isActive ? "page" : undefined}
                                                className={[
                                                    "block rounded-xl px-3.5 py-2 text-[15px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                                                    isActive
                                                        ? "text-blue-600 dark:text-blue-400 bg-white/60 dark:bg-white/5 ring-1 ring-blue-500/30"
                                                        : "text-gray-800 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/5 dark:hover:text-blue-400",
                                                ].join(" ")}
                                            >
                                                {l.label}
                                            </a>
                                        </li>
                                    );
                                })}
                                <li className="pt-1">
                                    <a
                                        href="#contact"
                                        onClick={() => setOpen(false)}
                                        className="block rounded-xl bg-blue-600 px-3.5 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                                    >
                                        Let’s Talk
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
