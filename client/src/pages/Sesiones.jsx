import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Sesiones.css";
import { getSesiones } from "../api/Sesiones";
import { getEjercicios } from "../api/Ejercicios";
import Añadir from "../components/Sesiones/Añadir";
import Info from "../components/Sesiones/Info";
import Modificar from "../components/Sesiones/Modificar";
import Borrar from "../components/Sesiones/Borrar";

const listaDeEjercicios = [
  { nombre: "Ejercicio 1", repeticiones: "2 rep.", series: "5 series" },
  { nombre: "Ejercicio 2", repeticiones: "3 rep.", series: "4 series" },
  { nombre: "Ejercicio 3", repeticiones: "4 rep.", series: "7 series" },
  // ... otros ejercicios
];

export function Sesiones() {
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ejerciciosMap, setEjerciciosMap] = useState({});

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
    // Obtener la lista de ejercicios al cargar el componente
    const fetchEjercicios = async () => {
      try {
        const ejercicios = await getEjercicios();

        // Crear un mapeo de ID de ejercicio a nombres de ejercicios
        const ejerciciosMap = {};
        ejercicios.forEach((ejercicio) => {
          ejerciciosMap[ejercicio.id] = ejercicio.name;
        });

        setEjerciciosMap(ejerciciosMap);
      } catch (error) {
        console.error("Error al obtener ejercicios:", error);
      }
    };

    fetchEjercicios();
  }, []);
  useEffect(() => {
    // Llamada a la API al montar el componente
    const fetchSesiones = async () => {
      try {
        const data = await getSesiones();
        const sesionesConNombre = data.map((sesion) => ({
          ...sesion,
          exercise: ejerciciosMap[sesion.exercise],
        }));
        setSesiones(sesionesConNombre);
      } catch (error) {
        setError(error.message || "Error al obtener datos de la API");
      } finally {
        setLoading(false);
      }
    };

    fetchSesiones();
  }, []);

  const renderSesiones = () => {
    if (loading) {
      return <p>Cargando sesiones...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <ul class="sesiones-lista">
        {sesiones.map((sesion, index) => (
          <li key={index} class="sesiones-item">
            <div class="sesiones-info">
              <div>
                {sesion.exercise} | {sesion.rep} | {sesion.sets}
              </div>
              <div class="sesiones-botones">
                <button onClick={abrirInfo}>Ver</button>
                <Info mostrarInfo={mostrarInfo} cerrarInfo={cerrarInfo} />
                <button onClick={modifAbrirInfo}>Modificar</button>
                <Modificar
                  modificarInfo={modificarInfo}
                  modifCerrarInfo={modifCerrarInfo}
                  abrirVentanaConfirmacionModif={abrirVentanaConfirmacionModif}
                  mostrarVentanaConfirmacionModif={
                    mostrarVentanaConfirmacionModif
                  }
                  cerrarVentanaConfirmacionModif={
                    cerrarVentanaConfirmacionModif
                  }
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
                  sesionID={sesion.id}
                />
              </div>
            </div>
            <hr class="sesiones-linea" />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div class="sesiones-container">
      <div class="sesiones-header">
        <h2>SESIONES</h2>
        <Link to="/home" class="sesiones-link-button">
          Atrás
        </Link>
        <button class="sesiones-button" onClick={abrirVentana}>
          Añadir sesión
        </button>
        <Añadir
          mostrarVentana={mostrarVentana}
          cerrarVentana={cerrarVentana}
          abrirVentanaConfirmacion={abrirVentanaConfirmacion}
          mostrarVentanaConfirmacion={mostrarVentanaConfirmacion}
          cerrarVentanaConfirmacion={cerrarVentanaConfirmacion}
        />
      </div>
      <div class="sesiones-info-header">
        <strong>Ejercicios</strong> | <strong>Repeticiones</strong> |{" "}
        <strong>Series</strong>
      </div>
      {renderSesiones()}
    </div>
  );
}
