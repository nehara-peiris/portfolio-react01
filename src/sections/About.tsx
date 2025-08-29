import SectionHeading from "../components/SectionHeading";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-950 text-gray-300">
            <div className="max-w-5xl mx-auto px-6 space-y-8">
                {/* Heading */}
                <SectionHeading>About</SectionHeading>

                {/* Card */}
                <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 shadow-lg">
                    <p className="leading-relaxed">
                        I’m a <span className="text-blue-400 font-medium">Software Engineering student</span> at{" "}
                        <span className="font-semibold">IJSE</span>, passionate about building{" "}
                        <span className="text-cyan-400">scalable web applications</span> and modern digital
                        solutions. My focus is on{" "}
                        <span className="font-medium">microservices, REST APIs, and full-stack apps</span> that
                        are clean, reliable, and user-friendly.
                    </p>

                    {/* Quick Highlights */}
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✔</span> Full-Stack Development (Spring Boot, Node.js, React)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✔</span> REST APIs & Microservices
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✔</span> Database Design & Optimization
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✔</span> Cloud & Deployment (Vercel, Railway, Render)
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
