/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Still useful for prop validation
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

export const ContactDetails = ({
  textColor = "text-black",
  iconColor = "text-black",
}) => {
  return (
    <div className="details flex flex-col items-start gap-4 w-56">
      <div className="detail flex items-center gap-3">
        <MdLocalPhone className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal ${textColor}`}>
          +62-8225-8665-612
        </p>
      </div>
      <div className="detail flex items-center gap-3">
        <MdEmail className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal ${textColor}`}>
          secretary@ideindonesia.org
        </p>
      </div>
      <div className="detail flex items-center gap-3">
        <MdLocationOn className={`${iconColor} text-xl`} />
        <p className={`text-base font-normal ${textColor}`}>
          Jakarta, Indonesia
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
