import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("This is the Home page when not logged in");
  expect(linkElement).toBeInTheDocument();
});
