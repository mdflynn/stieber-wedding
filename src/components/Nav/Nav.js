import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" id="nav-name">
        <p className="nav-text">Mr & Mrs Stieber</p>
      </Link>
      <NavLink to="/location" className="nav-link">
        <p className="nav-text">When & Where</p>
      </NavLink>
      <NavLink to="gallery" className="nav-link" id="nav-gallery">
        <p className="nav-text">Gallery</p>
      </NavLink>
      <NavLink to="registry" className="nav-link">
        <p className="nav-text">Registry</p>
      </NavLink>
      <NavLink to="rsvp" className="nav-link">
        <p className="nav-text">RSVP</p>
      </NavLink>
    </nav>
  );
};

export default Nav;
