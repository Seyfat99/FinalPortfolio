import React from "react";
// import { NavLink } from "react-router-dom";

const Header = props => {
  window.onscroll = () => {
    stickyNav();
  };

  const stickyNav = () => {
    const nav = document.querySelector(".top-nav");
    const sticky = nav.offsetTop; // number of pixels from the closest parent element

    if (window.pageYOffset > sticky) {
      // when page scrolls, the page offset becomes greater than 0
      nav.classList.add("top-nav--sticky"); // and adds background color
    } else {
      nav.classList.remove("top-nav--sticky");
    }
  };

  const smoothScroll = id => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
 
  return (
    <header>
      <nav className="top-nav">
        <ul className="top-nav__unord-list">
          <li className="top-nav__logo">
            <a className="top-nav__logo-link" href="/">
              SK
            </a>
          </li>
          <li className="top-nav__list-item">
            <a href >Home</a>
          </li>
          <li className="top-nav__list-item">
            <a href onClick={() => smoothScroll("About")}>
              About
            </a>
          </li>
          <li className="top-nav__list-item">
            <a href onClick={() => smoothScroll("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="top-nav__list-item">
            <a href onClick={() => smoothScroll("Contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div onClick={props.toggleMobileNav} className="top-nav__mobile-menu">
          <i className="fas fa-bars" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
