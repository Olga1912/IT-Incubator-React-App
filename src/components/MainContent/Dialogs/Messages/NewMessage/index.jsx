import React from "react";
import "./newmessage.scss";
import {
  createMessageTextChangeHandlerAction,
  createMessageHandlerAction,
} from "../../../../../redux/state";

const NewMessage = ({ dispatch, newMessageText }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onMessageChange = (event) => {
    dispatch(createMessageTextChangeHandlerAction(event.target.value));
  };

  const onCreateNewMessage = () => {
    dispatch(createMessageHandlerAction());
  };
  return (
    <div className="post-input-wrapper">
      <form action="" className="post-form" onSubmit={formSubmitHandler}>
        <fieldset>
          <div className="form-group new-message-wrapper">
            <input
              value={newMessageText}
              onChange={onMessageChange}
              type="text"
              className="form-control-plaintext"
              id="newMessage"
            />
          </div>
          <button
            id="submit-btn"
            onClick={onCreateNewMessage}
            className="btn btn-outline-success"
          >
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewMessage;
