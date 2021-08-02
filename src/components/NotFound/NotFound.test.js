import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';
import "@testing-library/jest-dom/extend-expect";

describe('Test Not Found Component', () => {
  test('Render Not Found Component', () => {
    const notFoundComponent = render(<NotFound />);
    expect(notFoundComponent).toBeTruthy();
  });
});