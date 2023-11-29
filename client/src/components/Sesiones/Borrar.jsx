import React from "react";
import { EliminarSesion } from "../../api/Sesiones";
const Borrar = ({
  preguntaBorrado,
  cierraPreguntaBorrado,
  abrirVentanaConfirmacionBorrado,
  mostrarVentanaConfirmacionBorrado,
  cerrarVentanaConfirmacionBorrado,
  sesionID,
}) => {
  const handleEliminarSesion = async () => {
    try {
      // Llama a la función para eliminar el ejercicio
      await EliminarSesion(sesionID);
      // Muestra la ventana de confirmación de borrado
      abrirVentanaConfirmacionBorrado();
    } catch (error) {
      console.error("Error al eliminar la sesion:", error);
      // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje al usuario)
    }
  };
  return (
    <>
      {preguntaBorrado && (
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
              <h4>¿Está seguro de borrar esta sesión?</h4>
              <button onClick={handleEliminarSesion}>Si</button>
              <button onClick={cierraPreguntaBorrado}>No</button>
              {/* Cierra la ventana y te da mensaje positivo pero no borra nada aún!!!! */}
            </div>
          </div>
        </div>
      )}

      {mostrarVentanaConfirmacionBorrado && (
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
              <h4>La sesión ha sido eliminada correctamente</h4>
              <button onClick={cerrarVentanaConfirmacionBorrado}>Ok</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Borrar;
