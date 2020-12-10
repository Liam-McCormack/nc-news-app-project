import React from "react";

class PostComment extends React.Component {
  state = {
    comment: {},
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    //using [name], we can use handleChange for other state properties
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    const { addComment } = this.props;
    event.preventDefault();
    // addComment({comment, username}) //from comment list comp, inside it passes the post api request
  };

  render() {
    return (
      <section>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          {/* <input type="text" name="name" placeholder="Your Name" required /> */}
          <textarea
            name="comment"
            placeholder="Add your comment here"
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

export default PostComment;
