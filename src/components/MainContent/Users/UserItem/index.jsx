import React from "react";
import "./users.scss";
import defaultUserAvatar from "./../../../../assets/images/avatar-placeholder.png";

const UserItem = ({
  id,
  address,
  avatar,
  name,
  status,
  followed,
  toggleFollowing,
}) => {
  const btnClasses = ["btn"];
  if (followed) {
    btnClasses.push("btn-outline-secondary");
  } else {
    btnClasses.push("btn-outline-success");
  }
  return (
    <div className="card border-secondary user-item-card">
      <div className="card-header user-item-card__header">User</div>
      <div className="card-body user-item-card__body">
        <img
          className="user-item-card__avatar"
          src={avatar || defaultUserAvatar}
          alt={name}
        />
        <div className="user-item-card__info">
          <h3 className="card-text user-name">{name}</h3>
          <p className="card-text user-address">
            Location: {address || "Unknown"}
          </p>
          <p className="card-text user-status">{status}</p>
        </div>
        <button
          id="toggleFollowBtn"
          className={btnClasses.join(" ")}
          onClick={() => toggleFollowing(id)}
        >
          {followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
