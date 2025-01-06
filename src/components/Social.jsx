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
      <Link className="flex size-[48px] justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover">
        <SiLinkedin />
      </Link>
      <Link className="flex size-[48px] justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover">
        <SiInstagram />
      </Link>
      <Link className="flex size-[48px] justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover">
        <SiYoutube />
      </Link>
      <Link className="flex size-[48px] justify-center items-center p-3 rounded-lg bg-brand-red hover:bg-brand-red-hover">
        <SiFacebook />
      </Link>
    </div>
  );
};
