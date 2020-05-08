import React from "react";
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav  navbar-dark bg-dark">
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Messages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Music</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

