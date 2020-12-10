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
// import PostComment from "./components/PostComment";
import Login from "./components/Login";
import { UserContext } from "./contexts/User";

class App extends React.Component {
  state = {
    loggedInUser: "",
  };

  logout = () => {
    this.setState({ loggedInUser: null });
  };

  login = (newUser) => {
    console.log("in login");
    this.setState({ loggedInUser: newUser });
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <UserContext.Provider
        value={{ loggedInUser, logout: this.logout, login: this.login }}
      >
        <div className="App">
          {loggedInUser ? (
            <>
              <Header />
              <Navbar />

              <div className="main-body">
                <Router>
                  <Home path="/" />

                  <Articles path="/articles" />
                  <SingleArticle path="/articles/:article_id" />

                  <Topics path="/topics" />
                  <Articles path="/topics/:topic" />

                  <Users path="/users" />
                  <UserProfile path="/users/:username" />
                  {/* <ErrorMessage default errorMessage='Page not found! :('/> */}
                </Router>
              </div>
            </>
          ) : (
            <>
              <div>
                <Login
                  user={this.state.loggedInUser}
                  login={this.login}
                  logout={this.logout}
                />
              </div>
            </>
          )}
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
