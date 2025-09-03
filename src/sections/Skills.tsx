// src/sections/Skills.tsx
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type {JSX} from "react";

type Section = { title: string; icon: JSX.Element; items: string[] };

const sections: Section[] = [
    {
        title: "Languages",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-sky-300">
                <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 16s3-3 4-8c0 0 1 5 4 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "NoSQL"],
    },
    {
        title: "Frontend",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-300">
                <path d="M4 5h16v14H4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 9h16M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
    },
    {
        title: "Mobile",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-cyan-300">
                <rect x="7" y="3" width="10" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="17.5" r="1" fill="currentColor"/>
            </svg>
        ),
        items: ["React Native", "NativeWind"],
    },
    {
        title: "Backend & APIs",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-sky-300">
                <path d="M3 12h6l3-7 3 14 3-7h3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        items: ["Spring Boot", "Node.js", "Express.js", "Java EE • JSP", "Hibernate", "JWT"],
    },
    {
        title: "Databases",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-300">
                <ellipse cx="12" cy="6" rx="8" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 6v6c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V6M4 12c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
        ),
        items: ["MySQL", "MongoDB", "Firebase Firestore"],
    },
    {
        title: "Microservices & Infra",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-sky-300">
                <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
        ),
        items: ["API Gateway", "Eureka", "Docker"],
    },
    {
        title: "Tools & Platforms",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-300">
                <path d="M5 8l14 0M5 12l14 0M5 16l10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        items: ["Git/GitHub", "Postman", "Firebase", "Mockoon", "Scene Builder", "Cisco Packet Tracer", "Cloudinary"],
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 text-slate-200 bg-black md:pt-30">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>Skills</SectionHeading>

                {/* Featured strip */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {sections.map(({ title, icon, items }) => (
                        <motion.div
                            key={title}
                            variants={card}
                            className="rounded-2xl p-[1px] bg-gradient-to-br from-black-500/20 via-sky-400/10 to-transparent"
                        >
                            <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur
                              shadow-lg transition hover:shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 ring-1 ring-white/10">
                                            {icon}
                                        </div>
                                        <h3 className="text-sm font-semibold tracking-wide text-sky-300">{title}</h3>
                                    </div>
                                    <span className="text-xs text-slate-400">{items.length}</span>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="group inline-flex items-center gap-2 rounded-full border border-white/10
                                 bg-black/30 px-3 py-1 text-xs text-slate-200 transition
                                 hover:bg-white/10"
                                        >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                                            {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
