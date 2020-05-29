const addMessage = "add-new-message";
const setMessageText = "set-message-text";

const initialState = {
  users: [
    {
      key: 1,
      id: 23,
      name: "Jane Smith",
      url: "Jane_Smith",
      avatar: "https://picsum.photos/id/237/200/300",
    },
    {
      key: 2,
      id: 245,
      name: "Brian Tool",
      url: "Brian_Tool",
      avatar: "https://picsum.photos/id/238/200/300",
    },
    {
      key: 3,
      id: 876,
      name: "Alexa Vang",
      url: "Alexa_Vang",
      avatar: "https://picsum.photos/id/239/200/300",
    },
  ],
  messages: [
    { id: 1, title: "Hello!" },
    { id: 2, title: "How are you?" },
    {
      id: 3,
      title: "Guys and I are going to the BAR tonight. R U with us?",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage:
      if (state.newMessageText) {
        const newMessage = {
          id: Date.now(),
          title: state.newMessageText,
        };
        state.messages.push(newMessage);
        state.newMessageText = "";
      }
      return state;
    case setMessageText:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

const sendMessageAction = () => {
  return { type: addMessage };
};

const updateMessageTextAction = (text) => {
  return { type: setMessageText, text: text };
};

export {
  dialogsReducer,
  updateMessageTextAction,
  sendMessageAction,
};
