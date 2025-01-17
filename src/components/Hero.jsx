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
            Bersama Wujudkan Generasi
            <br />
            Pemimpin Indonesia
          </h1>
          <h3 className="font-normal text-base text-neutral-2">
            Mari bentuk pemimpin muda yang tangguh untuk demokrasi yang
            berkeadilan dan masa depan yang cerah.
          </h3>
        </div>
        <ButtonLink
          caption="Let’s collaborate!"
          color="bg-brand-red hover:bg-brand-red-hover"
        />
      </div>
      <HomeCarouselSwiper />
    </div>
  );
};

export default Hero;
