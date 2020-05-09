import React from "react";
import './profile.scss';
import Posts from './Posts';
const Profile = () => {
  return (
    <div className="content"> 
    <div>Ava + description</div>
    <Posts/>
    </div>
  );
};

export default Profile;

