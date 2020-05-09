import React from "react";
import "./posts.scss";
import PostItem from "./PostItem";

const Posts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <PostItem/>
    </div>
  );
};

export default Posts;
