import React from "react";
import "./users.scss";
import UserItem from "./UserItem";

const Users = ({
  users,
  toggleFollowing,
  setCurrentPage,
  pageSize,
  totalUsersAmount,
  currentPage,
}) => {
  const pagesAmount = Math.ceil(totalUsersAmount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }
  const readyPages = pages.map((page) => {
    const pageItemClasses = ["page-item"];
    if (currentPage === page) {
      pageItemClasses.push("active");
    }
    return (
      <li
        key={page}
        onClick={() => setCurrentPage(page)}
        className={pageItemClasses.join(" ")}
      >
        <button className="page-link">{page}</button>
      </li>
    );
  });
  const readyUsers = users.map((user) => (
    <UserItem
      key={user.id}
      id={user.id}
      avatar={user.photos.small}
      status={user.status}
      address={user.address}
      name={user.name}
      followed={user.followed}
      toggleFollowing={toggleFollowing}
    />
  ));
  return (
    <div>
      {readyUsers}
      <div className="pagination-wrapper">
        <ul className="pagination">{readyPages}</ul>
      </div>
    </div>
  );
};

export default Users;
