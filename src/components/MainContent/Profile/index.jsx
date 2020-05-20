import React from "react";
import "./profile.scss";
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
const Profile = ({state}) => {
  return (
    <div>
      <ProfileInfo/>
      <Posts posts={state.posts}/>
    </div>
  );
};

export default Profile;
