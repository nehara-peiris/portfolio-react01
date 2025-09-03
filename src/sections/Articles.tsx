// src/sections/Articles.tsx
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import medium1 from "../assets/articles/medium1.jpg";
import medium2 from "../assets/articles/medium2.jpg";
import medium3 from "../assets/articles/medium3.jpg";
import medium4 from "../assets/articles/medium4.jpg";
import medium5 from "../assets/articles/medium5.jpg";


type Article = {
    id: string;
    title: string;
    excerpt?: string;
    date: string;
    readingTime: string;
    tags: string[];
    url: string;
    image?: string;
};

const ARTICLES: Article[] = [
    {
        id: "react-routing",
        title: "Easy Routing Patterns in React",
        excerpt:
            "A concise tour of common React Router patterns—nested routes, layouts, 404s, lazy routes, and more.",
        date: "2025-07-07",
        readingTime: "4 min read",
        tags: ["Routing", "React", "React Router", "Patterns"],
        url: "https://medium.com/@shewmipeiris123/easy-routing-patterns-in-react-9264da5adfa3",
        image: medium1,
    },
    {
        id: "arch-design-patterns",
        title: "Architectures and Design patterns for a robust software systems",
        excerpt:
            "Monolith vs. microservices, layered, event-driven, microkernel, and more—plus classic design patterns.",
        date: "2025-06-03",
        readingTime: "7 min read",
        tags: ["Architecture", "Design Patterns", "Software Engineering"],
        url: "https://medium.com/@shewmipeiris123/architectures-and-design-patterns-for-a-robust-software-systems-6dcc7f53e48a",
        image: medium2,
    },
    {
        id: "layered-architecture",
        title: "Layered Architecture — A Structured Approach to Modern Software Development",
        excerpt:
            "Core ideas of layered systems, loose coupling, dependency injection, high cohesion, and low boilerplate.",
        date: "2024-10-08",
        readingTime: "3 min read",
        tags: ["Architecture", "Layered"],
        url: "https://medium.com/@shewmipeiris123/layered-architecture-8db268235e3b",
        image: medium3,
    },
    {
        id: "java-flow-control",
        title: "Can we control the flow of JAVA program?",
        excerpt:
            "If/else, switch, loops, break/continue, return, and try/catch/finally—clear examples in Java.",
        date: "2024-07-23",
        readingTime: "6 min read",
        tags: ["Java", "Control Flow"],
        url: "https://medium.com/@shewmipeiris123/can-we-control-the-flow-of-java-program-e7a2501764e3",
        image: medium4,
    },
    {
        id: "java-intro",
        title: "Let's connect machines and human through Java",
        excerpt:
            "Intro to Java: JVM/bytecode, main method, printing, variables, reserved words, identifiers.",
        date: "2024-06-03",
        readingTime: "4 min read",
        tags: ["Java", "Programming"],
        url: "https://medium.com/@shewmipeiris123/lets-connect-machines-and-human-through-java-40cb41ecabd1",
        image: medium5,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const card = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Articles() {
    return (
        <section id="writing" className="py-12 text-slate-200 scroll-mt-24">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>Writing</SectionHeading>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6 md:grid-cols-5"
                >
                    {ARTICLES.map((a) => (
                        <motion.article
                            key={a.id}
                            variants={card}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur shadow-lg transition hover:shadow-xl"
                        >
                            {/* Cover (placeholder gradient unless you add a.image) */}
                            {a.image ? (
                                <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                                    <img
                                        src={a.image}
                                        alt={a.title}
                                        className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            ) : (
                                <div className="mb-4 h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-transparent" />
                            )}

                            <h3 className="line-clamp-2 text-base font-semibold text-white">{a.title}</h3>
                            {a.excerpt && <p className="mt-2 line-clamp-3 text-sm text-slate-300">{a.excerpt}</p>}

                            <div className="mt-3 flex flex-wrap gap-2">
                                {a.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-slate-200"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                                <time dateTime={a.date}>
                                    {new Date(a.date).toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                    })}
                                </time>
                                <span>{a.readingTime}</span>
                            </div>

                            <a
                                href={a.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/10"
                            >
                                Read on Medium
                                <svg width="14" height="14" viewBox="0 0 24 24" className="text-slate-300">
                                    <path d="M7 17L17 7M10 7h7v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </a>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-6 flex justify-center">
                    <a
                        href="https://medium.com/@shewmipeiris123"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                    >
                        See all on Medium
                    </a>
                </div>
            </div>
        </section>
    );
}
