import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "antd/dist/antd.css"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
