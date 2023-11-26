import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEjercicios } from "../api/api";
import "../css/Ejercicios.css";
import Añadir from "../components/Ejercicios/Añadir";
import Info from "../components/Ejercicios/Info";
import Modificar from "../components/Ejercicios/Modificar";
import Borrar from "../components/Ejercicios/Borrar";
const listaDeEjercicios = [
  { nombre: "Ejercicio 1", tipo: "Cardio", privado: false },
  { nombre: "Ejercicio 2", tipo: "Fuerza", privado: true },
  { nombre: "Ejercicio 3", tipo: "Flexibilidad", privado: false },
  // ... otros ejercicios
];

export function Ejercicios() {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    // Llamada a la API al montar el componente
    const fetchEjercicios = async () => {
      const data = await getEjercicios();
      setEjercicios(data);
    };

    fetchEjercicios();
  }, []);

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

  {
    /* WIP: VENTANA DE CONFIRMACION DE AÑADIR EJERCICIO (Ejercicio añadido)*/
  }
  {
    /* VENTANA DE VER EJERCICIO */
  }
  {
    /* MODIFICAR DE VER EJERCICIO */
  }
  {
    /* WIP: VENTANA DE CONFIRMACION DE MODIFICAR EJERCICIO (Ejercicio modificado)*/
  }
  {
    /* VENTANA / pop-up PARA PREGUNTAR SI ESTAS SEGURO DE ELIMINAR EJERCICIO */
  }
  {
    /* WIP: VENTANA DE CONFIRMACION DE ELIMINAR EJERCICIO (Ejercicio eliminado)*/
  }

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
      <ul class="ejercicios-lista">
        {listaDeEjercicios.map((ejercicio, index) => (
          <li key={index} class="ejercicio-item">
            <div class="ejercicio-info">
              {ejercicio.nombre} | {ejercicio.tipo} |{" "}
              {ejercicio.privado ? "Privado" : "Público"}
            </div>
            <div class="ejercicios-botones">
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
                cerrarVentanaConfirmacionModif={cerrarVentanaConfirmacionModif}
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
              />
            </div>
            <hr class="ejercicios-linea" />
          </li>
        ))}
      </ul>
    </div>
  );
}
