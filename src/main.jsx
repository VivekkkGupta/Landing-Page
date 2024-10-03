import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocomotiveScroll from 'locomotive-scroll';
import { UniversalContextProvider } from './contexts/UniversalContext';
import { ThemeProvider } from './contexts/ThemeContext'
const scroll = new LocomotiveScroll();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UniversalContextProvider>
        <App />
      </UniversalContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
