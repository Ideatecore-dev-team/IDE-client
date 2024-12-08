/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ caption }) => {
  return (
    <Link
      className="btn-link h-12 px-4 py-3 flex justify-center items-center bg-brand-red text-white rounded-md"
      to="#"
    >
      <span className=" text-base font-bold">{caption}</span>
    </Link>
  );
};

export default ButtonLink;
