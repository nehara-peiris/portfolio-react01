import type { Project } from "../types";


export const projects: Project[] = [
    {
        id: "book-club",
        title: "Book Club Library",
        description: "Full‑stack MERN app with lending, overdue alerts, and image uploads.",
        tech: ["React", "TypeScript", "Tailwind", "Node", "Express", "MongoDB"],
        demo: "https://your-demo-link",
        repo: "https://github.com/your/repo"
    },
    {
        id: "smart-parking",
        title: "Smart Parking System",
        description: "Microservices (Spring Boot + Node) with Eureka, API Gateway, and payments.",
        tech: ["Spring Boot", "Node.js", "MongoDB", "JWT"],
        demo: "https://your-demo-link",
        repo: "https://github.com/your/repo"
    }
];