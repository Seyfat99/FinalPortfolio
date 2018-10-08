import React from "react";
// import { NavLink } from "react-router-dom";

const MobileNav = props => {
  return (
    <nav className="mobile-nav" style={{ right: "-100vw" }}>
      <ul className="mobile-nav__unord-list">
        <li className="mobile-nav__list-item">
          <a onClick={props.toggleMobileNav} href>
            Home
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a onClick={props.toggleMobileNav} href="#About">
            About
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a onClick={props.toggleMobileNav} href="#Portfolio">
            Portfolio
          </a>
        </li>
        <li className="mobile-nav__list-item">
          <a onClick={props.toggleMobileNav} href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
