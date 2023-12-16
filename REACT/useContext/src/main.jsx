import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NameContextProvider from './assets/context/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NameContextProvider> 
    <App />
   </NameContextProvider>
  </React.StrictMode>,
)
