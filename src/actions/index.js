let recipeId = 0;
export const addFavoriteRecipe = recipeInfo => ({
  type: 'ADD_FAVORITE_RECIPE',
  payload: {
    id: recipeId++,
    recipeInfo,
  }
});

export const addCommentFavoriteRecipe = (recipeInfo) => ({
  type: 'ADD_COMMENT_FAVORITE_RECIPE',
  payload: recipeInfo
});

export const deleteFavoriteRecipe = recipeId => ({
  type: 'DELETE_FAVORITE_RECIPE',
  recipeId,
});