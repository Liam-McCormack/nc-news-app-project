import React from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../api";
import ReactLoading from "react-loading";

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
    if (isLoading) {
      return (
        <div className="loading">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      );
    } else {
      return (
        <section>
          <p>Please select a topic:</p>
          <ul className="list">
            {topics.map((topic) => {
              return <TopicCard key={topic.id} {...topic} />;
            })}
          </ul>
        </section>
      );
    }
  }
}

export default Topics;
