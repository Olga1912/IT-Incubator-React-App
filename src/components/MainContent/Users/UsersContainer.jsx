import {
  toggleFollowingAction,
  setUsersAction,
  setCurrentPageAction,
  toggleFetchingAction
} from "../../../redux/users-reducer";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Axios from "axios";
import Users from "./Users";
import preloader from "./../../../assets/images/preloader.svg";
import "./users.scss";

const UsersContainer = ({
  users,
  toggleFollowing,
  setUsers,
  setCurrentPage,
  pageSize,
  totalUsersAmount,
  currentPage,
  isFetching,
  toggleFetching
}) => {
  useEffect(() => {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
    ).then((response) => {
      setUsers(response.data.items);
      toggleFetching()
    });
  }, [setUsers, currentPage, pageSize, toggleFetching]);

  if (isFetching) {
    return (
      <div className="preloader-wrapper"><img src={preloader} alt="preloader"/></div>
    )
  }

  return (
    <Users
      users={users}
      toggleFollowing={toggleFollowing}
      setCurrentPage={setCurrentPage}
      pageSize={pageSize}
      totalUsersAmount={totalUsersAmount}
      currentPage={currentPage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersAmount: state.usersPage.totalUsersAmount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollowing: (id) => {
      dispatch(toggleFollowingAction(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAction(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAction(page));
    },
    toggleFetching: () => {
      dispatch(toggleFetchingAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
