import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Ejercicios } from "./pages/Ejercicios"
import { Rutinas } from './pages/Rutinas.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/rutinas" element={<Rutinas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
