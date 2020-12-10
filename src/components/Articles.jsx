import React from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

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

  render() {
    const { articles, isLoading } = this.state;
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
              return <ArticleCard key={article.article_id} {...article} />;
            })}
          </ul>
        </section>
      );
    }
  }
}

export default Articles;
