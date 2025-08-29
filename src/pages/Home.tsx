import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


export default function Home() {
    return (
        <main className="bg-black">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    );
}