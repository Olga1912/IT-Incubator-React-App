import React from "react";
import "./useritem.scss";
import { NavLink } from "react-router-dom";

const UserItem = ({ url, avatar, name }) => {
  return (
    <li className="user-item list-group-item d-flex justify-content-between align-items-center">
      <NavLink to={`/dialogs/${url}`}>
        <img src={avatar} alt={name} />
        {name}
        <span className="badge badge-primary badge-pill">1</span>
      </NavLink>
    </li>
  );
};

export default UserItem;
