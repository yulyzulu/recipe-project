import { render, cleanup } from '@testing-library/react';
import FavoriteRecipes from './FavoriteRecipes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

afterEach(cleanup);
// const initialState = {
//   myFavoriteRecipes: [
//     {
//       title: 'Rice',
//       image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
//       ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
//       url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
//       comment: true,
//       comments: [],
//     },
//     {
//       title: 'Rice',
//       image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
//       ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
//       url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
//       comment: true,
//       comments: [],
//     }
//   ]
// };

const renderComponentWithRedux = (component,
  { initialState, store = createStore(reducer, initialState)} = {} ) => {
    return {
      ...render (
      <Provider store={store}>
        {component}
      </Provider>
    )};
};

describe("Test the Favorite Recipes Component", () => {
  test("Check the header text is correct", () => {
    const store = createStore(() => ({myFavoriteRecipes: [
      { id: 0,
        recipeInfo: {
          title: 'Rice',
          image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
          ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
          url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
          comment: true,
          comments: [],
        }
      },
      { id: 1,
        recipeInfo: {
          title: 'Scrambled Eggs',
          image: 'https://www.edamam.com/web-img/4fa/4fa3dddccc53543288c74af776e13ef0.jpg',
          ingredients: ['4 tablespoons butter', '5 eggs', '1/4 tablespoons salt', '1/8 tablespoon freshly ground pepper', '2 tablespoons water'],
          url: 'https://www.epicurious.com/recipes/food/views/scrambled-eggs-40038',
          comment: true,
          comments: [],
        }
      },
    ]}));
    const { getByTestId } = renderComponentWithRedux(<FavoriteRecipes />, { store });
    expect(getByTestId('header-recipes').textContent).toBe('My favorite recipes');
  });
});