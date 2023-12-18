import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./pages/Login.jsx"
import { Home } from "./pages/trainer/Home.jsx"
import { Ejercicios } from "./pages/trainer/Ejercicios.jsx"
import { Rutinas } from './pages/trainer/Rutinas.jsx'
import { Sesiones } from './pages/trainer/Sesiones.jsx'
import { Clientes } from './pages/trainer/Clientes.jsx'
import { HomeClient } from "./pages/client/HomeClient.jsx"
import { Profile } from "./pages/Perfil.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/perfil" element={<Profile />}/>

        <Route path="/login" element={<Login />} />
        <Route path="/entrenador/home" element={<Home />} />
        <Route path="/entrenador/ejercicios" element={<Ejercicios />} />
        <Route path="/entrenador/rutinas" element={<Rutinas />} />
        <Route path="/entrenador/sesiones" element={<Sesiones />} />
        <Route path="/entrenador/clientes" element={<Clientes />} />

        <Route path="/cliente/home" element={<HomeClient/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
