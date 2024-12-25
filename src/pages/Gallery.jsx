// eslint-disable-next-line no-unused-vars
import React from "react";
import { HomeProgram } from "../components/HomeProgram";
import { GalleryImages } from "../components/GalleryImages";
import { GalleryHeadings } from "../components/GalleryHeadings";

export const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryHeadings />
      <GalleryImages />
      <HomeProgram />
    </div>
  );
};
