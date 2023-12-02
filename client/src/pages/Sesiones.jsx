import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Sesiones.css";
import { getSesiones } from "../api/Sesiones";
import { getEjercicios } from "../api/Ejercicios";
import Añadir from "../components/Sesiones/Añadir";
import Info from "../components/Sesiones/Info";
import Borrar from "../components/Sesiones/Borrar";
import Navbar from "../components/Navigation";

export function Sesiones() {
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ejerciciosMap, setEjerciciosMap] = useState({});

  const [sesionSeleccionado, setSesionSeleccionado] = useState(null);

  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] =
    useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
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

  const abrirInfo = (sesion) => {
    setSesionSeleccionado(sesion);
    setMostrarInfo(true);
  };
  const cerrarInfo = () => {
    setSesionSeleccionado(null);
    setMostrarInfo(false);
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

        // // Crear un mapeo de ID de ejercicio a nombres de ejercicios
        // const ejerciciosMap = {};
        // ejercicios.forEach((ejercicio) => {
        //   ejerciciosMap[ejercicio.id] = ejercicio.name;
        // });

        setEjerciciosMap(ejercicios);
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
        // const sesionesConNombre = data.map((sesion) => ({
        //   ...sesion,
        //   exercise: ejerciciosMap[sesion.exercise],
        // }));
        setSesiones(data);
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
      <ul className="sesiones-lista">
        {sesiones.map((sesion, index) => (
          <li key={index} className="sesiones-item">
            <div className="sesiones-info">
              <div>
                {sesion.exercise.name} | {sesion.rep} | {sesion.sets}
              </div>
              <div className="sesiones-botones">
                <button onClick={() => abrirInfo(sesion)}>Ver</button>
                <Info
                  mostrarInfo={mostrarInfo}
                  cerrarInfo={cerrarInfo}
                  sesionId={sesionSeleccionado}
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
            <hr className="sesiones-linea" />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <body>
      <Navbar/>

      <div className="sesiones-container">
        <div className="sesiones-header">
          <h2>SESIONES</h2>
          <Link to="/home" className="sesiones-link-button">
            Atrás
          </Link>
          <button className="sesiones-button" onClick={abrirVentana}>
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
        <div className="sesiones-info-header">
          <strong>Ejercicios</strong> | <strong>Repeticiones</strong> |{" "}
          <strong>Series</strong>
        </div>
        {renderSesiones()}
      </div>

    </body>
  );
}
