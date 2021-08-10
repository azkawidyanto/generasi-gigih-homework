// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

async function main() {

    if (window.location.pathname === '/') {
      window.location.pathname = '/'
      return
    }

    const { worker } = require('./mocks/browser')

    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })


  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

main()