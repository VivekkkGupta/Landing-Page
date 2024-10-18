import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { CodeVivekUniversalContextProvider } from './contexts/CodeVivekUniversalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CodeVivekUniversalContextProvider>
        <App />
      </CodeVivekUniversalContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
