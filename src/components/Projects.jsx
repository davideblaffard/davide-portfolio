import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects, PROJECT_FILTERS } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { ref, visible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div ref={ref} className={`section ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__text section__text--muted">
          A selection of the work I’ve done so far.
        </p>

        <div className="projects__filters">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              className={`chip ${activeFilter === filter ? "chip--active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filteredProjects.length === 0 && (
            <p className="projects__empty">
              No projects found for this filter (yet).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
