import React from 'react';
import '../css/Home.css';

export function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">FITNESS WELL-BEING</h2>
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
      </nav>
    </div>
  );
}
