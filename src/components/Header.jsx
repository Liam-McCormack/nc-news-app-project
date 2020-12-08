import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="header-container ">
      <Link to="/" className="header-link">
        <h1>NORTHCODERS NEWS</h1>
      </Link>
    </div>
  );
};

export default Header;
