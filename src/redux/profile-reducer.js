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
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostTitle: "",
          newPostText: "",
        };
      }
      return state;
    case setPostTitle:
      return {
        ...state,
        newPostTitle: action.title,
      };
    case setPostText:
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
  }
};

const createPostAction = () => {
  return { type: addPost };
};

const createTitleChangeAction = (title) => {
  return { type: setPostTitle, title: title };
};

const createTextChangeAction = (text) => {
  return { type: setPostText, text: text };
};

export {
  profileReducer,
  createPostAction,
  createTitleChangeAction,
  createTextChangeAction,
};
