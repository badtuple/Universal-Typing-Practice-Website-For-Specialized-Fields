// Note: this file is template code from tutorial I was originally following. Only leaving these files marked (tutorial) in case I want to reference code in them later.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './(tutorial)_index.css'
import App from './(tutorial)_App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
