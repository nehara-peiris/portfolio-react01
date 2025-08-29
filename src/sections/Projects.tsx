import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    demo?: string;
    repo?: string;
    image?: string; // optional thumbnail if you add later
};

// Example data — replace with your real data or import from a data file
const projects: Project[] = [
    {
        id: "book-club",
        title: "Book Club Library",
        description:
            "Full-stack MERN app with lending, overdue alerts, and image uploads.",
        tech: ["React", "TypeScript", "Tailwind", "Node", "Express", "MongoDB"],
        demo: "#",
        repo: "#",
    },
    {
        id: "smart-parking",
        title: "Smart Parking System",
        description:
            "Microservices (Spring Boot + Node) with Eureka, API Gateway, and payments.",
        tech: ["Spring Boot", "Node.js", "MongoDB", "JWT"],
        demo: "#",
        repo: "#",
    },
];

const isExternal = (url?: string) => !!url && /^https?:\/\//i.test(url);

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-950 text-gray-300">
            <div className="max-w-6xl mx-auto px-6 space-y-8">
                <SectionHeading>Projects</SectionHeading>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <article
                            key={p.id}
                            className="group bg-gray-900/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-gray-600 transition"
                        >
                            {/* Optional thumbnail */}
                            {p.image && (
                                <div className="mb-4 overflow-hidden rounded-xl border border-gray-800">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-40 object-cover group-hover:scale-[1.02] transition"
                                    />
                                </div>
                            )}

                            <h3 className="font-semibold text-lg text-white">
                                {p.title}
                            </h3>

                            {/* Tech as badges */}
                            <div className="mt-2 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-200 group-hover:border-gray-600 transition"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                                {p.description}
                            </p>

                            <div className="mt-5 flex gap-3 flex-wrap">
                                {p.demo && (
                                    <Button
                                        as="a"
                                        href={p.demo}
                                        {...(isExternal(p.demo)
                                            ? { target: "_blank", rel: "noreferrer" }
                                            : {})}
                                    >
                                        Live Demo
                                    </Button>
                                )}
                                {p.repo && (
                                    <Button
                                        as="a"
                                        variant="ghost"
                                        href={p.repo}
                                        {...(isExternal(p.repo)
                                            ? { target: "_blank", rel: "noreferrer" }
                                            : {})}
                                    >
                                        Source
                                    </Button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
