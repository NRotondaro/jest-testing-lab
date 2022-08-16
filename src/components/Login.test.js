import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './login/Login';

jest.mock('axios', () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: {
        id: 1,
        name: 'John',
      },
    }),
  },
}));

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

test('button should be rendered', () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  expect(buttonInputEl).toBeInTheDocument();
});

test('loading should not be rendered', () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  expect(buttonInputEl).not.toHaveTextContent(/please wait/i);
});

test('username input should be empty', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe('');
});

test('password input should be empty', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe('');
});

test('button should be disabled', () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  expect(buttonInputEl).toBeDisabled();
});

test('error message should not be disabled', () => {
  render(<Login />);
  const errorEl = screen.getByTestId('error');
  expect(errorEl).not.toBeVisible();
});

test('username input should change', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test('password input should change', () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test('button should not be disabled when inputs exist', () => {
  render(<Login />);
  const buttonElement = screen.getByRole('button');
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonElement).not.toBeDisabled();
});

test('loading should be rendered when click', () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonInputEl);

  expect(buttonInputEl).toHaveTextContent(/please wait/i);
});

test('loading should not be rendered after fetching', async () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonInputEl);

  await waitFor(() => {
    expect(buttonInputEl).not.toHaveTextContent(/please wait/i);
  });
});

test('user should be rendered after fetching', async () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole('button');
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonInputEl);

  const userItem = await screen.findByText('John');

  expect(userItem).toBeInTheDocument();
});
