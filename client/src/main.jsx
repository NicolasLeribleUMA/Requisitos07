import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Home } from './pages/Home.jsx'
import { Ejercicios } from './pages/Ejercicios.jsx'
import { Login } from './pages/Login.jsx'
import { Rutinas } from './pages/Rutinas.jsx'
import { Sesiones } from './pages/Sesiones.jsx'
// import { Clientes } from './pages/Clientes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
