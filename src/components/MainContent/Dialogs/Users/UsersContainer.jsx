import Users from "./Users";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
