import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './booking.css'
import './services.css'
import './menu.css'
import './about.css'
import './cart.css'
import './contact.css'
import './terms.css'
import './privacy.css'
import './cancellation.css'
import './scrollBtn.css'
import './index.css'
import './App.css'
import './responsiveness.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
