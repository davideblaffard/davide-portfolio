import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        {project.inProgress && (
          <span className="badge badge--warning">In progress</span>
        )}
      </div>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="project-card__link"
        target="_blank"
        rel="noreferrer"
      >
        {project.linkLabel}
      </a>
    </article>
  );
};

export default ProjectCard;
