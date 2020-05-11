import React from "react";
import "./postitem.scss";

const PostItem = ({ title, content }) => {
  return (
    <div class="card border-success  mb-3 post-wrapper">
      <div class="card-header post-author">Author: You</div>
      <div class="card-body">
        <h4 class="card-title post-title">{title}</h4>
        <p class="card-text post-body">{content}</p>
      </div>
    </div>
  );
};

export default PostItem;
