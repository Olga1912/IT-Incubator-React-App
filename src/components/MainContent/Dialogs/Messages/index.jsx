import React from "react";
import MessageItem from "./MessageItem";
import "./messages.scss";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((item) => {
        return <MessageItem key={item.id} message={item} />;
      })}
    </div>
  );
};

export default Messages;
