// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/docs/'; // Reemplaza con la URL de tu API Django

export const getEjercicios = async () => {
  const response = await axios.get(`${API_URL}exercises/`);
  return response.data;
};