import React from "react";
import { getSingleUser } from "../api";
import ReactLoading from "react-loading";

class UserProfile extends React.Component {
  state = {
    user: {
      username: "tickle122",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
      name: "Tom Tickle",
    },
    isLoading: true,
  };

  componentDidMount() {
    const username = this.props.username;
    getSingleUser(username).then((user) => {
      this.setState({ user, isLoading: false });
    });
  }

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <div>
          <p>Avatar:</p>
          <img src={user.avatar_url} className="user-avatar" />
          <h2>Username: {user.username}</h2>
          <p>Name: {user.name}</p>
        </div>
      );
    }
  }
}

export default UserProfile;
