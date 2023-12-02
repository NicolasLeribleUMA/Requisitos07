import React from 'react';
import '../css/Home.css';
import {Link} from 'react-router-dom'
import Navbar from "../components/Navigation";

export function Home() {
  return (
    <body>
      <Navbar/>
    
    <div className="home-container">
      <nav className="home-nav">
        <div>
          <button className="home-button">
            <a href="/ejercicios">Ejercicios</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/rutinas">Rutinas</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/sesiones">Sesiones</a>
          </button>
        </div>
        <div>
          <button className="home-button">
            <a href="/clientes">Clientes</a>
          </button>
        </div>
      </nav>
    </div>

    </body>
  );
}
