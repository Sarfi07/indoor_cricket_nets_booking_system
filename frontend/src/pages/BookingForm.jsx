import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { apiFetch } from "../api";

export default function BookingForm() {
  const { token } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [net, setNet] = useState(null);
  const [nets, setNets] = useState([]);
  const [available, setAvailable] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // load nets meta (net numbers)
    const initial = [1,2,3,4]; // adjust or fetch from backend
    setNets(initial.map(n=>({ number:n })));
  }, []);

  const check = async () => {
    setErr("");
    try {
      const data = await apiFetch("/availability", {
        method: "POST",
        token,
        body: { date, time, duration },
      });
      setAvailable(data.available);
      if (!data.available) setErr("Selected slot not available.");
    } catch (e) {
      setErr(e.message);
    }
  };

  const chooseNet = (n) => setNet(n);

  const proceed = () => {
    // store summary in session storage for the /summary page
    const payload = { date, time, duration, net: net?.number || null, price: 500 };
    sessionStorage.setItem("nexax_booking", JSON.stringify(payload));
    navigate("/summary");
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h3 className="text-xl font-semibold">Book a Net for Practice Now</h3>

        <div className="space-y-2">
          <label className="text-sm">Select Date</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full p-2 border rounded"/>
        </div>

        <div className="space-y-2">
          <label className="text-sm">Select Time</label>
          <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full p-2 border rounded"/>
        </div>

        <div className="space-y-2">
          <label className="text-sm">Duration (hours)</label>
          <select value={duration} onChange={(e)=>setDuration(Number(e.target.value))} className="w-full p-2 border rounded">
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button onClick={check} className="px-4 py-2 bg-gray-800 text-white rounded">Check Availability</button>
          <div className="flex-1 text-sm self-center text-gray-600">{available ? "Available" : "Not checked"}</div>
        </div>

        <div>
          <div className="text-sm font-medium mb-2">Select Net</div>
          <div className="grid grid-cols-2 gap-3">
            {nets.map(n => (
              <div key={n.number} className={`p-3 rounded border text-center cursor-pointer ${net?.number===n.number ? "bg-blue-50 border-blue-500" : "bg-white"}`} onClick={()=>chooseNet(n)}>
                Net {n.number}
              </div>
            ))}
          </div>
        </div>

        {err && <div className="text-red-600">{err}</div>}

        <div className="pt-2">
          <button disabled={!available || !net} onClick={proceed} className="w-full py-2 bg-blue-600 text-white rounded disabled:opacity-60">Continue</button>
        </div>
      </div>
    </div>
  );
}
