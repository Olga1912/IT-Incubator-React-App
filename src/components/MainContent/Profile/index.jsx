import React from "react";
import "./profile.scss";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo";
const Profile = ({ state, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <PostsContainer
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
