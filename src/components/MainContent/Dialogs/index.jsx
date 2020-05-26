import React from "react";
import "./dialogs.scss";
import Users from "./Users";
import Messages from "./Messages";

const Dialogs = ({ state, dispatch }) => {
  return (
    <div className="dialogs-wrapper">
      <Users users={state.users} />
      <Messages
        messages={state.messages}
        newMessageText={state.newMessageText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Dialogs;
