import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  const article = props;
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>{article.topic.toUpperCase()}</p>
      <p>{article.author}</p>
    </div>
  );
};

export default ArticleCard;
