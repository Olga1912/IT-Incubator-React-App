import React from "react";
import "./newmessage.scss";

const NewMessage = ({ updateMessageText, sendMessage, newMessageText }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="post-input-wrapper">
      <form action="" className="post-form" onSubmit={formSubmitHandler}>
        <fieldset>
          <div className="form-group new-message-wrapper">
            <input
              value={newMessageText}
              onChange={updateMessageText}
              type="text"
              className="form-control-plaintext"
              id="newMessage"
            />
          </div>
          <button
            id="submit-btn"
            onClick={sendMessage}
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
