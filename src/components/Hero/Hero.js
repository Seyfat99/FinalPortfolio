import React from "react";
import DownArrow from "../../assets/img/down-arrow.svg";

const Hero = props => {
  return (
    <div className="hero" id="Home">
      <p>I'm A Junior Web Developer</p>
      <h1>Seyfat Khamidov</h1>
      <div>
        <a href onClick={() => props.smoothScroll("Portfolio")}>
          <img src={DownArrow} alt="Down Arrow" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
