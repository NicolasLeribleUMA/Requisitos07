import "../../css/Clientes.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Info from "../../components/Clientes/Info";
import Asignar from "../../components/Clientes/Asignar";
import Borrar from "../../components/Clientes/Borrar";
import Modificar from "../../components/Clientes/Modificar";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navigation";
import { getClientes } from "../../api/Clientes";

export function Clientes() {
  const [clientes, setClientes] = useState([]);
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

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        // Llama a tu función para obtener clientes desde la base de datos
        const data = await getClientes();
        setClientes(data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <body>
      <Navbar />

      <div className="clientes-container">
        <div className="clientes-header">
          <h2>CLIENTES</h2>
          <Link to="/entrenador/home" className="clientes-link-button">
            Atrás
          </Link>
        </div>

        {/* Grid para mostrar los ejercicios */}
        <div className="clientes-grid">
          {clientes.map((cliente, index) => (
            <div key={index} className="clientes-nombre">
              {/* <div>
            <strong>{ejercicio.nombre}</strong>
          </div> */}
              <div>{cliente.user}</div>
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
                <button>
                  <Link
                    to={`/entrenador/entrenamiento/${cliente.id}`}
                    className="entrenador-link-button"
                  >
                    Ver entrenamiento
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
