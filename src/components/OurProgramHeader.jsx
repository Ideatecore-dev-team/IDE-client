// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/images/logo-color.png";
import {
  MdHowToVote,
  MdMenuBook,
  MdPeople,
  MdLightbulb,
  MdStarRate,
} from "react-icons/md";

export const OurProgramHeader = () => {
  return (
    <div className="our-program-section flex items-start justify-center">
      <div className="our-program-container w-full xs:mx-6 lg:w-[1224px] flex flex-col items-center border-b-[1px] border-l-neutral-3">
        <div className="desc flex lg:w-[520px] py-12 flex-col items-start gap-4 self-stretch">
          <h5 className="text-sm lg:text-base font-bold">OUR PROGRAM</h5>
          <img src={Logo} alt="" />
          <div className="heading-desc flex flex-col items-start gap-3 self-stretch">
            <h2 className="text-2xl lg:text-[32px] text-justify font-bold">
              Bersama Membangun Masa Depan yang Lebih Baik
            </h2>
            <p className="text-base text-justify">
              Kami menyediakan ruang untuk demokrasi, pendidikan, kewirausahaan,
              kolaborasi sosial, dan harmoni antaragama. Melalui program yang
              berdampak, IDE Indonesia mendukung generasi muda menjadi pemimpin
              masa depan yang siap bersaing di tingkat global.
            </p>
          </div>
        </div>
        <div className="programs pb-12 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start lg:justify-between xs:gap-8 lg:gap-y-8 self-stretch">
          <div className=" lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">
            <div className="program-name flex gap-3 self-stretch items-center">
              <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover te">
                <MdHowToVote size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Democracy Affairs</h4>
            </div>
            <p className="text-base">Kajian demokrasi dan dialog politik.</p>
          </div>
          <div className=" lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">
            <div className="program-name flex gap-3 self-stretch items-center">
              <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover te">
                <MdMenuBook size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Education Affairs</h4>
            </div>
            <p className="text-base">
              Pendidikan dan kolaborasi pelajar global.
            </p>
          </div>
          <div className=" lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">
            <div className="program-name flex gap-3 self-stretch items-center">
              <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover te">
                <MdPeople size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Social Affairs</h4>
            </div>
            <p className="text-base">Menjaga budaya dan harmoni sosial.</p>
          </div>
          <div className=" lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">
            <div className="program-name flex gap-3 self-stretch items-center">
              <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover te">
                <MdLightbulb size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Entrepreneurship Affairs</h4>
            </div>
            <p className="text-base">
              Kolaborasi wirausaha muda lintas sektor.
            </p>
          </div>
          <div className=" lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">
            <div className="program-name flex gap-3 self-stretch items-center">
              <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover te">
                <MdStarRate size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Interfaith Affairs</h4>
            </div>
            <p className="text-base">
              Pluralisme, toleransi, dan harmoni manusia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
