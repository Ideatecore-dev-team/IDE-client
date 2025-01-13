/* eslint-disable no-unused-vars */
import React from "react";
import OurProgramBanner from "../assets/images/our-program-banner.png";
import ButtonLink from "./Buttons/ButtonLink";

export const HomeProgram = () => {
  return (
    <div className="ourprog-section flex justify-center items-start self-stretch">
      <div className="ourprog-container flex w-[327px]  lg:w-[1224px] py-12 flex-col lg:flex-row-reverse items-start lg:content-between gap-6">
        <img
          src={OurProgramBanner}
          className="h-[127.333px] w-[327px]  lg:w-[750px] lg:h-[250px]"
          alt=""
        />
        <div className="heading-button lg:w-[440px] flex flex-col items-start gap-3 lg:gap-5 xs:self-stretch">
          <h2 className="text-3xl font-bold">
            Bersama Membangun Masa Depan yang Lebih Baik
          </h2>
          <p className="text-base">
            Kami memiliki program di bidang demokrasi, pendidikan,
            sosial-budaya, kewirausahaan, dan keagamaan untuk memberdayakan
            generasi muda Indonesia.
          </p>
          <ButtonLink caption="Check Our Program" color="bg-brand-red hover:bg-brand-red-hover" to="/our-program"/>
        </div>
      </div>
    </div>
  );
};
