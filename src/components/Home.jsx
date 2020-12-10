import React, { useContext } from "react";
import { UserContext } from "../contexts/User";

const Home = () => {
  const { loggedInUser, logout } = useContext(UserContext);
  return (
    <div>
      <h1>{`Welcome ${loggedInUser}`}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
