import React from 'react';
//import { connect } from 'react-redux';
// import { deleteFavoriteRecipe } from '../../actions';

const Comments = (props) => {
  const { id } =  props;

  const addCommentToRecipe = (e) => {
   console.log(id);
    console.log('comentario');
  //  deleteFavoriteRecipe(id);
  };

  return (
    <>
      <h4>Comments</h4>
      <input
        className="comment-input"
        type="texarea"
        placeholder="Write your comment about the recipe"
        />
      <button className="comment-button" onClick={addCommentToRecipe}>Add comment</button>
    </>
  );
};

// const mapDispatchToProps = {
//   deleteFavoriteRecipe,
// };
export default Comments;
//export default connect(null, mapDispatchToProps)(Comments);

