import React, { useState, useEffect } from "react";
import { getSesiones } from "../../api/Sesiones";
import { obtenerIDEntrenador } from "../../api/Rutinas";
import { addRutina } from "../../api/Rutinas";
const Añadir = ({
  mostrarVentana,
  cerrarVentana,
  abrirVentanaConfirmacion,
  mostrarVentanaConfirmacion,
  cerrarVentanaConfirmacion,
}) => {
  const [sesiones, setSesiones] = useState([]);
  const [objective, setObjective] = useState("");
  const [client, setClient] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainingSessions, setTrainingSessions] = useState([]);
  useEffect(() => {
    const fetchSesiones = async () => {
      try {
        const data = await getSesiones();
        setSesiones(data);
      } catch (error) {
        setError(error.message || "Error al obtener datos de la API");
      }
    };

    fetchSesiones();
  }, []);
  const handleAddSession = () => {
    // Puedes realizar alguna lógica aquí antes de agregar las sesiones
    const selectedSesiones = sesiones;
    console.log("Sesiones seleccionadas:", selectedSesiones);
  };

  const handleConfirm = async () => {
    try {
      const trainerID = await obtenerIDEntrenador();
      const rutinaData = {
        objective: objective,
        client: null,
        trainer: trainerID,
        trainingSessions: sesiones,
      };

      // Llamada a la función de API para añadir rutina
      await addRutina(rutinaData);

      abrirVentanaConfirmacion();
    } catch (error) {
      console.error("Error al añadir rutina:", error);
      // Manejar el error según tus necesidades
    }
  };
  return (
    <>
      {mostrarVentana && (
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
              background: "#11ffee00",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Nueva Rutina</h3>
              <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
            <p style={{ marginRight: "100px" }}>
              Sesiones:
              <select
                id="Sesiones"
                name="Sesiones"
                multiple
                onChange={(e) =>
                  setSesiones(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {sesiones.map((sesion) => (
                  <option key={sesion.id} value={sesion.id}>
                    {sesion.exercise
                      ? sesion.exercise.name
                      : "Nombre no disponible"}
                  </option>
                ))}
              </select>
            </p>
            {/* Aqui deberiamos poner que pudiese elegir de las sesiones que ya tiene hechas (al añadir) */}
            {/**Boton de añadir sesion que haga que salga un nuevo select para elegir otra, onCLick debe crear un nuevo select */}
            <button onClick={handleAddSession}>Añadir sesión</button>
            <p>
              Objetivo:{" "}
              <input
                type="text"
                style={{ marginLeft: "10px" }}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              />
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleConfirm}>Confirmar</button>
              {/* Este debería mostrar una ventana la rutina ha sido añadida y mostrarlo */}
            </div>
          </div>
        </div>
      )}

      {mostrarVentanaConfirmacion && (
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
              <h4>La rutina ha sido añadida</h4>
              <button onClick={cerrarVentanaConfirmacion}>Ok</button>
              {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Añadir;
