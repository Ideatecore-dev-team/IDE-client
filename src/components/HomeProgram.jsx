/* eslint-disable no-unused-vars */    
import React, { useEffect, useState } from "react";    
import OurProgramBanner from "../assets/images/our-program-banner.png";    
import ButtonLink from "./Buttons/ButtonLink";    
import { motion } from "framer-motion";     
  
export const HomeProgram = () => {    
  const [isVisible, setIsVisible] = useState(false);        
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);   
    
  const handleScroll = () => {        
    const rect = document.getElementById("home-program").getBoundingClientRect();        
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
      id="home-program"      
      className="details-section flex justify-center items-center self-stretch"      
      initial={isMobile ? {} : { opacity: 0, x: -1000 }} // No animation for mobile     
      animate={isMobile ? { opacity: 1, x: 0 } : (isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -1000 })} // Conditional animation      
      transition={{ duration: 1, ease: "easeInOut" }}      
    >      
      <div className="ourprog-section flex justify-center items-start self-stretch">    
        <div className="ourprog-container flex w-full xs:px-6 lg:w-[1224px] py-12 flex-col lg:flex-row-reverse items-start lg:content-between lg:justify-between xs:gap-6">    
          <img    
            src={OurProgramBanner}    
            className="w-full lg:w-[750px] lg:h-[250px]"    
            alt=""    
          />    
          <div className="heading-button lg:w-[440px] flex flex-col items-start gap-3 lg:gap-5 xs:self-stretch">    
            <h2 className="text-3xl font-bold">    
              Bersama Mewujudkan Masa Depan Indonesia yang Lebih Baik    
            </h2>    
            <p className="text-base">    
              Kami memiliki berbagai program di bidang riset dan politik, pendidikan dan hukum, sosial, seni budaya     
              dan keagamaan, kewirausahaan, serta inovasi media dan kreatif sebagai wadah bagi seluruh anak bangsa untuk berkreasi,     
              berproses, dan mempersiapkan diri.     
            </p>    
            <ButtonLink caption="Check Our Program" color="bg-brand-red hover:bg-brand-red-hover" to="/our-program"/>    
          </div>    
        </div>    
      </div>    
    </motion.div>    
  );    
};    
  
export default HomeProgram;    
