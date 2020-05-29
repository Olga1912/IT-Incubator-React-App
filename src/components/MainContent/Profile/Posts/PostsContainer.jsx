import React from "react";
import Posts from "./Posts";
import {
  createPostAction,
  createTitleChangeAction,
  createTextChangeAction,
} from "../../../../redux/profile-reducer";

const PostsContainer = ({ state, dispatch }) => {
  const addNewPost = () => {
    dispatch(createPostAction());
  };

  const updatePostTitle = (event) => {
    dispatch(createTitleChangeAction(event.target.value));
  };

  const updatePostText = (event) => {
    dispatch(createTextChangeAction(event.target.value));
  };

  return (
    <Posts
      posts={state.posts}
      newPostTitle={state.newPostTitle}
      newPostText={state.newPostText}
      addNewPost={addNewPost}
      updatePostTitle={updatePostTitle}
      updatePostText={updatePostText}
    />
  );
};

export default PostsContainer;
