// Citas.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getCitas,
  ModificarCita,
  addCita,
  EliminarCita,
  obtenerIDEntrenador,
} from "../../api/Citas"; // Ajusta la ruta según tu estructura

const Citas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [citasPendientes, setCitasPendientes] = useState([]);
  const [citasAceptadas, setCitasAceptadas] = useState([]);

  useEffect(() => {
    const fetchCitasEntrenador = async () => {
      try {
        const data = await getCitas();
        const citasPendientes = data.filter((cita) => !cita.aceptada);
        const citasAceptadas = data.filter((cita) => cita.aceptada);

        setCitasPendientes(citasPendientes);
        setCitasAceptadas(citasAceptadas);
      } catch (error) {
        console.error("Error al obtener citas del entrenador:", error);
      }
    };

    fetchCitasEntrenador();
  }, []);

  const aceptarCita = async (citaId) => {
    try {
      await ModificarCita(citaId, { aceptada: true });
      const citaAceptada = citasPendientes.find((cita) => cita.id === citaId);

      setCitasPendientes((prevCitas) =>
        prevCitas.filter((cita) => cita.id !== citaId)
      );
      setCitasAceptadas((prevCitas) => [...prevCitas, citaAceptada]);

      console.log(`Cita con ID ${citaId} aceptada`);
    } catch (error) {
      console.error("Error al aceptar la cita:", error);
    }
  };

  const eliminarCita = async (citaId) => {
    try {
      await EliminarCita(citaId);
      setCitasPendientes((prevCitas) =>
        prevCitas.filter((cita) => cita.id !== citaId)
      );
      setCitasAceptadas((prevCitas) =>
        prevCitas.filter((cita) => cita.id !== citaId)
      );

      console.log(`Cita con ID ${citaId} eliminada`);
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  const handleModificar = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAceptar = async (citaId) => {
    try {
      setShowDatePicker(false);
      await ModificarCita(citaId, { measureDate: selectedDate });
    } catch (error) {
      console.error("Error al aceptar la cita con nueva fecha:", error);
    }
  };

  const handleCancelar = () => {
    setShowDatePicker(false);
  };

  return (
    <div>
      <Navbar />
      <h2>Citas Pendientes</h2>
      {citasPendientes.map((cita) => (
        <div
          key={cita.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{cita.user}</h3>
          <p>Fecha: {cita.measureDate}</p>
          <p>Objetivo: {cita.objective}</p>
          <button onClick={() => aceptarCita(cita.id)}>Aceptar</button>
          <button onClick={handleModificar}>Modificar</button>

          {showDatePicker && (
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Hora"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <button onClick={() => handleAceptar(cita.id)}>Aceptar</button>
              <button onClick={handleCancelar}>Cancelar</button>
            </div>
          )}

          <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
        </div>
      ))}

      <h2>Citas Aceptadas</h2>
      {citasAceptadas.map((cita) => (
        <div
          key={cita.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{cita.user}</h3>
          <p>Fecha: {cita.measureDate}</p>
          <p>Objetivo: {cita.objective}</p>
        </div>
      ))}
    </div>
  );
};

export default Citas;
