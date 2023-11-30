import React, { useState, useEffect } from "react";
import { ModificarSesion } from "../../api/Sesiones";
import { getSesiones } from "../../api/Sesiones";
const Modificar = ({
  modificarInfo,
  modifCerrarInfo,
  abrirVentanaConfirmacionModif,
  mostrarVentanaConfirmacionModif,
  cerrarVentanaConfirmacionModif,
  rutinaActual,
}) => {
  const [trainingSessions, setSesiones] = useState([]); // Estado para almacenar las sesiones
  const [objective, setObjective] = useState("");
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
  useEffect(() => {
    if (modificarInfo && rutinaActual) {
      setObjective(rutinaActual.objective);
      setSesiones(rutinaActual.trainingSessions);
    }
  }, [modificarInfo, rutinaActual]);
  const handleAñadirSesion = () => {
    // Lógica para añadir una nueva sesión al array de sesiones
    setSesiones([...trainingSessions, { exercise: "", rep: 0, sets: 0 }]);
  };
  const handleConfirmarModificacion = async () => {
    // Construir objeto con los datos modificados
    const datosModificados = {
      objective,
      trainingSessions,
    };

    // Aquí deberías llamar a la función para enviar los datos modificados a la API
    const response = await ModificarSesion(rutinaActual.id, datosModificados);
    console.log(response); // Verifica la respuesta del servidor

    // Después de enviar los datos a la API, puedes mostrar la ventana de confirmación
    abrirVentanaConfirmacionModif();
  };
  return (
    <>
      {modificarInfo && (
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
              <h3>Modificar Rutina</h3>
              <button onClick={modifCerrarInfo}>Cancelar</button>
            </div>
            {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
            <p style={{ marginRight: "100px" }}>
              Sesiones:
              <select id="Sesiones" name="Sesiones">
                {trainingSessions.map((sesion, index) => (
                  <option
                    key={sesion.id}
                    value={`Sesion${sesion.id}`}
                  >{`Sesion ${sesion.id}`}</option>
                ))}
              </select>
            </p>
            {/* Aqui deberiamos poner que pudiese elegir de las sesiones que ya tiene hechas Y DEBERIAN SALIR LAS SESIONES QUE YA ESTAN EN LA RUTINA (para poder editar)?? */}
            {/* 2 casos : solo puede añadir cosas nuevas  || puede añadir y eliminar las sesiones */}
            {/**Boton de añadir sesion que haga que salga un nuevo select para elegir otra, onCLick debe crear un nuevo select */}
            <button onClick={handleAñadirSesion}>Añadir sesión</button>
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
              <button onClick={handleConfirmarModificacion}>Confirmar</button>
              {/* Este debería mostrar una ventana la rutina ha sido modificada y mostrarlo */}
            </div>
          </div>
        </div>
      )}
      {mostrarVentanaConfirmacionModif && (
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
              <h4>La rutina ha sido modificada</h4>
              <button onClick={cerrarVentanaConfirmacionModif}>Ok</button>
              {/* Cierra la ventana y te da mensaje positivo pero no modifica nada aún!!!! */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modificar;
