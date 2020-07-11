import React from "react";
import "./maincontent.scss";
import Dialogs from "./Dialogs";
import Music from "./Music";
import News from "./News";
import ProfileContainer from "./Profile/ProfileContainer";
import Settings from "./Settings";
import UsersContainer from "./Users/UsersContainer";
import { Route } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="content">
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );
};

export default MainContent;
