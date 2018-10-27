import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard";
import PortfolioDescrip from "./PortfolioDescrip";

class Portfolio extends Component {
  state = {
    show: false,
    name: ""
  };
  toggleDescription = (name, e) => {
    if (e.target.dataset.id === name) {
      this.setState({
        show: !this.state.show,
        name
      });
    }
  };
  closeDescription = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    const card = this.props.projects.map((project, i) => {
      return (
        <React.Fragment key={project.name}>
          <PortfolioCard
            key={i}
            project={project}
            toggleDescription={this.toggleDescription}
          />
          <PortfolioDescrip
            project={project}
            key={i + 1}
            show={this.state.show}
            name={this.state.name}
            closeDescription={this.closeDescription}

          />
        </React.Fragment>
      );
    });
    return (
      <div className="cards-container" id="Portfolio">
        <h2 className="cards-container__header">Portfolio</h2>
        {card}
      </div>
    );
  }
}

export default Portfolio;
