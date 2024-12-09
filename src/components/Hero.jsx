// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonLink from "./Buttons/ButtonLink";
import Carousel from "../assets/images/hero-carousel-1.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-6 items-center w-full">
      <div className="hero-title flex pt-24 gap-6 items-center w-96 mx-auto flex-col self-stretch text-center">
        <div className="hero-desc flex flex-col items-center gap-3 self-stretch">
          <h1 className="font-bold text-3xl">
            Bersama Wujudkan Generasi Pemimpin Indonesia
          </h1>
          <h3 className="font-normal text-base text-neutral-2">
            Mari bentuk pemimpin muda yang tangguh untuk demokrasi yang
            berkeadilan dan masa depan yang cerah.
          </h3>
        </div>
        <ButtonLink caption="Let’s collaborate!" />
      </div>
      <div className="preview-gallery">
        <img src={Carousel} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
