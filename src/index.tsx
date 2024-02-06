import './index.css'
import './assets/styles/fonts.css'
import './i18n'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  const errorRoot = document.createElement('div')
  document.body.appendChild(errorRoot)
  const root = ReactDOM.createRoot(errorRoot)
  root.render(<PageNotFound />)
}
