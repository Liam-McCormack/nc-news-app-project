import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* <Router>
        <Home />
        <List />
      </Router> */}
      <div className="results-box"></div>
    </div>
  );
}

export default App;
