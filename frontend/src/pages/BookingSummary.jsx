import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingSummary() {
  const navigate = useNavigate();
  const booking = JSON.parse(sessionStorage.getItem("nexax_booking") || "{}");

  const confirm = async () => {
    // call booking API
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error("Booking failed");
      // clear session and go thanks
      sessionStorage.removeItem("nexax_booking");
      navigate("/thankyou");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
        <div className="space-y-2 text-gray-700">
          <div><strong>Selected Date:</strong> {booking.date}</div>
          <div><strong>Selected Time:</strong> {booking.time}</div>
          <div><strong>Selected Duration:</strong> {booking.duration} hr</div>
          <div><strong>Selected Net:</strong> {booking.net}</div>
          <div className="mt-4 text-lg font-bold">TOTAL PAYABLE: ₹{booking.price}</div>
        </div>

        <div className="mt-6">
          <button onClick={confirm} className="w-full py-2 bg-green-600 text-white rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
}
