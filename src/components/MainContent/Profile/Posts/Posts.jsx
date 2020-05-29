import React from "react";
import "./posts.scss";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

const Posts = ({
  posts,
  newPostTitle,
  newPostText,
  addNewPost,
  updatePostTitle,
  updatePostText,
}) => {
  const readyPosts = posts.map((post) => {
    return <PostItem key={post.id} title={post.title} content={post.body} />;
  });

  return (
    <div className="posts-wrapper">
      <h2>My posts</h2>
      <NewPost
        addNewPost={addNewPost}
        updatePostTitle={updatePostTitle}
        updatePostText={updatePostText}
        newPostTitle={newPostTitle}
        newPostText={newPostText}
      />
      <div className="ready-posts">{readyPosts}</div>
    </div>
  );
};

export default Posts;
