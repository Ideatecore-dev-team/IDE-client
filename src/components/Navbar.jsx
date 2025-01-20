// eslint-disable-next-line no-unused-vars    
import React, { useState } from "react";    
import NavLogo from "../assets/images/nav-logo.png";    
import { NavLink } from "react-router-dom";    
import ButtonLink from "./Buttons/ButtonLink";    
import { MdMenu } from "react-icons/md";    
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for conditional rendering  
  
const Navbar = () => {    
  const [isMenuOpen, setIsMenuOpen] = useState(false);    
  
  return (    
    <nav className="flex w-full px-8 py-4 justify-between items-center bg-white z-50 sticky top-0 shadow-md">    
      {/* Logo */}    
      <NavLink to="/">    
        <img src={NavLogo} alt="Logo" />    
      </NavLink>    
  
      {/* Desktop Menu */}    
      <div className="menu-nav hidden lg:flex items-center gap-3">    
        <NavLink    
          className="flex p-3 justify-center items-center gap-2 text-sm font-bold text-neutral-2 hover:text-black"    
          to="/about"    
        >    
          ABOUT US    
        </NavLink>    
        <NavLink    
          className="flex p-3 justify-center items-center gap-2 text-sm font-bold text-neutral-2 hover:text-black"    
          to="/our-program"    
        >    
          OUR PROGRAM    
        </NavLink>    
        <NavLink    
          className="flex p-3 justify-center items-center gap-2 text-sm font-bold text-neutral-2 hover:text-black"    
          to="/gallery"    
        >    
          GALLERY    
        </NavLink>    
        <NavLink    
          className="flex p-3 justify-center items-center gap-2 text-sm font-bold text-neutral-2 hover:text-black"    
          to="/articles"    
        >    
          ARTICLE    
        </NavLink>    
        <ButtonLink color="bg-black hover:bg-neutral-2" to="/contact-us" caption="LET’S COLLABORATE" />    
      </div>    
  
      {/* Mobile Hamburger */}    
      <button    
        className="lg:hidden flex p-3 justify-center items-center size-12 rounded-lg bg-black text-white"    
        onClick={() => setIsMenuOpen(!isMenuOpen)}    
      >    
        <MdMenu size={24} />    
      </button>    
  
      {/* Mobile Dropdown Menu with Transition */}    
      <AnimatePresence> {/* Wrap with AnimatePresence for exit animations */}  
        {isMenuOpen && (    
          <motion.div  
            initial={{ opacity: 0, height: 0 }} // Initial state  
            animate={{ opacity: 1, height: "auto" }} // Animate when opening  
            exit={{ opacity: 0, height: 0 }} // Animate when closing  
            transition={{ duration: 0.3 }} // Transition duration  
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-4 lg:hidden z-40 overflow-hidden" // Added overflow-hidden to prevent content overflow  
          >  
            <NavLink    
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"    
              to="/about"    
              onClick={() => setIsMenuOpen(false)}    
            >    
              ABOUT US    
            </NavLink>    
            <NavLink    
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"    
              to="/our-program"    
              onClick={() => setIsMenuOpen(false)}    
            >    
              OUR PROGRAM    
            </NavLink>    
            <NavLink    
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"    
              to="/gallery"    
              onClick={() => setIsMenuOpen(false)}    
            >    
              GALLERY    
            </NavLink>    
            <NavLink    
              className="p-3 text-sm font-bold text-neutral-2 hover:text-black"    
              to="/articles"    
              onClick={() => setIsMenuOpen(false)}    
            >    
              ARTICLE    
            </NavLink>    
            <ButtonLink color="bg-black hover:bg-neutral-2" to="/contact-us" caption="LET’S COLLABORATE" />    
          </motion.div>    
        )}  
      </AnimatePresence>    
    </nav>    
  );    
};    
    
export default Navbar;    
