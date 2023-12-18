import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './index.scss'
import Tut2 from './TUT2/Tut2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Tut2 />
    </BrowserRouter>
  </React.StrictMode>
)
