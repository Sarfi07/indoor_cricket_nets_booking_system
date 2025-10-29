export const setToken = (token: string) => {
  localStorage.setItem("jwt", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("jwt");
};

export const removeToken = (): void => {
  localStorage.removeItem("jwt");
};
