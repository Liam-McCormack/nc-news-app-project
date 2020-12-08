import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main-body">
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Topics path="/topics" />
          <Users path="/users" />
          <SingleArticle path="/articles/:article_id" />
          {/* <ErrorMessage default errorMessage='Page not found! :('/> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
