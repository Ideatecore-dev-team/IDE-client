/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({
  caption,
  color = "",
  textColor = "text-white",
  to,
  width,
  onClick,
  disabled = false,
}) => {
  // Jika ada 'to', gunakan <Link> untuk navigasi
  if (to) {
    const handleLinkClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <Link
        className={`btn-link h-12 px-4 py-3 flex justify-center items-center ${color} ${textColor} rounded-md ${width}`}
        to={to}
        onClick={handleLinkClick}
      >
        <span className="text-base font-bold">{caption}</span>
      </Link>
    );
  }

  // Jika tidak ada 'to', gunakan <button> untuk aksi
  return (
    <button
      className={`btn-link h-12 px-4 py-3 flex justify-center items-center ${color} ${textColor} rounded-md ${width} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-base font-bold">{caption}</span>
    </button>
  );
};

export default ButtonLink;
