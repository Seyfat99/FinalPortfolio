import React from "react";

const Portfolio = props => {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        <img src={project.image} alt={project.image} />
      </div>
      <p>{project.name}</p>
      <p>{project.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={project.link}>GitHub</a>
    </div>
  );
};

export default Portfolio;
