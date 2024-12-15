import React from "react";
import { SiLinkedin, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

export const Social = ({ hideAt }) => {
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
      <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
        <SiLinkedin />
      </Link>
      <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
        <SiInstagram />
      </Link>
      <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
        <SiYoutube />
      </Link>
      <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
        <SiFacebook />
      </Link>
    </div>
  );
};
