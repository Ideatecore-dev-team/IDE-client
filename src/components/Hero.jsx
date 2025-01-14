// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonLink from "./Buttons/ButtonLink";
import Carousel1 from "../assets/images/hero-carousel-1.png";
import Carousel2 from "../assets/images/hero-carousel-2.png";
import Carousel3 from "../assets/images/hero-carousel-3.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-6 items-center w-full">
      <div className="hero-title flex pt-[48px] gap-6 items-center w-96 lg:w-[1224px] mx-auto flex-col self-stretch text-center">
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
        <ButtonLink caption="Let’s collaborate!" color="bg-brand-red hover:bg-brand-red-hover" to="/contact-us"/>
      </div>
      <div className="preview-gallery flex w-full">
        <img
          src={Carousel1}
          alt=""
          className="lg:h-[400px] basis-full lg:basis-1/3"
        />
        <img
          src={Carousel2}
          alt=""
          className="lg:h-[400px] hidden lg:block basis-1/3"
        />
        <img
          src={Carousel3}
          alt=""
          className="lg:h-[400px] hidden lg:block basis-1/3"
        />
      </div>
    </div>
  );
};

export default Hero;
