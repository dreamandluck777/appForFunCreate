import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProviderThemeAndLang } from './contextReducer/ThemeAndLang.tsx'
import { HashRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    <ContextProviderThemeAndLang>
    <App />
    </ContextProviderThemeAndLang>
    </HashRouter>
  </StrictMode>,
)
