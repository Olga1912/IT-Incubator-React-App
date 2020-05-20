import React from "react";
import "./postitem.scss";

const PostItem = ({ title, content }) => {
  return (
    <div className="card border-success  mb-3 post-wrapper">
      <div className="card-header post-author">Author: You</div>
      <div className="card-body">
        <h4 className="card-title post-title">{title}</h4>
        <p className="card-text post-body">{content}</p>
      </div>
    </div>
  );
};

export default PostItem;
