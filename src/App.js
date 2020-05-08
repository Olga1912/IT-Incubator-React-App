import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar/>
      <Profile/>
      <Footer />
    </div>
  );
}

export default App;
