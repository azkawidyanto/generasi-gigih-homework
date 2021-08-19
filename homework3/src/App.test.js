import { render, screen} from '@testing-library/react';
import App from './App';

import React from 'react'
import store from './store'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(  
  <Provider store={store}>
      <App />
  </Provider>);
  const linkElement = screen.getByText(/Search/i);
  // const element = screen.getByTestId('custom-element')
  expect(linkElement).toBeInTheDocument();
  // expect(element).toBeInTheDocument();
});

