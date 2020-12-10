import React from "react";
import { Link } from "@reach/router";

const TopicCard = (props) => {
  const topic = props;
  return (
    <div className="topicCard">
      <Link to={`/topics/${topic.slug}`}>
        <h2>{topic.slug.toUpperCase()}</h2>
      </Link>
      <p>{topic.description}</p>
    </div>
  );
};

export default TopicCard;
