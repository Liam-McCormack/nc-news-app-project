import React from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import ReactLoading from "react-loading";
import { getSingleUser } from "../api";

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    getUsers().then((users) => {
      this.setState({ users, isLoading: false });
    });
  }

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <section>
          <button>Create User</button>
          <ul className="user-list">
            {users.map((user) => {
              return <UserCard key={user.username} {...user} />;
            })}
          </ul>
        </section>
      );
    }
  }
}

export default Users;
