import React from 'react';

const Recipe = ({ title, image}) => {
  return (
    <article className="card recipe-card" >
      <img className="card-img-top img-card" src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>

      </div>
    </article>
  );
}

export default Recipe;