import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalMenu from './GlobalMenu';

test('renders global menu', () => {
  render(<GlobalMenu />);

  // Should have All watches menu item
  expect(screen.getByText(/All watches/i)).toBeInTheDocument();
  // Should have All watches menu item
  expect(screen.getByText(/Accessories/i)).toBeInTheDocument();
  // Should have All watches menu item
  expect(screen.getByText(/Watch straps/i)).toBeInTheDocument();
  // Should have All watches menu item
  expect(screen.getByText(/Gift cards/i)).toBeInTheDocument();
  // Should have All watches menu item
  expect(screen.getByText(/Store locations/i)).toBeInTheDocument();
});
