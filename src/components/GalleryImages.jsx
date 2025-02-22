import React, { useState, useEffect } from "react";
import { fetchGalleryImages } from "../api/api"; // Import the fetch function

export const GalleryImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchGalleryImages();
      setImages(fetchedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="gallery-images w-full lg:w-[1224px] xs:px-6 flex pb-12 xs:flex-col xs:justify-center items-start lg:items-center gap-6 self-stretch lg:mx-auto border-b-[1px] border-neutral-3">
      <div className="gallery-frame-1 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        {images.slice(3, 5).reverse().map((image, index) => (
          <img key={index} src={image} alt={`gallery-${index + 1}`} />
        ))}
      </div>
      <div className="gallery-frame-2 w-full lg:w-[392px] h-[824px]">
        {images.length > 2 && <img src={images[2]} alt="gallery-3" />}
      </div>
      <div className="gallery-frame-3 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        {images.slice(0, 2).reverse().map((image, index) => (
          <img key={index + 3} src={image} alt={`gallery-${index + 4}`} />
        ))}
      </div>
    </div>
  );
};