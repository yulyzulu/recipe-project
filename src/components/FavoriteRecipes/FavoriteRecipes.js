import React from 'react';
import { connect } from 'react-redux';
import Recipe from '../Recipe/Recipe';
import './FavoriteRecipes.css';

const FavoriteRecipes = (props) => {

  const { myFavoriteRecipes } = props;
  console.log(myFavoriteRecipes);

  return (
    <main className="container main">
      <section className="favorite-recipes-section">
        <header>
          <h2
            className="header-favorite-recipes"
            data-testid="header-recipes"
            >My favorite recipes
          </h2>
        </header>
        { myFavoriteRecipes && myFavoriteRecipes.length > 0 ?
        <ul className="row list-recipes">
            {
              myFavoriteRecipes.map((recipe) => (
                <li className="col-sm-1 col-md-3 item-recipe" key={recipe.id} >
                  <Recipe
                    id={recipe.id}
                    title={recipe.recipeInfo.title}
                    image={recipe.recipeInfo.image}
                    ingredients={recipe.recipeInfo.ingredients}
                    url={recipe.recipeInfo.url}
                    comment={recipe.recipeInfo.comment}
                    comments={recipe.recipeInfo.comments}
                  />
              </li>
              ))
            }
        </ul> : <p className="favorite-text col-6 offset-3 ">At the moment you do not have favorite recipes, go to recipes and add the recipes that you love!</p>
        }
      </section>
    </main>
    );
};

const mapStateToProps = state => {
  return {
    myFavoriteRecipes: state.myFavoriteRecipes,
  };
};

export default connect(mapStateToProps, null)(FavoriteRecipes);
