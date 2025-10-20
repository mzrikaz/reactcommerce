import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import App from './App'
import './index.css'
import { CartContextProvider } from './providers/cart-context-provider'
import 'toastr/build/toastr.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </StrictMode>,
)
