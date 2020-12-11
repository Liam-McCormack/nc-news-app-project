import React from "react";
import { getSingleArticle, patchArticleVotes } from "../api";
import ReactLoading from "react-loading";
import { Link } from "@reach/router";
import Comments from "./Comments";

class SingleArticle extends React.Component {
  state = {
    article: {
      author: "cooljmessy",
      title: "Express.js: A Server-Side JavaScript Framework",
      article_id: 8,
      body:
        "You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.",
      topic: "coding",
      created_at: "2016-06-30T06:59:39.654Z",
      votes: 0,
      comment_count: 7,
    },
    isLoading: true,
    showComments: false,
    addComment: false,
    inc_votes: 0,
    upvote: false,
    downvote: false,
  };

  componentDidMount() {
    const id = this.props.article_id;
    getSingleArticle(id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  componentDidUpdate() {
    //conditional
    const id = this.props.article_id;
    const votes = { inc_votes: this.state.inc_votes };
    patchArticleVotes(id, votes);
    //error handling
  }

  commentsOnClick = () => {
    if (this.state.showComments) this.setState({ showComments: false });
    else this.setState({ showComments: true });
  };

  voteOnClick = (value) => {
    if (value === "upvote") {
      this.setState((currentState) => {
        const newState = {
          ...currentState,
          article: { ...currentState.article },
        };
        newState.article.votes = currentState.article.votes + 1;
        newState.inc_votes = 1;
        newState.upvote = true;
        newState.downvote = false;
        return newState;
      });
    } else if (value === "downvote") {
      this.setState((currentState) => {
        const newState = {
          ...currentState,
          article: { ...currentState.article },
        };
        newState.article.votes = currentState.article.votes - 1;
        newState.inc_votes = -1;
        newState.downvote = true;
        newState.upvote = false;

        return newState;
      });
    }
  };

  render() {
    const { article, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <section className="single-article">
          <h2>{article.title}</h2>
          <p>
            by <Link to={`/users/${article.author}`}>{article.author}</Link> in
            '{article.topic.toUpperCase()}'
          </p>
          <br></br>
          <p>{article.body}</p>
          <p>Total votes: {article.votes}</p>

          <button
            onClick={() => this.voteOnClick("upvote")}
            disabled={this.state.upvote}
          >
            👍
          </button>
          <button
            onClick={() => this.voteOnClick("downvote")}
            disabled={this.state.downvote}
          >
            👎
          </button>
          <br></br>
          <br></br>

          {this.state.showComments ? (
            <button onClick={this.commentsOnClick} value="upvote">
              Hide Comments
            </button>
          ) : (
            <button onClick={this.commentsOnClick} value="downvote">
              Show Comments
            </button>
          )}

          {this.state.showComments ? (
            <Comments article_id={article.article_id} />
          ) : null}
        </section>
      );
    }
  }
}

export default SingleArticle;
