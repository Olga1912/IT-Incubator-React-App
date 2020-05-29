import React from "react";
import "./newpost.scss";

const NewPost = ({
  addNewPost,
  updatePostTitle,
  updatePostText,
  newPostTitle,
  newPostText,
}) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
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
              onChange={updatePostTitle}
              id="title"
            />
          </div>
          <div className="form-group content-wrapper">
            <label htmlFor="content">Body</label>
            <textarea
              value={newPostText}
              onChange={updatePostText}
              className="form-control"
              id="content"
            ></textarea>
          </div>
          <button
            onClick={addNewPost}
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
