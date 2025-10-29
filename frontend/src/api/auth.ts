import api from "./axiosInstance";

export const signup = async (userData: { name: string; email: string; password: string }) => {
  const res = await api.post("api/auth/signup", userData);
  return res.data;
};

export const login = async (credentials: { email: string; password: string }) => {
  const res = await api.post("api/auth/login", credentials);
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await api.get("api/auth/me");
  return res.data;
};
