import axios from "axios";

const api = axios.create({
  baseURL: "https://indoor-cricket-nets-booking-system.onrender.com", // change if using deployed backend
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
