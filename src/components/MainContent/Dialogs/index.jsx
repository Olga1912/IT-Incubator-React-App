import React from "react";
import "./dialogs.scss";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Dialogs = () => {
  return (
    <div className="dialogs-wrapper">
      <UsersContainer />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
