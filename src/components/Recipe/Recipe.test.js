import { render, fireEvent, cleanup } from '@testing-library/react';
import Recipe from './Recipe';
//import Modal from './Modal';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

afterEach(cleanup);

const initialState = {
  myFavoriteRecipes: [
    {
      title: 'Rice',
      image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
      ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
      url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
      comment: true,
      comments: [],
    },
    {
      title: 'Rice',
      image: 'https://www.edamam.com/web-img/b71/b716942f16e3e9490829f7da8dba509e.jpg',
      ingredients: ['1 cup long-grain white rice', '1 3/4 cup water', 'Pinch of salt', 'Glug of olive oil'],
      url: 'http://www.seriouseats.com/recipes/2008/04/essentials-how-to-cook-rice.html',
      comment: true,
      comments: [],
    }
  ]
};

const renderComponentWithRedux = (component,
  { initialState, store = createStore(reducer, initialState)} = {} ) => {
    return {
      ...render (
      <Provider store={store}>
        {component}
      </Provider>
    )};
};

describe("Recipe Component", () => {
  test("Check if recipe component exist", () => {
    const recipeElement = renderComponentWithRedux(<Recipe />, initialState);
    expect(recipeElement).toBeTruthy();
  });

  test("Validate clic open modal", () => {
    const { getByTestId } = renderComponentWithRedux(<Recipe />, initialState);
    fireEvent.click(getByTestId('card'));
    expect(getByTestId('my-modal')).toBeTruthy();
  });
});