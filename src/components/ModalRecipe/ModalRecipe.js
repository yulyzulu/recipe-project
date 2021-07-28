import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { addFavoriteRecipe, deleteFavoriteRecipe } from '../../actions';
import Comments from '../Comments/Comments';

const ModalRecipe = (props) => {
  const { id, title, image, ingredients, url, comment, showModal, handleCloseModal } = props;

  const addRecipe = (e) => {
    //console.log(ingredients);
    props.addFavoriteRecipe({
      title,
      image,
      ingredients,
      url,
      comment: true,
      comments: [],
    });
    alert("Recipe added to favorites")
  };

  const deleteRecipe = (itemId) => {
    props.deleteFavoriteRecipe(itemId);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} animation={false} >
      <Modal.Header className="close-modal" closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="img-modal">
          <img src={image} alt={title} />
        </div>
        <h4>Ingredients</h4>
        <ul className="modal-recipe-list">
          { ingredients &&
            ingredients.map((ingredient, index) => (
              <li className="" key={index + title}>
                {ingredient.text}
              </li>
            ))
          }
        </ul>
        <h4>Recipe</h4>
        <a href={url} target="blank" >Visit the recipe website </a>
        {
          comment && <Comments />
        }

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal} >Close</Button>
        {
          comment ? <Button onClick={() => deleteRecipe(id)}>Delete Recipe</Button>:
          <Button onClick={addRecipe}>Add Favorites</Button>
        }
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
};

export default connect(null, mapDispatchToProps)(ModalRecipe);