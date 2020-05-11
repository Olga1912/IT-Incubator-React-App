import React from "react";
import "./profile.scss";
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <Posts />
    </div>
  );
};

export default Profile;
