import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app-container">
      <Header />
      <Navbar/>
      <MainContent/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
