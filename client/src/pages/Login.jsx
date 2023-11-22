import React, { useState } from 'react';
import '../css/Login.css'
export function Login() {
  // Estado local para manejar los valores del nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, por ejemplo, enviar los datos al servidor
    // Puedes agregar tu lógica de autenticación aquí

    // Limpia los campos después de enviar el formulario
    setUsername('');
    setPassword('');
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
