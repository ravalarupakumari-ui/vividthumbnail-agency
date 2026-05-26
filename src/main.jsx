import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Removed the strict extension to let the compiler find it automatically

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
