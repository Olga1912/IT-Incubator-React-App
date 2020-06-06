import React from "react";
import "./users.scss";
import UserItem from "./UserItem";

const Users = ({ users, toggleFollowing }) => {
  const readyUsers = users.map((user) => (
    <UserItem
      key={user.id}
      id={user.id}
      address={user.address}
      avatar={user.avatar}
      status={user.status}
      name={user.name}
      following={user.following}
      toggleFollowing={toggleFollowing}
    />
  ));
  return <div>{readyUsers}</div>;
};

export default Users;
