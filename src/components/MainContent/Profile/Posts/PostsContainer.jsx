import Posts from "./Posts";
import {
  createPostAction,
  createTitleChangeAction,
  createTextChangeAction,
} from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostTitle: state.profilePage.newPostTitle,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(createPostAction());
    },
    updatePostTitle: (event) => {
      dispatch(createTitleChangeAction(event.target.value));
    },
    updatePostText: (event) => {
      dispatch(createTextChangeAction(event.target.value));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
