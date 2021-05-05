import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/location" className="nav-link">
        <p>When & Where</p>
      </NavLink>
    </nav>
  );
};

export default Nav;
