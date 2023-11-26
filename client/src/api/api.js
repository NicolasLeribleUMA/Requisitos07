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