import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import petcareIMG from "../assets/projects/petcareplus.png";
import bookclubImg from "../assets/projects/bookclub.png";
import smartparkImg from "../assets/projects/smartpark.png";
import logisticaImg from "../assets/projects/logistica.png";
import shionhouseImg from "../assets/projects/shionhouse.png";
import culinaryImg from "../assets/projects/culinary.png";
import sgaImg from "../assets/projects/sga.png";
import portfolioImg from "../assets/projects/portfolio.png";

type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    demo?: string;
    repo?: string;
    image?: string; // optional thumbnail
};

// === Replace with your real list ===
const projects: Project[] = [
    {
        id: "petcareplus",
        title: "PetCarePlus (Mobile)",
        description:
            "Expo + React Native app with NativeWind, Firebase Auth/Firestore, and image uploads.",
        tech: ["React Native", "Expo", "NativeWind", "Firebase"],
        demo: "https://youtu.be/1L9em-g2Qks?si=JY7AiRklBfLcZGvz",
        repo: "https://github.com/nehara-peiris/PetCarePlus.git",
        image: petcareIMG,
    },
    {
        id: "book-club",
        title: "Book Club Library",
        description:
            "Full-stack MERN app with lending, overdue alerts, email notifications, and image uploads.",
        tech: ["React", "TypeScript", "Tailwind", "Node", "Express", "MongoDB"],
        demo: "https://book-club-frontend-eight.vercel.app/",
        repo: "https://github.com/nehara-peiris/BookClub-frontend.git",
        image: bookclubImg,
    },
    {
        id: "smart-parking",
        title: "Smart Parking System",
        description:
            "Microservices (Spring Boot + Node) with Eureka, API Gateway, payments, and dashboards.",
        tech: ["Spring Boot", "Node.js", "MongoDB", "JWT"],
        demo: "#projects",
        repo: "https://github.com/nehara-peiris/SmartPark.git",
        image: smartparkImg,
    },
    {
        id: "logistics",
        title: "Logistics and Supply chain Management System",
        description:
            "Buy and Sell, Track orders, Generate Invoices",
        tech: ["React", "TypeScript", "Express", "MongoDB", "JWT"],
        demo: "https://youtu.be/2cKKzdC2Dxg?si=XeXO-PMSJHNLvuBg",
        repo: "https://github.com/nehara-peiris/LogisticsAndSupplyChainManagementSystem.git",
        image: logisticaImg,
    },
    {
        id: "order-mgmt",
        title: "Shion House - Order Management",
        description:
            "Search, carts, JWT auth, and role-based routes. Clean RESTful API with validation.",
        tech: ["React", "TypeScript", "Express", "MongoDB", "JWT"],
        demo: "https://youtu.be/epyY_-VICz0?si=hhiR4LwIrQ73BlLi",
        repo: "https://github.com/nehara-peiris/WebApp-Ecommerce.git",
        image: shionhouseImg,
    },
    {
        id: "academy",
        title: "Culinary Academy",
        description:
            "This site: manage courses, students, instructors and payments",
        tech: ["Java", "MySQL", "JWT"],
        demo: "#",
        repo: "https://github.com/nehara-peiris/TheCulinaryAcademyManagement.git",
        image: culinaryImg,
    },
    {
        id: "sga",
        title: "SGAssociation",
        description:
            "This is for handling legal work like deeds, lawyers, clarks and payments in the lawfirm",
        tech: ["Java", "Layered architecture", "JavaFX", "MySQL"],
        demo: "#",
        repo: "https://github.com/nehara-peiris/SGA-LayeredArchitecture.git",
        image: sgaImg,
    },
    {
        id: "portfolio-react",
        title: "Portfolio Website",
        description:
            "This site: modern hero, glass UI, motion, dark gradient theme, and responsive layout.",
        tech: ["React", "Vite", "Tailwind", "Framer Motion"],
        demo: "https://portfolio-react01-jade.vercel.app/",
        repo: "https://github.com/nehara-peiris/portfolio-react01.git",
        image: portfolioImg,
    },
];

const INITIAL_COUNT = 3;
const isExternal = (url?: string) => !!url && /^https?:\/\//i.test(url);

export default function Projects() {
    const [openAll, setOpenAll] = useState(false);

    // ESC to close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenAll(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Lock body scroll when overlay is open
    useEffect(() => {
        if (!openAll) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [openAll]);

    return (
        <section id="projects" className="py-20 text-slate-200 bg-black md:pt-30">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>Projects</SectionHeading>

                {/* Grid (first 4) */}
                <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-4">
                    {projects.slice(0, INITIAL_COUNT).map((p) => (
                        <ProjectCard key={p.id} p={p} />
                    ))}

                    {/* See more tile */}
                    <button
                        onClick={() => setOpenAll(true)}
                        className="group flex min-h-[260px] items-center justify-center rounded-2xl border border-white/10
                       bg-slate-900/40 p-6 text-left shadow-lg backdrop-blur transition hover:shadow-xl
                       hover:bg-white/10"
                        aria-haspopup="dialog"
                        aria-expanded={openAll}
                    >
                        <div className="text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                              bg-blue-500/15 ring-1 ring-white/10 text-blue-300">
                                {/* plus icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="mt-3 text-base font-semibold text-white">See more projects</div>
                            <p className="mt-1 text-sm text-slate-400">Open the full gallery</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Full overlay: all projects */}
            <AnimatePresence>
                {openAll && (
                    <>
                        {/* backdrop */}
                        <motion.button
                            aria-label="Close"
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                            onClick={() => setOpenAll(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        {/* sheet */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="all-projects"
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0.98, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 16 }}
                        >
                            <div className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-3xl
                              border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur">
                                {/* header */}
                                <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-5">
                                    <div>
                                        <h3 id="all-projects" className="text-lg font-semibold text-white">
                                            More Projects
                                        </h3>
                                        <p className="text-xs text-slate-400">Press Esc to close</p>
                                        <p className="text-xs text-slate-400">View all <a href="https://github.com/nehara-peiris">@github</a></p>
                                    </div>
                                    <button
                                        onClick={() => setOpenAll(false)}
                                        className="rounded-full bg-black/50 p-2 text-slate-200 ring-1 ring-white/20
                               transition hover:bg-black/60"
                                        aria-label="Close"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>

                                {/* content */}
                                <div className="max-h-[78vh] overflow-y-auto p-4 sm:p-6">
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {projects.map((p) => (
                                            <ProjectCard key={`all-${p.id}`} p={p} compact />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectCard({ p, compact }: { p: Project; compact?: boolean }) {
    return (
        <motion.article
            className="group cursor-default rounded-2xl border border-white/10 bg-slate-900/40 p-6
                 shadow-lg backdrop-blur transition hover:shadow-xl"
            style={{ transformStyle: "preserve-3d" as never }}
            whileHover={{
                rotateX: -2.5,
                rotateY: 2.5,
                scale: 1.01,
                transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.997 }}
        >
            {/* thumbnail */}
            <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                {p.image ? (
                    <img
                        src={p.image}
                        alt={p.title}
                        className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="h-40 w-full bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-transparent" />
                )}
            </div>

            <h3 className="text-lg font-semibold text-white">{p.title}</h3>

            <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-slate-200
                       transition group-hover:bg-white/10"
                    >
            {t}
          </span>
                ))}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3">
                {p.description}
            </p>

            <div className={`mt-5 flex flex-wrap gap-3 ${compact ? "justify-start" : ""}`}>
                {p.demo && (
                    <Button
                        as="a"
                        href={p.demo}
                        {...(isExternal(p.demo) ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                        Live Demo
                    </Button>
                )}
                {p.repo && (
                    <Button
                        as="a"
                        variant="ghost"
                        href={p.repo}
                        {...(isExternal(p.repo) ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                        Source
                    </Button>
                )}
            </div>
        </motion.article>
    );
}
