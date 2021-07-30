import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Recipe from '../Recipe/Recipe';
import { APP_ID, APP_KEY } from '../keys';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=16`;

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    //console.log(recipes);
    setResults('Loading...');
  };

  return (
    <main className="container">
      <section className="search-section">
        <h2 data-testid="header-recipes" >Recipes</h2>
        <p>Write the main ingredient or ingredients of the recipe you want</p>
        <form className="search-form" onSubmit={getQuery} >
          <input
            className="search-bar"
            type="text"
            aria-label="recipe"
            value={search}
            data-testid="search-bar"
            onChange={updateSearch}
            aria-required="true"
            required></input>
          <button className="search-button" type="submit" data-testid="search-button" >Search</button>
        </form>
        {recipes && recipes.length > 0 ?
          <ul className="row list-recipes">
            { recipes.map((recipe, index) => (
                <li className="col-3 item-recipe" key={recipe.recipe.url}>
                  < Recipe
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    url={recipe.recipe.url}
                  />
              </li>
              ))
            }
          </ul> : <span className="loading">{results}</span>
          }

      </section>
    </main>
  );
};

export default Recipes;