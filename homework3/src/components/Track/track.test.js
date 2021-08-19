import { render, screen} from '@testing-library/react';
import Track from './track'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import store from '../../store'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import Data from './data'

test('renders learn react link', () => {

  render(  
    
  <Provider store={store}>
      <BrowserRouter>   
        <Track track={Data}/>
      </BrowserRouter>
 
  </Provider>);
  userEvent.click(screen.getByText('Select'))
  expect(screen.getByText('Deselect'))
});

