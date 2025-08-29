export default function Footer() {
    return (
        <footer className="border-t border-gray-700/60 py-6 text-gray-400 bg-gray-900">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                {/* Left */}
                <p>
                    © {new Date().getFullYear()} <span className="font-medium">Nehara Peiris</span> — Built with{" "}
                    <span className="text-blue-400">React</span> + <span className="text-cyan-400">Vite</span>.
                </p>

                {/* Right – Social Links */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/nehara-peiris"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nehara-peiris"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:nehara@example.com"
                        className="hover:text-white transition"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
