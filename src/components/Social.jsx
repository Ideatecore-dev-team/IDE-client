/* eslint-disable react/prop-types */  
import React, { useState, useEffect } from "react";  
import PropTypes from "prop-types";  
import { SiLinkedin, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";  
import { fetchCompanyInfo } from "../api/api"; // Import the fetch function

export const Social = ({ hideAt }) => {  
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    instagram: "",
    youtube: "",
    facebook: "",
  });

  useEffect(() => {
    const getCompanyInfo = async () => {
      const links = await fetchCompanyInfo(); // Use the fetch function
      setSocialLinks(links);
    };

    getCompanyInfo();
  }, []);

  // Determine visibility class based on "hideAt" prop  
  const visibilityClass =  
    hideAt === "mobile"  
      ? "hidden md:flex" // Hidden on small screens, visible on medium and up  
      : hideAt === "desktop"  
      ? "flex md:hidden mt-4" // Visible on small screens, hidden on medium and up  
      : "flex"; // Default is visible everywhere  

  return (  
    <div  
      className={`social-media items-center gap-3 self-stretch text-white ${visibilityClass}`}  
    >  
      <a  
        href={socialLinks.linkedin}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="flex w-12 h-12 justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover"  
      >  
        <SiLinkedin />  
      </a>  
      <a  
        href={socialLinks.instagram}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="flex w-12 h-12 justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover"  
      >  
        <SiInstagram />  
      </a>  
      <a  
        href={socialLinks.youtube}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="flex w-12 h-12 justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover"  
      >  
        <SiYoutube />  
      </a>  
      <a  
        href={socialLinks.facebook}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="flex w-12 h-12 justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover"  
      >  
        <SiFacebook />  
      </a>  
    </div>  
  );  
};  

Social.propTypes = {  
  hideAt: PropTypes.oneOf(["mobile", "desktop", ""]),  
};  

Social.defaultProps = {  
  hideAt: "",  
};  