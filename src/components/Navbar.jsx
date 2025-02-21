// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavLogo from "../assets/images/nav-logo.png";
import { NavLink } from "react-router-dom";
import ButtonLink from "./Buttons/ButtonLink";
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for conditional rendering

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <NavLink to="/">
        <img src={NavLogo} alt="Logo" onClick={scrollToTop} />
      </NavLink>

      {/* Desktop Menu */}
      <div className="items-center hidden gap-3 menu-nav lg:flex">
        <NavLink
          className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-neutral-2 hover:text-black"
          to="/about"
          onClick={scrollToTop}
        >
          ABOUT US
        </NavLink>
        <NavLink
          className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-neutral-2 hover:text-black"
          to="/our-program"
          onClick={scrollToTop}
        >
          OUR PROGRAM
        </NavLink>
        <NavLink
          className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-neutral-2 hover:text-black"
          to="/gallery"
          onClick={scrollToTop}
        >
          GALLERY
        </NavLink>
        <NavLink
          className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-neutral-2 hover:text-black"
          to="/articles"
          onClick={scrollToTop}
        >
          ARTICLE
        </NavLink>
        <ButtonLink
          color="bg-black hover:bg-neutral-2"
          to="/contact-us"
          caption="LET’S COLLABORATE"
          onClick={scrollToTop}
        />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="flex items-center justify-center p-3 text-white bg-black rounded-lg lg:hidden size-12"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MdMenu size={24} />
      </button>

      {/* Mobile Dropdown Menu with Transition */}
      <AnimatePresence>
        {" "}
        {/* Wrap with AnimatePresence for exit animations */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Initial state
            animate={{ opacity: 1, height: "auto" }} // Animate when opening
            exit={{ opacity: 0, height: 0 }} // Animate when closing
            transition={{ duration: 0.3 }} // Transition duration
            className="absolute left-0 z-40 flex flex-col w-full gap-4 p-4 overflow-hidden bg-white shadow-lg top-16 lg:hidden" // Added overflow-hidden to prevent content overflow
          >
            <NavLink
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"
              to="/about"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop;
              }}
            >
              ABOUT US
            </NavLink>
            <NavLink
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"
              to="/our-program"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop;
              }}
            >
              OUR PROGRAM
            </NavLink>
            <NavLink
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"
              to="/gallery"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop;
              }}
            >
              GALLERY
            </NavLink>
            <NavLink
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"
              to="/articles"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop;
              }}
            >
              ARTICLE
            </NavLink>
            <ButtonLink
              color="bg-black hover:bg-neutral-2"
              to="/contact-us"
              caption="LET’S COLLABORATE"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
