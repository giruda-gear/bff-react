import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql'
import App from './App'
import PracticePage from './pages/Practice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/practice',
    element: <PracticePage />,
  },
])

const client = new Client({
  url: 'http://localhost:3333/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
