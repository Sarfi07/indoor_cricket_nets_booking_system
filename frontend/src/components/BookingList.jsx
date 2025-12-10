import React from "react";

export default function BookingList({ bookings = [] }) {
  if (!bookings.length) return <div className="text-gray-500">No upcoming bookings</div>;
  return (
    <div className="space-y-3">
      {bookings.map((b) => (
        <div key={b.id} className="p-3 rounded border bg-white">
          <div className="flex justify-between">
            <div>
              <div className="font-medium">{new Date(b.date).toLocaleDateString()}</div>
              <div className="text-sm text-gray-500">{b.time} • {b.duration} hr</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">Net {b.net}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
