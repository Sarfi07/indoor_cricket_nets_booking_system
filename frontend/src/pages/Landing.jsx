import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg p-8 shadow">
        <h1 className="text-3xl font-bold mb-2">Nexa X</h1>
        <p className="text-gray-600 mb-6">Welcome to NexaX Indoor Practice facility in Jorhat Town</p>

        <div className="flex gap-4">
          <Link to="/signup" className="px-6 py-3 bg-blue-600 text-white rounded">Get Started</Link>
          <Link to="/login" className="px-6 py-3 bg-gray-100 rounded">Login</Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="h-36 bg-gray-100 rounded flex items-center justify-center">img</div>
          <div className="h-36 bg-gray-100 rounded flex items-center justify-center">img</div>
        </div>
      </div>
    </div>
  );
}
