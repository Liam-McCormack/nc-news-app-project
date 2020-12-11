import React from "react";
import { getArticles, deleteArticle } from "../api";
import Delete from "./Delete";
import ArticleCard from "./ArticleCard";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

import ReactLoading from "react-loading";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    const topic = this.props.topic;
    getArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  // componentDidUpdate() for deletion?

  deleteOnClick = (article_id) => {
    deleteArticle(article_id)
      // .then(alert("Your article has been deleted!"))
      .catch((error) => {
        console.dir(error);
      });
  };

  render() {
    const { articles, isLoading } = this.state;
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
          {this.props.topic ? (
            <h2>All Articles in {this.props.topic.toUpperCase()}:</h2>
          ) : (
            <h2>All Articles:</h2>
          )}
          <ul className="list">
            {articles.map((article) => {
              return (
                <>
                  <ArticleCard key={article.article_id} {...article} />
                  {loggedInUser === article.author && (
                    <Delete
                      article_id={article.article_id}
                      deleteOnClick={this.deleteOnClick}
                    />
                  )}
                </>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}

Articles.contextType = UserContext;

export default Articles;
