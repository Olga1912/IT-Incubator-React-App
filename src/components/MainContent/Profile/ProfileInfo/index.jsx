import React from "react";
import defaultUserAvatar from "../../../../assets/images/avatar-placeholder.png";
import "./profileinfo.scss";

const ProfileInfo = ({ info }) => {
  const { aboutMe, fullName, lookingForAJob, photos } = info;
  let imgSrc = photos && photos.large ? photos.large : defaultUserAvatar
  return (
    <div className="personal-info">
      <div className="card border-success">
        <div className="card-header">Personal information</div>
        <div className="card-body personal-details-wrapper">
          <div className="personal-details">
            <img
              className="user-avatar"
              src={imgSrc}
              alt={fullName}
            />
            <h3 className="card-title name-wrapper">{fullName}</h3>
          </div>
          <div className="card-text description text-primary">
            <h3 className="card-title">Summary</h3>
            <h5>{aboutMe}</h5>
            <p>{lookingForAJob ? "Looking for a job" : "Have a job"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
