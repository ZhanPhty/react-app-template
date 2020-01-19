import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// base样式
import '@/assets/styles/base.less'

const Loading = () => <div>loading...</div>

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <App />
  </React.Suspense>,
  document.getElementById('root') as HTMLElement
)
