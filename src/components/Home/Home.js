import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
const Home = (props) => {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio projects={props.projects} />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
