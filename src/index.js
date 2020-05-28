import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux-store";
import App from "./App";

const state = store.getState();

const render = (state) => {
  ReactDOM.render(
    <App dispatch={store.dispatch.bind(store)} state={state} />,
    document.getElementById("root")
  );
};
store.subscribe(() => {
  render(state);
});
render(state);
