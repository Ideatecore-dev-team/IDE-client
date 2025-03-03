/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";  
import PropTypes from "prop-types"; // Still useful for prop validation
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { fetchCompanyInfo } from "../api/api"; // Import the fetch function


export const ContactDetails = ({
  textColor = "text-black",
  iconColor = "text-black",
}) => {

  const [socialLinks, setSocialLinks] = useState({
    phone: "",
    addrese: "",
    email: "",
  });

  useEffect(() => {
    const getCompanyInfo = async () => {
      const links = await fetchCompanyInfo(); // Use the fetch function
      setSocialLinks(links);
    };

    getCompanyInfo();
  }, []);
  return (
    <div className="details flex flex-col items-start gap-4 w-56">
      <div className="detail flex items-center gap-3">
        <MdLocalPhone className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal w-[192px] ${textColor}`}>
          {socialLinks.phone}
        </p>
      </div>
      <div className="detail flex items-center gap-3">
        <MdEmail className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal w-[192px] ${textColor}`}>
          {socialLinks.email}
        </p>
      </div>
      <div className="detail flex items-center gap-3">
        <MdLocationOn className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal w-[192px] ${textColor}`}>
          {socialLinks.addrese}
        </p>
      </div>
    </div>
  );
};

// Only keep PropTypes for validation
ContactDetails.propTypes = {
  textColor: PropTypes.string, // Must be a string
  iconColor: PropTypes.string, // Must be a string
};
