import React from "react";
import "./dialogs.scss";
import Users from "./Users";
import Messages from "./Messages";

const Dialogs = ({ state }) => {
 
  return (
    <div className="dialogs-wrapper">
      <Users users={state.users} />
      <Messages messages={state.messages} />
    </div>
  );
};

export default Dialogs;
