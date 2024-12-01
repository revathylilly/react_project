import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode
     future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    
  }}>
    <App />
  </React.StrictMode>,
)