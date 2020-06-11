import React, { useEffect } from "react";
import "./users.scss";
import UserItem from "./UserItem";
import Axios from "axios";

const Users = ({
  users,
  toggleFollowing,
  setUsers,
  setCurrentPage,
  pageSize,
  totalUsersAmount,
  currentPage,
}) => {
  useEffect(() => {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
    ).then((response) => {
      setUsers(response.data.items);
    });
  }, [setUsers, currentPage, pageSize]);
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
