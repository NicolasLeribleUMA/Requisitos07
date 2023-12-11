import React from 'react';
import '../../css/Home.css';
import {Link} from 'react-router-dom'
import Navbar from "../../components/Navigation";

export function Home() {
  return (
    <body>
      <Navbar/>
    
    <div className="home-container">
      <h1>MAIN DE ENTRENADOR</h1>
      <nav className="home-nav">
        <div>
          <button className="home-button">
            <a href="/entrenador/ejercicios">Ejercicios</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/entrenador/rutinas">Rutinas</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/entrenador/sesiones">Sesiones</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/entrenador/clientes">Clientes</a>
          </button>
        </div>
      </nav>
    </div>

    </body>
  );
}
