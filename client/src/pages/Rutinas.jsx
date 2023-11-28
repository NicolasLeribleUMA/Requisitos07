import React, { useState } from 'react';
import Info from '../components/Rutinas/Info';
import Borrar from '../components/Rutinas/Borrar';
import Modificar from '../components/Rutinas/Modificar';
import Añadir from '../components/Rutinas/Añadir';
import Asignar from '../components/Rutinas/Asignar';
import {Link} from 'react-router-dom'
import '../css/Rutinas.css'
const listaDeEjercicios = [
  { nombre: 'Rutina 1', cliente: 'Pepito'},
  { nombre: 'Rutina 2', cliente: 'Maria'},
  { nombre: 'Rutina 3', cliente: 'Estefania' },
  // ... otros ejercicios
];

export function Rutinas() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] = useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [mostrarVentanaConfirmacionBorrado, setMostrarVentanaConfirmacionBorrado] = useState(false);
  const [asignarClientes, setAsignarClientes] = useState(false);
  const [mostrarVentanaConfirmacionClientes, setMostrarVentanaConfirmacionClientes] = useState(false);


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

  const abrirVentanaClientes = () => {
    setAsignarClientes(true);
  };

  const cerrarVentanaClientes = () => {
    setAsignarClientes(false);
  };

  const abrirVentanaConfirmacionClientes = () => {
    setMostrarVentanaConfirmacionClientes(true);
  };

  const cerrarVentanaConfirmacionClientes = () => {
    setMostrarVentanaConfirmacionClientes(false);
    setAsignarClientes(false);
  };

{/* WIP: VENTANA DE CONFIRMACION DE AÑADIR EJERCICIO (Ejercicio añadido)*/}
{/* VENTANA DE VER EJERCICIO */}
{/* MODIFICAR DE VER EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE MODIFICAR EJERCICIO (Ejercicio modificado)*/}
{/* VENTANA / pop-up PARA PREGUNTAR SI ESTAS SEGURO DE ELIMINAR EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE ELIMINAR EJERCICIO (Ejercicio eliminado)*/}

  return (
    <div class="rutinas-container">
  <div class="rutinas-header">
    <h2>RUTINAS</h2>
    <Link to="/home" class="rutinas-link-button">
      Atrás
    </Link>
    <button class="rutinas-button" onClick={abrirVentana}>Añadir rutina</button>
    <Añadir
          mostrarVentana={mostrarVentana}
          cerrarVentana={cerrarVentana}
          abrirVentanaConfirmacion={abrirVentanaConfirmacion}
          mostrarVentanaConfirmacion={mostrarVentanaConfirmacion}
          cerrarVentanaConfirmacion={cerrarVentanaConfirmacion}
        />
  </div>

  {/* Grid para mostrar los ejercicios */}
  <div class="rutinas-grid">
    {listaDeEjercicios.map((ejercicio, index) => (
      <div key={index} class="rutinas-ejercicio">
        <div>
          <strong>{ejercicio.nombre}</strong>
        </div>
        <div>{ejercicio.cliente}</div>
        <div class="rutinas-ejercicio-info">
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
          <button onClick={abrirVentanaClientes}>Asignar cliente</button>
          <Asignar
              abrirVentanaClientes = {abrirVentanaClientes}
              cerrarVentanaClientes = {cerrarVentanaClientes}
              abrirVentanaConfirmacionClientes = {abrirVentanaConfirmacionClientes}
            cerrarVentanaConfirmacionClientes = {cerrarVentanaConfirmacionClientes}
            asignarClientes = {asignarClientes}
            mostrarVentanaConfirmacionClientes = {mostrarVentanaConfirmacionClientes}
          />
        </div>
      </div>
        ))}
      </div>
    



          

</div>

    
  );
}
