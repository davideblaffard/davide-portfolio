import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, tags, liveUrl, repoUrl, status, inProgress, image } =
    project;

  const renderStatusBadge = () => {
    if (inProgress || status === "wip") {
      return <span className="badge badge--warning">In progress</span>;
    }
    if (status === "online") {
      return <span className="badge badge--success">Online</span>;
    }
    if (status === "code-only") {
      return <span className="badge badge--neutral">Code only</span>;
    }
    return null;
  };

  return (
    <article className="project-card">
      {image && (
        <div className="project-card__image-wrapper">
          <img
            src={image}
            alt={title}
            className="project-card__image"
            loading="lazy"
          />
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          {renderStatusBadge()}
        </div>

        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {tags?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {liveUrl && (
            <a
              href={liveUrl}
              className="btn btn--primary btn--sm"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              className="btn btn--secondary btn--sm"
              target="_blank"
              rel="noreferrer"
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
