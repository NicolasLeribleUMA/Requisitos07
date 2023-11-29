import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEjercicios } from "../api/Ejercicios";
import "../css/Ejercicios.css";
import Añadir from "../components/Ejercicios/Añadir";
import Info from "../components/Ejercicios/Info";
import Modificar from "../components/Ejercicios/Modificar";
import Borrar from "../components/Ejercicios/Borrar";

// const listaDeEjercicios = [
//   { nombre: "Ejercicio 1", tipo: "Cardio", privado: false },
//   { nombre: "Ejercicio 2", tipo: "Fuerza", privado: true },
//   { nombre: "Ejercicio 3", tipo: "Flexibilidad", privado: false },
//   // ... otros ejercicios
// ];

export function Ejercicios() {
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] =
    useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] =
    useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [
    mostrarVentanaConfirmacionBorrado,
    setMostrarVentanaConfirmacionBorrado,
  ] = useState(false);

  const abrirVentana = () => {
    setMostrarVentana(true);
  };

  const cerrarVentana = () => {
    setMostrarVentana(false);
  };
  const abrirVentanaConfirmacion = () => {
    setMostrarVentanaConfirmacion(true);
  };

  const cerrarVentanaConfirmacion = () => {
    setMostrarVentanaConfirmacion(false);
    setMostrarVentana(false);
  };

  const abrirInfo = () => {
    setMostrarInfo(true);
  };
  const cerrarInfo = () => {
    setMostrarInfo(false);
  };

  const modifAbrirInfo = () => {
    setModificarInfo(true);
  };
  const modifCerrarInfo = () => {
    setModificarInfo(false);
  };

  const abrirVentanaConfirmacionModif = () => {
    setMostrarVentanaConfirmacionModif(true);
  };

  const cerrarVentanaConfirmacionModif = () => {
    setMostrarVentanaConfirmacionModif(false);
    setModificarInfo(false);
  };

  const abrePreguntaBorrado = () => {
    setPreguntaBorrado(true);
  };
  const cierraPreguntaBorrado = () => {
    setPreguntaBorrado(false);
  };

  const abrirVentanaConfirmacionBorrado = () => {
    setMostrarVentanaConfirmacionBorrado(true);
  };

  const cerrarVentanaConfirmacionBorrado = () => {
    setMostrarVentanaConfirmacionBorrado(false);
    setPreguntaBorrado(false);
  };

  useEffect(() => {
    // Llamada a la API al montar el componente
    const fetchEjercicios = async () => {
      try {
        const data = await getEjercicios();
        setEjercicios(data);
      } catch (error) {
        setError(error.message || "Error al obtener datos de la API");
      } finally {
        setLoading(false);
      }
    };

    fetchEjercicios();
  }, []);

  const renderEjercicios = () => {
    if (loading) {
      return <p>Cargando ejercicios...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <ul class="ejercicios-lista">
        {ejercicios.map((ejercicio, index) => (
          <li key={index} class="ejercicio-item">
            <div class="ejercicio-info">
              {ejercicio.name} | {ejercicio.type} |{" "}
              {ejercicio.isPrivate ? "Privado" : "Público"}
            </div>
            <div class="ejercicios-botones">
              <button onClick={abrirInfo}>Ver</button>
              <Info
                mostrarInfo={mostrarInfo}
                cerrarInfo={cerrarInfo}
                ejercicioId={ejercicio}
              />
              <button onClick={modifAbrirInfo}>Modificar</button>
              <Modificar
                modificarInfo={modificarInfo}
                modifCerrarInfo={modifCerrarInfo}
                abrirVentanaConfirmacionModif={abrirVentanaConfirmacionModif}
                mostrarVentanaConfirmacionModif={
                  mostrarVentanaConfirmacionModif
                }
                cerrarVentanaConfirmacionModif={cerrarVentanaConfirmacionModif}
                ejercicioActual={ejercicio}
              />
              <button onClick={abrePreguntaBorrado}>Borrar</button>
              <Borrar
                preguntaBorrado={preguntaBorrado}
                cierraPreguntaBorrado={cierraPreguntaBorrado}
                abrirVentanaConfirmacionBorrado={
                  abrirVentanaConfirmacionBorrado
                }
                mostrarVentanaConfirmacionBorrado={
                  mostrarVentanaConfirmacionBorrado
                }
                cerrarVentanaConfirmacionBorrado={
                  cerrarVentanaConfirmacionBorrado
                }
                ejercicioID={ejercicio.id}
              />
            </div>
            <hr class="ejercicios-linea" />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div class="ejercicios-container">
      <div class="ejercicios-header">
        <h2>EJERCICIOS</h2>
        <Link to="/home" class="ejercicios-link-button">
          Atrás
        </Link>
        <button class="ejercicios-button" onClick={abrirVentana}>
          Añadir ejercicio
        </button>
        <Añadir
          mostrarVentana={mostrarVentana}
          cerrarVentana={cerrarVentana}
          abrirVentanaConfirmacion={abrirVentanaConfirmacion}
          mostrarVentanaConfirmacion={mostrarVentanaConfirmacion}
          cerrarVentanaConfirmacion={cerrarVentanaConfirmacion}
        />
      </div>
      <div class="ejercicios-info-header">
        <strong>Nombre</strong> | <strong>Tipo</strong> |{" "}
        <strong>Visibilidad</strong>
      </div>
      {renderEjercicios()}
    </div>
  );
}
