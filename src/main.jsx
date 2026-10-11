import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter is used only for the single-file build (npm run build:single).
const useHash = import.meta.env.VITE_HASH_ROUTER === 'true'
const Router = useHash ? HashRouter : BrowserRouter
// Opt in to React Router v7 behaviour now, which also silences the console warnings.
const future = { v7_startTransition: true, v7_relativeSplatPath: true }
const routerProps = useHash ? { future } : { basename: import.meta.env.BASE_URL, future }

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router {...routerProps}>
      <App />
    </Router>
  </React.StrictMode>
)
