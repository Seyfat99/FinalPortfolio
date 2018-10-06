import React from "react";
import PortfolioCard from './PortfolioCard';

const Portfolio = (props) => {
  const card = props.projects.map((project, i) => {
    return (
      <PortfolioCard key={i}
      project={project} />
    )
  })
  return (
   <div className="cards-container" id="Portfolio">
     <h2>Portfolio</h2>
     {card}
   </div>
  )
};

export default Portfolio;
