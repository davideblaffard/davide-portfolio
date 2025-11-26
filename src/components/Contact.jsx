import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Contact = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__text">
          Interested in working together or just want to say hi? Feel free to
          reach out.
        </p>

        <div className="contact__actions">
          <a href="mailto:infodavide98@gmail.com" className="btn btn--primary">
            Email me
          </a>
        </div>

        <div className="contact__links">
          <a
            href="https://github.com/davideblaffard"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
