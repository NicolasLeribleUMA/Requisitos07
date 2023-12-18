import React from "react";
import "../../css/Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navigation";

export function HomeClient() {
  return (
    <body>
      <Navbar />

      <div className="home-container">
        <h1>MAIN DE CLIENTE</h1>
        <nav className="home-nav">
          <div>
            <button className="home-button">
              <a href="/cliente/entrenamiento">Entrenamiento</a>
            </button>
          </div>
          <div>
            <button className="home-button">
              <a href="/cliente/cita">Citas</a>
            </button>
          </div>
        </nav>
      </div>
    </body>
  );
}
