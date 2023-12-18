// Entrenamiento.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation";
import { getRutinas } from "../../api/Rutinas"; // Ajusta la ruta según tu estructura
import { getSesiones } from "../../api/Sesiones";
import "./Entrenamiento.css"; // Archivo CSS para estilos

const Entrenamiento = () => {
  const [rutinas, setRutinas] = useState([]);
  const [sesiones, setSesiones] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el ítem seleccionado
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar/ocultar la ventana emergente
  const [comentarios, setComentarios] = useState(""); // Estado para almacenar comentarios
  const [url, setURL] = useState(""); // Estado para almacenar la URL
  const [completado, setCompletado] = useState(false); // Estado para almacenar si se ha completado o no

  useEffect(() => {
    // Obtener la información de rutinas y sesiones cuando se monta el componente
    const fetchRutinas = async () => {
      try {
        const data = await getRutinas();
        setRutinas(data);
      } catch (error) {
        console.error("Error al obtener rutinas:", error);
      }
    };

    const fetchSesiones = async () => {
      try {
        const data = await getSesiones();
        setSesiones(data);
      } catch (error) {
        console.error("Error al obtener sesiones:", error);
      }
    };

    fetchRutinas();
    fetchSesiones();
  }, []);

  const handleVerItem = (item) => {
    // Lógica para mostrar la ventana emergente al hacer clic en un ítem
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    // Lógica para cerrar la ventana emergente al hacer clic en el botón de cerrar o en otro lugar
    setSelectedItem(null);
    setShowPopup(false);
  };

  const handleValorar = () => {
    // Lógica para manejar la acción de valorar
    console.log("Valorando...");
    // Puedes mostrar dos campos de texto para comentarios y URL
    setShowPopup(true);
  };

  const handleGuardarValoracion = () => {
    // Lógica para guardar la valoración con comentarios y URL
    console.log("Guardando valoración...");
    //addCompletado(completado);
    // Puedes realizar acciones adicionales aquí, como enviar los datos al servidor
    // y luego cerrar la ventana emergente
    handleClosePopup();
  };

  return (
    <div className="entrenamiento-container">
      <Navbar />
      <h2>Entrenamiento del Cliente</h2>

      <div className="entrenamiento-section">
        <div>
          <h3>Rutinas</h3>
          {rutinas.map((rutina) => (
            <div key={rutina.id} className="rutina-item">
              <h4 onClick={() => handleVerItem(rutina)}>{rutina.objective}</h4>
              {/* Otros detalles de la rutina */}
            </div>
          ))}
        </div>

        <div>
          <h3>Sesiones</h3>
          {sesiones.map((sesion) => (
            <div key={sesion.id} className="sesion-item">
              <h4 onClick={() => handleVerItem(sesion)}>
                ID Sesión: {sesion.id}
              </h4>
              <h4>Repeticiones: {sesion.rep}</h4>
              <h4>Series: {sesion.sets}</h4>
              {/* Otros detalles de la sesión */}
            </div>
          ))}
        </div>
      </div>

      {/* Ventana emergente */}
      {showPopup && (
        <div className="popup">
          <h3>
            {selectedItem ? "Progreso de la Rutina" : "Progreso de la Sesión"}
          </h3>
          {/* Barra de progreso */}
          <progress value="50" max="100"></progress>

          {/* Campos de texto para comentarios y URL */}
          <label>
            Comentarios:
            <input
              type="text"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            />
          </label>

          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </label>

          {/* Casillas de verificación para completado */}
          <div>
            <label>
              Completado:
              <input
                type="checkbox"
                checked={completado}
                onChange={() => setCompletado(!completado)}
              />
              Sí
            </label>

            <label>
              <input
                type="checkbox"
                checked={!completado}
                onChange={() => setCompletado(!completado)}
              />
              No
            </label>
          </div>

          {/* Botón de guardar valoración */}
          <button onClick={handleGuardarValoracion}>Guardar Valoración</button>
          {/* Botón de cerrar */}
          <button onClick={handleClosePopup}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Entrenamiento;
