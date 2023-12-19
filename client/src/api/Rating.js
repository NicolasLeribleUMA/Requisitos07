import axios from "axios";

const API_URL = "http://localhost:8000/backend/";

export const addRating = async (nuevoRating) => {
  try {
    const _token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Token ${_token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}ratings/`,
      nuevoRating,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al añadir valoracion:", error);
    throw error;
  }
};
export const getRating = async () => {
  const _token = localStorage.getItem("authToken");
  console.log("Token:", _token);
  const config = {
    headers: {
      Authorization: `Token ${_token}`,
    },
  };

  const response = await axios.get(`${API_URL}ratings`, config);
  return response.data;
};
