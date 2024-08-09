import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const controls = useAnimation();

  // Handle scroll to change navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate navbar based on scroll position
  useEffect(() => {
    controls.start({
      opacity: isScrolled ? 1 : 0.8,
      transition: { duration: 0.3 },
    });
  }, [isScrolled, controls]);

  return (
    <motion.header
      className={`fixed w-full top-0 left-0 z-30 transition-colors duration-300 ${
        isScrolled ? "bg-transparant text-white" : "bg-transparant text-white"
      }`}
      animate={controls}
      initial={{ opacity: 0.8 }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/public/Logo.png" alt="Logo" className="w-10 h-10" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-2 text-base flex-grow font-poppins font-medium text-white">
          {["Mac", "iPhone", "iPad", "iWatch", "Support"].map((item) => (
            <NavItem
              key={item}
              label={item}
              to={`/${item.toLowerCase()}`}
              active={location.pathname === `/${item.toLowerCase()}`}
            />
          ))}
        </nav>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <img
            src="/public/Search.png"
            alt="Search"
            className="w-6 h-6 cursor-pointer"
          />

          {/* Shopping Bag Icon */}
          <img
            src="/public/Shopping Bag.png"
            alt="Shopping Bag"
            className="w-6 h-6 cursor-pointer"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-white rounded-2xl shadow-lg mt-2 p-4 absolute top-14 left-0 right-0 z-20">
          {["Mac", "iPhone", "iPad", "iWatch", "Support"].map((item) => (
            <MobileNavItem
              key={item}
              label={item}
              to={`/${item.toLowerCase()}`}
            />
          ))}
        </ul>
      )}
    </motion.header>
  );
}

function NavItem({ label, to, active }) {
  return (
    <Link
      to={to}
      className={`px-12 py-2 rounded-3xl ${
        active ? "bg-white text-black" : "hover:bg-primarycolor"
      } font-poppins font-medium`}
    >
      {label}
    </Link>
  );
}

function MobileNavItem({ label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="block px-4 py-2 font-poppins font-medium text-black hover:bg-gray-100"
      >
        {label}
      </Link>
    </li>
  );
}
