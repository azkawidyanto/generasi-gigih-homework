import { render, screen } from '@testing-library/react';
import App from './index';
import store from '../../store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(  
  <Provider store={store}>
      <App />
  </Provider>);

  const element = screen.getByTestId('custom-element')

  expect(element).toBeInTheDocument();
});
