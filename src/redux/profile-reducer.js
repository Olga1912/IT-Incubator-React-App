const addPost = "add-post";
const setPostTitle = "set-post-title";
const setPostText = "set-post-text";

const initialState = {
  posts: [
    { id: 1, title: "Once upon a time", body: "It was a long time ago..." },
    { id: 2, title: "Today I've had a dream", body: "It was a nightmare" },
  ],
  newPostTitle: "",
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      if (state.newPostTitle && state.newPostText) {
        const newPost = {
          id: Date.now(),
          title: state.newPostTitle,
          body: state.newPostText,
        };
        state.posts.push(newPost);
        state.newPostTitle = "";
        state.newPostText = "";
      }
      return state;
    case setPostTitle:
      state.newPostTitle = action.title;
      return state;
    case setPostText:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

const createPostHandlerAction = () => {
  return { type: addPost };
};

const createTitleChangeHandlerAction = (title) => {
  return { type: setPostTitle, title: title };
};

const createTextChangeHandlerAction = (text) => {
  return { type: setPostText, text: text };
};

export {
  profileReducer,
  createPostHandlerAction,
  createTitleChangeHandlerAction,
  createTextChangeHandlerAction,
};
