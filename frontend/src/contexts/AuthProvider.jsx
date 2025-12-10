import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("nx_token"));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("nx_user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (token) localStorage.setItem("nx_token", token);
    else localStorage.removeItem("nx_token");
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("nx_user", JSON.stringify(user));
    else localStorage.removeItem("nx_user");
  }, [user]);

  const login = ({ token, user }) => {
    setToken(token);
    setUser(user);
  };
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
