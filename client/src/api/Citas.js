import axios from "axios";

const API_URL = "http://localhost:8000/backend/";

export const getCitas = async () => {
  const _token = localStorage.getItem("authToken");
  console.log("Token:", _token);
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}appointments`, config);
  return response.data;
};

export const getDetalleEjercicio = async (ejercicioId) => {
  console.log("Llamada a getDetalleEjercicio con ID:", ejercicioId);
  const _token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(
    `${API_URL}exercises/${ejercicioId}/`,
    config
  );
  return response.data;
};

export const ModificarCita = async (id, datosModificados) => {
  const _token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
      "Content-Type": "application/json",
    },
  };
  console.log(datosModificados);
  const response = await axios.patch(
    `${API_URL}appointments/${id}/`,
    JSON.stringify(datosModificados),
    config
  );
  return response.data;
};

export const addCita = async (nuevoEjercicio) => {
  try {
    const _token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}appointments/`,
      nuevoEjercicio,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al añadir ejercicio:", error);
    throw error;
  }
};

export const EliminarCita = async (ejercicio) => {
  const _token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };
  const response = await axios.delete(
    `${API_URL}appointments/${ejercicio}/`,
    config
  );
  return response.data;
};
export const obtenerIDEntrenador = async () => {
  try {
    const _token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
      },
    };

    const response = await axios.get(`${API_URL}trainerGetID`, config);
    console.log("Usuario autenticado:", response.data.trainerID);
    return response.data.trainerID;
  } catch (error) {
    console.error("Error al obtener el ID del entrenador:", error);
    throw error;
  }
};
