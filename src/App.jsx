import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import SideInterests from "./components/SideInterests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/useTheme";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="tech-stack">
            <TechStack />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Experience isEducation />
          </section>
          <section id="interests">
            <SideInterests />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
