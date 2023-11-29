import React, { useState } from "react";
import { addEjercicio, obtenerIDEntrenador } from "../../api/Ejercicios";
const Añadir = ({
  mostrarVentana,
  cerrarVentana,
  abrirVentanaConfirmacion,
  mostrarVentanaConfirmacion,
  cerrarVentanaConfirmacion,
}) => {
  const [name, setNombre] = useState("");
  const [type, setTipo] = useState("");
  const [desc, setDescripcion] = useState("");
  const [videoURL, setLink] = useState("");
  const [trainer, setTrainer] = useState("");
  const [isPrivate, setPrivado] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const trainerID = await obtenerIDEntrenador();
      // Crear un objeto con los datos del nuevo ejercicio
      const nuevoEjercicio = {
        name,
        type,
        videoURL,
        desc,
        isPrivate,
        trainer: trainerID,
      };

      // Llamar a la función para añadir ejercicio
      await addEjercicio(JSON.stringify(nuevoEjercicio));

      // Limpiar los campos después de añadir el ejercicio
      setNombre("");
      setTipo("");
      setLink("");
      setTrainer("");
      setDescripcion("");
      setPrivado(false);

      // Actualizar la lista de ejercicios en el componente padre
      abrirVentanaConfirmacion();
      //actualizarEjercicios();
    } catch (error) {
      console.error("Error al añadir ejercicio:", error);
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
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Nuevo Ejercicio</h3>
              <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            <p>
              Nombre:{" "}
              <input
                type="text"
                style={{ marginLeft: "10px" }}
                value={name}
                onChange={(e) => setNombre(e.target.value)}
              />
            </p>
            /
            <p>
              Tipo:{" "}
              <input
                type="text"
                style={{ marginLeft: "10px" }}
                value={type}
                onChange={(e) => setTipo(e.target.value)}
              />
            </p>
            {/**  Esto es para ponerlo en modo seleccion, pero son valores fijados
        <p style={{marginRight:'100px'}}>Link:  
        
          <select id="Link" name="Link">
          <option value="Cardio">Cardio</option>
          <option value="Fuerza">Fuerza</option>
          <option value="Flexibilidad">Flexibilidad</option>
          </select>
        </p>
        **/}
            <p>
              Link:{" "}
              <input
                type="text"
                style={{ marginLeft: "10px" }}
                value={videoURL}
                onChange={(e) => setLink(e.target.value)}
              />
            </p>
            {/* <p>Descripcion: <input type="text"  id="descripcion" style = {{marginLeft:'10px'}}/></p> */}
            <p>
              Descripcion:{" "}
              <textarea
                class="textarea resize-ta"
                value={desc}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input
                  type="checkbox"
                  value="Privado"
                  checked={isPrivate}
                  onChange={() => setPrivado(!isPrivate)}
                />{" "}
                Privado{" "}
              </label>

              <button onClick={handleSubmit}>Confirmar</button>
              {/* Este debería mostrar una ventana de ejercicio añadido y mostrarlo */}
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
              <h4>El ejercicio ha sido añadido</h4>
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
