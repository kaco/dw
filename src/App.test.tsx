import React from 'react';
import { render,  screen } from '@testing-library/react';
import App from './App';

test('renders App without errors', async () => {
  render(<App />);
  const wrapper = await screen.findByTestId('wrapper');
  expect(wrapper).toBeInTheDocument();
});
