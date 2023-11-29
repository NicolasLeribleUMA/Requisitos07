import React, { useState, useEffect } from "react";
import { getEjercicios } from "../../api/Ejercicios";
import { addSesion } from "../../api/Sesiones";
const Añadir = ({
  mostrarVentana,
  cerrarVentana,
  abrirVentanaConfirmacion,
  mostrarVentanaConfirmacion,
  cerrarVentanaConfirmacion,
}) => {
  const [ejercicios, setEjercicios] = useState([]);
  const [selectedEjercicios, setSelectedEjercicios] = useState([]);
  const [rep, setRepeticiones] = useState(10);
  const [sets, setSeries] = useState(3);
  const [sesionActual, setSesionActual] = useState({
    ejercicios: [],
    rep: 10,
    sets: 3,
  });
  useEffect(() => {
    // Obtener la lista de ejercicios existentes al cargar el componente
    const fetchEjercicios = async () => {
      try {
        const data = await getEjercicios();
        setEjercicios(data);
      } catch (error) {
        console.error("Error al obtener ejercicios:", error);
      }
    };

    fetchEjercicios();
  }, []);

  const handleAñadirEjercicio = (e) => {
    // Agregar el ejercicio seleccionado a la lista de ejercicios
    e.preventDefault();

    if (!selectedEjercicios.includes(selectedEjercicios)) {
      setSelectedEjercicios([...selectedEjercicios, selectedEjercicios]);
    }
  };

  const handleEliminarEjercicio = (ejercicioId) => {
    // Eliminar el ejercicio de la lista de ejercicios seleccionados
    const updatedEjercicios = selectedEjercicios.filter(
      (ejercicio) => ejercicio !== ejercicioId
    );
    setSelectedEjercicios(updatedEjercicios);
  };

  const handleAñadirSesion = async () => {
    // Lógica para agregar la sesión al backend
    try {
      // Realizar la llamada a la API para agregar la sesión
      const nuevaSesion = Object.values(selectedEjercicios).map(
        (ejercicio) => ({
          rep: rep,
          sets: sets,
          exercise: ejercicio.id,
        })
      );

      console.log("Cuerpo de la Solicitud:", nuevaSesion);
      // const primeraSesion = nuevaSesion[0];

      await addSesion(nuevaSesion);

      // Mostrar la ventana de confirmación
      abrirVentanaConfirmacion();
    } catch (error) {
      console.error("Error al agregar la sesión:", error);
      if (error.response) {
        // El servidor respondió con un código de estado diferente de 2xx
        console.error("Mensaje de error del servidor:", error.response.data);
      }
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
              <h3>Nueva Sesión</h3>
              <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            <p style={{ marginRight: "100px" }}>
              Ejercicios:
              <select
                id="Ejercicios"
                name="Ejercicios"
                value={
                  selectedEjercicios.length > 0 ? selectedEjercicios[0].id : ""
                }
                onChange={(e) => {
                  const selectedId = e.target.value;
                  setSelectedEjercicios([{ rep, sets, id: selectedId }]);
                }}
              >
                {/* <option value="">Seleccionar ejercicio</option> */}
                {ejercicios.map((ejercicio) => (
                  <option key={ejercicio.id} value={ejercicio.id}>
                    {ejercicio.name}
                  </option>
                ))}
              </select>
            </p>
            <button onClick={handleAñadirEjercicio}>Añadir ejercicio</button>
            <ul>
              {selectedEjercicios.map((ejercicio) => (
                <li key={`${ejercicio.id}-${ejercicio.name}`}>
                  {ejercicio.name} {/* Mostrar el nombre del ejercicio */}
                  <button onClick={() => handleEliminarEjercicio(ejercicio.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <p>
              Repeticiones:{" "}
              <input
                type="number"
                min="1"
                placeholder="1"
                value={rep}
                onChange={(e) => setRepeticiones(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </p>
            <p>
              Series:{" "}
              <input
                type="number"
                min="1"
                placeholder="1"
                value={sets}
                onChange={(e) => setSeries(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleAñadirSesion}>Confirmar</button>
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
              <h4>La sesión ha sido añadida</h4>
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
