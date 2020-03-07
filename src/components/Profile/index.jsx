import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts';

 const Profile = () => {
    return (
        <div className={classes.content}>
        <div>
          <img src="https://sky-wall.ru/uploads/source/2014/12/preview/a867fe1ce6706a9fbfd45bc4267e9351.jpg" alt="default content"/>
        </div>
        <div>
          ava + description
        </div>
          <MyPosts/>
        </div>
    )
}

export default Profile;
