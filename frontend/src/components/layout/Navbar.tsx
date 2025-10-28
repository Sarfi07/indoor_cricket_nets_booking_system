import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Nexa X
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/features" className="hover:text-blue-600 transition">Features</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/login"
          className="hidden md:inline-block bg-gray-600 text-black px-4 py-2 rounded-lg hover:black-blue-700 transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-3 px-4 py-3">
            <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/features">Features</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/home"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
