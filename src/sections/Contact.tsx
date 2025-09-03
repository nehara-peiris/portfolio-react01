// src/pages/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

type FormState =
    | { status: "idle" }
    | { status: "submitting" }
    | { status: "success" }
    | { status: "error"; message: string };

export default function Contact() {
    // 🔧 update these
    const CONTACT = {
        email: "shewmipeiris123@gmail.com",
        linkedin: "https://www.linkedin.com/in/nehara-peiris-485361280/",
        medium: "https://medium.com/@shewmipeiris123",
        github: "https://github.com/nehara-peiris",
    };

    const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`;

    // controlled fields (kept)
    const [name, setName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [formState, setFormState] = useState<FormState>({ status: "idle" });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState({ status: "submitting" });

        const fd = new FormData(e.currentTarget);

        // honeypot
        if (fd.get("_hpot")) {
            setFormState({ status: "error", message: "Bot detected." });
            return;
        }

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: fd,
            });

            if (res.ok) {
                setFormState({ status: "success" });
                // reset visible inputs
                setName("");
                setFromEmail("");
                setSubject("");
                setMessage("");
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.message || "Submission failed");
            }
        } catch (err: any) {
            // graceful fallback to mail client
            const s = subject || "New message from portfolio";
            const body = `From: ${name} <${fromEmail}>\n\n${message}`;
            window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
                s
            )}&body=${encodeURIComponent(body)}`;
            setFormState({
                status: "error",
                message: err?.message || "E-mail app opened.",
            });
        }
    }

    return (
        <section id="contact" className="py-24 text-slate-200 bg-black md:pt-30">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <SectionHeading>Contact</SectionHeading>

                <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
                    {/* LEFT: headline + quick contacts */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                            Let’s{" "}
                            <span className="text-transparent bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text">
                talk
              </span>
                            <br />
                            about your idea
                        </h2>

                        <p className="mt-4 max-w-prose text-slate-300/90">
                            Tell me what you’re building and how I can help. Prefer email? Use
                            the form or reach me directly via the links below.
                        </p>

                        <div className="mt-8 space-y-3">
                            <ContactRow
                                label="Email"
                                value={CONTACT.email}
                                href={`mailto:${CONTACT.email}`}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect
                                            x="3"
                                            y="6"
                                            width="18"
                                            height="12"
                                            rx="2"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M3 7l9 7 9-7"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                }
                            />
                            <ContactRow
                                label="LinkedIn"
                                value="@nehara-peiris"
                                href={CONTACT.linkedin}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect
                                            x="4"
                                            y="4"
                                            width="16"
                                            height="16"
                                            rx="2"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M8 10v6M8 8.5h.01M12 16v-3.5a2 2 0 1 1 4 0V16"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                }
                            />
                            <ContactRow
                                label="Medium"
                                value="@shewmipeiris123"
                                href={CONTACT.medium}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="7" cy="12" r="3" />
                                        <ellipse cx="14.5" cy="12" rx="2.5" ry="5" />
                                        <path d="M20 7v10" />
                                    </svg>
                                }
                            />
                            <ContactRow
                                label="GitHub"
                                value="nehara-peiris"
                                href={CONTACT.github}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M12 3a9 9 0 00-2.84 17.55c.45.08.62-.2.62-.44v-1.7c-2.53.55-3.06-1.1-3.06-1.1-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.94 1.38.94.8 1.37 2.1.98 2.62.75.08-.6.31-.98.57-1.2-2.02-.23-4.15-1.01-4.15-4.48 0-.99.36-1.8.94-2.43-.09-.23-.41-1.16.09-2.42 0 0 .76-.24 2.49.93a8.6 8.6 0 014.53 0c1.73-1.17 2.49-.93 2.49-.93.5 1.26.18 2.19.09 2.42.59.63.94 1.44.94 2.43 0 3.48-2.14 4.25-4.18 4.47.32.27.61.82.61 1.66v2.46c0 .24.16.53.62.44A9 9 0 0012 3z"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                }
                            />
                        </div>

                        {/* soft accent glow */}
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="relative md:pt-32"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl"
                            />

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* hidden fields for FormSubmit */}
                                <input type="hidden" name="_subject" value="New message from portfolio" />
                                <input type="checkbox" name="_captcha" className="hidden" defaultChecked={true} />
                                <input type="text" name="_hpot" className="hidden" tabIndex={-1} autoComplete="off" />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Field
                                        id="name"
                                        name="name"
                                        label="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Jane Doe"
                                    />
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Your Email"
                                        value={fromEmail}
                                        onChange={(e) => setFromEmail(e.target.value)}
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <Field
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Let’s build something"
                                />

                                <Field
                                    id="message"
                                    name="message"
                                    label="Your Message"
                                    textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Hello Nehara, I’d like to discuss…"
                                />

                                <div className="pt-2 flex items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={formState.status === "submitting"}
                                        className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 disabled:opacity-60"
                                    >
                                        {formState.status === "submitting" ? "Sending..." : "Send Message"}
                                    </button>

                                    {formState.status === "success" && (
                                        <span className="text-sm text-green-300">Message sent! I’ll get back to you soon.</span>
                                    )}
                                    {formState.status === "error" && (
                                        <span className="text-sm text-yellow-300">
                      If nothing happens, your e-mail app should open — otherwise try again.
                    </span>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactRow({
                        label,
                        value,
                        href,
                        icon,
                    }: {
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur transition hover:bg-white/10"
        >
            <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 ring-1 ring-white/10 text-blue-300">
          {icon}
        </span>
                <div>
                    <div className="text-xs text-slate-400">{label}</div>
                    <div className="text-sm text-slate-200">{value}</div>
                </div>
            </div>
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-slate-400 transition group-hover:translate-x-0.5"
            >
                <path
                    d="M5 12h14M13 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </a>
    );
}

function Field({
                   id,
                   name,
                   label,
                   textarea,
                   type = "text",
                   value,
                   onChange,
                   placeholder,
               }: {
    id: string;
    name: string;
    label: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
}) {
    const base =
        "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/40";
    return (
        <label htmlFor={id} className="block">
            <span className="mb-1 block text-xs text-slate-400">{label}</span>
            {textarea ? (
                <textarea
                    id={id}
                    name={name}
                    rows={5}
                    className={base}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    className={base}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                />
            )}
        </label>
    );
}
