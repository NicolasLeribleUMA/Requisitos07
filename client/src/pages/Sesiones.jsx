import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/Sesiones.css'
import Añadir from "../components/Sesiones/Añadir";
import Info from "../components/Sesiones/Info";
import Modificar from "../components/Sesiones/Modificar";
import Borrar from "../components/Sesiones/Borrar";

const listaDeEjercicios = [
  { nombre: 'Ejercicio 1', repeticiones: '2 rep.', series: '5 series' },
  { nombre: 'Ejercicio 2', repeticiones: '3 rep.', series: '4 series' },
  { nombre: 'Ejercicio 3', repeticiones: '4 rep.', series: '7 series' },
  // ... otros ejercicios
];

export function Sesiones() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] = useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [mostrarVentanaConfirmacionBorrado, setMostrarVentanaConfirmacionBorrado] = useState(false);

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

{/* WIP: VENTANA DE CONFIRMACION DE AÑADIR EJERCICIO (Ejercicio añadido)*/}
{/* VENTANA DE VER EJERCICIO */}
{/* MODIFICAR DE VER EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE MODIFICAR EJERCICIO (Ejercicio modificado)*/}
{/* VENTANA / pop-up PARA PREGUNTAR SI ESTAS SEGURO DE ELIMINAR EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE ELIMINAR EJERCICIO (Ejercicio eliminado)*/}

  return (
    <div class="sesiones-container">
  <div class="sesiones-header">
    <h2>SESIONES</h2>
    <Link to="/home" class="sesiones-link-button">
      Atrás
    </Link>
    <button class="sesiones-button" onClick={abrirVentana}>Añadir sesión</button>
    <Añadir
          mostrarVentana={mostrarVentana}
          cerrarVentana={cerrarVentana}
          abrirVentanaConfirmacion={abrirVentanaConfirmacion}
          mostrarVentanaConfirmacion={mostrarVentanaConfirmacion}
          cerrarVentanaConfirmacion={cerrarVentanaConfirmacion}
        />
  </div>
  <div class="sesiones-info-header">
    <strong>Ejercicios</strong> | <strong>Repeticiones</strong> | <strong>Series</strong>
  </div>
  <ul class="sesiones-lista">
    {listaDeEjercicios.map((ejercicio, index) => (
      <li key={index} class="sesiones-item">
        <div class="sesiones-info">
          <div>
            {ejercicio.nombre} | {ejercicio.repeticiones} | {ejercicio.series}
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
        </div>
        <hr class="sesiones-linea" />
      </li>
        ))}
      </ul>

</div>
);
}
