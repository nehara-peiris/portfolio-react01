import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function Contact() {
    const email = "you@example.com";

    return (
        <section
            id="contact"
            className="py-20 bg-gray-950 text-gray-300"
        >
            <div className="max-w-3xl mx-auto px-6 space-y-8 text-center">
                {/* Heading */}
                <SectionHeading>Contact</SectionHeading>

                {/* Card */}
                <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 shadow-lg">
                    <p className="text-lg text-gray-300">
                        Have a <span className="text-blue-400 font-medium">role</span>,{" "}
                        <span className="text-cyan-400 font-medium">collab</span>, or{" "}
                        <span className="text-green-400 font-medium">idea</span>? Let’s talk.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <Button as="a" href={`mailto:${email}`}>
                            📧 Email Me
                        </Button>
                    </div>

                    {/* Optional Socials */}
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a
                            href="https://github.com/nehara-peiris"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/nehara-peiris"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="hover:text-white transition"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
