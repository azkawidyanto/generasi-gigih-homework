import { render, screen, userEvent} from '@testing-library/react';
import App from './App';

import React from 'react'
import store from './store'
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(  
  <Provider store={store}>
      <App />
  </Provider>);
  const linkElement = screen.getByText(/Search/i);
  // const element = screen.getByTestId('custom-element')
  expect(linkElement).toBeInTheDocument();
  // expect(element).toBeInTheDocument();
  userEvent.click(screen.getByText('Search'))
  expect(screen.getByLabelText(' ')).toBeChecked()
});

