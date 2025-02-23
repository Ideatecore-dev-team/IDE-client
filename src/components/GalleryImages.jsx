/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Impor framer-motion
import useGalleryImages from "../hooks/useGalleryImages"; // Sesuaikan path

export const GalleryImages = () => {
  const { gallery, loading, error } = useGalleryImages();

  if (loading) {
    return (
      <div className="gallery-images w-full lg:w-[1224px] xs:px-6 flex pb-12 xs:flex-col xs:justify-center items-center gap-6 self-stretch lg:mx-auto border-b-[1px] border-neutral-3">
        <div className="flex justify-center items-center h-[802.98px] lg:h-[824px] w-full">
          <motion.div
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              className="animate-spin size-10 text-brand-red"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <div className="gallery-images w-full lg:w-[1224px] xs:px-6 flex pb-12 xs:flex-col xs:justify-center items-start lg:items-center gap-6 self-stretch lg:mx-auto border-b-[1px] border-neutral-3">
      <div className="gallery-frame-1 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        <img src={gallery.topLeft} alt="Top Left" className="w-full h-auto" />
        <img
          src={gallery.bottomLeft}
          alt="Bottom Left"
          className="w-full h-auto"
        />
      </div>
      <div className="gallery-frame-2 w-full lg:w-[392px] h-[824px]">
        <img
          src={gallery.center}
          alt="Center"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gallery-frame-3 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        <img src={gallery.topRight} alt="Top Right" className="w-full h-auto" />
        <img
          src={gallery.bottomRight}
          alt="Bottom Right"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
