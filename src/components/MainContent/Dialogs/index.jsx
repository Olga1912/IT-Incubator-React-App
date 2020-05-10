import React from "react";
import "./dialogs.scss";
import { useState, useEffect } from "react";
import Users from "./Users";
import Messages from "./Messages";

const Dialogs = () => {

  const [users, setUsers] = useState([]);
  const messages = [
    { id: 1, title: "Hello!" },
    { id: 2, title: "How are you?" },
    { id: 3, title: "Guys and I are going to the BAR tonight. R U with us?" },
  ];
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((object) => setUsers([...object.results]));
  }, []);

  return (
    <div className="dialogs-wrapper">
      <Users users={users} />
      <Messages messages={messages} />
    </div>
  );
};

export default Dialogs;
