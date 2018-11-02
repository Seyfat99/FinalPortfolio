import React from "react";

const Portfolio = props => {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        <div className="project-card__img-overlay">
          <p>{project.name}</p>
        </div>
        <img src={project.image} alt={project.image} />
      </div>
      <div className="project-card__button-wrap">
        <button
          data-id={project.name}
          onClick={e => props.toggleDescription(project.name, e)}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
