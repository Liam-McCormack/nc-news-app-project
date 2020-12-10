import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    users: [
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump",
      "jessjelly",
    ],
    badAttempt: false,
  };

  handleChange = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { login } = this.props;
    const { users, username } = this.state;
    if (users.includes(username)) login(username);
    else {
      this.setState({ badAttempt: true });
    }
  };

  render() {
    const { user, login, logout } = this.props;

    return (
      <section className="login-container">
        <div className="login-body">
          <h1>NORTHCODERS NEWS</h1>
          <h2>
            Welcome to Northcoders News! The home of news that may or may not
            actually be news!
          </h2>
          {/* maybe change to a form to allow the Enter press? */}
          <br></br>
          <label for="username">Please login below:</label>
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Login</button>

          {this.state.badAttempt ? <p>Psst...try 'jessjelly'!</p> : null}
        </div>
      </section>
    );
  }
}

export default Login;
