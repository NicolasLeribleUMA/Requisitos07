// CitaCliente.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation";
import { getCitas, addCita } from "../../api/Citas"; // Ajusta la ruta según tu estructura

const CitaCliente = () => {
  const [citasCliente, setCitasCliente] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({
    objective: "",
    measureDate: "",
    trainer: "",
  });

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const data = await getCitas();
        setCitasCliente(data);
      } catch (error) {
        console.error("Error al obtener citas del cliente:", error);
      }
    };

    fetchCitas();
  }, []);

  const handleEnviarCita = async () => {
    try {
      // Realiza la lógica y la solicitud para agregar la nueva cita del cliente
      const formattedDate = new Date(nuevaCita.measureDate).toISOString();
      // Actualiza la nuevaCita con el formato correcto
      const updatedNuevaCita = { ...nuevaCita, measureDate: formattedDate };
      await addCita(updatedNuevaCita);

      // Actualiza la lista de citas después de agregar la nueva cita
      const updatedCitas = await getCitas();
      setCitasCliente(updatedCitas);

      // Limpia el estado de nuevaCita después de enviarla
      setNuevaCita({ objective: "", measureDate: "", trainer: "" });

      console.log("Nueva cita enviada:", nuevaCita);
    } catch (error) {
      console.error("Error al enviar la nueva cita:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Citas Pendientes del Cliente</h2>
      {citasCliente.map((cita) => (
        <div key={cita.id}>
          <h3>Motivo: {cita.objective}</h3>
          <p>Fecha: {cita.measureDate}</p>
          <p>Entrenador: {cita.trainer}</p>
        </div>
      ))}

      <h2>Pedir Nueva Cita</h2>
      <form>
        <label>Motivo de la cita:</label>
        <input
          type="text"
          value={nuevaCita.objective}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, objective: e.target.value })
          }
        />
        <br />
        <label>Fecha:</label>
        <input
          type="datetime-local"
          value={nuevaCita.measureDate}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, measureDate: e.target.value })
          }
        />
        <br />
        <label>Entrenador:</label>
        <input
          type="text"
          value={nuevaCita.trainer}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, trainer: e.target.value })
          }
        />
        <br />
        <button type="button" onClick={handleEnviarCita}>
          Enviar Cita
        </button>
      </form>
    </div>
  );
};

export default CitaCliente;
