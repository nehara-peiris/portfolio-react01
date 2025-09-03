// src/components/Footer.tsx
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const YEAR = new Date().getFullYear();

export default function Footer() {
    const SOCIALS = [
        { href: "https://github.com/nehara-peiris", label: "GitHub", icon: Github },
        { href: "https://www.linkedin.com/in/nehara-peiris", label: "LinkedIn", icon: Linkedin },
        { href: "mailto:shewmipeiris123@gmail.com", label: "Email", icon: Mail },
        { href: "https://portfolio-react01-jade.vercel.app/", label: "Medium", icon: Globe },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-slate-950 to-black text-slate-300">
            {/* subtle top glow */}
            <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-32 w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="mx-auto max-w-6xl px-6 py-14 text-center sm:px-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Nehara Peiris
                </h3>
                <p className="mt-1 text-sm text-blue-200/90">
                    Full-Stack Developer • Content Writer
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                    I build scalable backends and polished UIs with Spring Boot, Node.js, React, and TypeScript.
                    Open to internships and collaborations.
                </p>

                {/* social icons row */}
                <ul className="mt-6 flex items-center justify-center gap-3">
                    {SOCIALS.map(({ href, label, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noreferrer" : undefined}
                                aria-label={label}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                            >
                                <Icon className="h-4 w-4 text-slate-200" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* bottom bar like the screenshot */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-slate-400 sm:px-8">
                    Copyright ©{YEAR}{" "}
                    <a
                        href="https://www.linkedin.com/in/nehara-peiris"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-2 hover:text-white hover:underline"
                    >
                        Nehara Peiris
                    </a>
                </div>
            </div>
        </footer>
    );
}
