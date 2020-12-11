import React from "react";
import { Link } from "@reach/router";

// import Delete from "./Delete";

const ArticleCard = (props) => {
  const article = props;

  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <div className="article-details">
        <p>
          Topic:{" "}
          <Link to={`/topics/${article.topic}`}>
            {article.topic.toUpperCase()}
          </Link>
        </p>
        <p>
          Author: <Link to={`/users/${article.author}`}>{article.author}</Link>
        </p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
      {/* {loggedInUser === article.author && (
        <Delete article_id={article.article_id} />
      )} */}
    </div>
  );
};

export default ArticleCard;
