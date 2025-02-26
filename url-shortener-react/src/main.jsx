import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './contextApi/ContextApi';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ContextProvider>
    <App />
    </ContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
