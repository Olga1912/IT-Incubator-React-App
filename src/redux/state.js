let store = {
  _state: {
    messagesPage: {
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
    },
    profilePage: {
      posts: [
        { id: 1, title: "Once upon a time", body: "It was a long time ago..." },
        { id: 2, title: "Today I've had a dream", body: "It was a nightmare" },
      ],
      newPostTitle: "",
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("no observers added");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "add-post") {
      const { newPostTitle, newPostText } = this._state.profilePage;
      if (newPostTitle && newPostText) {
        const newPost = {
          id: Date.now(),
          title: newPostTitle,
          body: newPostText,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostTitle = '';
        this._state.profilePage.newPostText = '';
      }
      this._callSubscriber(this._state);
    } else if (action.type === "set-post-title") {
      this._state.profilePage.newPostTitle = action.title;
      this._callSubscriber(this._state);
    } else if (action.type === "set-post-text") {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
