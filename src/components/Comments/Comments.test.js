import { render, fireEvent, cleanup } from '@testing-library/react';
import Comments from './Comments';
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

describe("Comments Component", () => {
  test("Check if comments component exist", () => {
    const commentsElement = renderComponentWithRedux(<Comments />, initialState);
    expect(commentsElement).toBeTruthy();
  });

  test("Check input comment", () => {
    const { getByLabelText } = renderComponentWithRedux(<Comments />, initialState);
    const input = getByLabelText('comment');
    fireEvent.change(input, { target: { value: "Add onions"}});
    expect(input.value).toBe("Add onions");
  })
});