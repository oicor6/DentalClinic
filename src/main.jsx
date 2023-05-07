import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Context from './components/Utils/global.context';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
  </React.StrictMode>
)
