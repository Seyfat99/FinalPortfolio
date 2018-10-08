import React from "react";
import DownArrow from '../../assets/img/down-arrow.svg'

const Hero = () => {
  return (
    <div className="hero">
      <p>I'm A Junior Web Developer</p>
      <h1>Seyfat Khamidov</h1>
      <a href="#Portfolio"><img src={DownArrow} alt="Down Arrow" /></a>
    </div>
  );
};

export default Hero;
