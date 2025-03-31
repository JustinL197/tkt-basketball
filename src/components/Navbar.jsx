import { Link } from "react-router-dom";
import Logo from "../assets/tkt_logo_trans_white.png";

const Navbar = () => {
  return (
    <nav className="bg-[#060a1f] shadow sticky top-0 z-50">
      <div className="max-w-[120rem] px-16 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="TKT Logo" className="h-12 w-auto" />
          <span
            className="text-[18px] font-black uppercase italic"
            style={{ color: "#ffffff" }}
          >
            TKT BASKETBALL
          </span>
        </Link>

        <div className="space-x-6 text-xs flex items-center">
          <Link to="/programs" className="text-white hover:underline">
            Programs
          </Link>
          <Link to="/events" className="text-white hover:underline">
            Events
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link
            to="/contact"
            className="bg-white text-[#000709] font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
