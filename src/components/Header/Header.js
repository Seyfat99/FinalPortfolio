import React from "react";

const Header = () => {
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
            <a href="/">Home</a>
          </li>
          <li className="top-nav__list-item">
            <a href="#About">About</a>
          </li>
          <li className="top-nav__list-item">
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li className="top-nav__list-item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="top-nav__mobile-menu">
          <i className="fas fa-bars" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
