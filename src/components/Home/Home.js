import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import MobileNav from "../MobileNav/MobileNav";
import Footer from "../Footer/Footer";

const Home = props => {

  const openNav = () => {
    let mobileNav = document.querySelector(".mobile-nav");

    if (mobileNav.style.right === "-100vw") {
      mobileNav.style.right = "0";
    } else {
      mobileNav.style.right = "-100vw";
    }
  };
  const smoothScroll = id => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <MobileNav toggleMobileNav={openNav}
      smoothScroll={smoothScroll} />
      <Header toggleMobileNav={openNav}
      smoothScroll={smoothScroll}/>
      <Hero smoothScroll={smoothScroll} />
      <Portfolio projects={props.projects} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
