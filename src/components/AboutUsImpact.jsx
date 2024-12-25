// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { MdPeople } from "react-icons/md";

export const AboutUsImpact = () => {
  return (
    <div className="our-impact-section flex lg:p-[10px]  lg:mx-auto lg:flex-col xs:justify-center items-center lg:gap-[10px] self-stretch ">
      <div className="our-impact-container flex flex-col w-96 lg:w-[1224px] py-12 items-start  border-b-[1px] border-neutral-3 gap-10 lg:gap-12">
        {/* <div className="our-impact lg:w-[568px] flex flex-col items-start gap-8 xs:self-stretch"> */}
        <div className="heading-desc flex lg:justify-between lg:flex-row flex-col xs:content-center items-start xs:gap-4 lg:self-stretch">
          <h2 className=" self-stretch lg:text-4xl text-[24px] font-lato text-neutral-1 font-bold">
            OUR IMPACT
          </h2>
          <p className="lg:self-strech text-[18px] lg:text-[24px] font-lato lg:w-[520px] font-[500] text-neutral-1">
            In a world of challenges, IDE ignites change, shaping a brighter
            future for Indonesia and beyond. We are present across Indonesia:
          </p>
        </div>
        <div className="all-impact flex lg:w-[1224px] w-80 lg:flex-row flex-col lg:items-center items-start lg:gap-16 gap-8 lg:self-stretch">
          <div className="impact-1 lg:w-[365px] flex flex-col items-start gap-2 self-stretch">
            <div className="point flex items-center gap-4 self-stretch">
              <div className="icon flex lg:size-[48px] size-9 justify-center items-center rounded-lg bg-brand-red">
                <MdLocationOn className="text-white size-6" />
              </div>
              <h1 className=" text-3xl lg:text-[48px] lg:font-[500] font-bold">
                34
              </h1>
            </div>
            <p className="lg:w-[365px] text-base lg:self-stretch font-normal text-neutral-2">
              Provinsi diseluruh Indonesia
            </p>
          </div>
          <div className="impact-2 lg:w-[365px] flex flex-col items-start gap-2 self-stretch">
            <div className="point flex items-center gap-4 self-stretch">
              <div className="icon flex lg:size-[48px] size-9 justify-center items-center rounded-lg bg-brand-red">
                <MdLocationCity className="text-white size-6" />
              </div>
              <h1 className=" text-3xl lg:text-[48px] lg:font-[500] font-bold">
                100+
              </h1>
            </div>
            <p className="lg:w-[365px] text-base font-normal text-neutral-2">
              Kota diseluruh Indonesia
            </p>
          </div>
          <div className="impact-3 lg:w-[365px] flex flex-col items-start gap-2 self-stretch">
            <div className="point flex items-center gap-4 self-stretch">
              <div className="icon flex lg:size-[48px] size-9 justify-center items-center rounded-lg bg-brand-red">
                <MdPeople className="text-white size-6" />
              </div>
              <h1 className=" text-3xl lg:text-[48px] lg:font-[500] font-bold">
                10
              </h1>
            </div>
            <p className=" lg:w-[365px] text-base font-normal text-neutral-2">
              <span className="font-bold">Child Organization</span> (IDEpreneur,{" "}
              <br />
              IDEpeduli, etc.)
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
