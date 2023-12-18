import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/trainer/Login.jsx";
import { Home } from "./pages/trainer/Home.jsx";
import { Ejercicios } from "./pages/trainer/Ejercicios.jsx";
import { Rutinas } from "./pages/trainer/Rutinas.jsx";
import { Sesiones } from "./pages/trainer/Sesiones.jsx";
import { Clientes } from "./pages/trainer/Clientes.jsx";
import Citas from "./pages/trainer/Citas.jsx";
import { LoginClient } from "./pages/client/LoginClient.jsx";
import { HomeClient } from "./pages/client/HomeClient.jsx";
import CitaClient from "./pages/client/CitaClient.jsx";
import Entrenamiento from "./pages/client/Entrenamiento.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/entrenador/login" />} />

        <Route path="/entrenador/login" element={<Login />} />
        <Route path="/entrenador/home" element={<Home />} />
        <Route path="/entrenador/ejercicios" element={<Ejercicios />} />
        <Route path="/entrenador/rutinas" element={<Rutinas />} />
        <Route path="/entrenador/sesiones" element={<Sesiones />} />
        <Route path="/entrenador/clientes" element={<Clientes />} />
        <Route path="/entrenador/citas" element={<Citas />} />

        <Route path="/cliente/login" element={<LoginClient />} />
        <Route path="/cliente/home" element={<HomeClient />} />
        <Route path="/cliente/cita" element={<CitaClient />} />
        <Route path="/cliente/entrenamiento" element={<Entrenamiento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
