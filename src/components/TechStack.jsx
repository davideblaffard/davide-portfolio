import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { currentStack, learningStack } from "../data/techStack";

const TechStack = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">Tech Stack</h2>
        <div className="tech-stack">
          <div className="tech-stack__column">
            <h3>Current Stack</h3>
            <div className="tech-stack__tags">
              {currentStack.map((item) => (
                <span key={item} className="tag tag--pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-stack__column">
            <h3>Learning / Up Next</h3>
            <div className="tech-stack__tags">
              {learningStack.map((item) => (
                <span key={item} className="tag tag--pill tag--accent">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
