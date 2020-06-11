import Users from "./Users";
import {
  toggleFollowingAction,
  setUsersAction,
  setCurrentPageAction,
} from "../../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersAmount: state.usersPage.totalUsersAmount,
    currentPage: state.usersPage.currentPage,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
