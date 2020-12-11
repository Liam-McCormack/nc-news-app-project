import React from "react";

const Delete = (props) => {
  const { article_id, deleteOnClick, comment_id } = props;

  //   const deleteOnClick = () => {
  //     console.log(article_id);
  //     deleteArticle(article_id).then((data) => {
  //       console.log(data);
  //     });
  //   };

  return (
    <div>
      <button onClick={() => deleteOnClick(article_id)}>
        Delete Your Article
      </button>
    </div>
  );
};

export default Delete;
