import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechBanner from "../components/TechBanner";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-clip bg-background text-ink">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechBanner />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
