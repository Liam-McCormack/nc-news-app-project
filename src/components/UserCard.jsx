import React from "react";
import { Link } from "@reach/router";

const UserCard = (props) => {
  const user = props;
  return (
    <div className="userCard">
      <img src={user.avatar_url} className="user-avatar" />
      <Link to={`/users/${user.username}`}>
        <h2>{user.username}</h2>
      </Link>
    </div>
  );
};

export default UserCard;
