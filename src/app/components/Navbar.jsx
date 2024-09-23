"use client";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside or on any of the menu links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] bg-black/60 backdrop-blur-md shadow-md z-50 rounded-full mt-3 px-6 py-2 flex justify-between items-center h-16">
      {/* Logo on the left */}
      <div
        className="flex-shrink-0 opacity-0 animate-fade-in"
        style={{ animationDelay: "0s" }}
      >
        <Image src="/assets/gymfit.png" alt="Logo" width={100} height={50} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {["home", "about", "services", "pricing", "contact"].map((item, index) => (
          <ScrollLink
            key={item}
            to={item}
            smooth={true}
            offset={-100}
            className="cursor-pointer text-lg font-medium text-white hover:text-purcolour relative group opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 1}s` }}
            onClick={closeMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span className="block h-0.5 bg-oracolour absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </ScrollLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } md:hidden overflow-hidden bg-black/90 backdrop-blur-md m-2 shadow-lg w-full absolute top-16 left-0 transition-max-height duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          {["home", "about", "services", "pricing", "contact"].map((item, index) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              offset={-100}
              className="cursor-pointer text-lg font-medium text-white hover:text-purcolour relative group opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.5}s` }}
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="block h-0.5 bg-oracolour absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
