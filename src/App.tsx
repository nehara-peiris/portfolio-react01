import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import EducationAchievements from "./sections/Education.tsx";
import Articles from "./sections/Articles.tsx";


export default function App() {
        return (
            <div className="min-h-screen bg-slate-900">
                    <Navbar />
                    <main>
                            <Hero />
                            <About />
                            <Skills />
                            <EducationAchievements/>
                            <Projects />
                            <Articles/>
                            <Contact />
                    </main>
                    <Footer />
            </div>
        );
}

