import SectionHeading from "../components/SectionHeading";
import portrait from "../assets/neha.png";

export default function AboutMinimalDark() {
    return (
        <section id="about" className="py-20 text-slate-200">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>About</SectionHeading>

                <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
                    {/* Left: Circular portrait */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            {/* soft gradient bezel that matches the site */}
                            <div className="rounded-full p-[3px] bg-gradient-to-b from-blue-400/25 via-sky-400/10 to-transparent">
                                <img
                                    src={portrait}
                                    alt="Nehara portrait"
                                    className="h-72 w-72 rounded-full object-cover ring-1 ring-white/10 shadow-2xl sm:h-80 sm:w-80"
                                    loading="lazy"
                                />
                            </div>

                            {/* subtle background glow for blend */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue-500/10 blur-2xl"
                            />

                            {/* accent dot (same hue family, low alpha) */}
                            <span className="absolute -right-3 -bottom-3 inline-block h-6 w-6 rounded-full bg-sky-400/70 ring-8 ring-slate-950/80" />
                        </div>
                    </div>

                    {/* Right: Name + bio */}
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-sky-300 bg-clip-text text-transparent">
                Nehara Peiris
              </span>
                        </h1>

                        <p className="mt-3 text-lg font-semibold text-slate-200">A Bit About Me</p>

                        <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-300/90">
                            I’m a Software Engineering student at IJSE, focused on building clean, reliable apps. I work on{" "}
                            <span className="text-sky-300">microservices</span> and REST APIs with
                            <span className="font-medium"> Spring Boot</span> & <span className="font-medium">Node.js</span>, and craft
                            modern UIs with <span className="font-medium">React</span> + <span className="font-medium">TypeScript</span>.
                        </p>

                        {/* Round category buttons — desaturated glass with unified blue/cyan tints */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="../assets/CV.pdf"
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full
                           bg-white/5 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                           hover:bg-white/10 transition
                           [box-shadow:0_8px_30px_rgba(56,189,248,0.12)]"
                                aria-label="Resume"
                            >
                                <span className="text-[11px] leading-tight text-center text-slate-100">Resume</span>
                            </a>

                            <a
                                href="#projects"
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full
                           bg-gradient-to-b from-blue-500/15 to-sky-400/10
                           ring-1 ring-white/10 shadow-[0_8px_30px_rgba(59,130,246,0.15)]
                           hover:from-blue-500/25 hover:to-sky-400/20 transition"
                                aria-label="Projects"
                            >
                                <span className="text-[11px] leading-tight text-center text-blue-100">Projects</span>
                            </a>

                            <a
                                href="#skills"
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full
                           bg-gradient-to-b from-sky-400/15 to-cyan-400/10
                           ring-1 ring-white/10 shadow-[0_8px_30px_rgba(56,189,248,0.15)]
                           hover:from-sky-400/25 hover:to-cyan-400/20 transition"
                                aria-label="Skills"
                            >
                                <span className="text-[11px] leading-tight text-center text-sky-100">Skills</span>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full
                           bg-white/5 ring-1 ring-white/10
                           hover:bg-white/10 transition
                           shadow-[0_8px_30px_rgba(148,163,184,0.12)]"
                                aria-label="Contact"
                            >
                                <span className="text-[11px] leading-tight text-center text-slate-100">Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}