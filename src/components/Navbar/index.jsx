import React from 'react';
import classes from './Navbar.module.scss';
import { Link } from "react-router-dom";

 const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/dialogs">Messages</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    )
}

export default Navbar;
