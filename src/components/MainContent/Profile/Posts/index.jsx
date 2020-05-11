import React from "react";
import "./posts.scss";
import PostItem from "./PostItem";
import { useState, useEffect } from "react";
import NewPost from "./NewPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((objects) => setPosts([...objects]));
  }, []);
  return (
    <div className="posts-wrapper">
      <h2>My posts</h2>
      <NewPost />
      {posts.map((post) => {
        console.log(post);
        return (
          <PostItem key={post.id} title={post.title} content={post.body} />
        );
      })}
    </div>
  );
};

export default Posts;
