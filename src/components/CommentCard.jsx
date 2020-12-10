import React from "react";

const CommentCard = (props) => {
  const comment = props;
  return (
    <div className="single-comment">
      <p>{comment.body}</p>
      <div className="comment-details">
        <p>Posted by: {comment.author}</p>
        <p>At: {comment.created_at}</p>
        <p>Votes: {comment.votes}</p>
        {/* upvote/downvote option next to votes? */}
        {/* colours for postive and negative vote counts */}
        <button>👍</button>
        <button>👎</button>
      </div>
    </div>
  );
};

export default CommentCard;
