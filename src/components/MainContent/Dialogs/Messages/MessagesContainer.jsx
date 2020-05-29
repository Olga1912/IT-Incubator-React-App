import React from "react";
import Messages from "./Messages";
import {
  updateMessageTextAction,
  sendMessageAction,
} from "../../../../redux/dialogs-reducer";

const MessagesContainer = ({ state, dispatch }) => {
  const updateMessageText = (event) => {
    dispatch(updateMessageTextAction(event.target.value));
  };

  const sendMessage = () => {
    dispatch(sendMessageAction());
  };
  return (
    <Messages
      messages={state.messages}
      newMessageText={state.newMessageText}
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}
    />
  );
};

export default MessagesContainer;
