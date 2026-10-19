import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './menu.css'
import './cart.css'
import './index.css'
import './App.css'
import './responsiveness.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
