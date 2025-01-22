/* eslint-disable no-unused-vars */      
import React, { useEffect, useState } from "react";      
import "./HomePartner.css";      
import Partner1 from "../assets/images/partner-1.png";      
import Partner2 from "../assets/images/partner-2.png";      
import Partner3 from "../assets/images/partner-3.png";      
import Partner4 from "../assets/images/partner-4.png";      
import { motion } from "framer-motion";         
  
export const HomePartner = () => {      
  const [isVisible, setIsVisible] = useState(false);      
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);    
      
  const handleScroll = () => {            
    const rect = document.getElementById("home-partners").getBoundingClientRect();            
    if (rect.top < window.innerHeight && rect.bottom >= 0) {            
      setIsVisible(true);            
    }            
  };         
      
  useEffect(() => {            
    window.addEventListener("scroll", handleScroll);            
    const handleResize = () => {      
      setIsMobile(window.innerWidth < 768); // Update mobile state on resize      
    };      
    window.addEventListener("resize", handleResize); // Listen for resize events      
      
    return () => {            
      window.removeEventListener("scroll", handleScroll);          
      window.removeEventListener("resize", handleResize); // Clean up the resize listener      
    };            
  }, []);            
      
  return (      
    <motion.div          
      id="home-partners"          
      className="details-section flex justify-center items-center self-stretch"          
      initial={isMobile ? {} : { opacity: 0, x: 1000 }} // No animation for mobile         
      animate={isMobile ? { opacity: 1, x: 0 } : (isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 1000 })} // Conditional animation   
      transition={{ duration: 1, ease: "easeInOut" }}          
    >       
      <div className="our-partner-section flex flex-col items-center self-stretch">      
        <div className="our-partner-container flex w-full xs:px-6 lg:w-[1224px] flex-col items-start">      
          <div className="heading flex items-center justify-center gap-6 self-stretch">      
            <h5 className="text-base font-bold">OUR PARTNERS</h5>      
            <hr className="border-b-[1px] flex-1 border-neutral-3" />      
          </div>      
          <div className="partners flex py-12 justify-center lg:justify-between items-start lg:items-center xs:content-start lg:gap-0 gap-y-6 gap-x-4 self-stretch flex-wrap lg:flex-nowrap">      
            <div className="partner partner-1 flex content-center items-center">      
              <img src={Partner1} alt="Partner 1" />      
            </div>      
            <div className="partner partner-2 flex content-center items-center">      
              <img src={Partner2} alt="Partner 2" />      
            </div>      
            <div className="partner partner-3 flex content-center items-center">      
              <img src={Partner3} alt="Partner 3" />      
            </div>      
            <div className="partner partner-4 flex content-center items-center">      
              <img src={Partner4} alt="Partner 4" />      
            </div>      
            <div className="partner partner-1 flex content-center items-center">      
              <img src={Partner1} alt="Partner 1" />      
            </div>      
          </div>      
        </div>      
      </div>      
    </motion.div>       
  );      
};      
      
export default HomePartner;      
