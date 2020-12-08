import React from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../api";

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    return (
      <section>
        <ul className="list">
          {topics.map((topic) => {
            return <TopicCard key={topic.id} {...topic} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Topics;
