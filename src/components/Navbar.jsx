import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <button
          className="navbar__logo"
          onClick={() => handleScrollTo("hero")}
          aria-label="Back to top"
        >
          Davide Blaffard
        </button>

        <nav className="navbar__nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className="navbar__link"
              onClick={() => handleScrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="navbar__right">
          <ThemeToggle />
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          {sections.map((section) => (
            <button
              key={section.id}
              className="navbar__mobile-link"
              onClick={() => handleScrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
