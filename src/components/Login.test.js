import { render, screen } from '@testing-library/react';
import Login from './login/Login';

test('username input should be rendered', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test('button input should be rendered', () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  expect(buttonInputEl).toBeInTheDocument();
});
