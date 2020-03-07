import React from 'react';
import classes from './MyPosts.module.scss';
import Post from '../Post';

 const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
            new post
          </div>
          <Post/>
        </div>
    )
}

export default MyPosts;
