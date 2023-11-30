import React, { useState, useEffect } from "react";
import { getDetalleSesion } from "../../api/Sesiones";
const Info = ({ mostrarInfo, cerrarInfo, sesionId }) => {
  const [sesion, setSesion] = useState(null);
  useEffect(() => {
    const obtenerDetalleSesion = async () => {
      try {
        if (sesionId && sesionId.id) {
          // Asegúrate de que ejercicioId sea un objeto con un campo 'id'
          const idSesion = sesionId ? sesionId.id : null;
          console.log("ID de la sesion:", idSesion);

          const sesion = await getDetalleSesion(idSesion);
          console.log("Datos de la sesion:", sesion);
          setSesion(sesion);
        }
      } catch (error) {
        console.error("Error al obtener detalle del sesion:", error);
      }
    };
    if (mostrarInfo && sesionId) {
      obtenerDetalleSesion();
    }
  }, [mostrarInfo, sesionId]);
  return (
    <>
      {mostrarInfo && (
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
              <h4>Info sesión</h4>
              <button onClick={cerrarInfo}>Volver</button>
              {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
            </div>
            {sesion ? (
              <>
                <p>Nombre: {sesion.exercise.name}</p>
                <p>reps: {sesion.rep}</p>
                <p>sets: {sesion.sets}</p>
              </>
            ) : (
              <p>Cargando información del sesion...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
