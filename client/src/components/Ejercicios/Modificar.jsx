import React from "react";

const Modificar = ({
  modificarInfo,
  modifCerrarInfo,
  abrirVentanaConfirmacionModif,
  mostrarVentanaConfirmacionModif,
  cerrarVentanaConfirmacionModif,
}) => {
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
              Nombre: <input type="text" style={{ marginLeft: "10px" }} />
            </p>

            <p>
              Tipo: <input type="text" style={{ marginLeft: "10px" }} />
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
              Link: <input type="text" style={{ marginLeft: "10px" }} />
            </p>
            <p>
              Descripcion: <textarea class="textarea resize-ta"></textarea>
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input type="checkbox" value="Privado" /> Privado{" "}
              </label>

              <button onClick={abrirVentanaConfirmacionModif}>Confirmar</button>
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
