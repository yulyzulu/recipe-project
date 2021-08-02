import { ADD_FAVORITE_RECIPE,
  ADD_COMMENT_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE } from '../types/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE_RECIPE:
      return {
        ...state,
        myFavoriteRecipes: [...state.myFavoriteRecipes, action.payload],
      }
    case DELETE_FAVORITE_RECIPE:
      console.log('reducer', action.recipeId)
      return {
        ...state,
        myFavoriteRecipes: state.myFavoriteRecipes.filter(item => item.id !== action.recipeId),
      }
    case ADD_COMMENT_FAVORITE_RECIPE:
      console.log('add comment', action.payload.id);
      return {
        ...state,
        myFavoriteRecipes: state.myFavoriteRecipes.map((recipe) => recipe.id === action.payload.id ?
        {...recipe, recipeInfo: {
          ...recipe.recipeInfo, comments: [...recipe.recipeInfo.comments, action.payload.comment]
         }}: recipe
        )
      }
    default:
      return state;
  }
};

export default reducer;