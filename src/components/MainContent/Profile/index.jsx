import React from "react";
import "./profile.scss";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
