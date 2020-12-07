import React from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

class Articles extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    getArticles().then((articles) => {
      console.log(articles);
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <section>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.title} {...article} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Articles;
