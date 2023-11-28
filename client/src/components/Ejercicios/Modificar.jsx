import React, { useState, useEffect } from "react";
import { ModificarEjercicio } from "../../api/api";
const Modificar = ({
  modificarInfo,
  modifCerrarInfo,
  abrirVentanaConfirmacionModif,
  mostrarVentanaConfirmacionModif,
  cerrarVentanaConfirmacionModif,
  ejercicioActual,
}) => {
  const [name, setNombre] = useState("");
  const [type, setTipo] = useState("");
  const [videoURL, setLink] = useState("");
  const [desc, setDescripcion] = useState("");
  const [isPrivate, setPrivado] = useState(false);

  // Cuando se abra la ventana de modificación, actualizar los estados con los datos actuales
  useEffect(() => {
    if (modificarInfo && ejercicioActual) {
      setNombre(ejercicioActual.name);
      setTipo(ejercicioActual.type);
      setLink(ejercicioActual.videoURL);
      setDescripcion(ejercicioActual.desc);
      setPrivado(ejercicioActual.isPrivate);
    }
  }, [modificarInfo, ejercicioActual]);

  const handleConfirmarModificacion = async () => {
    // Construir objeto con los datos modificados
    const datosModificados = {
      name,
      type,
      videoURL,
      desc,
      isPrivate,
    };

    // Aquí deberías llamar a la función para enviar los datos modificados a la API
    const response = await ModificarEjercicio(
      ejercicioActual.id,
      datosModificados
    );
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
              <h3>Modificar Ejercicio</h3>
              <button onClick={modifCerrarInfo}>Cancelar</button>
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

              <button onClick={handleConfirmarModificacion}>Confirmar</button>
              {/* Este debería mostrar una ventana de ejercicio añadido y mostrarlo */}
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
              <h4>El ejercicio ha sido modificado</h4>
              <button onClick={cerrarVentanaConfirmacionModif}>Ok</button>
              {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modificar;
