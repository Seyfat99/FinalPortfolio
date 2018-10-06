import React from "react";
import DownArrow from '../../assets/img/down-arrow.svg'

const Hero = () => {
  return (
    <div className="hero">
      <p>I'm A Junior Web Developer</p>
      <h1>Seyfat Khamidov</h1>
      <img src={DownArrow} alt="Down Arrow" />
    </div>
  );
};

export default Hero;
