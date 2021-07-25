import React from 'react';
import Navbar from './Navbar';

const FavoriteRecipes = () => {
  return (
    <main>
      <Navbar />
        <section className="favorite-recipes-section">
          <h2>My favorite recipes</h2>
        </section>
    </main>
    );
};

export default FavoriteRecipes;
