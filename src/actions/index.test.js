import { ADD_FAVORITE_RECIPE,
  ADD_COMMENT_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE } from '../types/actionTypes';
import { addFavoriteRecipe, deleteFavoriteRecipe, addCommentFavoriteRecipe } from './index';

describe('Actions test', () => {
  test('Add favorite recipe test', () => {
    const recipeInfo = {
      title: 'Rice',
      image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
      ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
      url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
      comment: true,
      comments: [],
    };

    const expectedAction = {
      type: ADD_FAVORITE_RECIPE,
      payload: {
        id: 0,
        recipeInfo,
      }
    };
    expect(addFavoriteRecipe(recipeInfo)).toEqual(expectedAction);
  });

  test('Delete favorite recipe', () => {
    const expectedAction = {
      type: DELETE_FAVORITE_RECIPE,
      recipeId: 1
    };
    expect(deleteFavoriteRecipe(1)).toEqual(expectedAction);
  });

  test('Add comment to favorite recipe', () => {
    const recipeInfo = {
      id: 1,
      comments: [],
      comment:'Add onions'
    };

    const expectedAction = {
      type: ADD_COMMENT_FAVORITE_RECIPE,
      payload: recipeInfo
    };
    expect(addCommentFavoriteRecipe(recipeInfo)).toEqual(expectedAction);
  });
});