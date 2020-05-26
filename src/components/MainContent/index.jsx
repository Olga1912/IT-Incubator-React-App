import React from "react";
import "./maincontent.scss";
import Dialogs from "./Dialogs";
import Music from "./Music";
import News from "./News";
import Profile from "./Profile";
import Settings from "./Settings";
import { Route } from "react-router-dom";

const MainContent = ({ state, dispatch }) => {
  return (
    <div className="content">
      <Route
        path="/profile"
        render={() => <Profile state={state.profilePage} dispatch={dispatch} />}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs state={state.messagesPage} dispatch={dispatch} />
        )}
      />
      <Route path="/music" component={Music} />
      <Route path="/news" component={News} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default MainContent;
