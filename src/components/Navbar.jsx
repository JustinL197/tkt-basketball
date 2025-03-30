import { Link } from "react-router-dom";
import Logo from "../assets/tkt_logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="TKT Logo" className="h-10 w-auto" />
          <span className="text-xl font-black text-red-600 uppercase italic">
            TKT BASKETBALL
          </span>
        </Link>

        <div className="space-x-6 text-sm">
          <Link to="/programs" className="text-gray-700 hover:text-blue-500">
            Programs
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-500">
            Events
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
