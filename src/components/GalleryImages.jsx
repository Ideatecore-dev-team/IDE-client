import React from "react";
import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import gallery4 from "../assets/images/gallery-4.png";
import gallery5 from "../assets/images/gallery-5.png";

export const GalleryImages = () => {
  return (
    <div className="gallery-images w-full lg:w-[1224px] xs:px-6 flex pb-12 xs:flex-col xs:justify-center items-start lg:items-center gap-6 self-stretch lg:mx-auto border-b-[1px] border-neutral-3">
      <div className="gallery-frame-1 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
      </div>
      <div className="gallery-frame-2 w-full lg:w-[392px] h-[824px]">
        <img src={gallery3} alt="" />
      </div>
      <div className="gallery-frame-3 w-full lg:w-[392px] h-[802.98px] lg:h-[824px] flex flex-col items-start gap-6">
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
      </div>
    </div>
  );
};
