import React from "react";
import "./dialogs.scss";
import MessagesContainer from "./Messages/MessagesContainer";
import DialogUsersContainer from "./DialogsUsers/DialogUsersContainer";

const Dialogs = () => {
  return (
    <div className="dialogs-wrapper">
      <DialogUsersContainer />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
