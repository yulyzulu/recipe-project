import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import Recipe from './Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = '6b378965';
  const APP_KEY = "3674a68533dfe028be0f8b79e1195cf2";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=16`;

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const result = await Axios.get(url);
    console.log(result.data.hits);
    setRecipes(result.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <main>
      <Navbar />
      <section className="search-section">
        <h2>Recipes</h2>
        <p>Write the main ingredient or ingredients of the recipe you want</p>
        <form className="search-form" onSubmit={getQuery} >
          <input className="search-bar" type="text" aria-label="recipe" value={search} placeholder="Write the main ingredient or ingredients of the recipe" onChange={updateSearch} aria-required="true" required></input>
          <button className="search-button" type="submit">Search</button>
        </form>
        <ul className="row">
            {
              recipes.map((recipe) => (
                <li className="col-3">
                  <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} />
              </li>
              ))
            }
        </ul>

      </section>
    </main>
  );
};

export default Recipes;
