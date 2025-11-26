import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SideInterests = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">Beyond Code</h2>
        <p className="section__text">
          Outside of backend development, I enjoy exploring{" "}
          <strong>video editing</strong>, new tech tools, and gaming. I like
          learning how things are built, both from a technical and creative
          point of view, and I’m always curious about new ways to tell stories
          through visuals and interactive experiences.
        </p>
      </div>
    </div>
  );
};

export default SideInterests;
