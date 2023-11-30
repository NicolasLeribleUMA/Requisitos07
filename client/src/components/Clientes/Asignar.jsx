import React, { useState, useEffect } from "react";
import { getRutinas } from "../../api/Rutinas";
import { getSesiones } from "../../api/Sesiones";
const Asignar = ({
  abrirVentanaClientes,
  cerrarVentanaClientes,
  abrirVentanaConfirmacionClientes,
  cerrarVentanaConfirmacionClientes,
  asignarClientes,
  mostrarVentanaConfirmacionClientes,
}) => {
  const [rutinas, setRutinas] = useState([]);
  const [sesiones, setSesiones] = useState([]);
  useEffect(() => {
    // Lógica para obtener rutinas y sesiones desde la base de datos
    // Supongamos que tienes funciones getRutinas y getSesiones
    const fetchRutinas = async () => {
      try {
        const rutinasData = await getRutinas(); // Reemplaza getRutinas con tu función real
        setRutinas(rutinasData);
      } catch (error) {
        console.error("Error fetching rutinas:", error);
      }
    };

    const fetchSesiones = async () => {
      try {
        const sesionesData = await getSesiones(); // Reemplaza getSesiones con tu función real
        setSesiones(sesionesData);
      } catch (error) {
        console.error("Error fetching sesiones:", error);
      }
    };

    fetchRutinas();
    fetchSesiones();
  }, []); // Ejecutar solo una vez al montar el componente
  return (
    <>
      {asignarClientes && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Tus rutinas y sesiones</h3>
              <button onClick={cerrarVentanaClientes}>Cancelar</button>
            </div>

            <p>Rutinas:</p>
            <select>
              {rutinas.map((rutina) => (
                <option key={rutina.id} value={rutina.id}>
                  {rutina.objective}
                </option>
              ))}
            </select>

            <p>Sesiones:</p>
            <select>
              {sesiones.map((sesion) => (
                <option key={sesion.id} value={sesion.id}>
                  {sesion.exercise.name}
                </option>
              ))}
            </select>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={abrirVentanaConfirmacionClientes}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {mostrarVentanaConfirmacionClientes && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Tus clientes han sido editados correctamente</h4>
              <button onClick={cerrarVentanaConfirmacionClientes}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Asignar;
