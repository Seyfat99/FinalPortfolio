import React from "react";
import Delete from "../../assets/img/delete.svg";

const PortfolioDescrip = props => {
  const { project } = props;
  return (
    <React.Fragment>
      {props.show && props.name === project.name ? (
        <div className="portfolio-descrip-wrap">
          <img
            src={Delete}
            alt=""
            className="portfolio-descrip-wrap__close"
            onClick={props.closeDescription}
          />
          <h2 className="header">{project.name}</h2>
          <div className="portfolio-descrip-wrap__img-wrap">
            <img src={project.image} alt="" />
          </div>
          <div className="portfolio-descrip-wrap__descrip-wrap">
            <p>{project.description}</p>
            <div className="portfolio-descrip-wrap__links-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default PortfolioDescrip;
