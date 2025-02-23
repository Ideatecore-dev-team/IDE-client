/* eslint-disable react/prop-types */  
import React, { useState, useEffect } from "react";  
import PropTypes from "prop-types";  
import { 
  SiLinkedin, 
  SiInstagram, 
  SiYoutube, 
  SiFacebook,
  SiTiktok, 
  SiX,
} from "react-icons/si";  
import { fetchCompanyInfo } from "../api/api"; // Import the fetch function

export const Social = ({ hideAt }) => {  
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    instagram: "",
    youtube: "",
    facebook: "",
    tiktok: "",
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

  // Create an array of icon components
  const icons = [
    { name: "facebook", icon: <SiFacebook />, link: socialLinks.facebook },
    { name: "instagram", icon: <SiInstagram />, link: socialLinks.instagram },
    { name: "x", icon: <SiX />, link: socialLinks.x },
    { name: "linkedin", icon: <SiLinkedin />, link: socialLinks.linkedin },
    { name: "youtube", icon: <SiYoutube />, link: socialLinks.youtube },
    { name: "tiktok", icon: <SiTiktok />, link: socialLinks.tiktok },

  ];

  // Function to create rows of icons
  const createRows = (icons, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < icons.length; i += itemsPerRow) {
      const row = icons.slice(i, i + itemsPerRow);
      rows.push(
        <div key={i} className="flex items-center gap-3">
          {row.map((iconObj) => (
            <a
              key={iconObj.name}
              href={iconObj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-12 h-12 justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover"
            >
              {iconObj.icon}
            </a>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (  
    <div className={`social-media flex flex-col gap-3 self-stretch text-white ${visibilityClass}`}>
      {createRows(icons, 4)}
    </div>  
  );  
};  

Social.propTypes = {  
  hideAt: PropTypes.oneOf(["mobile", "desktop", ""]),  
};  

Social.defaultProps = {  
  hideAt: "",  
};
