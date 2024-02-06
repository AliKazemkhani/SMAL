import './assets/styles/App.css'

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/de/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
