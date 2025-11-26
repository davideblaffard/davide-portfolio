import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">About me</h2>
        <p className="section__text">
          Junior backend developer specialized in Java, Spring Boot, and SQL
          databases. Currently enhancing my frontend skills with JavaScript and
          React. Passionate about software development, video editing, and
          continuous learning. Seeking opportunities in a collaborative software
          house to grow as a backend engineer.
        </p>

        <ul className="about__highlights">
          <li>
            <strong>Focus:</strong> Backend development (Java, Spring Boot, REST
            APIs)
          </li>
          <li>
            <strong>Databases:</strong> MySQL, SQL
          </li>
          <li>
            <strong>Frontend:</strong> JavaScript, React (in progress)
          </li>
          <li>
            <strong>Soft skills:</strong> Curiosity, continuous learning,
            teamwork
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
