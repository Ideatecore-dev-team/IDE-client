/* eslint-disable no-unused-vars */
import React from "react";
import OurProgramBanner from "../assets/images/our-program-banner.png";
import ButtonLink from "./Buttons/ButtonLink";

export const HomeProgram = () => {
  return (
    <div className="ourprog-section flex justify-center items-start self-stretch">
      <div className="ourprog-container flex w-full px-6  lg:w-[1224px] py-12 flex-col lg:flex-row-reverse items-start lg:content-between gap-6">
        <img
          src={OurProgramBanner}
          className="h-[127.333px] w-full px-6  lg:w-[750px] lg:h-[250px]"
          alt=""
        />
        <div className="heading-button lg:w-[440px] flex flex-col items-start gap-3 lg:gap-5 xs:self-stretch">
          <h2 className="text-3xl font-bold">
          Bersama Mewujudkan Masa Depan Indonesia yang Lebih Baik
          </h2>
          <p className="text-base">
          Kami memiliki berbagai program di bidang riset dan politik, pendidikan dan hukum, sosial, seni budaya 
          dan keagamaan, kewirausahaan, serta inovasi media dan kreatif sebagai wadah bagi seluruh anak bangsa untuk berkreasi, 
          berproses, dan mempersiapkan diri. 
          </p>
          <ButtonLink caption="Check Our Program" color="bg-brand-red hover:bg-brand-red-hover" to="/our-program"/>
        </div>
      </div>
    </div>
  );
};
