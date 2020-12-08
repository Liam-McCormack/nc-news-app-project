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
    getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <ReactLoading type={"bars"} color={"grey"} />;
    } else {
      return (
        <section>
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
