import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav  navbar-dark bg-dark">
      <ul>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/music">
            Music
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
