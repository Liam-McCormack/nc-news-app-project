import React from "react";
import { getComments, sendComment } from "../api";
import CommentCard from "./CommentCard";
import ReactLoading from "react-loading";
import CommentAdder from "./PostComment";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Delete from "./Delete";

class CommentSection extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    addComment: false,
  };

  componentDidMount() {
    const id = this.props.article_id;
    getComments(id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  postComment = (commentObj) => {
    const id = this.props.article_id;
    sendComment(id, commentObj).then((newComment) => {
      this.setState((currentState) => {
        return {
          comments: [newComment, ...currentState.comments],
        };
      });
    });
  };

  addComment = () => {
    if (this.state.addComment) this.setState({ addComment: false });
    else this.setState({ addComment: true });
  };

  render() {
    const { comments, isLoading } = this.state;
    const { loggedInUser } = this.context;
    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <section>
          {this.state.addComment ? (
            <button onClick={this.addComment}>Stop Commenting</button>
          ) : (
            <button onClick={this.addComment}>Add Comment</button>
          )}

          {this.state.addComment ? (
            <CommentAdder postComment={this.postComment} />
          ) : null}

          <ul className="list">
            {comments.map((comment) => {
              return (
                <>
                  <CommentCard key={comment.comment_id} {...comment} />
                  {/* <Delete
                    comment_id={comment.comment_id}
                    article_id={this.props.article_id}
                    deleteOnClick={this.deleteOnClick}
                  /> */}
                </>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}

CommentSection.contextType = UserContext;

export default CommentSection;
