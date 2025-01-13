/* eslint-disable react/prop-types */  
// eslint-disable-next-line no-unused-vars  
import React from "react";  
import { Link } from "react-router-dom";  
  
const ButtonLink = ({  
  caption,  
  color = "",  
  textColor = "text-white",  
  to,  
  width,  
}) => {  
  const handleClick = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: 'smooth' 
    });  
  };  
  
  return (  
    <Link  
      className={`btn-link h-12 px-4 py-3 flex justify-center items-center ${color} ${textColor} rounded-md ${width}`}  
      to={to}  
      onClick={handleClick} 
    >  
      <span className="text-base font-bold">{caption}</span>  
    </Link>  
  );  
};  
  
export default ButtonLink;  
