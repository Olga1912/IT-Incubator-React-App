import React from "react";
import MessageItem from "./MessageItem";
import "./messages.scss";
import NewMessage from "./NewMessage";

const Messages = ({
  messages,
  newMessageText,
  sendMessage,
  updateMessageText,
}) => {
  const readyMessages = messages.map((item) => {
    return <MessageItem key={item.id} message={item} />;
  });
  return (
    <div className="messages">
      {readyMessages}
      <NewMessage
        updateMessageText={updateMessageText}
        sendMessage={sendMessage}
        newMessageText={newMessageText}
      />
    </div>
  );
};

export default Messages;
