// Entrenamiento.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation";
import { Link, useParams } from "react-router-dom";
import { getCliente } from "../../api/Clientes";

const VerEntrenamiento = () => {
  const { clienteId } = useParams();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        // Llama a tu función para obtener el cliente desde la base de datos
        const data = await getCliente(clienteId); // Ajusta según tu API
        setCliente(data);
      } catch (error) {
        console.error("Error al obtener el cliente:", error);
      }
    };

    fetchCliente();
  }, [clienteId]);

  if (!cliente) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>Entrenamiento del Cliente</h2>

      <div className="entrenamiento-container">
        {/* Información del Cliente */}
        <div className="cliente-info-container">
          <h3>Información del Cliente</h3>
          <p>Nombre: {clienteId.user}</p>
          {/* Otros detalles del cliente */}
        </div>

        {/* Valoración y Progreso */}
        <div className="valoracion-progreso-container">
          <h3>Valoración y Progreso</h3>
        </div>
      </div>

      <Link to="/entrenador/home" className="entrenamiento-link-button">
        Atrás
      </Link>
    </div>
  );
};

export default VerEntrenamiento;
