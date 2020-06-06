import Users from "./Users";
import { toggleFollowingAction } from "../../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollowing: (id) => {
      dispatch(toggleFollowingAction(id));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
