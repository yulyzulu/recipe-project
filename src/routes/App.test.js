import React from 'react';
import { render } from '@testing-library/react';
import App from '../routes/App';

describe('Test App Component', () => {
  test('Render App Component', () => {
    const appComponent = render(<App />);
    expect(appComponent).toBeTruthy();
  });
});