import React from "react";
import "./messageitem.scss";

const MessageItem = ({ message }) => {
  return (
    <div className="message-item-wrapper" key={message.id}>
      <div className="message-item">{message.title}</div>
    </div>
  );
};

export default MessageItem;
