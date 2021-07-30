import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCommentFavoriteRecipe } from '../../actions';

const Comments = (props) => {
  const { id, comments } =  props;
  console.log(id, comments)

  const [newComment, setNewComment] = useState('');

  const inputComment = (e) => {
    setNewComment(e.target.value);
    //console.log(newComment);
  }

  const addCommentToRecipe = (e) => {
    console.log(id);
    console.log(newComment);
    props.addCommentFavoriteRecipe({
      id: id,
      comments: comments,
      comment: newComment,
    });
    setNewComment('');
  };

  return (
    <>
      <h4>Comments</h4>
      {
        comments ?
        <ul>
          {comments.map((comment) => (
            <li>{comment}</li>
          ))}
        </ul>: ""
      }
      <form onSubmit={addCommentToRecipe}>
        <input
          className="comment-input"
          type="texarea"
          placeholder="Write your comment about the recipe"
          value={newComment}
          onChange={inputComment}
          aria-label="comment"
          />
        <button className="comment-button" type="submit" onClick={addCommentToRecipe}>Add comment</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addCommentFavoriteRecipe,
};

export default connect(null, mapDispatchToProps)(Comments);

