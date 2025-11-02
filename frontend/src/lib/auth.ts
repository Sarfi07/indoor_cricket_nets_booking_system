export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};

export const setUser = (user: string) => {
  localStorage.setItem("user", user);
}

export const getUser = (): string | null => {
  return localStorage.getItem("user");
}