import React from "react";
import "./dialogs.scss";
import Users from "./Users";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = ({ state, dispatch }) => {
  return (
    <div className="dialogs-wrapper">
      <Users users={state.users} />
      <MessagesContainer state={state} dispatch={dispatch} />
    </div>
  );
};

export default Dialogs;
