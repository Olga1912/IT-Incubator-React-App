import React from "react";
import "./users.scss";
import UserItem from "./UserItem";
import Axios from "axios";
import { useEffect } from "react";

const Users = ({ users, toggleFollowing, setUsers }) => {
  useEffect(() => {
    Axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    ).then((response) => setUsers(response.data.items));
  }, [setUsers]);

  const readyUsers = users.map((user) => (
    <UserItem
      key={user.id}
      id={user.id}
      avatar={user.photos.small}
      status={user.status}
      address={user.address}
      name={user.name}
      followed={user.followed}
      toggleFollowing={toggleFollowing}
    />
  ));
  return <div>{readyUsers}</div>;
};

export default Users;
