import { render, cleanup } from '@testing-library/react';
import Modal from './ModalRecipe';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';


afterEach(cleanup);

const initialState = {
  myFavoriteRecipes: []
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

describe("Modal Component", () => {
  test("Check if Modal component exist", () => {
    const modalElement = renderComponentWithRedux(<Modal />, initialState);
    expect(modalElement).toBeTruthy();
  });

});