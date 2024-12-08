/* eslint-disable no-unused-vars */
import React from "react";
import OurProgramBanner from "../assets/images/our-program-banner.png";
import ButtonLink from "./Buttons/ButtonLink";

export const HomeProgram = () => {
  return (
    <div className="ourprog-section flex justify-center items-start self-stretch">
      <div className="ourprog-container flex w-96 py-12 flex-col items-start gap-6">
        <img src={OurProgramBanner} className="h-[127.333px] w-96" alt="" />
        <div className="heading-button flex flex-col items-start gap-3 self-stretch">
          <h2 className="text-2xl font-bold">
            Bersama Membangun Masa Depan yang Lebih Baik
          </h2>
          <p className="text-base">
            Kami memiliki program di bidang demokrasi, pendidikan,
            sosial-budaya, kewirausahaan, dan keagamaan untuk memberdayakan
            generasi muda Indonesia.
          </p>
          <ButtonLink caption="Check Our Program" />
        </div>
      </div>
    </div>
  );
};
