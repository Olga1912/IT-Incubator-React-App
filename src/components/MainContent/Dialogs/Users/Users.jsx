import React from "react";
import "./users.scss";
import UsersItem from "./UsersItem";

const Users = ({ users }) => {
  const readyUsers = users.map((user) => {
    return (
      <UsersItem
        key={user.key}
        id={user.id}
        name={user.name}
        url={user.url}
        avatar={user.avatar}
      />
    );
  });
  return (
    <div className="users">
      <ul className="list-group">
         {readyUsers} 
      </ul>
    </div>
  );
};

export default Users;
