import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/backend/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const authToken = responseData.token;

        // Almacenar el token en el estado o en el almacenamiento local (puedes usar localStorage)
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("username", responseData.username);
        console.log("Datos de usuario:", responseData);
        console.log("suario:", responseData.username);

        // Realizar acciones adicionales, como redireccionar a la página principal
        navigate("/entrenador/home");
        // fetchUserData();
      } else {
        console.error("Error de autenticación:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      // Obtener el token almacenado
      const authToken = localStorage.getItem("authToken");

      const response = await fetch("http://localhost:8000/backend/login", {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // establecer el estado local
        console.log("Datos de usuario:", data);
        setUsers(data.users);
      } else {
        console.error(
          "Error al obtener datos de usuario:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Entrenador</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Nombre de usuario:
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="login-label">
          Contraseña:
          <br />
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
