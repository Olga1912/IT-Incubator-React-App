import React from "react";
import "./newpost.scss";

const NewPost = ({ dispatch, newPostTitle, newPostText }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  const postHandler = () => {
    dispatch({ type: "add-post" });
  };

  const titleChangeHandler = (event) => {
    dispatch({ type: "set-post-title", title: event.target.value });
  };

  const textChangeHandler = (event) => {
    dispatch({ type: "set-post-text", text: event.target.value });
  };

  return (
    <div className="post-input-wrapper">
      <form action="" className="post-form" onSubmit={formSubmitHandler}>
        <fieldset>
          <legend>What's new for today?</legend>
          <div className="form-group title-wrapper">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control-plaintext"
              value={newPostTitle}
              onChange={titleChangeHandler}
              id="title"
            />
          </div>
          <div className="form-group content-wrapper">
            <label htmlFor="content">Body</label>
            <textarea
              value={newPostText}
              onChange={textChangeHandler}
              className="form-control"
              id="content"
            ></textarea>
          </div>
          <button
            onClick={postHandler}
            id="submit-btn"
            className="btn btn-outline-success"
          >
            Post
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewPost;
