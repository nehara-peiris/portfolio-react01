import SectionHeading from "../components/SectionHeading";

const groups: Record<string, string[]> = {
    Languages: ["TypeScript", "Java", "Python"],
    Frontend: ["React", "Vite", "Tailwind", "Redux"],
    Backend: ["Spring Boot", "Node.js", "Express", "JWT"],
    "Data & Infra": ["MongoDB", "MySQL", "Docker"],
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-950 text-gray-300">
            <div className="max-w-5xl mx-auto px-6 space-y-8">
                {/* Heading */}
                <SectionHeading>Skills</SectionHeading>

                {/* Skill Groups */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {Object.entries(groups).map(([title, items]) => (
                        <div
                            key={title}
                            className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-blue-400">{title}</h3>

                            {/* Items as badges */}
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
