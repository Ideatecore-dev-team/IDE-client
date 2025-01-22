// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonLink from "./Buttons/ButtonLink";
import { HomeCarouselSwiper } from "./HomeCarouselSwiper";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-6 items-center">
      <div className="hero-title flex pt-[48px] gap-6 items-center w-full xs:px-6 lg:w-[1224px] mx-auto flex-col self-stretch text-center">
        <div className="hero-desc flex flex-col items-center gap-3 lg:gap-6 self-stretch mx-auto">
          <h1 className="font-bold text-3xl lg:text-5xl">
          Bersama Ciptakan Pemimpin <br/> Masa Depan Indonesia
          </h1>
          <h3 className="font-normal text-base text-neutral-2">
          Menghubungkan para pemimpin masa depan yang berkarakter 
          dan berdaya saing global untuk mewujudkan peradaban dunia yang lebih baik.
          </h3>
        </div>
        <ButtonLink
          caption="Learn More"
          color="bg-brand-red hover:bg-brand-red-hover"
          to="/contact-us"
        />
      </div>
      <HomeCarouselSwiper />
    </div>
  );
};

export default Hero;
