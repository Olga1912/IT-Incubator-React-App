import React from "react";
import "./posts.scss";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

const Posts = ({
  posts,
  dispatch,
  newPostTitle,
  newPostText
}) => {
  const readyPosts = posts.map((post) => {
    return <PostItem key={post.id} title={post.title} content={post.body} />;
  });
  return (
    <div className="posts-wrapper">
      <h2>My posts</h2>
      <NewPost
      newPostTitle = {newPostTitle}
      newPostText = {newPostText}
        dispatch = {dispatch}
      />
      <div className="ready-posts">{readyPosts}</div>
    </div>
  );
};

export default Posts;
