import React from 'react';
import './App.scss';


function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="logo image"/>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div>
          <img src="https://sky-wall.ru/uploads/source/2014/12/preview/a867fe1ce6706a9fbfd45bc4267e9351.jpg" alt="default content image"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
