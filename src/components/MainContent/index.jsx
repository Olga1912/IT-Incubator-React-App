import React from "react";
import "./maincontent.scss";
import Dialogs from "./Dialogs";
import Music from "./Music";
import News from "./News";
import Profile from "./Profile";
import Settings from "./Settings";
import UsersContainer from "./Users/UsersContainer";
import { Route } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="content">
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/music" component={Music} />
      <Route path="/news" component={News} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default MainContent;
