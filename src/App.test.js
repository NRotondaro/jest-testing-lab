import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCameWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns MidnightBlue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);

  // expect to background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton.textContent).toBe('Change to MediumVioletRed');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Checkbox change button color to gray on first click and change to MediumVioletRed on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: 'gray',
  });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: 'MediumVioletRed',
  });
});

test('Clicked disabled button has gray background and reverts to MidnightBlue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // change button to MidnightBlue
  fireEvent.click(button);

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: 'gray',
  });

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: 'MidnightBlue',
  });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
