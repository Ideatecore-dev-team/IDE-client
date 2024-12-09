// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavLogo from "../assets/images/nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link>
          <img src={NavLogo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-gray-700">
            <a href="#about">ABOUT US</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="#program">OUR PROGRAM</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="#gallery">GALLERY</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="#article">ARTICLE</a>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-4 px-4 py-6 font-medium">
            <li>
              <a href="#about" className="block hover:text-gray-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#program" className="block hover:text-gray-300">
                OUR PROGRAM
              </a>
            </li>
            <li>
              <a href="#gallery" className="block hover:text-gray-300">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#article" className="block hover:text-gray-300">
                ARTICLE
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
