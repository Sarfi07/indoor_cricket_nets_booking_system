import React from "react";

export default function NetCard({ net, onSelect }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex items-center justify-between">
      <div>
        <div className="font-medium">Net {net.number}</div>
        <div className="text-sm text-gray-500">{net.type || "Practice net"}</div>
      </div>
      <button onClick={() => onSelect(net)} className="px-3 py-2 rounded bg-blue-600 text-white">Select</button>
    </div>
  );
}
