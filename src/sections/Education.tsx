// src/sections/EducationAchievements.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

type Project = { title: string; detail: string };

type Edu = {
    id: string;
    school: string;
    program: string;
    period: string;
    status?: "Expected" | "Completed" | "Ongoing";
    // detailed (shown in modal)
    bullets?: string[];
    modules?: string[];
    projects?: Project[];
};

type Award = {
    id: string;
    title: string;
    event?: string;
    team?: string;
    description?: string;
    link?: string;
};

type Cert = {
    id: string;
    title: string;
    issuer: string;
    date?: string;
    link?: string;
};

/* ---------- your data ---------- */
const education: Edu[] = [
    {
        id: "ijse-gdse",
        school: "Institute of Software Engineering (IJSE)",
        program: "Graduate Diploma in Software Engineering (GDSE)",
        period: "Aug 2023 – Dec 2025",
        status: "Ongoing",
        bullets: [
            "Advanced program focusing on full-stack development, microservices, and system design.",
            "Covers enterprise-level technologies including Java Spring Boot, Node.js, React, and cloud-based tools.",
            "Involves individual and team-based projects simulating real-world software engineering practices.",
        ],
    },
    {
        id: "ijse-cmjd",
        school: "Institute of Software Engineering (IJSE)",
        program: "Comprehensive Master Java Developer (CMJD)",
        period: "Mar 2023 – Jan 2024",
        status: "Completed",
        bullets: [
            "Specialized diploma emphasizing core Java, enterprise development, and software architecture.",
        ],
        modules: [
            "OOP",
            "Data Structures & Algorithms",
            "Multi-threading",
            "JDBC",
            "Hibernate",
            "Spring Boot",
            "REST APIs",
            "React",
            "MVC",
            "Design Patterns",
        ],
        projects: [
            { title: "Point of Sale System", detail: "Implemented using Java, JDBC, MVC, and MySQL." },
            {
                title: "Online Book Store",
                detail:
                    "Backend with Spring Boot & MySQL; frontend with React + Bootstrap; JWT-based authentication.",
            },
        ],
    },
    {
        id: "uom-python",
        school: "University of Moratuwa (UOM)",
        program: "Python Essentials",
        period: "Ongoing",
        status: "Ongoing",
        bullets: [
            "Focused on Python programming fundamentals including scripting, problem-solving, and automation.",
            "Builds a foundation for data handling and backend integrations.",
        ],
    },
    {
        id: "ol-olv",
        school: "Our Lady of Victories Convent, Moratuwa",
        program: "GCE O/L — 8 Distinctions & 1 Credit",
        period: "2012 – 2023",
        bullets: [
            "Achieved 8 Distinctions and 1 Credit pass, demonstrating consistent academic excellence.",
            "Built strong problem-solving and analytical skills which supported the transition into software engineering studies.",
        ],
    },
];

const awards: Award[] = [
    {
        id: "circle-edge",
        title: "Circle Edge Hackathon (2025)",
        team: "Team PrimeSpark",
        description:
            "Showcased the SimplyHire MVP; authored documentation, architecture diagrams, and investor-style decks.",
    },
    {
        id: "innovesta",
        title: "Innovesta Competition (2025)",
        team: "Team TechFusion",
        description:
            "Delivered project documentation and technical presentations—clear communication of complex solutions.",
    },
];

const certs: Cert[] = [
    { id: "py1", title: "Python Essentials 1", issuer: "Cisco / NetAcad" },
    { id: "java-basic", title: "Java (Basic)", issuer: "HackerRank", date: "Jul 2024" },
    { id: "sql-basic", title: "SQL (Basic)", issuer: "HackerRank", date: "Jul 2024" },
    { id: "html-intro", title: "Introduction to HTML", issuer: "SoloLearn", date: "Sep 2024" },
    { id: "postman", title: "Postman API Fundamentals Student Expert", issuer: "Postman", date: "Feb 2025" },
];

/* ---------- motion ---------- */
const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const gridItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function EducationAchievements() {
    const [tab, setTab] = useState<"education" | "awards" | "certs">("education");
    const [selectedEdu, setSelectedEdu] = useState<Edu | null>(null);

    // Esc to close modal
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedEdu(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Lock scroll when modal open
    useEffect(() => {
        if (!selectedEdu) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [selectedEdu]);

    return (
        <section id="education" className="py-20 text-slate-200">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>Education & Achievements</SectionHeading>

                {/* Tabs */}
                <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
                    <Tab isActive={tab === "education"} onClick={() => setTab("education")}>
                        Education
                    </Tab>
                    <Tab isActive={tab === "awards"} onClick={() => setTab("awards")}>
                        Awards & Honors
                    </Tab>
                    <Tab isActive={tab === "certs"} onClick={() => setTab("certs")}>
                        Certifications
                    </Tab>
                </div>

                {/* Panels */}
                <div className="mt-8">
                    <AnimatePresence mode="wait">
                        {tab === "education" && (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                {/* highlight strip (optional) */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {[
                                        "GDSE (Ongoing • ends Dec 2025)",
                                        "CMJD (Completed Jan 2024)",
                                        "Python Essentials (Ongoing)",
                                    ].map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>

                                {/* SIMPLE CARDS like before */}
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="grid gap-6 sm:grid-cols-2"
                                >
                                    {education.map((e) => (
                                        <motion.article
                                            key={e.id}
                                            variants={gridItem}
                                            className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-md backdrop-blur"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h3 className="text-base font-semibold text-white">{e.school}</h3>
                                                    <p className="mt-0.5 text-sm text-sky-300">{e.program}</p>
                                                    <p className="mt-1 text-xs text-slate-400">{e.period}</p>
                                                </div>
                                                {e.status && (
                                                    <span
                                                        className={`rounded-full px-2 py-0.5 text-[10px] ring-1 ${
                                                            e.status === "Completed"
                                                                ? "bg-emerald-500/15 text-emerald-300 ring-emerald-400/20"
                                                                : e.status === "Expected"
                                                                    ? "bg-blue-500/15 text-blue-200 ring-blue-400/20"
                                                                    : "bg-amber-500/15 text-amber-200 ring-amber-400/20"
                                                        }`}
                                                    >
                            {e.status}
                          </span>
                                                )}
                                            </div>

                                            {(e.bullets?.length || e.modules?.length || e.projects?.length) && (
                                                <div className="mt-4">
                                                    <button
                                                        onClick={() => setSelectedEdu(e)}
                                                        className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-200 hover:bg-white/10 transition"
                                                    >
                                                        View details
                                                    </button>
                                                </div>
                                            )}
                                        </motion.article>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}

                        {tab === "awards" && (
                            <motion.div
                                key="awards"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="grid gap-6 sm:grid-cols-2"
                            >
                                {awards.map((a) => (
                                    <div
                                        key={a.id}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur"
                                    >
                                        <div className="flex items-baseline justify-between gap-2">
                                            <h3 className="text-sm font-semibold text-white">{a.title}</h3>
                                            <span className="text-xs text-slate-400">{a.team}</span>
                                        </div>
                                        {a.description && <p className="mt-2 text-sm text-slate-300">{a.description}</p>}
                                        {a.link && (
                                            <a
                                                href={a.link}
                                                target={a.link.startsWith("http") ? "_blank" : undefined}
                                                rel={a.link.startsWith("http") ? "noreferrer" : undefined}
                                                className="mt-3 inline-block rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-200 hover:bg-white/10 transition"
                                            >
                                                View
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {tab === "certs" && (
                            <motion.div
                                key="certs"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="grid gap-3">
                                    {certs.map((c) => (
                                        <div
                                            key={c.id}
                                            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 backdrop-blur"
                                        >
                                            <div>
                                                <div className="text-sm text-white">{c.title}</div>
                                                <div className="text-xs text-slate-400">
                                                    {c.issuer}
                                                    {c.date ? ` • ${c.date}` : ""}
                                                </div>
                                            </div>
                                            {c.link && (
                                                <a
                                                    href={c.link}
                                                    target={c.link.startsWith("http") ? "_blank" : undefined}
                                                    rel={c.link.startsWith("http") ? "noreferrer" : undefined}
                                                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200 hover:bg-white/10 transition"
                                                >
                                                    View
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* --------- Modal for Education details --------- */}
            <AnimatePresence>
                {selectedEdu && (
                    <>
                        <motion.button
                            aria-label="Close"
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedEdu(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="edu-title"
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0.98, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 16 }}
                        >
                            <div className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur">
                                <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-5">
                                    <div>
                                        <h3 id="edu-title" className="text-lg font-semibold text-white">
                                            {selectedEdu.school}
                                        </h3>
                                        <p className="text-sm text-sky-300">{selectedEdu.program}</p>
                                        <p className="text-xs text-slate-400">{selectedEdu.period}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedEdu(null)}
                                        className="rounded-full bg-black/50 p-2 text-slate-200 ring-1 ring-white/20 transition hover:bg-black/60"
                                        aria-label="Close"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="max-h-[74vh] overflow-y-auto p-5 sm:p-6">
                                    {/* bullets */}
                                    {selectedEdu.bullets?.length ? (
                                        <ul className="grid gap-2 text-sm text-slate-300">
                                            {selectedEdu.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2">
                                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}

                                    {/* modules */}
                                    {selectedEdu.modules?.length ? (
                                        <div className="mt-5">
                                            <div className="text-xs uppercase tracking-wide text-slate-400">Modules</div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {selectedEdu.modules.map((m) => (
                                                    <span
                                                        key={m}
                                                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200"
                                                    >
                            {m}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}

                                    {/* projects */}
                                    {selectedEdu.projects?.length ? (
                                        <div className="mt-5">
                                            <div className="text-xs uppercase tracking-wide text-slate-400">Key projects</div>
                                            <div className="mt-2 grid gap-2">
                                                {selectedEdu.projects.map((p) => (
                                                    <div
                                                        key={p.title}
                                                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
                                                    >
                                                        <div className="font-medium text-white">{p.title}</div>
                                                        <div className="mt-0.5">{p.detail}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

/* ---------- UI bits ---------- */
function Tab({
                 isActive,
                 onClick,
                 children,
             }: {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={`relative rounded-xl px-3.5 py-1.5 text-sm transition ${
                isActive ? "text-white" : "text-slate-300 hover:text-white"
            }`}
        >
            {children}
            {isActive && (
                <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/25 to-sky-400/20 ring-1 ring-white/10" />
            )}
        </button>
    );
}
