import React from "react";
import "./newpost.scss";

const NewPost = () => {
  return (
    <div className="post-input-wrapper">
      <form action="">
        <fieldset>
          <legend>What's new for today?</legend>
          <div className="form-group title-wrapper">
            <label for="title">Title</label>
            <input type="text" className="form-control-plaintext" id="title" />
          </div>
          <div className="form-group content-wrapper">
            <label for="content">Body</label>
            <textarea className="form-control" id="content"></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewPost;
