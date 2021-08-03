import { ADD_FAVORITE_RECIPE,
  ADD_COMMENT_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE } from '../types/actionTypes';
import reducer from './index';


const initialState = {
  myFavoriteRecipes: []
};

describe('Test reducer Add', () => {
  test('Add Favorite Reducer', () => {
    const recipeInfo = {
      title: 'Rice',
      image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
      ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
      url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
      comment: true,
      comments: []
    };
    expect(reducer(initialState, { type: ADD_FAVORITE_RECIPE,
      payload: { id: 1, recipeInfo: recipeInfo }})).toEqual({ myFavoriteRecipes: [{id: 1, recipeInfo}]})
  });
});

describe('Test Delete recipe', () => {
  test('Delete recipe', () => {
    const store = {
      myFavoriteRecipes: [
        {
          id: 1,
          recipeInfo:
          {
            title: 'Rice',
            image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
            ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
            url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
            comment: true,
            comments: []
          }
        }
      ]
    };
    expect(reducer(store, { type: DELETE_FAVORITE_RECIPE, recipeId: 1})).toEqual({ myFavoriteRecipes: []})
  });
});


describe('Test add comment', () => {
  test('Add comment Favorite recipe', () => {
    const store = {
      myFavoriteRecipes: [
        {
          id: 1,
          recipeInfo:
          {
            title: 'Rice',
            image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
            ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
            url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
            comment: true,
            comments: []
          }
        }
      ]
    };
    expect(reducer(store, { type: ADD_COMMENT_FAVORITE_RECIPE,
      payload: { id: 1,
        comments: [],
        comment: 'Add onions',
      }})).toEqual({myFavoriteRecipes: [
        {
          id: 1,
          recipeInfo:
          {
            title: 'Rice',
            image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
            ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
            url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
            comment: true,
            comments: ['Add onions']
          }
        }
    ]});
  });
});