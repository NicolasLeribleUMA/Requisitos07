import React from "react";
import Navbar from "../../components/Navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Citas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Estado para almacenar las citas en memoria
  const [citas, setCitas] = useState([
    { id: 1, nombreCliente: "Cliente 1", fecha: "2023-01-01", hora: "10:00" },
    { id: 2, nombreCliente: "Cliente 2", fecha: "2023-01-02", hora: "14:30" },
    // Agrega más citas según sea necesario
  ]);

  // Función para aceptar una cita
  const aceptarCita = (citaId) => {
    setCitas((prevCitas) =>
      prevCitas.filter((cita) => {
        if (cita.id === citaId) {
          console.log(`Cita con ID ${citaId} aceptada`);
          // Lógica para aceptar la cita (puedes implementar la lógica real aquí)
          return false; // Elimina la cita aceptada
        }
        return true; // Mantén las demás citas sin cambios
      })
    );
  };

  // Función para modificar una cita
  const modificarCita = (citaId, nuevaFecha, nuevaHora) => {
    setCitas((prevCitas) =>
      prevCitas.map((cita) => {
        if (cita.id === citaId) {
          console.log(
            `Cita con ID ${citaId} modificada a ${nuevaFecha} ${nuevaHora}`
          );
          // Lógica para modificar la cita (puedes implementar la lógica real aquí)
          return { ...cita, fecha: nuevaFecha, hora: nuevaHora };
        }
        return cita; // Mantén las demás citas sin cambios
      })
    );
  };

  // Función para eliminar una cita
  const eliminarCita = (citaId) => {
    setCitas((prevCitas) =>
      prevCitas.filter((cita) => {
        if (cita.id === citaId) {
          console.log(`Cita con ID ${citaId} eliminada`);
          // Lógica para eliminar la cita (puedes implementar la lógica real aquí)
          return false; // Elimina la cita
        }
        return true; // Mantén las demás citas sin cambios
      })
    );
  };
  const handleModificar = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAceptar = () => {
    // Lógica para aceptar la cita con la fecha seleccionada
    setShowDatePicker(false);
  };

  const handleCancelar = () => {
    // Lógica para cancelar la modificación de la cita
    setShowDatePicker(false);
  };

  return (
    <body>
      <Navbar />

      <div>
        <h2>Citas Pendientes</h2>
        {citas.map((cita) => (
          <div
            key={cita.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{cita.nombreCliente}</h3>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
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
                <button onClick={handleAceptar}>Aceptar</button>
                <button onClick={handleCancelar}>Cancelar</button>
              </div>
            )}

            <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </body>
  );
};
export default Citas;
