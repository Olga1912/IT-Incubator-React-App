import React from "react";
import "./profile.scss";
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
const Profile = ({ state, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts
        newPostTitle={state.newPostTitle}
        newPostText={state.newPostText}
        dispatch={dispatch}
        posts={state.posts}
      />
    </div>
  );
};

export default Profile;
