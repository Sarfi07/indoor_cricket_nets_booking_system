import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const data = await apiFetch("/login", {
        method: "POST",
        body: { username, password },
      });
      // backend expected to return { token, user }
      login({ token: data.token, user: data.user });
      navigate("/dashboard");
    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Login here</h2>
        <form onSubmit={submit} className="space-y-3">
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border rounded" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border rounded" />
          {err && <div className="text-red-600">{err}</div>}
          <button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
        </form>

        <div className="mt-4 text-sm">
          Didn't register? <Link to="/signup" className="text-blue-600">sign up here</Link>
        </div>
      </div>
    </div>
  );
}
