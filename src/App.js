import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="results-box">
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Topics path="/topics" />
          <Users path="/users" />
        </Router>
      </div>
    </div>
  );
}

export default App;
