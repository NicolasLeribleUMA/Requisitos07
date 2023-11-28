import axios from 'axios';

const API_URL = 'http://localhost:8000/backend/';

export const getEjercicios = async () => {
  const _token  = localStorage.getItem('authToken');
  console.log('Token:', _token);
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}exercises`, config);
  console.log('Usuario autenticado:', response.data.user);
  return response.data;
};

export const getDetalleEjercicio = async (ejercicioId) => {
  const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}exercises/${ejercicioId}/`, config);
  return response.data;
};

export const ModificarEjercicio = async (id, datosModificados) => {
  const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(datosModificados);
  const response = await axios.patch(`${API_URL}exercises/${id}/`, JSON.stringify(datosModificados), config); 
  return response.data;
};
export const addEjercicio = async (nuevoEjercicio) => {
  try {
    const _token = localStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
        'Content-Type': 'application/json',
      },
    };
  
    

    const response = await axios.post(`${API_URL}clients/`, nuevoEjercicio, config);
    return response.data;
  } catch (error) {
    console.error('Error al añadir ejercicio:', error);
    throw error;
  }
};