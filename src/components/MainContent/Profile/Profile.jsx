import React from "react";
import "./profile.scss";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo";
const Profile = ({ profileInfo }) => {
  return (
    <div>
      <ProfileInfo info={profileInfo} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
