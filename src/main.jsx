import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainProvider from './core/services/providers/MainProvider.jsx'

createRoot(document.getElementById('root')).render(
  <MainProvider>
    <App />
  </MainProvider>,
)
