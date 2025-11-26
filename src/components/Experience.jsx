import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experienceItems, educationItems } from "../data/experience";

const Experience = ({ isEducation = false }) => {
  const { ref, visible } = useScrollReveal();
  const items = isEducation ? educationItems : experienceItems;
  const title = isEducation ? "Education" : "Experience";

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div className="timeline">
          {items.map((item, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__bullet" />
              <div className="timeline__content">
                <p className="timeline__period">{item.period}</p>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__place">{item.place}</p>
                <p className="timeline__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
