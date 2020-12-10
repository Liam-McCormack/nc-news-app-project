import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";
import UserProfile from "./components/UserProfile";
import PostComment from "./components/PostComment";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="main-body">
          <Router>
            <Home path="/" />
            <Login path="/login" />

            <Articles path="/articles" />
            <SingleArticle path="/articles/:article_id" />

            <Topics path="/topics" />
            <Articles path="/topics/:topic" />

            <Users path="/users" />
            <UserProfile path="/users/:username" />
            {/* <ErrorMessage default errorMessage='Page not found! :('/> */}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
