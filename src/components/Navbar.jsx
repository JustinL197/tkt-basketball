import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icon
import Logo from "../assets/tkt_logo_trans_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#060a1f] shadow sticky top-0 z-50">
      <div className="max-w-[120rem] px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="TKT Logo" className="h-12 w-auto" />
          <span className="text-[18px] font-black uppercase italic text-white">
            TKT BASKETBALL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm items-center">
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

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-4 bg-[#060a1f]">
          <Link
            to="/programs"
            onClick={toggleMenu}
            className="text-white text-sm hover:underline"
          >
            Programs
          </Link>
          <Link
            to="/events"
            onClick={toggleMenu}
            className="text-white text-sm hover:underline"
          >
            Events
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-white text-sm hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="bg-white text-[#000709] font-semibold px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
