import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import MobileNav from "../MobileNav/MobileNav";
const Home = props => {

  const openNav = () => {
    let mobileNav = document.querySelector(".mobile-nav");

    if (mobileNav.style.right === "-100vw") {
      mobileNav.style.right = "0";
    } else {
      mobileNav.style.right = "-100vw";
    }
  };

  return (
    <div>
      <MobileNav toggleMobileNav={openNav} />
      <Header toggleMobileNav={openNav}/>
      <Hero />
      <Portfolio projects={props.projects} />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
