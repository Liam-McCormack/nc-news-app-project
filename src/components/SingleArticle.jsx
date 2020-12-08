import React from "react";
import { getSingleArticle } from "../api";
import ReactLoading from "react-loading";

class SingleArticle extends React.Component {
  state = {
    article: {
      author: "cooljmessy",
      title: "Express.js: A Server-Side JavaScript Framework",
      article_id: 8,
      body:
        "You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.",
      topic: "coding",
      created_at: "2016-06-30T06:59:39.654Z",
      votes: 0,
      comment_count: 7,
    },
    isLoading: true,
  };

  //put the data from api in the state, helps us build up UI before request
  //Don't have to keep checking console.log(), remove placeholder once we're ready
  //fetch the data from api for single article

  componentDidMount() {
    const id = this.props.article_id;
    getSingleArticle(id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    //404 - not found
    //display "article not found" redirect to games list to keep users

    //const {article} = this.state
    const { article, isLoading } = this.state;

    if (isLoading) {
      return <ReactLoading type={"bars"} color={"grey"} />;
    } else {
      return (
        <section>
          {/* <p>Hello article {this.props.article_id}</p> */}
          <h2>{article.title}</h2>
          <p>
            by {article.author} in '{article.topic.toUpperCase()}'
          </p>
          <br></br>
          <p>{article.body}</p>
        </section>
      );
    }
  }
}

export default SingleArticle;
