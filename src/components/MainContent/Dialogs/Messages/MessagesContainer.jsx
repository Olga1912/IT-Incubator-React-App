import Messages from "./Messages";
import {
  updateMessageTextAction,
  sendMessageAction,
} from "../../../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAction());
    },
    updateMessageText: (event) => {
      dispatch(updateMessageTextAction(event.target.value));
    },
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
