import React from "react";
import "./users.scss";
import DialogsUsersItem from "./DialogsUsersItem";

const DialogsUsers = ({ users }) => {
  const readyUsers = users.map((user) => {
    return (
      <DialogsUsersItem
        key={user.id}
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

export default DialogsUsers;
