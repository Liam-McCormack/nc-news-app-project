import React from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import ReactLoading from "react-loading";

class CommentSection extends React.Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const id = this.props.article_id;
    getComments(id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <section>
          <ul className="list">
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} {...comment} />;
            })}
          </ul>
        </section>
      );
    }
  }
}

export default CommentSection;
