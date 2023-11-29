import React, { useState, useEffect } from "react";
import { getDetalleEjercicio } from "../../api/Ejercicios";
const Info = ({ mostrarInfo, cerrarInfo, ejercicioId }) => {
  const [ejercicio, setEjercicio] = useState(null);

  useEffect(() => {
    const obtenerDetalleEjercicio = async () => {
      try {
        if (ejercicioId && ejercicioId.id) {
          // Asegúrate de que ejercicioId sea un objeto con un campo 'id'
          const idEjercicio = ejercicioId.id;
          console.log("ID del ejercicio:", idEjercicio);

          const ejercicio = await getDetalleEjercicio(idEjercicio);
          console.log("Datos del ejercicio:", ejercicio);
          setEjercicio(ejercicio);
        }
      } catch (error) {
        console.error("Error al obtener detalle del ejercicio:", error);
      }
    };

    if (mostrarInfo && ejercicioId) {
      obtenerDetalleEjercicio();
    }
  }, [mostrarInfo, ejercicioId]);
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
              <h4>Info ejercicio</h4>
              <button onClick={cerrarInfo}>Volver</button>
              {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
            </div>
            {ejercicio ? (
              <>
                <p>Nombre: {ejercicio.name}</p>
                <p>Tipo: {ejercicio.type}</p>
                <p>Link: {ejercicio.videoURL}</p>
                <p>Descripción: {ejercicio.desc}</p>
                <p>Privado: {ejercicio.isPrivate ? "Sí" : "No"}</p>
              </>
            ) : (
              <p>Cargando información del ejercicio...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
