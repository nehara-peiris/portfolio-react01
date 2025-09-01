import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import EducationAchievements from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Articles from "../sections/Articles.tsx";


export default function Home() {
    return (
        <main className="bg-black">
            <Hero/>
            <About/>
            <Skills/>
            <EducationAchievements/>
            <Projects/>
            <Articles/>
            <Contact/>
        </main>
    );
}