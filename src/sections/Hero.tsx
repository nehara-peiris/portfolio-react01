import Button from "../components/Button";

export default function Hero() {
    return (
        <section
            id="top"
            className="pt-20 pb-16 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
        >
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-lg">
                    {/* Intro */}
                    <p className="text-gray-400">Hello, I’m Nehara 👋</p>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">
                        Full-Stack Developer <br className="hidden sm:block" />
                        crafting clean, reliable apps.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-300 mt-4 max-w-2xl">
                        I build <span className="text-blue-400">microservices</span> with{" "}
                        <span className="font-medium">Spring Boot</span> &{" "}
                        <span className="font-medium">Node.js</span>, and frontends with{" "}
                        <span className="font-medium">React</span> +{" "}
                        <span className="font-medium">TypeScript</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-6 flex-wrap">
                        <Button as="a" href="#projects">
                            🚀 View Projects
                        </Button>
                        <Button as="a" variant="ghost" href="/CV.pdf">
                            📄 Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
