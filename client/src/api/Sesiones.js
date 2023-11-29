import axios from 'axios';

const API_URL = 'http://localhost:8000/backend/';

export const getSesiones = async () => {
  const _token  = localStorage.getItem('authToken');
  console.log('Token:', _token);
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}sessions`, config);
  return response.data;
};

export const getDetalleSesion = async (sesionId) => {
  const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}sessions/${sesionId}/`, config);
  return response.data;
};

export const ModificarSesion = async (id, datosModificados) => {
  const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(datosModificados);
  const response = await axios.patch(`${API_URL}sessions/${id}/`, JSON.stringify(datosModificados), config); 
  return response.data;
};

export const addSesion= async (nuevaSesion) => {
  try {
    const _token = localStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(`${API_URL}sessions/`, nuevaSesion, config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al añadir sesion:', error);
    throw error;
  }
};

export const EliminarSesion = async (sesion) => {
  const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };
  const response = await axios.delete(`${API_URL}sessions/${sesion}/`, config); 
  return response.data;
};
export const obtenerIDEntrenador = async () => {
  try {
    const _token = localStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
      },
    };

    const response = await axios.get(`${API_URL}trainerGetID`, config);
    console.log('Usuario autenticado:', response.data.trainerID);
    return response.data.trainerID;
  } catch (error) {
    console.error('Error al obtener el ID del entrenador:', error);
    throw error;
  }
};