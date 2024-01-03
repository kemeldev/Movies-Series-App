import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './context/apiContext.jsx'
import { SearchProvider } from './context/searchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ApiProvider>
      <SearchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchProvider>
    </ApiProvider>
  </React.StrictMode>
)
