import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CoffeeApp } from './CoffeeApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeApp />
  </StrictMode>,
)
