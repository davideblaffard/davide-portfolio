import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Hero = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`section section--hero ${visible ? "is-visible" : ""}`}
    >
      <div className="container hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I’m</p>
          <h1 className="hero__title">Davide Blaffard</h1>
          <h2 className="hero__subtitle">
            Aspiring Web Developer &amp; Junior Backend Engineer
          </h2>
          <p className="hero__text">
            I build backend services with Java &amp; Spring Boot, and I’m
            leveling up my frontend skills with JavaScript and React.
          </p>
          <div className="hero__actions">
            <a href="mailto:infodavide98@gmail.com" className="btn btn--primary">
              Get in touch
            </a>
            <a
              href="#"
              className="btn btn--secondary"
              onClick={(e) => e.preventDefault()}
            >
              Download CV
            </a>
          </div>
          <p className="hero__meta">
            Based in Italy · Open to remote and hybrid opportunities
          </p>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar">
            <span className="hero__avatar-initials">DB</span>
          </div>
          <p className="hero__avatar-caption">
            Backend-focused developer with a passion for clean code and
            learning new tech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
