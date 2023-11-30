import React, { useState, useEffect } from "react";
import { getDetalleRutina } from "../../api/Rutinas";

const Info = ({ mostrarInfo, cerrarInfo, rutinaId }) => {
  const [rutina, setRutina] = useState(null);
  useEffect(() => {
    const obtenerDetalleRutina = async () => {
      try {
        if (rutinaId && rutinaId.id) {
          // Asegúrate de que ejercicioId sea un objeto con un campo 'id'
          console.log("Valor de rutinaId:", rutinaId);
          const idRutina = rutinaId ? rutinaId.id : null;
          console.log("ID de la rutina:", idRutina);

          const rutina = await getDetalleRutina(idRutina);
          console.log("Datos de la rutina:", rutina);
          setRutina(rutina);
        }
      } catch (error) {
        console.error("Error al obtener detalle del rutina:", error);
      }
    };
    if (mostrarInfo && rutinaId) {
      obtenerDetalleRutina();
    }
  }, [mostrarInfo, rutinaId]);
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
              <h4>Info rutina</h4>
              {/* AQUI DEBERIA MOSTRAR LA INFO DE LA RUTINA (SESIONES, OBJETIVO, CLIENTE ASIGNADO) */}
              <button onClick={cerrarInfo}>Volver</button>
            </div>
            {rutina ? (
              <>
                <p>
                  <strong>Objetivo:</strong> {rutina.objective}
                </p>
                <p>
                  <strong>Sesiones:</strong> {rutina.trainingSessions.length}
                </p>

                {/* Mostrar información de cada sesión */}
                <div style={{ marginLeft: "20px" }}>
                  {rutina.trainingSessions.map((sesion, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: "15px",
                        border: "1px solid #ccc",
                        padding: "10px",
                      }}
                    >
                      <p>
                        <strong>Sesión {index + 1}:</strong>
                      </p>
                      <p>
                        <strong>Ejercicio:</strong> {sesion.exercise.name}
                      </p>
                      <p>
                        <strong>Repeticiones:</strong> {sesion.rep}
                      </p>
                      <p>
                        <strong>Sets:</strong> {sesion.sets}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>Cargando información de la rutina...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
