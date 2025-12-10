import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", dob: "", username: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handle = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await apiFetch("/signup", { method: "POST", body: form });
      // after sign up, direct to login
      navigate("/login");
    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={submit} className="space-y-3">
          <input placeholder="Name" value={form.name} onChange={handle("name")} className="w-full p-2 border rounded" />
          <input placeholder="DOB" value={form.dob} onChange={handle("dob")} type="date" className="w-full p-2 border rounded" />
          <input placeholder="Username" value={form.username} onChange={handle("username")} className="w-full p-2 border rounded" />
          <input placeholder="Password" value={form.password} onChange={handle("password")} type="password" className="w-full p-2 border rounded" />
          {err && <div className="text-red-600">{err}</div>}
          <button className="w-full py-2 bg-green-600 text-white rounded">Sign Up</button>
        </form>

        <div className="mt-4 text-sm">
          Already signed up? <Link to="/login" className="text-blue-600">Login Here</Link>
        </div>
      </div>
    </div>
  );
}
