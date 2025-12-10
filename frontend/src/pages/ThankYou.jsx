import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-10 rounded shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank You for Booking</h2>
        <p className="text-gray-600 mb-6">Your booking is confirmed.</p>
        <Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded">Home</Link>
      </div>
    </div>
  );
}
