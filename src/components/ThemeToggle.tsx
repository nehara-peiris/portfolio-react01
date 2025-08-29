import { useEffect, useState } from "react";

function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    // Fallback to system preference on first visit
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>(() => getInitialTheme());

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-2 rounded-full border border-gray-700/60 px-3 py-1.5 text-sm
                 bg-gray-800 text-gray-200 hover:bg-gray-700 transition dark:border-gray-600
                 dark:bg-gray-800 dark:text-gray-200"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
            {/* Simple inline icons (no extra libs) */}
            <span aria-hidden="true">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
            <span className="hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
        </button>
    );
}
