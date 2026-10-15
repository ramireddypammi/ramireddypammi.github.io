import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="ambient" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
