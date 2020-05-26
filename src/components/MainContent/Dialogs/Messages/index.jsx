import React from "react";
import MessageItem from "./MessageItem";
import "./messages.scss";
import NewMessage from "./NewMessage";

const Messages = ({ messages, dispatch, newMessageText }) => {
  return (
    <div className="messages">
      {messages.map((item) => {
        return <MessageItem key={item.id} message={item} />;
      })}
      <NewMessage newMessageText={newMessageText} dispatch={dispatch} />
    </div>
  );
};

export default Messages;
