import DialogsUsers from "./DialogsUsers";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogUsersContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsUsers);

export default DialogUsersContainer;
