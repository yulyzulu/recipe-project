import { render, fireEvent } from '@testing-library/react';
import Recipes from './Recipes';

describe("Test the Recipes Component", () => {
  test("Check the header text is correct", () => {
    const { getByTestId } = render(<Recipes />);
    expect(getByTestId('header-recipes').textContent).toBe('Recipes');
  });
});

describe("Test the search button", () => {
  test("Validate the search button exist", () => {
    const { getByTestId, getByText } = render(<Recipes />);
    expect(getByTestId("search-button")).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
  });
});

describe("Test input in the search bar", () => {
  test("Validate the search bar exist", () => {
    const { getByTestId } = render(<Recipes />);
    expect(getByTestId("search-bar")).toBeTruthy();
  });

  test("Validate search and loading", () => {
    const { getByTestId } = render(<Recipes />);
    const input = getByTestId('search-bar');
    fireEvent.change(input, { target: { value: "chicken"}});
    expect(input.value).toBe("chicken");
    fireEvent.click(getByTestId('search-button'));
    expect(getByTestId('loading')).toBeTruthy();
  });
});
