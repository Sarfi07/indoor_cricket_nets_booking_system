import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          nexaX
        </Link>

        <nav className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login" className="px-3 py-2 rounded-md hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="px-3 py-2 rounded-md bg-blue-600 text-white">Sign up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-gray-100">Dashboard</Link>
              <button onClick={handleLogout} className="px-3 py-2 rounded-md bg-red-500 text-white">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
