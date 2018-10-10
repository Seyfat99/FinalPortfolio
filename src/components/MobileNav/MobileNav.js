import React from "react";

const MobileNav = props => {
  return (
    <nav className="mobile-nav" style={{ right: "-100vw" }}>
      <ul className="mobile-nav__unord-list">
        <li className="mobile-nav__list-item">
          <a
            href
            onClick={() => {
              props.toggleMobileNav();
              props.smoothScroll("Home");
            }}
          >
            Home
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a
            href
            onClick={() => {
              props.toggleMobileNav();
              props.smoothScroll("About");
            }}
          >
            About
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a
            href
            onClick={() => {
              props.toggleMobileNav();
              props.smoothScroll("Portfolio");
            }}
          >
            Portfolio
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a
            href
            onClick={() => {
              props.toggleMobileNav();
              props.smoothScroll("Contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
