import React, { useEffect } from "react";
import Profile from "./Profile";
import Axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAction, toggleFetchingAction } from "./../../../redux/profile-reducer";
import Preloader from './../../preloader/index';
import { withRouter } from "react-router-dom";
const ProfileContainer = ({ setUsersProfile, profileInfo, toggleFetching, isFetching, match }) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = 2;
    }
    toggleFetching(true)
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(
      (response) => {
        setUsersProfile(response.data);
        toggleFetching(false)
      }
    );
  }, [setUsersProfile, toggleFetching]);
  return isFetching ? <Preloader/> : <Profile profileInfo={profileInfo} />;
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsersProfile: (profile) => {
      dispatch(setUserProfileAction(profile))
    },
    toggleFetching: (isFetching) => {
      dispatch(toggleFetchingAction(isFetching));
    },
  };
};

const ComponentWithURLData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithURLData);
