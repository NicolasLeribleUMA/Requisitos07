import axios from "axios";

const API_URL = "http://localhost:8000/backend/";

export const getCliente = async (clienteId) => {
    const _token = localStorage.getItem("authToken");
    console.log("Token:", _token);
    console.log("ID:",clienteId);
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
      },
    };

    const response = await axios.get(`${API_URL}clients/${clienteId}/`, config);
    return response.data;
};

export const ModificarCliente = async (clienteId, datos) => {
    const _token = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(`${API_URL}clients/${clienteId}/`, JSON.stringify(datos), config); 
  return response.data;
}