import React from "react";
import { getArticlesByTopic, getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ReactLoading from "react-loading";

class ArticlesByTopics extends React.Component {
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

export default ArticlesByTopics;
