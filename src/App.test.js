import React from 'react';
import { render } from '@testing-library/react';
import HeaderLayout from './components/header';

//sample test to test header text exist
test('renders', () => {
  const { getByText } = render(<HeaderLayout />);
  const linkElement = getByText(/Tweetonomics/i);
  expect(linkElement).toBeInTheDocument();
});
