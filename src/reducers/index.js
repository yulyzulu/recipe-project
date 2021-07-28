const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_RECIPE':
      return {
        ...state,
        myFavoriteRecipes: [...state.myFavoriteRecipes, action.payload],
      }
    case 'DELETE_FAVORITE_RECIPE':
      console.log('reducer', action.recipeId)
      return {
        ...state,
        myFavoriteRecipes: state.myFavoriteRecipes.filter(item => item.id !== action.recipeId),
      }
    default:
      return state;
  }
};

export default reducer;