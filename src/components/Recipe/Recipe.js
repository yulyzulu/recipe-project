import React, { useState } from 'react';
import ModalRecipe from '../ModalRecipe/ModalRecipe';

const Recipe = ({ id, title, image, ingredients, url, comment, comments }) => {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <button className="card recipe-card" data-testid="card" onClick={() => handleShowModal()} >
        <img className="card-img-top img-card" src={image} alt={`${title}-Recipe`} />
        <div className="card-body">
          <h3>{title}</h3>
        </div>
      </button>
      <ModalRecipe
        id={id}
        title={title}
        image={image}
        ingredients={ingredients}
        url={url}
        comment={comment}
        comments={comments}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Recipe;