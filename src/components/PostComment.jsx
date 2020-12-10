import React from "react";
import { UserContext } from "../contexts/User";

class PostComment extends React.Component {
  state = {
    username: `${this.context.loggedInUser}`,
    body: "",
    placeholder: "Add your comment here",
  };

  handleChange = (event) => {
    console.log(this.context.loggedInUser);
    const { value, name } = event.target;
    //using [name], we can use handleChange for other state properties
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { body, username } = this.state;
    const { postComment } = this.props;
    event.preventDefault();
    postComment({ username, body });
    event.target.reset();
  };

  render() {
    return (
      <section>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            name="body"
            placeholder={this.state.placeholder}
            required
            onChange={this.handleChange}
          />
          <button id="submit" type="submit">
            Post
          </button>
        </form>
      </section>
    );
  }
}

PostComment.contextType = UserContext;

export default PostComment;
