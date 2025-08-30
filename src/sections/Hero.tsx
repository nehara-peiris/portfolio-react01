// src/sections/Hero.tsx
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import Button from "../components/Button";

const BADGES = [
    "Java • Spring Boot",
    "Node.js • Express",
    "React • TypeScript",
    "MongoDB • MySQL",
    "Microservices • REST",
];

// Variants
const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FLOAT: Transition = {
    duration: 4,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
};

export default function Hero() {
    return (
        <section
            id="top"
            className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100"
        >
            {/* soft background glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[260px] w-[260px] rounded-full bg-emerald-500/10 blur-2xl" />
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-20 pb-20 sm:px-8 md:grid-cols-2 md:pt-24 lg:gap-14">
                {/* Left: Copy */}
                <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
                    <motion.div variants={fadeUp}>
                        <a
                            href="#contact"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur hover:bg-white/10"
                        >
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Open to internships • Remote OK
                        </a>

                    </motion.div>
                    {/* NAME — primary focus */}
                    <motion.h1
                        variants={fadeUp}
                        className="relative mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]"
                    >
            <span className="relative inline-block">
              {/* soft glow behind name */}
                <span
                    aria-hidden
                    className="absolute -inset-x-4 -inset-y-2 rounded-full bg-gradient-to-r from-blue-500/25 via-sky-400/10 to-transparent blur-2xl"
                />
              <span className="relative bg-gradient-to-r from-white via-blue-200 to-sky-300 bg-clip-text text-transparent">
                Nehara Peiris
              </span>
            </span>
                    </motion.h1>

                    {/* ROLE — secondary line */}
                    <motion.h2
                        variants={fadeUp}
                        className="mt-2 text-2xl font-semibold text-slate-200 sm:text-3xl lg:text-4xl"
                    >
                        Full-Stack Developer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p variants={fadeUp} className="mt-3 max-w-xl text-slate-300/90">
                        I build <span className="text-blue-300">microservices</span> with
                        <span className="font-medium"> Spring Boot</span> &<span className="font-medium"> Node.js</span>, and
                        frontends with <span className="font-medium">React</span> +<span className="font-medium"> TypeScript</span>.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
                        <Button as="a" href="#projects">🚀 View Projects</Button>
                        <Button as="a" variant="ghost" href="/CV.pdf">📄 Download CV</Button>
                    </motion.div>

                    {/* Tech badges */}
                    <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
                        {BADGES.map((b, i) => (
                            <motion.li
                                key={b}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                            >
                                {b}
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Quick stats */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 grid w-full max-w-lg grid-cols-3 gap-3 text-center text-sm text-slate-300/90"
                    >
                        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <div className="text-xl font-semibold text-white">15+</div>
                            <div className="mt-0.5 text-xs">Projects</div>
                        </div>
                        {/*<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <div className="text-xl font-semibold text-white">5</div>
                            <div className="mt-0.5 text-xs">Microservices</div>
                        </div>*/}
                        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <div className="text-xl font-semibold text-white">2+</div>
                            <div className="mt-0.5 text-xs">Years Learning</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Accent visual */}
                <div className="relative">
                    <motion.div
                        variants={fadeUp}
                        className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur"
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-300">
                                    <path d="M12 3l7.794 4.5v9L12 21 4.206 16.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-slate-300">Currently working on</div>
                                <div className="text-base font-semibold text-white">Pet Care Plus</div>
                            </div>
                        </div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={FLOAT}
                            className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4"
                        >
                            <div className="flex items-center justify-between text-sm text-slate-300">
                                <span>Mobile Application</span>
                                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">healthy</span>
                            </div>
                            <div className="mt-2 h-2 w-full overflow-hidden rounded bg-white/10">
                                <div className="h-full w-3/4 bg-gradient-to-r from-blue-400 to-emerald-400" />
                            </div>
                            <div className="mt-2 text-xs text-slate-400">Uptime 99.9% • Requests 12k/day</div>
                        </motion.div>

                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-slate-400">Stack</div>
                                <div className="mt-1 font-medium text-white">ReactNative, Nativewind</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-slate-400">Database</div>
                                <div className="mt-1 font-medium text-white">Firebase Firestore</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
