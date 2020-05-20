import React from "react";
import "./posts.scss";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

const Posts = ({posts}) => {
  return (
    <div className="posts-wrapper">
      <h2>My posts</h2>
      <NewPost />
      {posts.map((post) => {
        return (
          <PostItem key={post.id} title={post.title} content={post.body} />
        );
      })}
    </div>
  );
};

export default Posts;
