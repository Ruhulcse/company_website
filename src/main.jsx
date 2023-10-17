import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
Aos.init({
  duration:'500',
  disable:false
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
