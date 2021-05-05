import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/location" className="nav-link">
        <p className="nav-text">When & Where</p>
      </NavLink>
      <NavLink to="gallery" className="nav-link">
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
