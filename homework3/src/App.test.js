import { render, screen} from '@testing-library/react';
import App from './App';
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'


const server = setupServer(
  rest.get("https://api.spotify.com/v1/me", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        display_name: "azkawidyanto",
        images: [
          {
            url:
              "https://static.wikia.nocookie.net/disney/images/2/25/Profile_-_Vanellope_Von_schweetz.jpeg/revision/latest?cb=20190312023329"
          }
        ]
      })
    );
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders learn react link', async () => {
  render(  
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      
  </Provider>);
  server.use(
      rest.get('https://api.spotify.com/v1/me', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
  const linkElement = screen.getByText(/Search/i);
  // const element = screen.getByTestId('custom-element')
  expect(linkElement).toBeInTheDocument();
  // expect(element).toBeInTheDocument();
  userEvent.click(screen.getByText('Login'));
  await expect(screen.findByText('azkawidyanto'))
});
