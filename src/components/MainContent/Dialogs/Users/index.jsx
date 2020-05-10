import React from "react";
import "./users.scss";
import UsersItem from "./UsersItem";

const Users = ({ users }) => {
  return (
    <div className="users">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <UsersItem
              key={user.login.password}
              id={`${user.id.value}${user.id.name}`}
              name={`${user.name.first} ${user.name.last}`}
              url={user.login.password}
              avatar={user.picture.thumbnail}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
