import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import renderRoutes from './libs/renderRoutes'
import routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
