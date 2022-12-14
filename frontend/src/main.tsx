import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:1337'
axios.defaults.headers.common['Autorization'] = 'Bearer '+localStorage.getItem('token')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
