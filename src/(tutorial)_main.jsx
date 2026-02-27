import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './(tutorial)_index.css'
import App from './(tutorial)_App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
