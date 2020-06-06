import React from "react";
import "./users.scss";

const UserItem = ({
  id,
  address,
  avatar,
  name,
  status,
  following,
  toggleFollowing,
}) => {
  const btnClasses = ["btn"];
  if (following) {
    btnClasses.push("btn-outline-secondary");
  } else {
    btnClasses.push("btn-outline-success");
  }
  return (
    <div className="card border-secondary user-item-card">
      <div className="card-header user-item-card__header">User</div>
      <div className="card-body user-item-card__body">
        <img className="user-item-card__avatar" src={avatar} alt={name} />
        <div className="user-item-card__info">
          <h3 className="card-text user-name">{name}</h3>
          <p className="card-text user-address">{address}</p>
          <p className="card-text user-status">{status}</p>
        </div>
        <button
          id="toggleFollowBtn"
          className={btnClasses.join(" ")}
          onClick={() => toggleFollowing(id)}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
