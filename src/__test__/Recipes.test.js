import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from '../components/Recipes';

test('Render h2 element', () => {
  render(<Recipes />);
  expect(screen.getByText('Recipes')).toBeInTheDocument();

});
