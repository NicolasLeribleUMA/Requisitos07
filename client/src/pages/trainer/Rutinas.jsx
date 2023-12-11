import React, { useState, useEffect } from "react";
import Info from "../../components/Rutinas/Info";
import Borrar from "../../components/Rutinas/Borrar";
import Modificar from "../../components/Rutinas/Modificar";
import Añadir from "../../components/Rutinas/Añadir";
import { Link } from "react-router-dom";
import { getRutinas } from "../../api/Rutinas";
import { getSesiones } from "../../api/Sesiones";
import "../../css/Rutinas.css";
import Navbar from "../../components/Navigation";


export function Rutinas() {
  const [rutinas, setRutinas] = useState([]);
  const [sesiones, setSesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [rutinaSeleccionado, setRutinaSeleccionado] = useState(null);

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

  const abrirInfo = (irutina) => {
    setRutinaSeleccionado(irutina);
    setMostrarInfo(true);
  };
  const cerrarInfo = () => {
    setRutinaSeleccionado(null);
    setMostrarInfo(false);
  };

  const modifAbrirInfo = (actual) => {
    setRutinaSeleccionado(actual);
    setModificarInfo(true);
  };
  const modifCerrarInfo = () => {
    setRutinaSeleccionado(null);
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
    const fetchRutinas = async () => {
      try {
        const rutinas = await getRutinas();

        setRutinas(rutinas);
      } catch (error) {
        console.error("Error al obtener rutinas:", error);
      }
    };

    fetchRutinas();
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

  const renderRutinas = () => {
    if (loading) {
      return <p>Cargando rutinas...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="rutinas-grid">
        {rutinas.map((rutina, index) => (
          <div key={index} className="rutinas-ejercicio">
            <div>
              <strong>{rutina.objective}</strong>
            </div>

            <div className="rutinas-ejercicio-info">
              <button onClick={() => abrirInfo(rutina)}>Ver</button>
              <Info
                mostrarInfo={mostrarInfo}
                cerrarInfo={cerrarInfo}
                rutinaId={rutinaSeleccionado}
              />

              <button onClick={() => modifAbrirInfo(rutina)}>Modificar</button>
              <Modificar
                modificarInfo={modificarInfo}
                modifCerrarInfo={modifCerrarInfo}
                abrirVentanaConfirmacionModif={abrirVentanaConfirmacionModif}
                mostrarVentanaConfirmacionModif={
                  mostrarVentanaConfirmacionModif
                }
                cerrarVentanaConfirmacionModif={cerrarVentanaConfirmacionModif}
                rutinaActual={rutinaSeleccionado}
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
                rutinaID={rutina.id}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <body>
      <Navbar/>

      <div className="rutinas-container">
        <div className="rutinas-header">
          <h2>RUTINAS</h2>
          <Link to="/entrenador/home" className="rutinas-link-button">
            Atrás
          </Link>
          <button className="rutinas-button" onClick={abrirVentana}>
            Añadir rutina
          </button>
          <Añadir
            mostrarVentana={mostrarVentana}
            cerrarVentana={cerrarVentana}
            abrirVentanaConfirmacion={abrirVentanaConfirmacion}
            mostrarVentanaConfirmacion={mostrarVentanaConfirmacion}
            cerrarVentanaConfirmacion={cerrarVentanaConfirmacion}
          />
        </div>
        {renderRutinas()}
      </div>

    </body>
  );
}
