import "../css/Clientes.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Info from "../components/Clientes/Info";
import Asignar from "../components/Clientes/Asignar";
import Borrar from "../components/Clientes/Borrar";
import Modificar from "../components/Clientes/Modificar";
import { Link } from "react-router-dom";
import Navbar from "../components/Navigation";

const listaDeClientes = [
  { cliente: "Pepito" },
  { cliente: "Maria" },
  { cliente: "Estefania" },
  // ... otros ejercicios
];

export function Clientes() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] =
    useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [
    mostrarVentanaConfirmacionBorrado,
    setMostrarVentanaConfirmacionBorrado,
  ] = useState(false);
  const [asignarClientes, setAsignarClientes] = useState(false);
  const [
    mostrarVentanaConfirmacionClientes,
    setMostrarVentanaConfirmacionClientes,
  ] = useState(false);

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
    <body>
      <Navbar/>

      <div className="clientes-container">
        <div className="clientes-header">
          <h2>CLIENTES</h2>
          <Link to="/home" className="clientes-link-button">
            Atrás
          </Link>
        </div>

        {/* Grid para mostrar los ejercicios */}
        <div className="clientes-grid">
          {listaDeClientes.map((ejercicio, index) => (
            <div key={index} className="clientes-nombre">
              {/* <div>
            <strong>{ejercicio.nombre}</strong>
          </div> */}
              <div>{ejercicio.cliente}</div>
              <div className="clientes-info">
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
                <button onClick={abrirVentanaClientes}>
                  Asignar entrenamiento
                </button>
                <Asignar
                  abrirVentanaClientes={abrirVentanaClientes}
                  cerrarVentanaClientes={cerrarVentanaClientes}
                  abrirVentanaConfirmacionClientes={
                    abrirVentanaConfirmacionClientes
                  }
                  cerrarVentanaConfirmacionClientes={
                    cerrarVentanaConfirmacionClientes
                  }
                  asignarClientes={asignarClientes}
                  mostrarVentanaConfirmacionClientes={
                    mostrarVentanaConfirmacionClientes
                  }
                />
              </div>
            </div>
          ))}
        </div>
    </div>

    </body>
  );
}
