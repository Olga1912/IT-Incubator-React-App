import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-dark">
      <h1>
        <NavLink to="/profile">Logo</NavLink>
      </h1>
      <span>Log out</span>
    </header>
  );
};

export default Header;
