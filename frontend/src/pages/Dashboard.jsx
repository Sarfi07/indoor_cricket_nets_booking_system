import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import BookingList from "../components/BookingList";

export default function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/bookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setBookings(data.bookings || []);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [token]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded shadow">
        <div className="text-sm text-gray-500">nexaX</div>
        <h2 className="text-2xl font-semibold">Welcome, {user?.name || user?.username || "User"}</h2>
        <p className="mt-2 text-gray-600">Upcoming bookings</p>

        <div className="mt-4">
          <BookingList bookings={bookings} />
        </div>

        <div className="mt-6">
          <Link to="/book" className="px-4 py-2 bg-blue-600 text-white rounded">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
