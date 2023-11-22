import React, { useState } from 'react';
import '../css/Login.css'
export function Login() {
  // Estado local para manejar los valores del nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, por ejemplo, enviar los datos al servidor
    // Puedes agregar tu lógica de autenticación aquí
    if (username && password) {
      try {
        // Enviar datos al servidor para autenticación
        const response = await fetch('http://localhost:8000/backend/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          // Si la autenticación es exitosa, realiza la solicitud a la base de datos
          console.log(response)
        } else {
          console.error('Error de autenticación:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    // Limpia los campos después de enviar el formulario
    setUsername('');
    setPassword('');
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/get_users/');
      const data = await response.json();
      // Puedes hacer algo con los datos, por ejemplo, establecer el estado local
      // setUsers(data.users);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
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
          <br/>
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
