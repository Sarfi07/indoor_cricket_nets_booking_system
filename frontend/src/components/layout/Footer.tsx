const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ODEON. All rights reserved.</p>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms</a>
          <a href="#" className="hover:text-blue-600 transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
